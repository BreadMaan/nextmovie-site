const steps = [
  'Создай комнату',
  'Отправь ссылку',
  'Выберите вайб',
  'Свайпайте фильмы',
  'Получите мэтч',
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="px-6 py-16 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-[1280px]">
        <div className="mb-12 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-[680px]">
            <p className="section-kicker">Как это работает</p>
            <h2 className="section-title">От ссылки до мэтча за несколько касаний</h2>
          </div>
          <p className="max-w-[520px] text-base leading-8 text-mist sm:text-lg">
            Таймлайн собран как cinematic flow: от создания комнаты до общего
            решения, которое происходит без трения и бесконечных обсуждений.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-[linear-gradient(180deg,rgba(127,182,255,0.28),rgba(200,169,107,0.12),transparent)] lg:left-[8%] lg:right-[8%] lg:top-8 lg:h-px lg:w-auto" />
          <div className="grid gap-5 lg:grid-cols-5">
            {steps.map((step, index) => (
              <article
                key={step}
                className="premium-panel relative p-6 pt-7 transition duration-300 hover:-translate-y-1 hover:border-gold/20"
              >
                <div className="absolute left-[22px] top-6 h-3 w-3 rounded-full bg-gold shadow-[0_0_20px_rgba(200,169,107,0.7)] lg:left-1/2 lg:-translate-x-1/2 lg:-top-1.5" />
                <p className="ml-8 text-xs uppercase tracking-[0.32em] text-mist lg:ml-0 lg:text-center">
                  Шаг 0{index + 1}
                </p>
                <h3 className="mt-6 text-[1.45rem] font-semibold leading-[1.2] tracking-[-0.04em] text-white lg:text-center">
                  {step}
                </h3>
                <p className="mt-3 text-sm leading-7 text-white/58 lg:text-center">
                  {index === 0
                    ? 'Запуск происходит быстро и не требует долгого ввода.'
                    : index === 1
                      ? 'Второй человек подключается в одно касание.'
                      : index === 2
                        ? 'Настроение и контекст становятся частью выбора.'
                        : index === 3
                          ? 'Живой swipe flow превращает подбор в ритм.'
                          : 'Совпадение ощущается как финал маленькой сцены.'}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
