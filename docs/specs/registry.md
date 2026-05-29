# Feature Registry — wood-design-studio

Single source of truth for what this site ships today. One entry per section/component.

### Landing page (`src/pages/index.astro`)

- **route:** `/` (single-page static site)
- **Purpose:** Hebrew RTL one-page portfolio assembling all section components.
- **Triggers / activation:** Served as the only route; static HTML.
- **Surface:** Renders Nav, Hero, About, Services, Gallery, Process, Testimonials, Contact, Footer.
- **Dependencies:** Astro, @astrojs/tailwind, Google Fonts (Heebo), Unsplash image CDN.
- **Status:** `active`.
- **Last updated:** `2026-05-29`.

### Nav (`src/components/Nav.astro`)

- **Purpose:** Sticky RTL navbar with logo + anchor links; hamburger on mobile.
- **Triggers / activation:** Top of every viewport (sticky). Hamburger toggled by inline vanilla JS.
- **Surface:** Anchors to #about, #gallery, #process, #testimonials, #contact.
- **Status:** `active`. **Last updated:** `2026-05-29`.

### Hero (`src/components/Hero.astro`)

- **Purpose:** Full-viewport intro with tagline + two CTAs over a wood-workshop image.
- **Surface:** CTA anchors to #gallery and #contact; animated scroll indicator to #about.
- **Status:** `active`. **Last updated:** `2026-05-29`.

### About (`src/components/About.astro`)

- **Purpose:** Designer bio (two-column) + 15+/200+/98% stats row.
- **Status:** `active`. **Last updated:** `2026-05-29`.

### Services (`src/components/Services.astro`)

- **Purpose:** 4-card grid of offerings (living room, bedroom, dining, custom).
- **Status:** `active`. **Last updated:** `2026-05-29`.

### Gallery (`src/components/Gallery.astro`)

- **Purpose:** 6-image portfolio grid with hover-reveal captions + contact CTA.
- **Dependencies:** 6 Unsplash images.
- **Status:** `active`. **Last updated:** `2026-05-29`.

### Process (`src/components/Process.astro`)

- **Purpose:** 5-step timeline (consult → design → materials → build → deliver) on dark bg.
- **Status:** `active`. **Last updated:** `2026-05-29`.

### Testimonials (`src/components/Testimonials.astro`)

- **Purpose:** 3 customer quote cards with 5-star ratings.
- **Status:** `active`. **Last updated:** `2026-05-29`.

### Contact (`src/components/Contact.astro`)

- **Purpose:** Contact info + WhatsApp CTA + static form with JS success message.
- **Triggers / activation:** Form submit handled client-side (inline JS), no backend.
- **Surface:** WhatsApp deep link `wa.me/972540000000`; tel/mailto links.
- **Status:** `active`. **Last updated:** `2026-05-29`.

### Footer (`src/components/Footer.astro`)

- **Purpose:** Logo, tagline, repeated nav, social placeholders, copyright.
- **Status:** `active`. **Last updated:** `2026-05-29`.
