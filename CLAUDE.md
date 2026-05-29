# CLAUDE.md — wood-design-studio

## What This Project Is
Hebrew RTL personal portfolio site for a wood/industrial designer.
Built with Astro + Tailwind CSS. Static site, no backend.
One-page landing with sections: Hero, About, Services, Gallery, Process, Testimonials, Contact.

## Tech Stack
- Astro (static site generator)
- Tailwind CSS v3 with @astrojs/tailwind
- TypeScript strict mode
- Google Fonts: Heebo (Hebrew font)
- HTML: lang="he" dir="rtl"

## RTL Rules (non-negotiable)
- Use ONLY logical CSS properties: ps-/pe-, ms-/me-, start-/end-
- NEVER use pl-/pr-, ml-/mr-, left-/right- (breaks RTL)
- All text content in Hebrew unless explicitly overridden
- Heebo is the only font — do not swap to Inter or other Latin fonts

## Color Palette
- wood-dark: #2C1810 (backgrounds, text on light)
- wood-medium: #8B5E3C (primary accent)
- wood-light: #D4A574 (highlights, borders)
- cream: #F5F0E8 (page background)
- cream-dark: #E8DDD0 (section alternate backgrounds)

## Mobile-First Rules
- Design mobile first, layer up with sm:/md:/lg:
- Images use object-cover + aspect-ratio classes
- Contact: WhatsApp button is essential (Israelis prefer WhatsApp)
- Nav: hamburger on mobile, horizontal on desktop

## Dev Commands
```bash
npm run dev      # dev server (default port 4321)
npm run build    # production build
npm run preview  # preview built site
```

## Content Customization
- Replace placeholder name "[שם המעצב]" in About.astro with real name
- Replace phone 054-000-0000 with real phone in Contact.astro and Footer.astro
- Replace portfolio images with real project photos
- Update email in Contact.astro

## Coding Conventions
- Components in src/components/ (one per section)
- Layout in src/layouts/Layout.astro
- Styles in src/styles/global.css
- Static assets in public/
- All Tailwind classes; no inline styles
- No JavaScript frameworks (vanilla JS only, minimal)

## Before Deploying
- Replace all placeholder content with real data
- Test all anchor links work
- Verify WhatsApp link opens correctly on mobile
- Check mobile layout on actual device
- Add real portfolio images
