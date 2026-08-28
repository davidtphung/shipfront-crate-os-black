# Shipfront / CRATE OS BLACK

Isolated black-ground sibling of [crate-os](https://davidtphung.github.io/shipfront-crate-os/). Same crate-os layout, cards, stills, and motion. Ground is `#000000`. Accent is `#FF6A00` only.

Live: https://davidtphung.github.io/shipfront-crate-os-black/

Public source: https://github.com/davidtphung/shipfront-crate-os-black

The github.io path is served as a folder on the user Pages site so the dedicated repo does not have to own project Pages. Root `davidtphung.github.io` is unchanged.

Copy is held from [myshipfront.com](https://www.myshipfront.com/) and live crate-os. Three pages: Home, Get a Quote, Contact.

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
- Cube: hard-line isometric box, three faces, fill `#000`, stroke `#FF6A00`
- Wordmark: cube + SHIPFRONT
- Footer: Built by David T Phung

Truck still `public/media/logistics-usa.jpg` is locked at sha1 `01268520751d59bf9762d2d7d7c3e1555ba60c8d` / 376501 bytes. Do not recode it.
