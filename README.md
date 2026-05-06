# MOVE Sport Club landing

Односторінковий landing page українською для локального спортивного клубу. Проєкт зроблений як production-quality starter: React, Vite, TypeScript, адаптивна верстка, SEO/meta, форма-заглушка і чіткі placeholder-дані для заміни.

## Стек

- React + TypeScript
- Vite
- CSS без UI-фреймворку

## Запуск

```bash
npm install
npm run dev
```

Build:

```bash
npm run build
npm run preview
```

## Що замінити перед публікацією

- Назву клубу, якщо `MOVE Sport Club` не фінальна.
- Телефон, адресу, карту і робочі години.
- Реальний розклад, тренерів, відгуки та актуальні ціни.
- Backend або інтеграцію форми: CRM, Telegram bot, email endpoint чи інший канал.
- OG image, якщо потрібне точне брендоване зображення.

## Deploy

GitHub Pages workflow додано в `.github/workflows/deploy.yml`. Після створення GitHub repo та push:

1. Увімкнути Pages source: `GitHub Actions`.
2. Workflow збере проєкт з `GITHUB_PAGES=true`, щоб Vite використовував base `/sport-club-landing/`.
3. Live URL матиме формат `https://<github-user>.github.io/sport-club-landing/`.

У цій сесії `gh auth status` показав, що GitHub CLI не автентифікований, тому repo creation/push/deploy заблоковані до `gh auth login`.

## Референси

Використані як структурні та UX-орієнтири:

- https://crossfit425.com/
- https://www.tonka-fitness.com/
- https://www.wearemissionfit.com/
- https://www.gritmiami.com/
- https://www.prvnnashville.com/
- https://www.ringfitboxing.com/
- https://legion-ix.com/
- https://fightacademy.com.ua/
- https://fcf.kyiv.ua/
- https://sportdep.com.ua/

Візуальний напрям узято з локального approved preview image:

`/home/openclaw/.openclaw/media/tool-image-generation/sport-club-landing-preview---2f25bae5-c004-49e2-9ba6-269b1363b28f.jpg`
