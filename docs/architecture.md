# Enterprise Architecture

## App route structure
- App root for global layout and shared providers
- Route group `(marketing)` for public-facing experiences
- Future route groups can be added for admin, dashboard, or service portals without affecting marketing routes

## Shared layouts
- Global shell in `app/layout.tsx`
- Marketing layout in `app/(marketing)/layout.tsx`
- Section and container wrappers in `components/layout`

## Core utilities
- SEO helpers in `lib/seo.ts`
- Metadata helpers in `lib/metadata.ts`
- Animation presets in `lib/animations.ts`
- Responsive helpers in `lib/responsive.ts`

## Design system
- Theme tokens in `theme/tokens.ts`
- Global theme variables in `app/globals.css`
- Reusable UI primitives under `components/ui`
- Section-level layout wrappers under `components/layout`

## Public assets
- `public/assets/brand` for logos and brand media
- `public/assets/illustrations` for custom visuals
- `public/assets/stock` for photography or editorial imagery
