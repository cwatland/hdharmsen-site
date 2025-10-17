# Product Roadmap

1. [ ] **Sanity Schemas & Content Model** — Define and implement Sanity schemas for `news`, `show`, `photo`, and `settings` collections, ensuring fields are validated, normalized, and support GROQ querying. `[M]`

2. [ ] **Sanity Studio Integration** — Embed Sanity Studio at `/studio` within the Next.js application, configure roles for Editors and Admins, and verify Studio authentication and access permissions. `[S]`

3. [ ] **News/Blog Section** — Build the frontend routes and GROQ queries for listing and rendering news posts, including title, date, and body with rich text rendering via `@portabletext/react`. `[M]`

4. [ ] **Shows & Events Module** — Create the events listing page with past/upcoming separation, date sorting, and responsive layout; connect to Sanity data and normalize using `date-fns`. `[M]`

5. [ ] **Music & Projects Page** — Implement a dynamic page listing HD Harmsen’s bands and musical projects with embedded media players (Spotify, Bandcamp, or local embeds). `[L]`

6. [ ] **Navigation & Global Layout** — Establish global site structure: header, navigation, footer, and shared metadata; integrate responsive images with `next/image` and Tailwind CSS. `[S]`

7. [ ] **Revalidation Webhook System** — Implement `/api/revalidate` route with secret validation (`REVALIDATE_SECRET`), configure Sanity webhooks for create/update/delete to trigger ISR updates. `[M]`

8. [ ] **SEO & Metadata Configuration** — Add structured metadata for pages (OpenGraph, Twitter cards), and configure `next/head` or `metadata` in App Router. `[S]`

9. [ ] **Performance & Accessibility Review** — Optimize build output for Core Web Vitals, run accessibility audits, and ensure all content components meet semantic and WCAG standards. `[S]`

10. [ ] **Content Preview Workflow** — Add draft preview mode using `SANITY_API_READ_TOKEN`, ensuring editors can preview unpublished content securely. `[M]`

11. [ ] **Deployment & Monitoring Setup** — Deploy to Vercel with production environment variables, configure Cloudflare DNS, and validate webhook triggers post-deployment. `[S]`

12. [ ] **Optional Enhancements (Phase 2)** — Introduce shadcn/ui components for a consistent design system and lucide-react icons for cohesive visuals. `[S]`

> Notes
> - Tasks are ordered by dependency and logical build progression.
> - The roadmap builds incrementally from core content foundation → user-facing features → automation & polish.
> - Each task represents a fully functional, testable slice of the product.
