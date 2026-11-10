# The Warrior Gym — Website

Production-ready marketing site for **The Warrior Gym**, Kirti Nagar, New Delhi.
Plain HTML + CSS + vanilla JS. No framework, no build step, no trackers.

## Files

| File | What it is |
|---|---|
| `index.html` | Page structure, SEO meta, Open Graph, HealthClub JSON-LD |
| `styles.css` | All styling — tokens at the top of the file |
| `script.js` | Behaviour — **all business data lives in `CONFIG` at the top** |

## Edit the content

Everything a gym owner changes is in one object: `CONFIG` in `script.js`.

```js
phone, whatsappNumber, email, fullAddress, geo,
instagramUrl, facebookUrl, youtubeUrl, mapsUrl, mapsReviewsUrl,
stats[], trainers[], prices[], timings[], footerHours
```

- **Phone / WhatsApp** — `whatsappNumber` must be digits only, country code first
  (`919811012345`). Every WhatsApp button, the form and the mobile bar read from it.
- **Prices** — `prices[]`. Mark exactly one plan `popular: true`.
- **Timings** — 24h `"HH:MM"`. The "Open now" badge and the highlighted row are
  computed live in IST (`Asia/Kolkata`), so it stays correct for visitors abroad.
- **Stats** — `stats[]` values animate up when the strip scrolls into view.
- **Trainers** — `trainers[]`.
- **Photos** — every `<img data-photo>` shows a labelled "REPLACE WITH REAL PHOTO"
  placeholder until you set a real `src`:

```html
<img src="assets/trainer-1.jpg" alt="[TRAINER NAME] at The Warrior Gym" loading="lazy">
```

## Deploy

Any static host. Drag-and-drop the folder or connect the repo:

- **Netlify** — drag the folder onto app.netlify.com, or "Import from Git".
- **Vercel** — New Project → import repo → framework preset: *Other* → Output: `.`
- **GitHub Pages** — Settings → Pages → Source: *Deploy from a branch* → `main` / `/ (root)`.

After the domain is set, update `canonical`, `og:url`, `og:image` and the JSON-LD
`url` / `image` placeholders in `index.html`.

## Before launch checklist

- [ ] Replace every `[PLACEHOLDER]` (grep for `[`)
- [ ] Real phone, WhatsApp number, email, full address
- [ ] Real prices; confirm student / couple offers; PT add-on price
- [ ] Real timings, then confirm the JSON-LD `openingHoursSpecification` matches
- [ ] Trainer names, specialities, certifications
- [ ] 3–4 before/after pairs + written consent from each member
- [ ] Real Google reviews + `reviewCount` in the JSON-LD
- [ ] Instagram / Facebook / YouTube URLs
- [ ] Hero photo (`styles.css` → `.hero-bg` background-image)
- [ ] `og-cover.jpg` (1200×630) in `assets/`
- [ ] Test the WhatsApp deep link on a real phone
- [ ] Enable GitHub Pages / Netlify domain + HTTPS

## Accessibility & performance notes

- WCAG AA body contrast on all three surfaces; red is limited to CTAs, key numbers
  and small highlights.
- Skip link, ARIA on nav / accordion / carousels, visible red keyboard focus rings.
- `prefers-reduced-motion` disables reveals, counters and smooth scrolling.
- Reveals are gated behind a `.js` class, so content is never trapped invisible.
- Map and all images are lazy-loaded; no JS libraries.

---
© The Warrior Gym, Kirti Nagar, New Delhi.
