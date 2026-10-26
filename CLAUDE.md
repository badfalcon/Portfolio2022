# CLAUDE.md — AI Assistant Guide for Portfolio2022

This file provides context for AI assistants (like Claude) working in this repository.

## Project Overview

**Portfolio2022** is a personal portfolio website for Jun Masuda (badfalcon), built with React 18, TypeScript, and Vite. It is live at https://badfalcon.net/.

The site is bilingual (English/Japanese), mobile-responsive, and features a contact form powered by EmailJS.

---

## Tech Stack

| Category | Technology |
|---|---|
| Framework | React 18.2.0 |
| Language | TypeScript 5.7.2 |
| Build tool | Vite 6 |
| Runtime (build) | Node.js 22.23.4, pinned via `.node-version` |
| UI library | Material-UI (MUI) 5 + Emotion |
| Routing | react-router-dom 6 |
| i18n | i18next 21 + react-i18next |
| Email | @emailjs/browser 4 |
| Hosting | Cloudflare Pages (build system v3) |
| Testing | Jest + @testing-library/react (Jest is not installed yet — see Testing) |

---

## Directory Structure

```
Portfolio2022/
├── src/
│   ├── Components/       # Shared/reusable UI components
│   │   ├── Menu.tsx      # Desktop tab navigation (hidden on xs)
│   │   ├── MiniMenu.tsx  # Mobile dropdown navigation (xs only)
│   │   ├── Language.tsx  # EN/JA language toggle
│   │   └── Footer.tsx    # Footer copyright
│   ├── Pages/            # Route-level page components
│   │   ├── Home.tsx      # Landing page
│   │   ├── About.tsx     # Profile/bio page
│   │   ├── Works.tsx     # Portfolio grid with modal view
│   │   ├── Contact.tsx   # EmailJS contact form
│   │   ├── Privacy.tsx   # Privacy policy
│   │   └── Page404.tsx   # 404 catch-all
│   ├── Data/
│   │   └── Works.json    # Portfolio project data
│   ├── App.tsx           # Root component with BrowserRouter + routes
│   ├── i18n.tsx          # i18next setup (language detection, translations)
│   ├── index.tsx         # ReactDOM.createRoot entry point
│   ├── index.css         # Global styles
│   └── App.css           # App-level styles (white-space: pre-line)
├── public/               # Static assets served as-is
│   ├── images/           # Project screenshots (referenced in Works.json)
│   ├── _headers          # Security headers incl. CSP (read by Cloudflare Pages)
│   ├── sitemap.xml
│   └── manifest.json
├── vite.config.ts        # Vite: dev port 3000, build output → build/
├── tsconfig.json         # Strict TypeScript, target ES2022
├── .node-version         # Node.js version for Cloudflare Pages builds
├── .env.sample           # Required environment variables template
└── package.json
```

---

## Routes

| Path | Component | Description |
|---|---|---|
| `/` | `Home.tsx` | Landing page with greeting |
| `/about` | `About.tsx` | Personal profile and bio |
| `/works` | `Works.tsx` | Portfolio project grid |
| `/contact` | `Contact.tsx` | EmailJS-powered contact form |
| `/privacy` | `Privacy.tsx` | Privacy policy |
| `/*` | `Page404.tsx` | 404 catch-all |

---

## Development Workflow

### Setup

```bash
npm install
cp .env.sample .env      # Fill in EmailJS credentials
npm start                # Dev server at http://localhost:3000
```

### Available Scripts

```bash
npm start      # Vite dev server (hot reload, auto-opens browser)
npm run build  # Production build → build/
npm run serve  # Preview the production build locally
npm test       # Jest test runner
```

### Environment Variables

The contact form requires these variables in a `.env` file (never commit `.env`):

```
VITE_EMAILJS_SERVICE_ID=
VITE_EMAILJS_TEMPLATE_ID=
VITE_EMAILJS_PUBLIC_KEY=
```

All Vite env vars must be prefixed with `VITE_` and accessed via `import.meta.env.VITE_*`. Variables without the prefix (e.g. the old `REACT_APP_*` names) are silently `undefined`.

Vite inlines these values into the JavaScript bundle at build time, so they are public (EmailJS is designed for this). For deployed builds they come from the Cloudflare Pages project's environment variables, set for both Production and Preview; after changing them, trigger a new build for the change to take effect.

---

## Key Conventions

### TypeScript

- Strict mode is enabled — no unused locals or parameters allowed.
- Target: ES2022. Module resolution: `bundler`.
- All new files must be `.tsx` (for JSX) or `.ts` (for logic/data).

### Styling

- Use MUI's `sx` prop for component-level styles (no separate CSS files per component).
- Global styles live in `src/index.css`; app-level overrides in `src/App.css`.
- Responsive breakpoints follow MUI defaults: `xs` (mobile), `sm` (tablet), `md`+ (desktop).
- `Menu.tsx` is desktop-only (`display: { xs: 'none', sm: 'block' }`); `MiniMenu.tsx` is mobile-only.

### Internationalization

- All user-facing strings must use the `useTranslation` hook — no hardcoded UI text.
- Translations are defined inline in `src/i18n.tsx` under `en` and `ja` keys.
- Language detection is automatic (browser setting), with manual toggle via `Language.tsx`.
- Fallback language: `en`.

### Component Structure

- **Pages** (`src/Pages/`) are route-level components — one per route, named after the route.
- **Components** (`src/Components/`) are shared UI pieces used across multiple pages.
- No default prop patterns; use TypeScript interfaces for all props.

### Data

- Portfolio project data is managed in `src/Data/Works.json`.
- The `src` field in each entry uses `##PUBLIC##` as a placeholder for the public base URL, replaced at runtime using `import.meta.env.BASE_URL`.
- To add a new project: add an entry to `Works.json` and place the screenshot in `public/images/`.

### Routing

- Uses `react-router-dom` v6 (`<Routes>` / `<Route>` API).
- All navigation should use `<Link>` or `useNavigate` — never raw `<a href>` for internal links.
- Deep links such as `/works` work because Cloudflare Pages treats a project without a top-level `404.html` as a single-page app and serves `index.html` for any path. **Do not add `public/404.html`** — it disables this fallback and direct visits to routes would return 404. Unknown paths are handled by `Page404.tsx` instead.
- No `_redirects` file is needed. Cloudflare Pages ignores `/* /index.html 200` as an infinite loop.

### Contact Form (EmailJS)

- `Contact.tsx` calls `emailjs.sendForm` with SDK options: `blockHeadless: true` rejects automated browsers, and `limitRate` (`id: 'contact'`, 30 s) allows one attempt per browser, recorded in `localStorage` under `contact`.
- The throttle starts at the attempt, so failures are shown to the user: status 429 → `contact.message_rate_limited`, anything else → `contact.message_error`.
- The account is on EmailJS's free plan, so the dashboard's domain allowlist is not available; these client-side measures are the abuse protection. Keep "Allow EmailJS API for non-browser applications" off.
- A 412 response with `Gmail_API: Invalid grant` means the Gmail connection in EmailJS expired; reconnect it under Email Services (no rebuild needed).

### Security Headers

- `public/_headers` sets HSTS, X-Frame-Options, Permissions-Policy and a Content-Security-Policy for every path.
- When adding an external resource (image host, script, API), add its origin to the matching CSP directive (`img-src`, `script-src`, `connect-src`), then check the browser console on the preview deployment for CSP violations.
- `style-src 'unsafe-inline'` is required because MUI/Emotion injects `<style>` tags at runtime.

---

## Deployment

- **Platform:** Cloudflare Pages, project `website-2022`, connected to this GitHub repository
- **Build system:** v3, with Node.js pinned by `.node-version`
- **Build command:** `npm run build`
- **Publish directory:** `build/`
- Pushes to `master` deploy to production automatically. Preview deployments are built only for branches matching `claude/*` (Settings → Builds & deployments → Branch control), and each one gets a `*.website-2022-apb.pages.dev` URL that is posted as a check on the pull request.
- To roll back, open Deployments and choose "Rollback to this deployment" on an earlier production deployment.
- Update `public/sitemap.xml` manually when adding new routes or significant content.

---

## Git Conventions

- Branch naming follows the pattern `claude/<feature-description>-<id>` for AI-assisted work.
- Commit messages use conventional commit style: `feat:`, `fix:`, `style:`, `remove:`, `chore:`.
- The main production branch is `master`.
- Keep LF line endings. The repository is often checked out on Windows; do not commit files with CRLF (`package-lock.json` was once committed with CRLF by mistake).

---

## Adding New Portfolio Projects

1. Add an entry to `src/Data/Works.json`:
   ```json
   {
     "key": <next_integer>,
     "title": "Project Name",
     "tags": ["Tag1", "Tag2"],
     "src": "##PUBLIC##/images/your-screenshot.png",
     "url": "https://project-url.com"
   }
   ```
2. Place the screenshot (recommended: consistent aspect ratio) in `public/images/`.
3. Add i18n strings to both `en` and `ja` sections in `src/i18n.tsx` if the project needs translated descriptions.
4. Update `public/sitemap.xml` if necessary.

---

## Testing

- Test files live alongside source files (e.g., `src/App.test.js`), with setup in `src/setupTests.tsx`.
- `npm test` runs `jest`, but Jest itself is not a dependency yet, so the command currently fails with `jest: not found`. Until a test runner is set up, verify changes with `npx tsc --noEmit`, `npm run build` and the preview deployment.
