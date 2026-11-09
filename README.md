# Frank Ponce · Portfolio

Personal portfolio of **Frank Ponce**, a data science master's student (Erasmus Mundus EDISS, Åbo Akademi University) focused on AI, business intelligence and agent evaluation.

**🔗 Live site: [frankponce.dev](https://frankponce.dev)**

## What's inside

| Project | What it shows |
| --- | --- |
| **Wayfair · AI Agent Engineering for BI** | Four n8n AI agents (trend discovery, competitor monitoring, content strategy, dashboard builder) with their live workflow canvases, plus the interactive Area Rug category-intelligence dashboard they produce |
| **Pfizer · AI Document Insights & Data Extraction** | OCR + LLM + RAG prototyping on enterprise PDF documents (in progress) |
| **CadetX · Competitor Demand Prediction** | NLP and forecasting on job-posting data, built by a four-person data science team (in progress) |
| **Data Analyst Portfolio** | Embedded Tableau (British Airways reviews) and Power BI (Cyclistic bike-share) dashboards |
| **Vista Trade** | React + TypeScript stock-tracking app with real-time prices |
| **Post-Disaster Road Restoration with RL** | Research paper published in *Reliability Engineering & System Safety* (Elsevier) |

Each project has its own page with an overview, a step-by-step breakdown and the real deliverables embedded: dashboards, reports, n8n workflows and demo videos.

## Built with

- **[Next.js](https://nextjs.org)** (App Router, static export) + **React 19** + **TypeScript**
- **[Tailwind CSS 4](https://tailwindcss.com)**
- **[n8n-demo](https://www.npmjs.com/package/@n8n_io/n8n-demo-component)** web component for read-only workflow canvases
- Deployed to **GitHub Pages** by a GitHub Actions workflow on every push to `main`

## Run it locally

Needs [Node.js](https://nodejs.org) 20.9 or newer.

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # static site in ./out
```

## Editing content

Almost everything lives in **`src/data/portfolio.ts`**:

- `profile`: headline, bio, contact links, experience, education, tech stack, skills
- `projects`: each project card and its `/work/<slug>` page

Embeds are picked automatically from the link you give an `outcome`:

| Link type | Shows as |
| --- | --- |
| Google Docs / Slides / Sheets / Drive, Loom | Embedded preview |
| Tableau Public, Power BI "publish to web" | Interactive dashboard |
| `/embeds/*.html` (a file in `public/embeds`) | Self-hosted interactive page |
| `image: "/images/..."` on the outcome | Static thumbnail (e.g. a journal cover) |
| `workflow: "/workflows/*.json"` on a breakdown step | n8n workflow canvas |

Before publishing an n8n export, strip credentials and any API keys pasted directly into node parameters.

Layout is in `src/components/`; colors and fonts are in `src/app/globals.css`.

## History

This repo previously held my original HTML/CSS portfolio. It's still in the git history, just before the Next.js rebuild commit.
