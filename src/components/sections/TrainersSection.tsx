import { trainers } from '../../data/landingData'

export function TrainersSection() {
  return (
    <section className="section" id="trainers" aria-labelledby="trainers-title">
      <div className="section-heading">
        <p className="eyebrow">Команда</p>
        <h2 id="trainers-title">Тренери, які ведуть без зайвого тиску</h2>
      </div>
      <div className="trainer-grid">
        {trainers.map(([focus, title, text], index) => (
          <article className="trainer-card" key={focus}>
            <div className="trainer-photo" aria-hidden="true">{index + 1}</div>
            <div>
              <p>{focus}</p>
              <h3>{title}</h3>
              <span>{text}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
