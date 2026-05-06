import { schedule } from '../../data/landingData'
import { asset } from '../../utils/asset'

type ScheduleSectionProps = {
  onTrialClick: () => void
}

export function ScheduleSection({ onTrialClick }: ScheduleSectionProps) {
  return (
    <section className="section schedule-section" id="schedule" aria-labelledby="schedule-title">
      <div className="section-heading">
        <p className="eyebrow">Розклад</p>
        <h2 id="schedule-title">Тижневий блок занять</h2>
        <button className="text-action" type="button" onClick={onTrialClick}>
          Записатися на слот <span aria-hidden="true">→</span>
        </button>
      </div>
      <figure className="schedule-feature">
        <img
          src={asset('images/sport-evening-training.jpg')}
          alt="Вечірнє групове тренування у спортивному клубі"
          width="2048"
          height="1152"
          loading="lazy"
          sizes="(min-width: 980px) 1180px, calc(100vw - 32px)"
        />
        <figcaption>Evening group session</figcaption>
      </figure>
      <div className="schedule-grid">
        {schedule.map(([day, ...items]) => (
          <article className="schedule-day" key={day}>
            <h3>{day}</h3>
            {items.map((item) => <p key={item}>{item}</p>)}
          </article>
        ))}
      </div>
    </section>
  )
}
