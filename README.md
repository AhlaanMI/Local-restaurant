# Cedar Grove Kitchen – Static Landing Page

Mobile-first, dependency-free restaurant landing page using semantic HTML, CSS variables, and a light JS slider.

## Project Structure

- index.html — page markup and sections (Hero, About, Menu, Gallery slider, Contact, Footer)
- assets/
  - css/
    - variables.css — theme tokens (colors, spacing, typography)
    - base.css — reset, typography, global utilities
    - layout.css — section layouts, grids, slider sizing
    - components.css — buttons, cards, pills, links
  - js/
    - main.js — smooth scroll, year stamp, gallery slider logic
  - images/
    - gallery/ — place gallery-1.jpg … gallery-6.jpg (or update paths in HTML)

## Quick Start

1. Drop your images into `assets/images/gallery/`.
2. Open `index.html` in a browser or serve locally (e.g., `npx serve` from the `lr` directory).
3. Edit copy as needed in `index.html` (keep structure for best responsiveness).

## Key Features

- Mobile-first layout with clamp-based typography and fluid spacing
- Responsive menu grid and contact cards using CSS Grid
- Simple, reliable gallery slider (auto + manual prev/next, pauses on hover/focus)
- Warm restaurant palette driven by CSS variables for easy theming
- No build tooling or external dependencies

## Customization Guide

- Colors, radii, spacing, fonts: [assets/css/variables.css](assets/css/variables.css)
- Global spacing/typography: [assets/css/base.css](assets/css/base.css)
- Section layouts and slider sizing: [assets/css/layout.css](assets/css/layout.css)
- Buttons/cards/utilities: [assets/css/components.css](assets/css/components.css)
- Slider behavior and smooth scroll: [assets/js/main.js](assets/js/main.js)

## Accessibility & Responsiveness

- Semantic landmarks (`header`, `nav`, `main`, `section`, `footer`)
- Focus-visible outlines on interactive elements
- Images use `alt` text; hero and gallery rely on `object-fit: cover`
- Touch-friendly controls (min 44px buttons) and wrapped nav on small screens

## Notes for Assets

- Ensure gallery filenames match the HTML (`gallery-1.jpg` … `gallery-6.jpg`).
- Compress images before adding to keep load times low.
