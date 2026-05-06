import type { FormEvent } from 'react'

import './App.css'

const programs = [
  {
    title: 'Силові тренування',
    text: 'Поступове навантаження, техніка базових вправ і впевнена робота з вагою.',
    icon: 'barbell',
  },
  {
    title: 'Функціональний тренінг',
    text: 'Комплекси для сили руху, витривалості, координації та стабільності.',
    icon: 'bolt',
  },
  {
    title: 'Кардіо та витривалість',
    text: 'Інтервальні заняття для серця, дихання та енергії на щодень.',
    icon: 'pulse',
  },
  {
    title: 'Персональні заняття',
    text: 'Індивідуальний план, уважна корекція техніки і темп під твою ціль.',
    icon: 'person',
  },
  {
    title: 'Stretching / Mobility',
    text: 'Мобільність, відновлення, гнучкість і легкість після силових блоків.',
    icon: 'mobility',
  },
]

const steps = [
  ['01', 'Залиш заявку', 'Напиши контакт і бажаний напрям. Адміністратор уточнить деталі.'],
  ['02', 'Обери формат', 'Підберемо групу, тренера або персональний слот під твій графік.'],
  ['03', 'Прийди на пробне', 'Познайомишся із залом, командою і першим тренуванням без поспіху.'],
]

const trainers = [
  {
    title: 'Тренер клубу',
    focus: 'Сила та техніка',
    text: 'Веде силові групи, стежить за безпекою руху і прогресією навантаження.',
  },
  {
    title: 'Тренер клубу',
    focus: 'Функціональний тренінг',
    text: 'Допомагає розвивати витривалість, координацію та контроль тіла.',
  },
  {
    title: 'Тренер клубу',
    focus: 'Mobility / відновлення',
    text: 'Працює з мобільністю, якістю руху та комфортним поверненням у ритм.',
  },
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
  {
    name: 'Start',
    label: 'Пробний формат',
    note: 'Для знайомства із залом і командою.',
    includes: ['Пробне тренування', 'Підбір напряму', 'Базова консультація'],
  },
  {
    name: 'Active',
    label: 'Групові заняття',
    note: 'Ціни уточнюються після вибору формату.',
    includes: ['Груповий графік', 'Різні напрями', 'Підтримка тренера'],
  },
  {
    name: 'Personal',
    label: 'Персональний план',
    note: 'Вартість залежить від частоти та цілі.',
    includes: ['Індивідуальна програма', 'Гнучкий час', 'Контроль техніки'],
  },
]

const testimonials = [
  {
    text: 'Після першого пробного стало зрозуміло, що тут не женуть темп, а пояснюють рух і допомагають втягнутися.',
    meta: 'Приклад відгуку',
  },
  {
    text: 'Зручно, що є ранкові та вечірні заняття. Можна тримати графік навіть у насичені тижні.',
    meta: 'Demo feedback',
  },
  {
    text: 'Команда уважна до новачків: підказують, що взяти, де почати і як не перевантажитись.',
    meta: 'Приклад відгуку',
  },
]

function Icon({ name }: { name: string }) {
  const common = {
    width: 28,
    height: 28,
    viewBox: '0 0 28 28',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    'aria-hidden': true,
  }

  if (name === 'barbell') {
    return (
      <svg {...common}>
        <path d="M3 10v8M7 7v14M21 7v14M25 10v8M7 14h14" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
      </svg>
    )
  }

  if (name === 'bolt') {
    return (
      <svg {...common}>
        <path d="M15.7 2 6 15.1h7.3L12.3 26 22 11.9h-7.1L15.7 2Z" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" />
      </svg>
    )
  }

  if (name === 'pulse') {
    return (
      <svg {...common}>
        <path d="M3 14h5l2.4-6 4.4 12 2.8-6H25" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  }

  if (name === 'person') {
    return (
      <svg {...common}>
        <path d="M14 14a5 5 0 1 0 0-10 5 5 0 0 0 0 10ZM5 25c1.5-4.8 5-7.2 9-7.2s7.5 2.4 9 7.2" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" />
      </svg>
    )
  }

  return (
    <svg {...common}>
      <path d="M7 8c3 0 4 2.3 7 2.3S18 8 21 8M6 14c3.5 0 4.5 2 8 2s4.5-2 8-2M8 20h12" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" />
    </svg>
  )
}

function App() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    window.alert('Дякуємо! Це demo-форма без backend. Замініть її на CRM, Telegram або email-інтеграцію.')
  }

  return (
    <div className="site-shell">
      <header className="site-header" aria-label="Головна навігація">
        <a className="brand" href="#top" aria-label="SportCore Club головна">
          <span className="brand-mark" aria-hidden="true">SC</span>
          <span>
            <strong>SportCore</strong>
            <small>Club</small>
          </span>
        </a>
        <nav className="nav-links" aria-label="Секції сайту">
          <a href="#programs">Програми</a>
          <a href="#trainers">Тренери</a>
          <a href="#schedule">Розклад</a>
          <a href="#pricing">Ціни</a>
          <a href="#contacts">Контакти</a>
        </nav>
        <a className="header-cta" href="#trial">Записатися</a>
      </header>

      <main id="top">
        <section className="hero-section" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">Сучасний спортивний клуб</p>
            <h1 id="hero-title">Тренуйся сильніше. Рухайся впевненіше.</h1>
            <p className="hero-lead">Сучасний зал, сильна команда і тренування під твій ритм.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#trial">Записатися на пробне</a>
              <a className="button button-ghost" href="#programs">Дивитись програми</a>
            </div>
          </div>
          <div className="hero-visual" aria-label="Атлет у темному спортивному залі">
            <img src="/sport-club-preview.jpg" alt="" aria-hidden="true" />
            <div className="hero-card hero-card-rating">
              <strong>4.9</strong>
              <span>рейтинг</span>
            </div>
            <div className="hero-card hero-card-hours">
              <strong>07:00-22:00</strong>
              <span>щодня</span>
            </div>
          </div>
          <div className="stats-strip" aria-label="Ключові показники клубу">
            <div>
              <strong>4.9</strong>
              <span>рейтинг</span>
            </div>
            <div>
              <strong>12+</strong>
              <span>напрямів</span>
            </div>
            <div>
              <strong>07:00-22:00</strong>
              <span>щодня</span>
            </div>
          </div>
        </section>

        <section className="section" id="programs" aria-labelledby="programs-title">
          <div className="section-heading">
            <p className="eyebrow">Наші програми</p>
            <h2 id="programs-title">Обери напрям, який тримає твій ритм</h2>
            <a href="#schedule">Подивитися розклад</a>
          </div>
          <div className="program-grid">
            {programs.map((program) => (
              <article className="program-card" key={program.title}>
                <span className="program-icon"><Icon name={program.icon} /></span>
                <h3>{program.title}</h3>
                <p>{program.text}</p>
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
            {trainers.map((trainer, index) => (
              <article className="trainer-card" key={`${trainer.focus}-${index}`}>
                <div className="trainer-photo" aria-hidden="true">
                  <span>{index + 1}</span>
                </div>
                <div>
                  <p>{trainer.focus}</p>
                  <h3>{trainer.title}</h3>
                  <span>{trainer.text}</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section schedule-section" id="schedule" aria-labelledby="schedule-title">
          <div className="section-heading">
            <p className="eyebrow">Розклад</p>
            <h2 id="schedule-title">Тижневий блок занять</h2>
            <a href="#trial">Записатися на слот</a>
          </div>
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
            {pricing.map((plan) => (
              <article className="pricing-card" key={plan.name}>
                <p>{plan.label}</p>
                <h3>{plan.name}</h3>
                <span>{plan.note}</span>
                <ul>
                  {plan.includes.map((item) => <li key={item}>{item}</li>)}
                </ul>
                <a className="button button-secondary" href="#trial">Уточнити умови</a>
              </article>
            ))}
          </div>
        </section>

        <section className="section testimonials-section" aria-labelledby="testimonials-title">
          <div className="section-heading">
            <p className="eyebrow">Відгуки</p>
            <h2 id="testimonials-title">Що можуть казати клієнти після запуску</h2>
          </div>
          <div className="testimonial-grid">
            {testimonials.map((testimonial) => (
              <figure className="testimonial-card" key={testimonial.text}>
                <blockquote>{testimonial.text}</blockquote>
                <figcaption>{testimonial.meta}</figcaption>
              </figure>
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
              <p><strong>Графік:</strong> 07:00-22:00 щодня</p>
            </div>
            <div className="map-placeholder" aria-label="Місце для карти">
              <span>Map placeholder</span>
            </div>
          </div>
          <form className="trial-form" id="trial" onSubmit={handleSubmit}>
            <label>
              Ім'я
              <input name="name" autoComplete="name" placeholder="Ваше ім'я" required />
            </label>
            <label>
              Телефон
              <input name="phone" autoComplete="tel" placeholder="+380" required />
            </label>
            <label>
              Напрям
              <select name="training" defaultValue="Функціональний тренінг">
                <option>Силові тренування</option>
                <option>Функціональний тренінг</option>
                <option>Кардіо та витривалість</option>
                <option>Персональні заняття</option>
                <option>Stretching / Mobility</option>
              </select>
            </label>
            <label>
              Коментар
              <textarea name="comment" placeholder="Зручний день, досвід, ціль" rows={4}></textarea>
            </label>
            <button className="button button-primary" type="submit">Записатися на пробне</button>
          </form>
        </section>
      </main>

      <footer className="site-footer">
        <a className="brand" href="#top" aria-label="SportCore Club головна">
          <span className="brand-mark" aria-hidden="true">SC</span>
          <span>
            <strong>SportCore</strong>
            <small>Club</small>
          </span>
        </a>
        <p>Demo landing page для локального спортивного клубу. Замініть placeholder-дані перед публікацією.</p>
      </footer>
    </div>
  )
}

export default App
