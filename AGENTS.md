# unicodeangel — Personal Site

## What This Is
A personal website for @kailun.me with a retro cyberpunk/pixel-art aesthetic.
Built with Astro (Islands architecture) and deployed on Cloudflare Workers.

## Tech Stack
- **Framework:** Astro 7 + React 19 (React Islands for interactive components only)
- **Styling:** Tailwind CSS v4 with oklch design tokens
- **i18n:** Three locales — English (`/`), Chinese (`/zh/`), Japanese (`/ja/`)
- **Deployment:** Cloudflare Workers via Wrangler

## Commands
- `npm run dev` — Start dev server
- `npm run build` — Production build
- `npm run check` — astro check + tsc

## Code Style
- TypeScript strict mode, no `any`
- Named exports, PascalCase components, camelCase utils
- Tailwind utility classes, no inline styles
- 2-space indentation
- Desktop-first layout (site is intentionally desktop-only)

## Project Structure
```
src/
  components/       # .astro (static) + .tsx (React islands)
  i18n/             # content.ts — all locale strings and types
  layouts/          # Layout.astro — base HTML shell
  lib/              # utils.ts (cn() utility)
  pages/            # index.astro, zh/index.astro, ja/index.astro
  styles/           # globals.css + Tailwind tokens
  types/            # TypeScript interfaces
public/
  audio/            # MP3s for iPod player
  fonts/            # Custom fonts (zpix, spaceage, BRAILLE1, etc.)
  images/           # Site images and GIFs
  videos/           # background.mp4 (looping background)
  seo/              # Favicons and touch icons
```

## Key Patterns
- **Static vs. interactive:** Most components are `.astro` files. Only components needing
  client-side interactivity are `.tsx` React Islands: `iPodPlayer`, `SynthPanel`.
- **i18n:** All user-facing strings live in `src/i18n/content.ts`. Each locale page imports
  and passes the relevant content to components via props — no runtime locale detection.
- **Locale pages:** The three `index.astro` files share the same component tree;
  only the content object (locale key) differs.
