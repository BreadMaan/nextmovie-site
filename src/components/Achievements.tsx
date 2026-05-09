import { achievements } from '../data';

export function Achievements() {
  return (
    <section className="px-6 py-12 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-2xl">
          <p className="section-kicker">Достижения</p>
          <h2 className="section-title">Активность превращается в коллекцию статусов и редких сигналов</h2>
          <p className="mt-5 text-base leading-7 text-mist">
            Достижения добавляют игре глубину: показывают вашу историю,
            собирают редкие вкусовые паттерны и усиливают желание возвращаться.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {achievements.map((item, index) => (
            <div
              key={item}
              className="group premium-panel relative overflow-hidden p-6 transition duration-300 hover:-translate-y-1"
            >
              <div className="absolute right-0 top-0 h-20 w-20 rounded-full bg-[radial-gradient(circle,rgba(240,215,160,0.25),transparent_62%)]" />
              <div className="relative flex items-start justify-between">
                <div>
                  <p className="text-sm text-mist">Награда {index + 1}</p>
                  <h3 className="mt-2 text-2xl font-semibold text-white">{item}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/72">
                    Визуально подчёркивает ваш прогресс и делает вкус заметным
                    не только вам, но и вашим друзьям.
                  </p>
                </div>
                <div className="grid h-14 w-14 place-items-center rounded-2xl border border-gold/25 bg-gold/10 text-goldSoft">
                  ✦
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
