# Tech Stack — HD Harmsen Website

> **Precedence:** This document reflects the tech stack you specified in this project’s planning. Where helpful, it is aligned to your global standards and preferences (coding-style, commenting, conventions, error-handling, tech-stack, validation).

---

## Application & Framework

- **Framework:** Next.js **15** (App Router)
    - **Rendering:** SSR / ISR (Incremental Static Regeneration)
    - **Routing:** File-based routing; embedded Studio at `/studio`
    - **Images:** `next/image` for responsive, optimized images
    - **Build:** `next build` (**no** `--turbopack` in production)

- **Language:** TypeScript (strict)
    - Enforced: no `any` (via ESLint rule)
    - Typed data fetching (typed GROQ results)

- **Styling:** Tailwind CSS (utility-first)
    - Keep styles simple and consistent with conventions

---

## Content Management & Data

- **CMS:** Sanity **v3** (embedded Studio at `/studio`)
- **Sanity Packages:**
    - `@sanity/client` — server-side querying
    - `next-sanity` — Studio embedding & helpers
    - `@sanity/image-url` — image URL building (cropping, sizing)
    - `@portabletext/react` — rich text rendering for `news.body`
- **Schemas (initial):**
    - `news`, `show`, `photo`, `settings` (singleton)
- **Queries:** GROQ
    - Normalize date/datetime fields (e.g., `coalesce(dateTime(...))`)

- **CORS:** allow credentials for:
    - `https://hdharmsen.com`
    - `https://www.hdharmsen.com`
    - `http://localhost:3000`

---

## Data Fetching, Caching & Revalidation

- **ISR:** Incremental Static Regeneration
- **Revalidation Webhook:**
    - API route: `/api/revalidate` using `revalidatePath`
    - Triggered by Sanity Webhooks on **create/update/delete** for `news`, `show`, `photo`
    - Secret validation via `REVALIDATE_SECRET`

---

## Deployment, Infrastructure & DNS

- **Hosting/Runtime:** Vercel (production, serverless functions)
- **DNS (Cloudflare, DNS-only):**
    - `A @ → 76.76.21.21`
    - `CNAME www → cname.vercel-dns.com`
- **Build & Runtime Commands:**
    - `dev: next dev`
    - `build: next build`
    - `start: next start`
    - `studio:dev: next dev` (embedded) or `sanity dev` (if kept separate)

---

## Authentication & Access

- **Sanity Studio Auth:** managed via Sanity Manage → Users
    - Roles:
        - **Admin:** you
        - **Editor:** bandmates (content-only)
- **Site:** No separate login (unless a future members area is introduced)

---

## Environment Variables

- `NEXT_PUBLIC_SANITY_PROJECT_ID`
- `NEXT_PUBLIC_SANITY_DATASET`
- `NEXT_PUBLIC_SANITY_API_VERSION` (e.g., `2025-01-01`)
- `REVALIDATE_SECRET`
- `(optional) SANITY_API_READ_TOKEN` — for draft preview mode

---

## Validation, Dates & Utilities

- **Dates:** `date-fns` for formatting and timezone-safe comparisons
- **Validation (optional):** `zod` for env/config & external data shapes
- **Conventions & Error Handling:** follow org standards in
    - `@agent-os/standards/global/coding-style.md`
    - `@agent-os/standards/global/commenting.md`
    - `@agent-os/standards/global/conventions.md`
    - `@agent-os/standards/global/error-handling.md`
    - `@agent-os/standards/global/tech-stack.md`
    - `@agent-os/standards/global/validation.md`

---

## Linting, Formatting & Testing

- **ESLint:** Next.js config + TypeScript rules
    - `@typescript-eslint/no-explicit-any: error`
- **Formatting:** Prettier
- **Testing (optional, as app grows):**
    - **Unit:** Vitest
    - **E2E:** Playwright

---

## UI Components & Content Rendering

- **Rich Text:** `@portabletext/react`
- **Optional UI Kit:** `shadcn/ui` for consistent primitives
- **Icons (optional):** `lucide-react`
- **Images:** `next/image` and Sanity image pipeline (`@sanity/image-url`)

---

## Debugging & DX Tips

- Add `export const dynamic = "force-dynamic"` temporarily on pages when debugging fresh data.
- Use typed GROQ utilities to keep data contracts strict across fetch → render.

---
