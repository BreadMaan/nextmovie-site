import heroDesktop from '../assets/hero-desktop.webp';
import heroMobile from '../assets/hero-mobile.webp';
import { APP_URL } from '../constants';

function HeroLinks({ desktop }: { desktop: boolean }) {
  const modeClass = desktop ? 'hero-art__links--desktop' : 'hero-art__links--mobile';

  return (
    <div className={`hero-art__links ${modeClass}`}>
      <a
        href={APP_URL}
        target="_blank"
        rel="noreferrer"
        aria-label="Открыть приложение NextMovie"
        className="hero-art__button hero-art__button--primary"
      >
        <span className="hero-art__button-label">Открыть приложение</span>
        <span className="hero-art__button-shine" aria-hidden="true" />
      </a>
      <a
        href={APP_URL}
        target="_blank"
        rel="noreferrer"
        aria-label="Запустить NextMovie в Telegram"
        className="hero-art__button hero-art__button--secondary"
      >
        <span className="hero-art__button-label">Запустить в Telegram</span>
        <span className="hero-art__button-shine" aria-hidden="true" />
      </a>
    </div>
  );
}

export function Hero() {
  return (
    <section className="hero-art">
      <picture className="hero-art__picture">
        <source media="(min-width: 768px)" srcSet={heroDesktop} />
        <img
          src={heroMobile}
          alt=""
          aria-hidden="true"
          className="hero-art__image"
        />
      </picture>
      <HeroLinks desktop />
      <HeroLinks desktop={false} />
    </section>
  );
}
