import { soloFeatures } from '../data';

export function SoloMode() {
  return (
    <section className="px-6 py-12 sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_0.95fr]">
        <div className="premium-panel p-8 sm:p-10">
          <p className="section-kicker">Соло-режим</p>
          <h2 className="section-title">Когда хочется выбрать кино быстро и только под себя</h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-mist">
            Если вы не ждёте второго участника, NextMovie остаётся таким же
            точным: помогает ловить настроение, отсеивать шум и собирать личную
            карту будущих просмотров.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {soloFeatures.map((feature) => (
              <div
                key={feature}
                className="rounded-[22px] border border-white/10 bg-white/5 p-4 text-sm leading-6 text-white/85 transition duration-300 hover:border-blueIce/35 hover:bg-white/7"
              >
                {feature}
              </div>
            ))}
          </div>
        </div>

        <div className="premium-panel relative overflow-hidden p-8">
          <div className="absolute -right-10 top-0 h-40 w-40 rounded-full bg-blueIce/15 blur-[90px]" />
          <div className="absolute -left-8 bottom-8 h-36 w-36 rounded-full bg-gold/15 blur-[90px]" />
          <div className="relative">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="text-sm text-mist">Личный подбор</p>
                <h3 className="mt-1 text-2xl font-semibold text-white">
                  Вечерний поток
                </h3>
              </div>
              <span className="rounded-full border border-white/10 bg-white/6 px-3 py-1 text-xs text-blueIce">
                Без перегруза
              </span>
            </div>
            <div className="space-y-3">
              {[
                ['Настроение', 'спокойное и тёплое'],
                ['Жанры', 'драма, фантастика, комедия'],
                ['Темп', 'от мягкого к динамичному'],
                ['Сохранено', '12 фильмов на потом'],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="flex items-center justify-between rounded-[20px] border border-white/10 bg-white/6 px-4 py-4 text-sm"
                >
                  <span className="text-mist">{label}</span>
                  <span className="text-white">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
