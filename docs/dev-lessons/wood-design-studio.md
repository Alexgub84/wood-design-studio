# Dev Lessons — wood-design-studio

Append-only. Each entry dated. Never rewrite.

### [Decision] Tailwind v3 + @astrojs/tailwind, not v4 vite plugin

**Date:** 2026-05-29
**Context:** `npx astro add tailwind` on a fresh scaffold installed Tailwind v4 via `@tailwindcss/vite` and an `@import "tailwindcss"` global. Project spec requires v3 with the `@astrojs/tailwind` integration and a `tailwind.config.mjs`.
**Decision:** Uninstalled `@tailwindcss/vite` + `tailwindcss@4`, installed `tailwindcss@3.4.17` + `@astrojs/tailwind@5.1.5`, rewrote `astro.config.mjs` to use the integration (`applyBaseStyles: false`), and switched `global.css` to `@tailwind base/components/utilities`. Rejected: keeping v4 — it has no `tailwind.config.mjs` extend API the spec depends on for the custom wood/cream palette.
**Reason:** v3 config-file model is what the brief and color-token setup assume.
**Reuse tip:** When a brief pins Tailwind v3 + `@astrojs/tailwind`, expect `astro add tailwind` to give v4 and plan the swap up front.

### [Bug] @astrojs/tailwind@5 peer-conflicts with Astro 6

**Date:** 2026-05-29
**Problem:** `astro add` pulled Astro 6.4; `@astrojs/tailwind@5.1.5` peers only `astro ^3||^4||^5`, so `npm install` failed with ERESOLVE.
**Solution:** Pinned Astro to `4.16.18`, which satisfies the integration's peer range. Build + typecheck clean afterward.
**Prevention:** When using `@astrojs/tailwind`, keep Astro at v4/v5 until the integration supports v6, or use the v4 vite plugin if Astro 6 is required.
