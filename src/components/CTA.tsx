import { APP_URL } from '../constants';

export function CTA() {
  return (
    <section className="px-6 py-16 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-[1280px]">
        <div className="relative overflow-hidden rounded-[2.3rem] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] px-8 py-12 shadow-glow backdrop-blur-2xl sm:px-12 sm:py-16">
          <div className="absolute -left-10 top-0 h-44 w-44 rounded-full bg-blueIce/15 blur-[100px]" />
          <div className="absolute right-0 top-10 h-44 w-44 rounded-full bg-fuchsia-400/12 blur-[100px]" />
          <div className="absolute inset-y-0 right-0 hidden w-[38%] border-l border-white/8 lg:block">
            <div className="grid h-full grid-cols-2 gap-3 p-5">
              <div className="overflow-hidden rounded-[1.4rem] border border-white/10 bg-black/20">
                <img
                  src="/images/home-screen.jpg"
                  alt="Экран NextMovie"
                  className="h-full w-full object-cover object-top opacity-90"
                />
              </div>
              <div className="overflow-hidden rounded-[1.4rem] border border-white/10 bg-black/20">
                <img
                  src="/images/movie-screen.jpg"
                  alt="Карточка фильма NextMovie"
                  className="h-full w-full object-cover object-top opacity-90"
                />
              </div>
            </div>
          </div>
          <div className="relative flex flex-col gap-8 lg:max-w-[58%] lg:justify-between">
            <div className="max-w-2xl">
              <p className="section-kicker">Финальный шаг</p>
              <h2 className="section-title">Хватит спорить. Просто найдите фильм.</h2>
              <p className="mt-5 max-w-[560px] text-base leading-8 text-mist sm:text-lg">
                NextMovie создан для моментов, когда хочется не обсуждать
                варианты, а сразу перейти к общему ощущению, совпадению и
                хорошему вечеру.
              </p>
            </div>
            <a
              href={APP_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-fit items-center justify-center rounded-full bg-[linear-gradient(135deg,#f0d7a0,#c8a96b)] px-7 py-4 text-base font-medium text-ink shadow-gold transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_24px_80px_rgba(200,169,107,0.32)]"
            >
              Открыть NextMovie
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
