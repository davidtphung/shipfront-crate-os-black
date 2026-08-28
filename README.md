# Shipfront / CRATE OS BLACK

Isolated black-ground sibling of [crate-os](https://davidtphung.github.io/shipfront-crate-os/). Same crate-os layout, cards, stills, and motion. Ground is `#000000`. Accent is `#FF6A00` only.

Live: https://davidtphung.github.io/shipfront-crate-os-black/

Public source: https://github.com/davidtphung/shipfront-crate-os-black

GitHub Pages publishes `static-site/` to the `gh-pages` branch on push to `main`. Root `davidtphung.github.io` is unchanged.

Copy is held from [myshipfront.com](https://www.myshipfront.com/) and live crate-os. Three pages: Home, Get a Quote, Contact.

Home bands match live crate-os: You Sell. We Ship. / How Shipfront moves with you / Warehousing, fulfillment, ecommerce integrations, and location / Fulfillment looks and feels complicated / Customer success / Fast & Easy Quotes.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:43127](http://localhost:43127).

## Build

```bash
GITHUB_PAGES=true NEXT_PUBLIC_BASE_PATH=/shipfront-crate-os-black npm run build
```

Static export writes to `out/`.

## Paint lock

- Ground / body / header / footer: `#000000`
- Accent: `#FF6A00`
- Text: white / near-white
- Lines: `#222`
- Cube: SHEET 1A EVEN, viewBox `0 0 24 26`, fill `#000`, stroke `#FF6A00` at 2.25. Outer silhouette plus the three visible face edges (the Y). Brand lockup cubes paint at 27x30 (1.5x). Decorative stills stay as-is. No CSS rotateY / perspective / shear.
- Wordmark: cube + SHIPFRONT
- Footer: Built by David T Phung

Truck still `public/media/logistics-usa.jpg` is locked at sha1 `01268520751d59bf9762d2d7d7c3e1555ba60c8d` / 376501 bytes. Do not recode it.
