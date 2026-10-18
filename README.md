# Thang Truong — Portfolio

Personal site for Thang Truong, a software developer (frontend, backend, full-stack and DevOps) based in Melbourne. Live at [thang-truong.blog](https://thang-truong.blog).

## Stack

- React 19 and TypeScript
- Tailwind CSS 3, with light and dark themes driven by CSS variables
- Vite 7
- React Router 7
- Web3Forms for the contact form (emails land in your Gmail)
- Self-hosted Inter (variable font)

## Pages

| Route | Content |
|---|---|
| `/` | Positioning, featured projects, skills snapshot, intro video |
| `/about` | Story, quick facts, education and achievements |
| `/projects` | Case studies, filterable by type and technology |
| `/projects/:id` | Project detail |
| `/skills` | Skills grouped by category, with cloud providers split out |
| `/experience` | Software and other experience |
| `/contact` | Validated contact form and direct links |
| `/education` | Redirects to `/about#education` |

Content lives in `src/data/` (`profile.ts`, `pages.ts`, `projects.ts`, `skills.ts`, `experience.ts`, `education.ts`, `about.ts`).

## Requirements

- Node.js 24.22.0 or any 24.x release (see `.nvmrc`)
- npm

## Setup

```bash
git clone https://github.com/thangtruong1808/thangtruong-blog.git
cd thangtruong-blog
npm install
npm run dev
```

The dev server runs at `http://localhost:5173`.

The contact form and profile links read a local `.env`. Copy `.env.example` to `.env`, then fill in values.

For the contact form (Web3Forms free plan is **client-side only**):

1. Create an access key at [web3forms.com](https://web3forms.com) with the Gmail address that should receive messages.
2. In local `.env`, set:
   - `VITE_WEB3FORMS_ACCESS_KEY`
   - `VITE_WEB3FORMS_FROM_NAME=thang-truong.blog`
3. Restart `npm run dev`.
4. On Vercel → Project Settings → Environment Variables:
   - Add `VITE_WEB3FORMS_ACCESS_KEY` and `VITE_WEB3FORMS_FROM_NAME`.
   - Set the type to **Config** (not Sensitive/Encrypted). Vite needs the `VITE_` prefix, and Web3Forms documents that the access key may be public in the browser.
   - Redeploy after saving.

```
VITE_AUTHOR_EMAIL=
VITE_PHONE=
VITE_GITHUB_URL=
VITE_LINKEDIN_URL=
VITE_FEATURED_VIDEO_URL=
VITE_WEB3FORMS_ACCESS_KEY=
VITE_WEB3FORMS_FROM_NAME=thang-truong.blog
```

Project live URLs, GitHub links and images use `VITE_*` variables read in `src/data/projects.ts`.

To show the Download CV button, add the PDF at `public/cv/Thang-Truong-CV.pdf` and rebuild.

## Scripts

| Command | What it does |
|---|---|
| `npm run dev` | Start the dev server |
| `npm run build` | Type-check and build to `dist/` |
| `npm run preview` | Serve the production build |
| `npm run lint` | Run ESLint |
| `npm run audit:lighthouse` | Lighthouse on every route: `npm run audit:lighthouse -- <baseUrl> <outDir>` |

## Deployment

Deployed on Vercel. `vercel.json` rewrites all routes to `index.html` and sets cache and security headers. The `engines` field in `package.json` selects Node 24.x.

## Contact

- Site: [thang-truong.blog/contact](https://thang-truong.blog/contact)
- GitHub: [thangtruong1808](https://github.com/thangtruong1808)
- LinkedIn: [thang-truong-00b245200](https://www.linkedin.com/in/thang-truong-00b245200/)
