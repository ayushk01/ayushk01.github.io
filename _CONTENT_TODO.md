# Content TODO

Walk this list top to bottom before deploying. Most items are 1–2 line edits in a specific file.

## Required before going live

- [ ] **App Store + Play Store URLs for the DocPlix mobile apps.** Once you have them, paste them into:
  - `content/work/docplix-mobile.mdx` (the case study)
  - `app/page.tsx` (the work cards on the homepage — optional, currently the card just links to the case study)
- [ ] **Real numbers in the DocPlix EHR case study.** Open `content/work/docplix-ehr.mdx` and replace the bundle-size and "numbers" placeholders with actual figures (or remove those sections if you don't have them yet).
- [ ] **Resume PDF.** Drop a current resume PDF at `public/resume.pdf`. The "Résumé" button on the homepage links to it.
- [ ] **OG image.** Make a 1200×630 PNG (Figma → export) and put it at `public/og.png`. Should be readable as a thumbnail in a tweet. Use your name + tagline + photo.
- [ ] **Profile photo.** `public/avatar.jpg`. Same headshot you'll use on LinkedIn / GitHub / X. (Currently not wired into the hero — add if you want a small avatar.)

## Recommended

- [ ] **Real case-study screenshots.** Add 1–2 product screenshots per case study in `content/work/*.mdx`. Blur sensitive data — patient names, clinic identifiers, etc.
- [ ] **`/notes/` content.** Even one real short post makes the section credible. Use a recent X post or a "what I shipped this week" note.
- [ ] **DocPlix link.** Confirm `https://docplix.com` is the correct marketing URL. If different, update in `components/hero.tsx`.
- [ ] **Analytics.** Add Plausible or Vercel Analytics. Privacy-friendly counters are fine.

## Deploy

This scaffold is configured for **GitHub Pages static export** out of the box (`next.config.mjs` has `output: 'export'`). The workflow at `.github/workflows/deploy.yml` will build and publish automatically when you push to `main`.

To deploy as a replacement for the current Astro `ayushk01.github.io`:

1. Clone the existing `ayushk01.github.io` repo to a backup location (just in case).
2. In a new branch, replace the Astro source with this scaffold's contents.
3. `pnpm install && pnpm build` locally to confirm the build works.
4. Push, merge.
5. In repo Settings → Pages, set "Source" to **GitHub Actions**.

The first deploy may take 2–3 minutes; subsequent ones are faster.

## Optional polish

- [ ] **Custom 404 page** at `app/not-found.tsx`.
- [ ] **RSS feed for /notes** (`app/notes/feed.xml/route.ts`).
- [ ] **View counter on case studies** (some lightweight third-party service — not Vercel KV since this is a static export).
- [ ] **Command palette** (`cmdk`) for jumping between sections — feels nice on a senior portfolio.
- [ ] **Domain.** If you want one later: `ayushkashyap.dev`, `ayushk.dev`, `ayushk.in`, or `ayushkashyap.me`. Buy from Cloudflare Registrar or Namecheap. In repo Settings → Pages, add the custom domain there (it'll create a CNAME file automatically).
