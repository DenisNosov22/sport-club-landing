import { asset } from '../utils/asset'

export type Program = {
  title: string
  eyebrow: string
  text: string
  image: string
  alt: string
  width: number
  height: number
}

export type Trainer = {
  id: number
  focus: string
  title: string
  text: string
  image: string
  alt: string
}

export const navItems = [
  ['Програми', '#programs'],
  ['Тренери', '#trainers'],
  ['Розклад', '#schedule'],
  ['Абонементи', '#pricing'],
  ['Контакти', '#contacts'],
] as const

export const stats = [
  ['4.9 ★', 'рейтинг'],
  ['12+', 'напрямів'],
  ['07:00–22:00', 'щодня'],
] as const

export const programs: Program[] = [
  {
    title: 'Сила',
    eyebrow: 'Strength',
    text: 'Базові вправи, контроль техніки і прогресія навантаження без хаосу.',
    image: asset('images/move-program-strength.jpg'),
    alt: 'Силове тренування зі штангою',
    width: 1536,
    height: 1024,
  },
  {
    title: 'Функціонал',
    eyebrow: 'Functional',
    text: 'Комплекси на витривалість, координацію, стабільність і сильний рух.',
    image: asset('images/move-program-functional.jpg'),
    alt: 'Функціональне тренування з мʼячем',
    width: 1536,
    height: 1024,
  },
  {
    title: 'Персональні',
    eyebrow: 'Personal',
    text: 'Індивідуальний план, гнучкий графік і уважна робота з твоєю ціллю.',
    image: asset('images/sport-program-equipment.jpg'),
    alt: 'Спортивне обладнання для функціональних тренувань',
    width: 1024,
    height: 1024,
  },
]

export const steps = [
  ['01', 'Залиш заявку', 'Напиши контакт і бажаний напрям. Адміністратор уточнить деталі.'],
  ['02', 'Обери формат', 'Підберемо групу, тренера або персональний слот під твій графік.'],
  ['03', 'Прийди на пробне', 'Познайомишся із залом, командою і першим тренуванням без поспіху.'],
] as const

export const trainers: Trainer[] = [
  {
    id: 1,
    focus: 'Сила та техніка',
    title: 'Тренер клубу',
    text: 'Веде силові групи, стежить за безпекою руху і прогресією навантаження.',
    image: asset('images/move-trainer-strength.jpg'),
    alt: 'Портрет тренера з силових тренувань',
  },
  {
    id: 2,
    focus: 'Функціональний тренінг',
    title: 'Тренер клубу',
    text: 'Допомагає розвивати витривалість, координацію та контроль тіла.',
    image: asset('images/move-trainer-functional.jpg'),
    alt: 'Портрет тренера з функціональних тренувань',
  },
  {
    id: 3,
    focus: 'Mobility / відновлення',
    title: 'Тренер клубу',
    text: 'Працює з мобільністю, якістю руху та комфортним поверненням у ритм.',
    image: asset('images/move-trainer-mobility.jpg'),
    alt: 'Портрет тренера з мобільності та відновлення',
  },
]

export const schedule = [
  ['Пн', '07:30 Сила', '18:30 Функціонал', '20:00 Mobility'],
  ['Вт', '08:00 Кардіо', '18:00 Персональні', '19:30 Сила'],
  ['Ср', '07:30 Функціонал', '18:30 Сила', '20:00 Stretching'],
  ['Чт', '08:00 Кардіо', '18:00 Персональні', '19:30 Функціонал'],
  ['Пт', '07:30 Сила', '18:30 Кардіо', '20:00 Mobility'],
  ['Сб', '10:00 Full Body', '12:00 Пробні', '16:00 Stretching'],
] as const

export const pricing = [
  ['Start', 'Пробний формат', 'Пробне тренування, підбір напряму і базова консультація.'],
  ['Active', 'Групові заняття', 'Ранкові та вечірні групи, різні напрями і підтримка тренера.'],
  ['Personal', 'Персональний план', 'Індивідуальна програма, гнучкий час і контроль техніки.'],
] as const
