# CONSULEXA

Marketing site for **CONSULEXA** — independent procurement, sourcing and advisory
for European companies working with China and ASEAN markets (Walter Galimberti).

Built with **Next.js 16** (App Router) + **React 19** + **TypeScript**. Frontend and
the TypeScript backend (route handlers) live in the same project.

## Requirements

- Node.js 20+ (developed on 22)
- npm

## Getting started

```bash
npm install        # install dependencies
npm run dev        # start dev server at http://localhost:3000
```

Other scripts:

```bash
npm run build      # production build
npm run start      # serve the production build
npm run lint       # ESLint
npm run typecheck  # TypeScript, no emit
```

## Project structure

```
src/
├── app/
│   ├── layout.tsx          # root layout: fonts + SEO/OpenGraph metadata
│   ├── page.tsx            # home page — composes the section components
│   ├── globals.css         # design tokens, reset, shared utilities, reveal system
│   ├── privacy/            # /privacy page (GDPR/cookie notice — review before publishing)
│   ├── robots.ts           # /robots.txt
│   ├── sitemap.ts          # /sitemap.xml
│   └── api/
│       └── contact/route.ts  # example TypeScript backend endpoint (POST /api/contact)
├── components/             # one component + co-located *.module.css each
│   ├── Nav.tsx             # client: fixed nav with on-scroll shrink
│   ├── Logo.tsx            # SVG wordmark
│   ├── Hero / Manifesto / Services / Approach / Network / About / Contact / Footer
│   └── RevealOnScroll.tsx  # client: IntersectionObserver fade-in island
├── data/
│   └── content.ts          # all site copy as typed data (easy to edit / translate / move to CMS)
└── lib/
    └── fonts.ts            # next/font (Cormorant Garamond + Manrope), self-hosted
```

## Design system

Colours and spacing are CSS custom properties in `src/app/globals.css` (`--navy`,
`--cream`, `--gold`, `--pad-x`, …). Each component keeps its own styles in a
co-located CSS Module; only genuinely shared utilities (`.section-pad`,
`.section-label`, `.section-intro`, `.reveal`) are global.

## Backend

`src/app/api/contact/route.ts` is a working example of the TypeScript backend
layer: a validated `POST /api/contact` endpoint ready to wire to an email
provider, database or CRM. Add more route handlers under `src/app/api/**` as
needed; for heavier server logic, Server Actions and `src/lib/**` modules are
also available.

## Deployment

### Cloudflare Workers (recommended for this repo)

Uses [@opennextjs/cloudflare](https://opennext.js.org/cloudflare) + Wrangler.
The worker name is `consulexa-landing` (see `wrangler.jsonc`). Production is
served only on the custom domain (`www.consulexa.it`); `workers.dev` and preview
URLs are disabled in Wrangler so deploys do not re-enable them.

```bash
npm install
npm run build          # sanity check
npx opennextjs-cloudflare build   # Cloudflare bundle → .open-next/
npm run deploy         # build + wrangler deploy (needs `wrangler login`)
```

Local preview after a Cloudflare build:

```bash
npm run preview        # serves via wrangler dev
```

### Other hosts

Deployable anywhere that runs Node (Vercel, Netlify, a VPS, …). On Vercel: import
the repo, no extra config needed.

## Notes / TODO

- `src/data/content.ts` → `site.linkedin` currently points to a generic LinkedIn
  URL; replace with the real profile.
- The `/privacy` text is a baseline GDPR template — have it reviewed.
---

The original prototype was a single-file HTML page. This repo splits it into
components, separates concerns, self-hosts fonts, fixes the broken privacy link
and adds a backend layer — without changing the design.
