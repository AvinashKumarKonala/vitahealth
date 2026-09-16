# VitaHealth

A full-stack, no-code health and wellness platform built with Cursor and deployed on Netlify, offering product shopping, doctor consultations, health tracking, nutrition management, and personalized care plans.

## Stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS 4** design system (forest / mint brand)
- Client-side cart & wishlist (localStorage)
- Deploy-ready for **Vercel**

## Pages

| Route | Description |
|-------|-------------|
| `/` | Marketing landing |
| `/dashboard` | Signed-in health hub |
| `/shop` | Product catalog, filters, categories |
| `/consultations` | Doctor directory & consult CTAs |
| `/tracker` | Health score & daily metrics |
| `/nutrition` | Meals & macros |
| `/subscriptions` | VitaHealth+ plans |
| `/appointments` | Booking list |
| `/cart` | Cart & checkout summary |
| `/profile` | User profile |

## Develop

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Deploy

```bash
npx vercel --prod
```
