# Between Coasts Supply Co. — Web

Next.js 16 · React 19 · Tailwind v4 · Framer Motion
Brand: Harvest amber `#C4852A` on midnight `#0F0D0A`.
Tagline: Built between the coasts. Built to last.

## Pages shipped

- `/` — cinematic parallax hero, positioning, products, applications, geography
- `/products` — teak + cypress overview
- `/products/teak` — species detail with specs, grades, sizes, applications
- `/products/cypress` — species detail with specs, grades, sizes, applications
- `/applications` — 23 applications across Exterior / Interior / Commercial / Specialty
- `/sourcing` — responsible plantation narrative + import lane + documentation
- `/trade` — three-tier trade program
- `/about` — thesis, operators, values
- `/contact` — trade desk form (POST `/api/lead`)

Plus: `sitemap.xml`, `robots.txt`, OG image at `/opengraph-image`.

## Local dev

```bash
npm install
cp .env.example .env.local    # set NEXT_PUBLIC_SITE_URL
npm run dev                   # http://localhost:3000
```

## Production build

```bash
npm run build
npm start
```

## Deploy — Vercel (2 min)

1. Push this directory to a new GitHub repo (or use Vercel's Git import UI).
2. Go to https://vercel.com/new, import the repo.
3. Framework preset: **Next.js** (auto-detected).
4. Environment variables:
   - `NEXT_PUBLIC_SITE_URL` — e.g. `https://betweencoastssupply.com`
   - `SLACK_WEBHOOK_URL` — optional, forwards lead form to Slack
5. Deploy. Add custom domain after first deploy succeeds.

## Deploy — Netlify (backup)

1. Go to https://app.netlify.com/drop.
2. Drag the zipped source folder.
3. Build command `npm run build`, publish dir `.next` (Netlify auto-detects Next).
4. Add env vars in Site Settings → Environment.

## Stack notes

- **Fonts** — Inter (sans), Source Serif 4 (serif), IBM Plex Mono (mono), loaded via `next/font/google`.
- **Motion** — framer-motion scroll-linked parallax on hero, `Reveal` component for section fade-ups. Respects `prefers-reduced-motion`.
- **Wood-grain hero** — procedural SVG plank strata + amber radial + embers + grain. No external video or image dependencies.
- **Lead form** — `POST /api/lead` logs to function logs; forwards to Slack webhook if `SLACK_WEBHOOK_URL` is set. Swap in Resend / HubSpot / Attio in `src/app/api/lead/route.ts` when chosen.
- **CMS** — intentionally none for v1. Static content lives in `src/data/` (`products.ts`, `applications.ts`) and page files. Sanity v3 wiring can be added without disturbing route structure.

## File tree

```
src/
  app/
    layout.tsx          ← root layout, nav + footer, fonts, metadata
    page.tsx            ← home
    globals.css         ← Tailwind v4 + brand tokens
    sitemap.ts robots.ts opengraph-image.tsx icon.svg
    about/ applications/ contact/ products/ products/teak/ products/cypress/ sourcing/ trade/
    api/lead/route.ts   ← trade desk form handler
  components/
    Nav.tsx Footer.tsx Logo.tsx
    ParallaxHero.tsx    ← layered SVG + scroll parallax
    Section.tsx Reveal.tsx Marquee.tsx CTA.tsx
    ProductPage.tsx ContactForm.tsx
  data/
    products.ts applications.ts
```

## Updating copy

- Edit the product facts in `src/data/products.ts`.
- Edit the application grid in `src/data/applications.ts`.
- Edit page-specific copy inline in each `page.tsx`.

Built between the coasts. Built to last.
