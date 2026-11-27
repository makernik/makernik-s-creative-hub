# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

[Inferred from the brief; the confirmation question went unanswered and the follow-up said to build.]

Everyone who lands here: employers and recruiters, clients, people who use his apps, the maker community, and Nik himself using the site as an archive. The homepage has one job that outranks the rest: get a visitor to try an app, specifically MazeMaker.

## Product Purpose

A static personal hub for Nik (makernik) at https://hello.makernik.com. It points people at live apps, keeps a record of other experiments and physical builds, tells a short maker story, and offers a way to get in touch. Success is a visitor opening MazeMaker.

## Positioning

The site is the bench where the live app is the thing you can pick up. Neighboring portfolios can list projects; this homepage’s distinct job is to start MazeMaker, a printable-maze tool Nik actually ships.

## Operating Context

Visitors arrive from the public web, often from search, a social profile, or a direct link, and decide in one screen whether to open an app. Nik edits content in the repo and ships by pushing `main`, which GitHub Pages builds. There is no account, no CMS, and no server.

## Capabilities and Constraints

Confirmed by the repo and the brief:

- Vite, React, TypeScript, Tailwind, shadcn. Static build: `npm ci && npm run build`. Deploy is the existing GitHub Pages workflow on `main`. Keep `CNAME` (`hello.makernik.com`) and the SPA `404.html` routing.
- No backend. Contact stays a `mailto:` link.
- No blog and no resume section.
- Do not invent projects, links, or descriptions that are not already in this repo, except MazeMaker, which the brief explicitly adds from https://github.com/makernik/MazeMaker.
- MazeMaker live URL, from that repo’s README: https://maze.makernik.com. Repo description, which matches the brief: “Make and Print mazes at home!”
- Other apps already in `src/data/projects.ts`: Hidelog only (`https://hidelog.lovable.app`). Jargon Translate is not in this repo, so it is not listed.
- Contact method already on the site: mailto:makernik27@gmail.com.
- Social links in `src/data/socialLinks.ts`: GitHub https://github.com/makernik and LinkedIn https://www.linkedin.com/in/nikchaphalkar. Nik does not have an X account. Do not add an X link or a `twitter:site` tag. Keep `twitter:card` and `twitter:image`.
- Open Graph and Twitter images stay on the existing asset: `https://lovable.dev/opengraph-image-p98pqg.png`.
- `npm run lint` must stay clean. Responsive, with text contrast at least 4.5:1, alt text, and visible keyboard focus.
- There are no physical-build photographs in the repo. The gallery ships with an editable data file and obvious placeholders until Nik adds photos.

## Brand Commitments

Name: makernik. Existing voice, reused rather than rewritten: he builds from code to circuits and from pixels to prototypes; the workshop is both a terminal and a workbench; he tends bonsai.

[Brief-pinned, recorded without expansion.] Keep the cream, charcoal, and copper palette and the Space Grotesk and Inter faces. The feel he asked for is a hands-on workshop: subtle graph paper or workbench texture, parts-bin labels, and project cards that read like build logs. Tasteful, not kitschy.

## Evidence on Hand

- `src/data/projects.ts` and `PROJECTS_INTAKE.md`: Hidelog only. Its image is `public/placeholder.svg`, not a screenshot.
- About, contact, and hero copy in `src/components/sections/`.
- `src/data/skills.ts`: Digital Craft, Physical Making, Creative Problem Solving.
- `public/images/` has directory notes only. `public/images/projects/IMAGE_SETUP.md` names sample projects (smart-home dashboard, mechanical keyboard, and others) that are not in `projects.ts` and are not treated as real work.
- MazeMaker README and GitHub description, read from https://github.com/makernik/MazeMaker. No screenshot is stored in this repo.
- No testimonials, clients, or pricing.

## Product Principles

- The first screen earns a click into MazeMaker.
- Only real projects, real links, and real contact methods appear as facts.
- Missing photographs stay visibly missing instead of being replaced with invented work.
- The site stays static, fast, and readable.
- The same pages also work as Nik’s own archive.

## Accessibility & Inclusion

The brief requires good contrast, alt text, and keyboard focus. No other product-specific access need was stated.
