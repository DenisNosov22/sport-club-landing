import { pricing } from '../../data/landingData'

type PricingSectionProps = {
  onTrialClick: () => void
}

export function PricingSection({ onTrialClick }: PricingSectionProps) {
  return (
    <section className="section" id="pricing" aria-labelledby="pricing-title">
      <div className="section-heading">
        <p className="eyebrow">Абонементи</p>
        <h2 id="pricing-title">Формати без вигаданих цін</h2>
        <span>Актуальну вартість потрібно замінити на дані клубу.</span>
      </div>
      <div className="pricing-grid">
        {pricing.map(([name, label, note]) => (
          <article className="pricing-card" key={name}>
            <p>{label}</p>
            <h3>{name}</h3>
            <span>{note}</span>
            <button className="button button-secondary" type="button" onClick={onTrialClick}>
              Уточнити умови
            </button>
          </article>
        ))}
      </div>
    </section>
  )
}
