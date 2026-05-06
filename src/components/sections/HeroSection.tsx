import { asset } from '../../utils/asset'

type HeroSectionProps = {
  onTrialClick: () => void
}

export function HeroSection({ onTrialClick }: HeroSectionProps) {
  return (
    <section className="hero-section" aria-labelledby="hero-title">
      <div className="hero-media">
        <img
          src={asset('images/move-hero-battle-ropes.jpg')}
          alt="Атлет тренується з канатами у спортивному клубі"
          width="1024"
          height="1536"
          fetchPriority="high"
          sizes="100vw"
        />
      </div>
      <div className="hero-copy">
        <h1 id="hero-title">
          <span>Тренуйся</span>
          <span>сильніше.</span>
          <span>Рухайся</span>
          <span>впевненіше.</span>
        </h1>
        <p className="hero-lead">Сучасний зал, сильна команда і тренування під твій ритм.</p>
        <div className="hero-actions" aria-label="Головні дії">
          <button className="button button-primary" type="button" onClick={onTrialClick}>
            Записатись на пробне
            <span aria-hidden="true">→</span>
          </button>
          <a className="programs-link" href="#programs">
            Дивитись програми
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}
