# MOVE Sport Club Landing

Адаптивний landing page для спортивного клубу у dark/lime fitness-стилі.

🔗 **Live demo:** https://denisnosov22.github.io/sport-club-landing/

## Що реалізовано

- Mobile-first адаптив для телефону, планшета й desktop
- Hero-блок із фоновим зображенням і CTA
- Секції програм, тренерів, розкладу, тарифів і заявки
- Згенеровані тематичні зображення для hero, програм і тренерів
- Інтерактивне mobile menu
- Scroll до секцій і demo-форма заявки
- Чиста компонентна структура React
- Розділені стилі: `base`, `layout`, `sections`, `responsive`
- Перевірка layout/build/lint

## Стек

- React
- TypeScript
- Vite
- CSS без UI-фреймворку
- GitHub Pages

## Структура

```txt
src/
  components/
    layout/
    sections/
  data/
  hooks/
  styles/
  utils/
```

## Команди

```bash
npm install
npm run dev
npm run lint
npm run verify:layout
npm run build
```

## Deploy

Проєкт деплоїться через GitHub Pages workflow:

```txt
.github/workflows/deploy.yml
```

Live URL:

```txt
https://denisnosov22.github.io/sport-club-landing/
```

## Примітка

Це portfolio/demo landing. Для реального клубу потрібно замінити placeholder-дані:

- телефон
- адресу
- графік роботи
- ціни
- реальні імена/фото тренерів
- реальні відгуки
- підключення форми заявки до CRM, email, Telegram bot або іншого каналу
