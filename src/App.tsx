import { type FormEvent, useEffect, useState } from 'react'

import './App.css'

type Program = {
  title: string
  eyebrow: string
  text: string
  image: string
  alt: string
}

const navItems = [
  ['Програми', '#programs'],
  ['Тренери', '#trainers'],
  ['Розклад', '#schedule'],
  ['Абонементи', '#pricing'],
  ['Контакти', '#contacts'],
]

const stats = [
  ['4.9 ★', 'рейтинг'],
  ['12+', 'напрямів'],
  ['07:00–22:00', 'щодня'],
]

const programs: Program[] = [
  {
    title: 'Сила',
    eyebrow: 'Strength',
    text: 'Базові вправи, контроль техніки і прогресія навантаження без хаосу.',
    image: '/images/move-program-strength.jpg',
    alt: 'Силове тренування зі штангою',
  },
  {
    title: 'Функціонал',
    eyebrow: 'Functional',
    text: 'Комплекси на витривалість, координацію, стабільність і сильний рух.',
    image: '/images/move-program-functional.jpg',
    alt: 'Функціональне тренування з мʼячем',
  },
  {
    title: 'Персональні',
    eyebrow: 'Personal',
    text: 'Індивідуальний план, гнучкий графік і уважна робота з твоєю ціллю.',
    image: '/images/sport-program-equipment.jpg',
    alt: 'Спортивне обладнання для функціональних тренувань',
  },
]

const steps = [
  ['01', 'Залиш заявку', 'Напиши контакт і бажаний напрям. Адміністратор уточнить деталі.'],
  ['02', 'Обери формат', 'Підберемо групу, тренера або персональний слот під твій графік.'],
  ['03', 'Прийди на пробне', 'Познайомишся із залом, командою і першим тренуванням без поспіху.'],
]

const trainers = [
  ['Сила та техніка', 'Тренер клубу', 'Веде силові групи, стежить за безпекою руху і прогресією навантаження.'],
  ['Функціональний тренінг', 'Тренер клубу', 'Допомагає розвивати витривалість, координацію та контроль тіла.'],
  ['Mobility / відновлення', 'Тренер клубу', 'Працює з мобільністю, якістю руху та комфортним поверненням у ритм.'],
]

const schedule = [
  ['Пн', '07:30 Сила', '18:30 Функціонал', '20:00 Mobility'],
  ['Вт', '08:00 Кардіо', '18:00 Персональні', '19:30 Сила'],
  ['Ср', '07:30 Функціонал', '18:30 Сила', '20:00 Stretching'],
  ['Чт', '08:00 Кардіо', '18:00 Персональні', '19:30 Функціонал'],
  ['Пт', '07:30 Сила', '18:30 Кардіо', '20:00 Mobility'],
  ['Сб', '10:00 Full Body', '12:00 Пробні', '16:00 Stretching'],
]

const pricing = [
  ['Start', 'Пробний формат', 'Пробне тренування, підбір напряму і базова консультація.'],
  ['Active', 'Групові заняття', 'Ранкові та вечірні групи, різні напрями і підтримка тренера.'],
  ['Personal', 'Персональний план', 'Індивідуальна програма, гнучкий час і контроль техніки.'],
]

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [selectedProgram, setSelectedProgram] = useState(programs[0].title)

  useEffect(() => {
    document.body.classList.toggle('menu-open', isMenuOpen)

    return () => document.body.classList.remove('menu-open')
  }, [isMenuOpen])

  const closeMenu = () => setIsMenuOpen(false)

  const scrollToTrial = (programTitle = selectedProgram) => {
    setSelectedProgram(programTitle)
    closeMenu()
    window.setTimeout(() => {
      document.querySelector('#trial')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 0)
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    window.alert(`Дякуємо! Заявку на напрям "${selectedProgram}" зафіксовано у demo-формі.`)
  }

  return (
    <div className="site-shell">
      <header className="site-header" aria-label="Головна навігація">
        <a className="brand" href="#top" aria-label="MOVE Sport Club головна" onClick={closeMenu}>
          <span className="brand-name">MOVE</span>
          <span className="brand-subtitle">Sport Club</span>
        </a>
        <nav className="desktop-nav" aria-label="Секції сайту">
          {navItems.map(([label, href]) => (
            <a href={href} key={href}>{label}</a>
          ))}
        </nav>
        <button
          className="menu-toggle"
          type="button"
          aria-label={isMenuOpen ? 'Закрити меню' : 'Відкрити меню'}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>
      </header>

      <div className={`mobile-menu ${isMenuOpen ? 'is-open' : ''}`} id="mobile-menu" aria-hidden={!isMenuOpen}>
        <nav aria-label="Мобільна навігація">
          {navItems.map(([label, href]) => (
            <a href={href} key={href} onClick={closeMenu}>{label}</a>
          ))}
          <button className="button button-primary" type="button" onClick={() => scrollToTrial()}>
            Записатись на пробне
            <span aria-hidden="true">→</span>
          </button>
        </nav>
      </div>

      <main id="top">
        <section className="hero-section" aria-labelledby="hero-title">
          <div className="hero-media">
            <img
              src="/images/move-hero-battle-ropes.jpg"
              alt="Атлет тренується з канатами у спортивному клубі"
              width="1024"
              height="1536"
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
              <button className="button button-primary" type="button" onClick={() => scrollToTrial()}>
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

        <section className="stats-strip" aria-label="Ключові показники клубу">
          {stats.map(([value, label]) => (
            <article key={label}>
              <strong>{value}</strong>
              <span>{label}</span>
            </article>
          ))}
        </section>

        <section className="section programs-section" id="programs" aria-labelledby="programs-title" tabIndex={-1}>
          <div className="section-heading inline-heading">
            <h2 id="programs-title">Наші програми</h2>
            <a href="#programs">Усі програми <span aria-hidden="true">→</span></a>
          </div>
          <div className="program-list">
            {programs.map((program) => (
              <article className="program-card" key={program.title}>
                <img src={program.image} alt={program.alt} width="720" height="720" loading="lazy" />
                <div className="program-content">
                  <p>{program.eyebrow}</p>
                  <h3>{program.title}</h3>
                  <span>{program.text}</span>
                </div>
                <button
                  className="program-arrow"
                  type="button"
                  aria-label={`Записатись на програму ${program.title}`}
                  onClick={() => scrollToTrial(program.title)}
                >
                  →
                </button>
              </article>
            ))}
          </div>
        </section>

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

        <section className="section schedule-section" id="schedule" aria-labelledby="schedule-title">
          <div className="section-heading">
            <p className="eyebrow">Розклад</p>
            <h2 id="schedule-title">Тижневий блок занять</h2>
            <button className="text-action" type="button" onClick={() => scrollToTrial()}>
              Записатися на слот <span aria-hidden="true">→</span>
            </button>
          </div>
          <figure className="schedule-feature">
            <img
              src="/images/sport-evening-training.jpg"
              alt="Вечірнє групове тренування у спортивному клубі"
              width="2048"
              height="1152"
              loading="lazy"
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
                <button className="button button-secondary" type="button" onClick={() => scrollToTrial()}>
                  Уточнити умови
                </button>
              </article>
            ))}
          </div>
        </section>

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
          <form className="trial-form" id="trial" onSubmit={handleSubmit}>
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
              <select name="training" value={selectedProgram} onChange={(event) => setSelectedProgram(event.target.value)}>
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
      </main>

      <footer className="site-footer">
        <a className="brand" href="#top" aria-label="MOVE Sport Club головна">
          <span className="brand-name">MOVE</span>
          <span className="brand-subtitle">Sport Club</span>
        </a>
        <p>Demo landing page для локального спортивного клубу. Замініть placeholder-дані перед публікацією.</p>
      </footer>
    </div>
  )
}

export default App
