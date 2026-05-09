import fs from 'node:fs';

const [widthArg, heightArg, url, label, debugPortArg = '9333'] = process.argv.slice(2);

if (!widthArg || !heightArg || !url || !label) {
  console.error('Usage: node scripts/check-home-overflow.mjs <width> <height> <url> <label> [debugPort]');
  process.exit(1);
}

const width = Number(widthArg);
const height = Number(heightArg);
const debugPort = Number(debugPortArg);

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const screenshotPath = `/private/tmp/${label}.png`;

const targets = await fetch(`http://127.0.0.1:${debugPort}/json`).then((response) => response.json());
const wsUrl = targets.find((target) => target.type === 'page')?.webSocketDebuggerUrl ?? targets[0]?.webSocketDebuggerUrl;

if (!wsUrl) {
  throw new Error(`No debuggable page found on port ${debugPort}`);
}

let id = 0;
const pending = new Map();
const ws = new WebSocket(wsUrl);

await new Promise((resolve, reject) => {
  ws.onopen = resolve;
  ws.onerror = reject;
});

ws.onmessage = (event) => {
  const message = JSON.parse(event.data);
  if (message.id && pending.has(message.id)) {
    pending.get(message.id)(message);
    pending.delete(message.id);
  }
};

const send = (method, params = {}) =>
  new Promise((resolve) => {
    const message = { id: ++id, method, params };
    pending.set(id, resolve);
    ws.send(JSON.stringify(message));
  });

await send('Page.enable');
await send('Runtime.enable');
await send('Emulation.setDeviceMetricsOverride', {
  width,
  height,
  deviceScaleFactor: width < 768 ? 3 : 2,
  mobile: width < 768,
  screenWidth: width,
  screenHeight: height,
});
await send('Page.navigate', { url });
await wait(1800);

const evaluation = await send('Runtime.evaluate', {
  expression: `(() => {
    const buttons = Array.from(document.querySelectorAll('.hero-art__button')).filter(
      (node) => node.getBoundingClientRect().width > 0 && node.getBoundingClientRect().height > 0
    );
    const rect = (node) => node ? {
      x: Number(node.getBoundingClientRect().x.toFixed(2)),
      y: Number(node.getBoundingClientRect().y.toFixed(2)),
      width: Number(node.getBoundingClientRect().width.toFixed(2)),
      height: Number(node.getBoundingClientRect().height.toFixed(2))
    } : null;

    return JSON.stringify({
      title: document.title,
      sectionCount: document.querySelectorAll('section').length,
      bodyChildren: document.body.children.length,
      innerWidth: window.innerWidth,
      innerHeight: window.innerHeight,
      scrollWidth: document.documentElement.scrollWidth,
      bodyScrollWidth: document.body.scrollWidth,
      primaryHref: buttons[0]?.href ?? null,
      secondaryHref: buttons[1]?.href ?? null,
      primaryRect: rect(buttons[0]),
      secondaryRect: rect(buttons[1]),
    });
  })()`,
  returnByValue: true,
});

const screenshot = await send('Page.captureScreenshot', { format: 'png', fromSurface: true });
fs.writeFileSync(screenshotPath, Buffer.from(screenshot.result.data, 'base64'));

console.log(`${label} ${evaluation.result.result.value} screenshot=${screenshotPath}`);
ws.close();
