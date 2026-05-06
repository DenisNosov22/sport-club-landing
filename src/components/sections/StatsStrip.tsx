import { stats } from '../../data/landingData'

export function StatsStrip() {
  return (
    <section className="stats-strip" aria-label="Ключові показники клубу">
      {stats.map(([value, label]) => (
        <article key={label}>
          <strong>{value}</strong>
          <span>{label}</span>
        </article>
      ))}
    </section>
  )
}
