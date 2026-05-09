import { compatibilityPairs } from '../data';

export function Compatibility() {
  return (
    <section className="px-6 py-16 sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-[1280px] gap-8 lg:grid-cols-[1fr_0.94fr]">
        <div className="premium-panel p-8 sm:p-10">
          <p className="section-kicker">Социальная совместимость</p>
          <h2 className="section-title">NextMovie показывает, с кем ваши кино-вибы звучат в унисон</h2>
          <p className="mt-5 max-w-xl text-base leading-8 text-mist sm:text-lg">
            Совместимость помогает быстрее понимать, с кем у вас совпадает темп,
            настроение, любовь к жанрам и редкие вкусовые сигналы. Это не
            абстрактный рейтинг, а практичный ориентир для следующего просмотра.
          </p>
          <div className="mt-8 space-y-4">
            {compatibilityPairs.map((pair, index) => (
              <div
                key={pair.name}
                className="rounded-[24px] border border-white/10 bg-white/5 p-4 transition duration-300 hover:border-blueIce/35"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[linear-gradient(145deg,rgba(127,182,255,0.18),rgba(200,169,107,0.18))] text-white">
                      {index + 1}
                    </div>
                    <div>
                      <p className="text-lg text-white">{pair.name}</p>
                      <p className="text-sm text-mist">{pair.note}</p>
                    </div>
                  </div>
                  <p className="text-lg font-semibold text-goldSoft">{pair.score}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="premium-panel flex items-center justify-center overflow-hidden p-8">
          <div className="relative h-[360px] w-full max-w-[520px]">
            <div className="absolute left-[6%] top-[16%] h-32 w-32 rounded-full border border-blueIce/40 bg-[radial-gradient(circle,rgba(127,182,255,0.22),rgba(127,182,255,0.04),transparent_72%)] shadow-[0_0_60px_rgba(127,182,255,0.18)]" />
            <div className="absolute right-[6%] top-[16%] h-32 w-32 rounded-full border border-fuchsia-300/40 bg-[radial-gradient(circle,rgba(216,144,255,0.2),rgba(216,144,255,0.04),transparent_72%)] shadow-[0_0_60px_rgba(216,144,255,0.16)]" />
            <div className="absolute left-[20%] top-[31%] right-[20%] h-px bg-[linear-gradient(90deg,rgba(127,182,255,0.3),rgba(246,235,208,0.9),rgba(216,144,255,0.3))]" />
            <div className="absolute left-[21%] top-[26%] right-[21%] h-14 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.38),transparent_8%),linear-gradient(90deg,transparent,rgba(127,182,255,0.3),rgba(216,144,255,0.28),transparent)] blur-[2px]" />

            <div className="absolute left-0 bottom-0 w-[43%] overflow-hidden rounded-[1.8rem] border border-white/10 bg-black/30">
              <img
                src="/images/movie-screen.jpg"
                alt="Карточка фильма NextMovie"
                className="h-[220px] w-full object-cover object-top"
              />
            </div>
            <div className="absolute right-0 bottom-0 w-[43%] overflow-hidden rounded-[1.8rem] border border-white/10 bg-black/30">
              <img
                src="/images/home-screen.jpg"
                alt="Экран совместного выбора NextMovie"
                className="h-[220px] w-full object-cover object-[center_10%]"
              />
            </div>

            <div className="absolute left-1/2 top-[13%] -translate-x-1/2 rounded-full border border-white/10 bg-black/35 px-5 py-3 text-center backdrop-blur-xl">
              <p className="text-xs uppercase tracking-[0.3em] text-mist">Совместимость</p>
              <p className="mt-1 text-2xl font-semibold text-goldSoft">94%</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
