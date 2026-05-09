import { genomeTraits } from '../data';
import { DeviceFrame } from './DeviceFrame';

function polarPoint(
  centerX: number,
  centerY: number,
  radius: number,
  angle: number,
) {
  const radians = (angle - 90) * (Math.PI / 180);
  return {
    x: centerX + radius * Math.cos(radians),
    y: centerY + radius * Math.sin(radians),
  };
}

function buildPolygon(values: number[], radius: number) {
  return values
    .map((value, index) => {
      const point = polarPoint(
        140,
        140,
        (radius * value) / 100,
        (360 / values.length) * index,
      );
      return `${point.x},${point.y}`;
    })
    .join(' ');
}

export function TasteGenome() {
  const values = genomeTraits.map((item) => item.value);
  const radarPolygon = buildPolygon(values, 98);

  return (
    <section className="px-6 py-16 sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-[1280px] gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="premium-panel p-8 sm:p-10">
          <p className="section-kicker">Taste Genome</p>
          <h2 className="section-title">Кино-портрет, который становится точнее с каждым сигналом</h2>
          <p className="mt-5 text-base leading-8 text-mist sm:text-lg">
            Приложение собирает ваш вкус из лайков, дизлайков, жанров,
            настроений и паттернов поведения. В результате появляется живой
            портрет того, какое кино действительно цепляет именно вас.
          </p>
          <div className="mt-8 space-y-3">
            {genomeTraits.map((trait) => (
              <div key={trait.label}>
                <div className="mb-2 flex items-center justify-between text-sm">
                  <span className="text-white">{trait.label}</span>
                  <span className="text-mist">{trait.value}%</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-white/6">
                  <div
                    className="h-full rounded-full bg-[linear-gradient(90deg,rgba(127,182,255,0.95),rgba(200,169,107,0.95))]"
                    style={{ width: `${trait.value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="premium-panel overflow-hidden p-6 sm:p-8">
          <div className="grid items-center gap-8 lg:grid-cols-[0.82fr_1.18fr]">
            <DeviceFrame
              src="/images/profile-screen.jpg"
              alt="Экран Taste Genome и профиля NextMovie"
              className="mx-auto w-[240px] sm:w-[260px] lg:w-[250px]"
              priorityGlow="gold"
            />

            <div className="relative mx-auto aspect-square w-full max-w-[420px] rounded-full border border-white/8 bg-[radial-gradient(circle_at_center,rgba(127,182,255,0.18),transparent_35%),radial-gradient(circle_at_60%_30%,rgba(200,169,107,0.2),transparent_24%)]">
              <svg viewBox="0 0 280 280" className="h-full w-full">
                {[100, 75, 50, 25].map((ring) => (
                  <polygon
                    key={ring}
                    points={buildPolygon(
                      new Array(genomeTraits.length).fill(ring),
                      98,
                    )}
                    fill="none"
                    stroke="rgba(255,255,255,0.08)"
                    strokeWidth="1"
                  />
                ))}
                {genomeTraits.map((trait, index) => {
                  const edgePoint = polarPoint(
                    140,
                    140,
                    110,
                    (360 / genomeTraits.length) * index,
                  );
                  return (
                    <g key={trait.label}>
                      <line
                        x1="140"
                        y1="140"
                        x2={edgePoint.x}
                        y2={edgePoint.y}
                        stroke="rgba(255,255,255,0.08)"
                      />
                      <text
                        x={edgePoint.x}
                        y={edgePoint.y}
                        fill="rgba(255,255,255,0.65)"
                        fontSize="11"
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        {trait.label}
                      </text>
                    </g>
                  );
                })}
                <polygon
                  points={radarPolygon}
                  fill="rgba(127,182,255,0.18)"
                  stroke="rgba(240,215,160,0.95)"
                  strokeWidth="2"
                />
                {values.map((value, index) => {
                  const point = polarPoint(
                    140,
                    140,
                    (98 * value) / 100,
                    (360 / values.length) * index,
                  );
                  return (
                    <circle
                      key={`${value}-${index}`}
                      cx={point.x}
                      cy={point.y}
                      r="4"
                      fill="#f0d7a0"
                    />
                  );
                })}
              </svg>
              <div className="absolute inset-x-0 bottom-8 flex justify-center">
                <div className="rounded-full border border-white/10 bg-black/30 px-4 py-2 text-sm text-white backdrop-blur-xl">
                  Портрет обновляется в реальном времени
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
