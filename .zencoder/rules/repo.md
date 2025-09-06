# UENP SMP – Repository Overview

## 1) Overview

Simple landing page for the UENP SMP university Minecraft server, served by a Node.js Express server.

- **Package name**: `uenp-smp-site`
- **Description**: Landing page for the UENP SMP (Minecraft) server
- **Stack**: Node.js (ESM), Express, static HTML/CSS/JS
- **Entry point**: `server.js`
- **Public folder**: `public/` (HTML, CSS, JS, images)
- **License**: MIT
- **Author**: j0aod3v

## 2) Project Structure

```
UENPSMPserver/
├─ package.json
├─ package-lock.json
├─ server.js
├─ public/
│  ├─ index.html
│  └─ assets/
│     ├─ styles.css
│     └─ main.js
└─ views/               # (currently empty)
```

## 3) Server Details (Express)

File: `server.js` (ESM)

- Serves static files from `public/`.
- Basic security headers:
  - `X-Content-Type-Options: nosniff`
  - `X-Frame-Options: SAMEORIGIN`
  - `X-XSS-Protection: 1; mode=block`
- Routes:
  - `GET /` → sends `public/index.html`
  - `GET /health` → `{ ok: true }`
- Port: `process.env.PORT || 3000`

## 4) Frontend (public/)

- `public/index.html`: single page with Hero, Features, How to Play, Join, About and Footer sections.
- `public/assets/styles.css`: dark theme, Poppins typography, responsive grid, buttons and cards.
- `public/assets/main.js`:
  - Updates the footer year automatically.
  - Smooth scroll for internal anchors.
  - `copyToClipboard(text)` with visual feedback (✅) and legacy fallback.

## 5) Requirements

- Node.js 18+ recommended (ESM by default and better support).
- NPM (or compatible) for scripts.

## 6) Setup and Run

1. Install dependencies:

```powershell
npm install
```

2. Development with auto-reload:

```powershell
npm run dev
```

- Starts `nodemon server.js`.

3. Production/local without reload:

```powershell
npm start
```

- Runs `node server.js` on port 3000 (or `PORT`).

Access: `http://localhost:3000`

## 7) Configuration

- Supported env vars:
  - `PORT` (optional) – HTTP port (default: 3000)

Example (PowerShell):

```powershell
$env:PORT=8080; npm start
```

## 8) Scripts (package.json)

- `start`: start the Express server.
- `dev`: start with `nodemon` for development reload.

## 9) Deployment (summary)

- Containerization (optional): build Node 18+ image, copy `public/`, `server.js`, `package*.json`, run `npm ci`, expose `PORT`, run `node server.js`.
- Common PaaS (Railway/Render/Heroku-like):
  - Set `PORT` via environment (usually auto-set).
  - Start command: `npm start`.
- A reverse proxy (Nginx/Caddy) can serve as frontend and proxy to `localhost:PORT`.

## 10) Health and Monitoring Endpoints

- `GET /health` → `{ ok: true }` for uptime checks.

## 11) Notes

- `views/` directory exists but is not currently used (pure static rendering from `public/`).
- Project uses ESM (`"type": "module"`), so avoid `require`/`module.exports`; use `import`/`export` instead.

## 12) License

MIT – see `package.json`.

## 13) Contact/Credit

- Author: **j0aod3v** – https://github.com/j0aod3v
