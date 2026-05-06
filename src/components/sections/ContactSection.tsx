import { type FormEvent } from 'react'

import { programs } from '../../data/landingData'

type ContactSectionProps = {
  selectedProgram: string
  onProgramChange: (programTitle: string) => void
  onSubmit: (event: FormEvent<HTMLFormElement>) => void
}

export function ContactSection({
  selectedProgram,
  onProgramChange,
  onSubmit,
}: ContactSectionProps) {
  return (
    <section className="section contact-section" id="contacts" aria-labelledby="contact-title">
      <div>
        <p className="eyebrow">Контакти</p>
        <h2 id="contact-title">Запишись на пробне тренування</h2>
        <p className="contact-lead">
          Форма демонстраційна. Для продакшену підключіть CRM, Telegram bot, email або інший канал клубу.
        </p>
        <div className="contact-list">
          <p><strong>Телефон:</strong> +380 XX XXX XX XX</p>
          <p><strong>Адреса:</strong> м. Київ, вул. Прикладна, 10</p>
          <p><strong>Графік:</strong> 07:00–22:00 щодня</p>
        </div>
      </div>
      <form className="trial-form" id="trial" onSubmit={onSubmit}>
        <label>
          Імʼя
          <input name="name" autoComplete="name" placeholder="Ваше імʼя" required />
        </label>
        <label>
          Телефон
          <input name="phone" autoComplete="tel" placeholder="+380" required />
        </label>
        <label>
          Напрям
          <select name="training" value={selectedProgram} onChange={(event) => onProgramChange(event.target.value)}>
            {programs.map((program) => (
              <option key={program.title}>{program.title}</option>
            ))}
          </select>
        </label>
        <label>
          Коментар
          <textarea name="comment" placeholder="Зручний день, досвід, ціль" rows={4}></textarea>
        </label>
        <button className="button button-primary" type="submit">
          Записатись на пробне
          <span aria-hidden="true">→</span>
        </button>
      </form>
    </section>
  )
}
