const features = [
  {
    eyebrow: 'Соло-режим',
    title: 'Личный поток, когда не хочется никого ждать',
    text: 'Настроение, карточка фильма и быстрый выбор работают как цельный вечерний ритуал.',
    src: '/images/movie-screen.jpg',
    accent: 'from-gold/20 to-transparent',
    tall: true,
  },
  {
    eyebrow: 'Taste Genome',
    title: 'Кино-портрет, который опирается на реальное поведение',
    text: 'Профиль раскрывает ваш вкус, а не просто набор жанров.',
    src: '/images/profile-screen.jpg',
    accent: 'from-fuchsia-400/18 to-transparent',
  },
  {
    eyebrow: 'Достижения',
    title: 'Прогресс превращается в коллекцию красивых сигналов',
    text: 'Свайпы, мэтчи и редкие паттерны ощущаются как личная история внутри продукта.',
    src: '/images/profile-screen.jpg',
    accent: 'from-blueIce/18 to-transparent',
  },
  {
    eyebrow: 'Кино-совместимость',
    title: 'Совпадения между людьми выглядят как настоящее подключение',
    text: 'NextMovie связывает настроение, жанры и динамику просмотра в один понятный сигнал.',
    src: '/images/home-screen.jpg',
    accent: 'from-violet-400/16 to-transparent',
  },
  {
    eyebrow: 'Публичная карточка',
    title: 'Вкус можно показать так же красиво, как им пользоваться',
    text: 'Делитесь профилем, статистикой и своим кино-портретом одной ссылкой.',
    src: '/images/profile-screen.jpg',
    accent: 'from-gold/18 to-transparent',
  },
  {
    eyebrow: 'Watchlist',
    title: 'Избранное и посмотреть позже выглядят как curated collection',
    text: 'Сохраняйте не шум каталога, а фильмы, к которым действительно хочется вернуться.',
    src: '/images/stats-screen.jpg',
    accent: 'from-blueIce/18 to-transparent',
  },
];

export function Features() {
  return (
    <section className="px-6 py-16 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-[1280px]">
        <div className="mb-10 max-w-[700px]">
          <p className="section-kicker">Возможности</p>
          <h2 className="section-title">Не набор функций, а премиальная система выбора кино</h2>
          <p className="mt-5 max-w-[620px] text-base leading-8 text-mist sm:text-lg">
            Каждая часть продукта показывает реальный NextMovie, а не выдуманный
            интерфейс: solo flow, карточки фильмов, статистику, профиль и Taste
            Genome.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-12">
          {features.map((feature, index) => (
            <article
              key={feature.eyebrow}
              className={`premium-panel group relative overflow-hidden p-5 sm:p-6 ${
                feature.tall
                  ? 'lg:col-span-5 lg:row-span-2'
                  : index === 1 || index === 2
                    ? 'lg:col-span-3'
                    : 'lg:col-span-4'
              }`}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${feature.accent} opacity-90 transition duration-500 group-hover:opacity-100`}
              />
              <div className="relative flex h-full flex-col">
                <div className="mb-5">
                  <p className="text-xs uppercase tracking-[0.28em] text-goldSoft/80">
                    {feature.eyebrow}
                  </p>
                  <h3 className="mt-3 max-w-[18ch] text-[1.55rem] font-semibold leading-[1.15] tracking-[-0.04em] text-white sm:text-[1.8rem]">
                    {feature.title}
                  </h3>
                  <p className="mt-3 max-w-[34ch] text-sm leading-7 text-white/62 sm:text-base">
                    {feature.text}
                  </p>
                </div>

                <div
                  className={`relative mt-auto overflow-hidden rounded-[1.7rem] border border-white/10 bg-black/30 ${
                    feature.tall ? 'aspect-[0.92/1.12]' : 'aspect-[1.18/1]'
                  }`}
                >
                  <img
                    src={feature.src}
                    alt={feature.title}
                    className={`h-full w-full object-cover ${
                      feature.eyebrow === 'Watchlist'
                        ? 'object-top'
                        : feature.eyebrow === 'Кино-совместимость'
                          ? 'object-[center_24%]'
                          : 'object-top'
                    } transition duration-700 group-hover:scale-[1.03]`}
                  />
                  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.04),transparent_44%,rgba(7,7,10,0.4))]" />
                  {feature.eyebrow === 'Кино-совместимость' ? (
                    <div className="absolute inset-x-6 top-6 flex items-center justify-between rounded-full border border-white/12 bg-black/30 px-4 py-3 backdrop-blur-xl">
                      <span className="text-sm text-white/80">Совпадение вкусов</span>
                      <span className="text-lg font-semibold text-goldSoft">94%</span>
                    </div>
                  ) : null}
                  {feature.eyebrow === 'Taste Genome' ? (
                    <div className="absolute bottom-5 left-5 rounded-full border border-fuchsia-300/20 bg-black/35 px-4 py-2 text-sm text-fuchsia-100 backdrop-blur-xl">
                      Непредсказуемый селектор
                    </div>
                  ) : null}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
