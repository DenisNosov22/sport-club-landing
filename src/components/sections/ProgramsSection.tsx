import { programs } from '../../data/landingData'

type ProgramsSectionProps = {
  onTrialClick: (programTitle: string) => void
}

export function ProgramsSection({ onTrialClick }: ProgramsSectionProps) {
  return (
    <section className="section programs-section" id="programs" aria-labelledby="programs-title" tabIndex={-1}>
      <div className="section-heading inline-heading">
        <h2 id="programs-title">Наші програми</h2>
        <a href="#programs">Усі програми <span aria-hidden="true">→</span></a>
      </div>
      <div className="program-list">
        {programs.map((program) => (
          <article className="program-card" key={program.title}>
            <img
              src={program.image}
              alt={program.alt}
              width={program.width}
              height={program.height}
              loading="lazy"
              sizes="(min-width: 980px) 370px, (min-width: 700px) calc((100vw - 80px) / 2), (max-width: 380px) calc(100vw - 32px), 42vw"
            />
            <div className="program-content">
              <p>{program.eyebrow}</p>
              <h3>{program.title}</h3>
              <span>{program.text}</span>
            </div>
            <button
              className="program-arrow"
              type="button"
              aria-label={`Записатись на програму ${program.title}`}
              onClick={() => onTrialClick(program.title)}
            >
              →
            </button>
          </article>
        ))}
      </div>
    </section>
  )
}
