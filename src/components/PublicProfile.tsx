export function PublicProfile() {
  return (
    <section className="px-6 py-12 sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="premium-panel p-8 sm:p-10">
          <p className="section-kicker">Публичная карточка</p>
          <h2 className="section-title">Профиль, которым хочется делиться</h2>
          <p className="mt-5 text-base leading-7 text-mist">
            Публичная карточка превращает вкус в красивую визитку: показывает
            Taste Genome, статистику, достижения и уровень кино-совместимости с
            другими людьми.
          </p>
        </div>

        <div className="premium-panel overflow-hidden p-6 sm:p-8">
          <div className="grid gap-5 lg:grid-cols-[0.84fr_1.16fr]">
            <div className="rounded-[28px] border border-white/10 bg-white/6 p-5">
              <div className="mx-auto h-24 w-24 rounded-[28px] bg-[linear-gradient(145deg,rgba(127,182,255,0.28),rgba(200,169,107,0.22))]" />
              <div className="mt-4 text-center">
                <p className="text-xl text-white">Ника</p>
                <p className="mt-1 text-sm text-mist">Любит неоновые драмы и тёплую фантастику</p>
              </div>
              <div className="mt-5 grid grid-cols-2 gap-3">
                {[
                  ['Мэтчи', '38'],
                  ['Комнаты', '12'],
                  ['Избранное', '54'],
                  ['Совпадение', '94%'],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="rounded-[20px] border border-white/10 bg-black/20 p-3 text-center"
                  >
                    <p className="text-xs text-mist">{label}</p>
                    <p className="mt-1 text-lg text-white">{value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <div className="rounded-[28px] border border-white/10 bg-white/6 p-5">
                <p className="text-sm text-mist">Taste Genome</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {[
                    'ночной ритм',
                    'мягкая романтика',
                    'ирония',
                    'визуальный драйв',
                    'тёплая драма',
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 px-3 py-2 text-sm text-white/85"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-[28px] border border-white/10 bg-white/6 p-5">
                <p className="text-sm text-mist">Последние достижения</p>
                <div className="mt-4 grid gap-3 sm:grid-cols-3">
                  {['Точный мэтч', 'Куратор вайба', 'Редкий сигнал'].map((badge) => (
                    <div
                      key={badge}
                      className="rounded-[22px] border border-gold/20 bg-gold/10 px-4 py-5 text-center text-sm text-goldSoft"
                    >
                      {badge}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
