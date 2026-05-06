import { steps } from '../../data/landingData'

export function StartSection() {
  return (
    <section className="section start-section" aria-labelledby="start-title">
      <div className="section-heading">
        <p className="eyebrow">Як почати</p>
        <h2 id="start-title">Три кроки до першого тренування</h2>
      </div>
      <div className="steps-grid">
        {steps.map(([number, title, text]) => (
          <article className="step-card" key={number}>
            <span>{number}</span>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
