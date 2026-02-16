# Frontend conventions

## UI and logic separation
- **UI files** (e.g. `*.ui.tsx`) contain only presentation: JSX, styling, and minimal local state (e.g. menu open).
- **Logic files** (e.g. `*.logic.ts` or `*.logic.tsx`) hold data, config, and pure logic. Import them in the UI.
- Example: `Hero.ui.tsx` imports `heroContent` from `Hero.logic.ts`; `Header.ui.tsx` uses `SCROLL_THRESHOLD` from `Header.logic.ts`.

## UI file size
- Keep **UI files under 150 lines**. If a component grows, split into smaller components or move more content into logic/constants.

## Global reuse
- **Project name, tagline, and branding copy:** Put in `lib/brand.ts`. Change the app name or tagline there; it updates header, footer, meta, hero, and how-it-works. Logo mark and styles: use `components/ui/Logo` and the `logo` tokens from `lib/design-system.ts`.
- **Links and nav:** Put in `lib/constants.ts` (e.g. `NAV_LINKS`, `LINKS`). `APP_NAME` and `TAGLINE` are re-exported from `lib/brand`.
- **Design tokens (colors, typography, buttons, spacing):** Put in `lib/design-system.ts` and use in both landing and dashboard.
- **Reusable components:** Put in `components/ui/` (e.g. `Button`, `Logo`).
- **Repeated link lists, copy, or config:** Prefer a single source (brand, constants, or a `.logic` file) and import where needed.
