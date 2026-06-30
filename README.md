# ayushk01.github.io — portfolio

A Next.js 14 (App Router) + Tailwind + MDX portfolio designed to replace your existing Astro portfolio at `ayushk01.github.io`.

Features:

- A single, scrollable landing page (Hero → About → Selected Work → Stack → Writing → Contact).
- Three case-study deep-dive pages (`/work/[slug]/`) written in MDX.
- A `/notes/` index for short writing.
- Light/dark mode with proper system detection, no flash on reload.
- **Statically exported, deployable to GitHub Pages out of the box** via the included Actions workflow.

## Quick start

```bash
# from this directory
npm install
npm run dev         # http://localhost:3000

# build & preview
npm run build       # produces ./out
npx serve out       # quick way to preview the static build
```

## Deploy to ayushk01.github.io (the recommended path)

1. **Back up the current Astro site.** Clone it locally:
   ```bash
   git clone https://github.com/ayushk01/ayushk01.github.io.git ayushk01.github.io-astro-backup
   ```
2. **Switch the source.** In the existing `ayushk01.github.io` repo, create a new branch (e.g. `nextjs-rewrite`), delete the Astro files, and copy everything from this `02_portfolio/` folder in.
3. **Confirm it builds.** `pnpm install && pnpm build` should produce `./out` cleanly.
4. **Push and merge.** Once on `main`, the GitHub Actions workflow at `.github/workflows/deploy.yml` builds and publishes automatically.
5. **Set GitHub Pages source.** In the repo on github.com → Settings → Pages → Source: choose **GitHub Actions** (not "Deploy from a branch").
6. Wait ~2 minutes. The new site is live at `https://ayushk01.github.io`.

If anything breaks, the Astro backup lets you roll back without losing anything.

## Deploy to a custom domain later

When you want a custom domain (e.g. `ayushkashyap.dev`):

1. Buy it (Cloudflare Registrar or Namecheap).
2. Add a CNAME at your DNS pointing to `ayushk01.github.io`.
3. In repo Settings → Pages → Custom domain, add your domain. GitHub will create a `CNAME` file in the deployed output.

## Before going live

Open `_CONTENT_TODO.md` and walk through it. Most of what's in there is "fill in real numbers" / "replace placeholders" / "add product screenshots."

## File map

```
02_portfolio/
├── README.md                       (this file)
├── _CONTENT_TODO.md                (everything to fill in before going live)
├── package.json
├── next.config.mjs                 (output: 'export' enabled for GitHub Pages)
├── tsconfig.json
├── tailwind.config.ts
├── postcss.config.mjs
├── .gitignore
├── .github/
│   └── workflows/
│       └── deploy.yml              GitHub Actions workflow → deploys to Pages
├── app/
│   ├── layout.tsx                  Global layout + theme provider
│   ├── page.tsx                    Landing page (hero, about, work, stack, writing, contact)
│   ├── globals.css                 Tailwind base + theme tokens
│   ├── theme-provider.tsx          next-themes wrapper
│   ├── work/
│   │   └── [slug]/page.tsx         Case study route (MDX-backed)
│   └── notes/
│       └── page.tsx                Short writing index
├── content/
│   ├── work/
│   │   ├── ehr-platform.mdx        Case study 1 — multi-tenant EHR
│   │   ├── mobile-apps.mdx         Case study 2 — RN apps
│   │   ├── woodver.mdx             Case study 3 — Woodver freelance
│   │   └── side-project.mdx        Template for future case studies
│   └── notes/
│       └── hello.mdx               Sample short post
├── components/
│   ├── hero.tsx
│   ├── work-card.tsx
│   ├── stack-grid.tsx
│   ├── theme-toggle.tsx
│   └── footer.tsx
└── public/
    ├── og.png                      (you'll add this — see _CONTENT_TODO.md)
    └── resume.pdf                  (you'll add this — see _CONTENT_TODO.md)
```
