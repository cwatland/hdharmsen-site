# Header Navigation Spec

## Overview
Create a site header with navigation that appears on all pages, featuring the HDHarmsen brand and main navigation links.

## Requirements

### Header Structure
- **Brand**: "HDHarmsen" text in top-left, links to home (`/`)
- **Navigation**: Horizontal nav with main site sections
- **Layout**: Fixed/sticky header that appears on all pages

### Navigation Links
- **News** → `/` (home page)
- **Shows** → `/shows`
- **Music** → `/music` 
- **Contact** → `/contact`

### Technical Requirements
- TypeScript strict mode (no `any` types)
- Tailwind CSS for styling
- Responsive design (mobile-first)
- Accessibility compliant

### Accessibility Standards
- `<nav aria-label="Main">` for main navigation
- Visible focus states for keyboard navigation
- Active/current page indication
- Semantic HTML structure
- Sufficient color contrast

### Implementation Tasks
1. Create header component (`src/components/Header.tsx`)
2. Add header to global layout (`src/app/layout.tsx`)
3. Create placeholder pages for routes:
   - `/shows` → `src/app/shows/page.tsx`
   - `/music` → `src/app/music/page.tsx`
   - `/contact` → `src/app/contact/page.tsx`
4. Style with Tailwind (responsive, accessible)

### Design Notes
- Clean, minimal design
- Mobile hamburger menu (future enhancement)
- Consistent with overall site branding
- Fast loading and performant

## Acceptance Criteria
- [ ] Header appears on all pages
- [ ] All navigation links work correctly
- [ ] Keyboard navigation functions properly
- [ ] Focus states are clearly visible
- [ ] Active page is indicated
- [ ] Mobile responsive
- [ ] TypeScript strict compliance
- [ ] No accessibility violations
