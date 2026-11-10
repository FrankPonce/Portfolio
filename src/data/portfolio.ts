/**
 * ALL portfolio content lives here. Edit this file to change text, add projects, etc.
 *
 * Images: put files in /public/images and reference them as "/images/your-file.jpg".
 * Remote URLs (https://...) also work.
 */

export type Outcome = {
  /** Link to a Google Doc / Slides / Drive file / Loom video / Tableau Public / Power BI "publish to web" / any URL. Those get an embedded preview. */
  url: string;
  /** Optional label shown next to the "Access" button. Auto-detected for Google/Loom links. */
  label?: string;
  /** Show the preview full-width and taller (good for dashboards). */
  wide?: boolean;
  /** Static thumbnail shown instead of a live preview (e.g. a journal cover). */
  image?: string;
  /** Embed this exact URL as a live preview (for sites that allow framing, e.g. a deployed web app). */
  embed?: boolean;
};

export type BreakdownItem = {
  title: string;
  /** Short line shown when collapsed. */
  summary: string;
  /** Longer text shown when expanded. */
  details?: string;
  /** Deliverable link shown (with preview) when expanded. */
  outcome?: Outcome;
  /** Image shown when expanded (used if there is no outcome). */
  image?: string;
  /** Exported n8n workflow JSON in /public (e.g. "/workflows/my-agent.json"), shown as an interactive canvas.
   *  When set, it replaces the outcome's preview; the outcome link stays as the "Access" button. */
  workflow?: string;
};

export type Project = {
  /** URL of the project page: /work/<slug> */
  slug: string;
  title: string;
  description: string;
  company?: { name: string; logo?: string };
  /** Display date, e.g. "Aug 2026". */
  date?: string;
  verified?: boolean;
  inProgress?: boolean;
  /** Award or placement, shown on the card and the project page (e.g. "Winner, Turku Energia challenge"). */
  award?: string;
  tags: string[];
  heroImage?: string;
  /** Card background on the home page, when the hero has text that would clash with the card's. */
  cardImage?: string;
  /** Full-width diagram shown under the results, e.g. a method flowchart. */
  figure?: { src: string; alt: string; title: string; caption?: string };
  /** Overview text on the project page (falls back to description). */
  overview?: string;
  /** "What I've accomplished" text. */
  accomplishment?: string;
  /** Big deliverable card shown next to "What I've accomplished". */
  featuredOutcome?: Outcome;
  certificateUrl?: string;
  /** "Project breakdown" accordion. */
  breakdown?: BreakdownItem[];
  /** Full-width interactive dashboards (Tableau Public / Power BI links), shown in their own section. */
  dashboards?: Dashboard[];
  /** Model-vs-baseline comparison, drawn as paired bars. */
  results?: Results;
};

export type Results = {
  /** One-sentence takeaway shown as the section heading. */
  headline: string;
  /** Short note under the bars: what was scored and how. */
  note?: string;
  baselineLabel: string;
  modelLabel: string;
  rows: {
    metric: string;
    detail?: string;
    baseline: number;
    model: number;
    decimals?: number;
    /** Default "lower" (errors, losses). Use "higher" for accuracy-style metrics. */
    better?: "lower" | "higher";
    /** Default "relative" (% change); "points" shows the raw difference, e.g. accuracy in percentage points. */
    changeAs?: "relative" | "points";
  }[];
};

export type Dashboard = {
  title: string;
  description?: string;
  outcome: Outcome;
};

export const profile = {
  name: "Frank Ponce",
  role: "AI & Data Strategy",
  headline: "Using data and AI to drive smarter business strategy",
  intro:
    "Data science master's student (Erasmus Mundus EDISS) who builds AI agents, analytics and dashboards that turn raw data into business insight and strategic decisions.",
  bio: "I'm Frank, a data science master's student in the Erasmus Mundus EDISS programme at Åbo Akademi University in Finland, with a BS in Computer Science (Magna Cum Laude) from FIU. I want to help organizations use data and AI to make better strategic decisions: spotting market shifts earlier, understanding competitors, and rethinking how teams work with AI. So far I've won Turku Energia's forecasting challenge at Since AI 2026 (top 5 overall), built n8n AI agents that turned retail and competitor data into a live category-intelligence dashboard for Wayfair, evaluated conversational and multimodal AI models in English and Spanish at Invisible Technologies and Outlier, and published research on reinforcement learning for post-disaster road restoration. I care about AI that is accurate, explainable and tied to real business outcomes.",
  worksIntro:
    "Projects where data and AI meet business decisions: agents for market and competitor intelligence, document automation, BI dashboards and research, each with the real deliverables embedded so you can explore them right here.",

  /** Little pill above the headline. Set to undefined to hide it. */
  badge: { label: "🏆 Winner, Turku Energia challenge at Since AI 2026" } as
    | { label: string; logo?: string }
    | undefined,

  heroBackground: "/images/hero-bg.png",
  /** Transparent cut-out (made from home-hero.png) shown over the red brush strokes. */
  heroPortrait: "/images/hero-cutout.png",
  profilePicture: "/images/profile.png",

  primaryAction: { label: "View my work", href: "/#works" },
  secondaryAction: { label: "Message Me", href: "mailto:Frank.MediavillaPonce@abo.fi" },

  contact: {
    email: "Frank.MediavillaPonce@abo.fi",
    phone: "+3584044228",
    phoneDisplay: "+358 40 44228",
    linkedin: "https://linkedin.com/in/frank-mediavilla",
    github: "https://github.com/FrankPonce",
    location: "Turku, Finland",
  },

  /** One-page CV, generated from resumes/cv-general.html (not committed). */
  resumeUrl: "/cv.pdf",

  externships: [
    {
      title: "Pfizer: AI document intelligence for pharmaceutical PDFs",
      subtitle: "Externship via Extern · In progress",
      logo: "/images/logos/pfizer.png",
      description:
        "Prototyping an AI pipeline that turns scanned pharmaceutical vendor documents into structured, searchable data with OCR, LLMs and retrieval-augmented generation.",
    },
    {
      title: "Wayfair: AI agents for category intelligence",
      subtitle: "Externship via Extern · Completed Aug 2026",
      logo: "/images/logos/wayfair.png",
      description:
        "Built four n8n AI agents for area-rug trend and competitor intelligence across Amazon, Walmart and Wayfair, feeding a live category-intelligence dashboard.",
    },
  ] as { title: string; subtitle: string; logo?: string; description?: string }[],

  /** `logo` is optional; `description` shows under the title. */
  experience: [
    {
      title: "Data Scientist (Virtual Work Experience)",
      company: "CadetX",
      kind: "internship",
      dates: "In progress",
      logo: "/images/logos/cadetx.png",
      description:
        "Building a hiring-intelligence pipeline from Google, OpenAI, NVIDIA and Anthropic job postings, running all four Scrum roles solo. Six of twelve sprints done: compliant collectors, an NLP pipeline over 8,000+ postings, a 212-skill taxonomy, multi-year hiring trends and a competitor comparison, with demand forecasting next.",
    },
    {
      title: "AI Training Specialist",
      company: "Outlier",
      kind: "freelance",
      dates: "Jun 2026 - Nov 2026",
      logo: "/images/logos/outlier.svg",
      description:
        "Evaluated and refined conversational AI models by reviewing audio transcripts and text prompt-response pairs in English and Spanish. Assessed the accuracy, linguistic naturalness and contextual nuance of speech and text outputs against strict project rubrics, and checked cross-lingual consistency and factual correctness to improve LLM voice-and-text interactions.",
    },
    {
      title: "Multimodal Agent Evaluator",
      company: "Invisible Technologies",
      kind: "freelance",
      dates: "May 2026 - Aug 2026",
      logo: "/images/logos/invisible.png",
      description:
        "Evaluated conversational AI agents on comprehension, response quality, task completion and adherence to business rules. Audited JSON tool-call outputs to catch hallucinations, parameter errors and workflow failures, and produced labeled training data and feedback to make the models more reliable.",
    },
    {
      title: "Data Analyst Sprintern",
      company: "StartupFIU",
      kind: "internship",
      dates: "Jan 2024 - May 2024",
      logo: "/images/logos/startupfiu.png",
      description:
        "Analyzed and feature-engineered demographic and event-attendance data with Pandas and Excel, applied NLP models to text data, and presented insights on growing community engagement.",
    },
    {
      title: "Business Intelligence Intern",
      company: "CDR Companies",
      kind: "internship",
      dates: "Aug 2023 - Dec 2023",
      logo: "/images/logos/cdr.png",
      description:
        "Developed and tested features on the CDR Health Salesforce platform through Jira tickets, analyzed database objects and visualized them in Tableau, and built a dashboard component that made inserting records into the SQL database simpler.",
    },
  ] as {
    title: string;
    company: string;
    dates: string;
    /** Which Experience subsection it appears under. */
    kind: "freelance" | "internship";
    logo?: string;
    description?: string;
  }[],

  volunteering: [
    {
      title: "CS Teacher Volunteer",
      company: "Wesley Matthews Elementary School",
      dates: "Aug 2024 - Dec 2024",
      logo: "/images/logos/wesley-matthews.png",
      description:
        "Taught elementary students the fundamentals of programming through interactive Scratch projects, breaking technical ideas down into simple, hands-on lessons.",
    },
  ] as { title: string; company: string; dates: string; logo?: string; description?: string }[],

  education: [
    {
      school: "EDISS | Erasmus Mundus Joint Master Degree",
      degree: "Engineering of Data-intensive Intelligent Software Systems",
      year: "2028",
      logo: "/images/logos/ediss.png",
      description:
        "A two-year joint master's run by Åbo Akademi University (Finland), the University of the Balearic Islands (Spain), the University of L'Aquila (Italy) and Mälardalen University (Sweden).",
    },
    {
      school: "Åbo Akademi University | Turku, Finland",
      degree: "MS Data Science",
      year: "2028",
      logo: "/images/logos/abo-akademi.png",
    },
    {
      school: "Florida International University | Miami, United States of America",
      degree: "BS Computer Science",
      year: "2025",
      logo: "/images/logos/fiu.png",
      description: "Graduated Magna Cum Laude (GPA 3.75).",
    },
  ] as { school: string; degree: string; year: string; logo?: string; description?: string }[],

  /** Tech stack grid under the photo in "About me". Icons live in /public/images/tech. */
  techStack: [
    { name: "Python", icon: "/images/tech/python.svg" },
    { name: "SQL", icon: "/images/tech/sql.svg" },
    { name: "Pandas", icon: "/images/tech/pandas.svg" },
    { name: "Java", icon: "/images/tech/java.svg" },
    { name: "JavaScript", icon: "/images/tech/javascript.svg" },
    { name: "TypeScript", icon: "/images/tech/typescript.svg" },
    { name: "React", icon: "/images/tech/react.svg" },
    { name: "Node.js", icon: "/images/tech/nodejs.svg" },
    { name: "HTML", icon: "/images/tech/html.svg" },
    { name: "CSS", icon: "/images/tech/css.svg" },
    { name: "Flask", icon: "/images/tech/flask.svg" },
    { name: "Tableau", icon: "/images/tech/tableau.svg" },
    { name: "Power BI", icon: "/images/tech/powerbi.svg" },
    { name: "Excel", icon: "/images/tech/excel.svg" },
    { name: "Salesforce", icon: "/images/tech/salesforce.svg" },
    { name: "n8n", icon: "/images/tech/n8n.svg" },
    { name: "Claude", icon: "/images/tech/claude.svg" },
    { name: "Jira", icon: "/images/tech/jira.svg" },
    { name: "GitHub", icon: "/images/tech/github.svg" },
    { name: "IntelliJ", icon: "/images/tech/intellij.svg" },
  ] as { name: string; icon: string }[],

  skills: [
    "AI for Business Strategy",
    "Data Analysis",
    "Machine Learning",
    "Forecasting",
    "AI Agents & Automation",
    "LLM Evaluation",
    "NLP",
    "Prompt Engineering",
    "Business Intelligence",
    "Data Visualization",
    "Competitive Intelligence",
    "Data Storytelling",
  ],
};

export const projects: Project[] = [
  {
    slug: "tasehinta-imbalance-price-forecasting-turku-energia",
    title: "Tasehinta: AI Decision Support for Turku Energia's Electricity Traders",
    description:
      "Winner of Turku Energia's challenge at Since AI 2026 and a top-5 finalist overall: a forecast and situation-room dashboard, built in 48 hours, that warn traders up to 10 hours ahead when the imbalance price will break away from spot, and explain why.",
    company: { name: "Turku Energia, Since AI 2026" },
    date: "Nov 2026",
    award: "Winner of the Turku Energia challenge · Top 5 finalist overall",
    tags: ["Machine Learning", "Forecasting", "Decision Support", "Energy Markets", "Business Strategy", "Teamwork"],
    heroImage: "/images/projects/tasehinta-banner.svg",
    cardImage: "/images/projects/tasehinta-banner-art.svg",
    overview:
      "When a Turku Energia trader's position misses its plan, the difference is settled at the imbalance price. It's set every 15 minutes and can jump hundreds of euros per MWh away from the day-ahead price when the Finnish grid runs short or into surplus. Turku Energia's brief: poor visibility into upcoming prices raises imbalance costs, so help experts spot significant situations earlier and act in time.\n\nOur team of five turned that into a decision-support tool in one weekend. Every hour it forecasts the next 40 quarter-hours: the expected price with an honest 80 % range, which way the grid will be balanced, and the chance of a price spike. A dashboard then shows only what deserves attention, explains the drivers in plain language, and says what to check, never what to trade, so the trader stays in charge.",
    accomplishment:
      "Our team won Turku Energia's company challenge and reached the top 5 finalists of the whole hackathon, pitching the solution on stage. I built one of the two model components and the final ensemble, ran the team's scoreboard that decided which ideas stayed, and designed the dashboard. Scored with the organisers' own script, the final model was 36.7 % better than their baseline on the validation month and 29.0 % better on an independent second month, with every input used only after it was actually published.",
    featuredOutcome: { url: "https://tasehinta.lovable.app", label: "Live dashboard", wide: true, embed: true },
    results: {
      headline: "36.7 % better than the organisers' baseline, on all four scored metrics",
      note: "Validation month 7 Sep – 4 Oct 2026, scored with Turku Energia's score.py. Lower is better on every metric. On August, used as an independent check, the model was 29.0 % better.",
      baselineLabel: "Organisers' baseline",
      modelLabel: "Tasehinta",
      rows: [
        { metric: "Price error", detail: "MAE, €/MWh", baseline: 66.2, model: 40.19, decimals: 1 },
        { metric: "Uncertainty range", detail: "Pinball loss, P10/P90", baseline: 24.18, model: 11.07, decimals: 1 },
        { metric: "Price spike warnings", detail: "Brier score", baseline: 0.1132, model: 0.084, decimals: 3 },
        { metric: "Balancing direction", detail: "Brier score", baseline: 0.4509, model: 0.3799, decimals: 3 },
      ],
    },
    breakdown: [
      {
        title: "Reframing the problem",
        summary: "Instead of predicting the price from scratch, we predicted its gap to the day-ahead price, which traders already know.",
        details:
          "The day-ahead price is published the afternoon before, so the useful unknown is how far the imbalance price will land from it, and in which direction. Anchoring on it alone removed a third of the baseline's error before any machine learning, and it made the price, range, direction and spike forecasts tell one consistent story.",
        outcome: {
          url: "https://github.com/Rdog69/turku-energy-since-ai/blob/deliverables/report/evaluation_report.md",
          label: "Evaluation report",
        },
      },
      {
        title: "Building the forecast model",
        summary: "I built a LightGBM component that combines real-time grid data with two weather models, then averaged it with a teammate's.",
        details:
          "My component uses Fingrid's real-time data for the first two hours, where fresh data matters, and ECMWF and ICON-EU weather runs for hours 3 to 10. Probabilities are calibrated on the 28 days before each forecast. Every idea had to win on two separate months to stay: weather runs helped a little on every metric, a second weather model helped consistently, and solar and temperature data were dropped because they didn't. The two-component ensemble beat either part alone.",
        outcome: {
          url: "https://github.com/Rdog69/turku-energy-since-ai/blob/deliverables/model/README.md",
          label: "Model description",
        },
      },
      {
        title: "Designing the situation room",
        summary: "A dashboard for shift supervisors and traders: one sentence for the next 10 hours, the few items worth checking, and the reasons behind them.",
        details:
          "Price, range, balancing direction and spike risk share one 15-minute time axis. Clicking any quarter-hour shows its drivers and a suggestion of what to review. Users can replay any past hour exactly as it looked then and see how the forecast performed over the last day, week or month. It works in English and Finnish.",
        image: "/images/projects/tasehinta-dashboard-fi.jpg",
      },
      {
        title: "Proving it can be trusted",
        summary: "21 automated leakage tests guarantee the model never used data before it was published.",
        details:
          "A forecast that peeks at the future is worthless in operations, and the organisers scored it as zero. Every input row is only used from the moment it became available, enforced by tests. The submitted forecast file passed the organisers' validator with no errors or warnings, and the five-minute demo walks through the forecast, its uncertainty, the alerts and the drivers.",
        outcome: {
          url: "https://github.com/Rdog69/turku-energy-since-ai/blob/master/media/tasehinta-demo.mp4",
          label: "Demo video",
        },
      },
      {
        title: "Pitching it on stage",
        summary: "The live deck we used for the final pitch, after winning the Turku Energia challenge and reaching the top 5 overall.",
        details:
          "The pitch opens on one real September evening, explains the imbalance price and how it's handled today, then walks through what Tasehinta answers every hour, how it works, the results on the organisers' own scoring, the dashboard and what comes next. Click inside the deck or use the arrow keys to move through it.",
        outcome: { url: "/embeds/tasehinta-pitch.html", label: "Pitch deck" },
      },
    ],
  },
  {
    slug: "vista-trade",
    title: "VistaTrade: Paper Trading and Learning Platform",
    description:
      "A free platform for learning to invest by doing: trade real US stocks at live prices with $10,000 of virtual money, take an 8-lesson beginner course, and see what a machine-learning forecast can (and mostly can't) predict.",
    date: "Nov 2026",
    tags: ["Next.js", "TypeScript", "Python", "LightGBM", "Fintech", "Product Design"],
    heroImage: "/images/projects/vistatrade-banner.svg",
    cardImage: "/images/projects/vistatrade-banner-art.svg",
    overview:
      "Beginners either learn with real money or with toy simulators that teach nothing about how markets actually behave. VistaTrade is a realistic, free sandbox in between: live prices, honest trading mechanics, and a course where every concept comes with something to try in your own paper account.\n\nI first built it in early 2025 to teach myself React and working with live APIs, and rebuilt it from the ground up as a full platform: a tested trading engine, a learning hub, and a forecasting model that is always shown next to simple baselines, to show how little short-term prices can be predicted.",
    accomplishment:
      "VistaTrade is live and free to use. It has market and limit orders with a tested trading engine, 20 popular stocks plus search across every US-listed stock, 8 lessons with quizzes and hands-on tasks, 10 achievements, and daily 1-day and 5-day forecasts with an 80 % range, refreshed every weekday by a scheduled pipeline. API keys stay on the server, and the app falls back to a clearly labelled simulated market when no data keys are set.",
    featuredOutcome: { url: "https://vista-trade.vercel.app", label: "Live app", wide: true, embed: true },
    results: {
      headline: "The forecasting result: no edge over simple baselines",
      note: "38,453 out-of-sample forecasts per horizon across 20 US stocks and ETFs, March 2019 to November 2026, from a 31-fold walk-forward backtest with an embargo against leakage. On synthetic random-walk prices the model also fails to beat the baselines, which confirms nothing is leaking. Direction is compared with \"always up\", error with \"no change\".",
      baselineLabel: "Simple baseline",
      modelLabel: "LightGBM model",
      rows: [
        { metric: "Next-day direction", detail: "accuracy %, higher is better", baseline: 52.7, model: 52.2, better: "higher", changeAs: "points" },
        { metric: "5-day direction", detail: "accuracy %, higher is better", baseline: 55.4, model: 53.9, better: "higher", changeAs: "points" },
        { metric: "Next-day error", detail: "MAE of daily return, %", baseline: 1.4, model: 1.41, decimals: 2 },
        { metric: "5-day error", detail: "MAE of 5-day return, %", baseline: 3.23, model: 3.25, decimals: 2 },
      ],
    },
    breakdown: [
      {
        title: "Paper trading that behaves like the real thing",
        summary: "Market and limit orders, open orders that reserve cash or shares, positions, P&L and portfolio history.",
        details:
          "The trading rules are pure functions that take an account and return a new one, covered by tests for fills, limits, reservations and profit and loss. Prices come from Alpaca's free IEX feed through server-side routes, polled for every symbol in one request and cached at the edge so visitors share upstream calls. Each stock page has a live chart with volume, key stats, news and the model's forecast.",
        image: "/images/projects/vistatrade-stock.jpg",
      },
      {
        title: "A course you learn by doing",
        summary: "Eight five-minute lessons from \"what is a stock?\" to \"what can a model predict?\", each with a quiz and a hands-on task.",
        details:
          "Every lesson ends with a task checked against your own paper account, like placing a limit order, holding three sectors at once or keeping each position under 40 % of the portfolio. Progress unlocks achievements, and claims that need fact-checking are tracked in a content review file.",
        image: "/images/projects/vistatrade-learn.jpg",
      },
      {
        title: "An honest forecasting experiment",
        summary: "A LightGBM model forecasting 1-day and 5-day returns with an 80 % range, always shown next to baselines and its own backtest.",
        details:
          "Features use only what is known at each day's close: recent returns, volatility, volume, RSI, distance from moving averages and the market's own move. One model per horizon predicts the 10th, 50th and 90th percentiles, retrained every quarter in a walk-forward backtest. It doesn't beat \"always up\" or \"no change\", and the app says so, because that's the most useful lesson a beginner can take from it.",
        image: "/images/projects/vistatrade-forecasts.jpg",
      },
      {
        title: "Built to run for free",
        summary: "Next.js 15 on Vercel, a nightly GitHub Actions pipeline for forecasts, and no API keys in the browser.",
        details:
          "A Python pipeline fetches daily history, retrains and publishes forecasts as a JSON file after every US market close. All data-provider calls run server-side, and without keys the app switches to a deterministic simulated market that every page clearly labels.",
        outcome: { url: "https://github.com/FrankPonce/VistaTrade", label: "GitHub repository" },
      },
    ],
  },
  {
    slug: "pfizer-advanced-ai-powered-document-insights-data-extraction-externship",
    title: "Pfizer: AI Document Intelligence for Pharmaceutical PDFs",
    description:
      "Prototyping an AI pipeline that turns scanned pharmaceutical vendor documents into structured, searchable data, using OCR, LLMs and retrieval-augmented generation.",
    company: { name: "Pfizer", logo: "/images/logos/pfizer.png" },
    verified: true,
    inProgress: true,
    tags: ["Python", "OCR", "LLMs", "RAG", "Document Intelligence"],
    heroImage: "/images/projects/pfizer.jpg",
    overview:
      "Pharmaceutical suppliers send quality, compliance and technical documents as PDFs, often scanned with no machine-readable text. In this 10-week Pfizer program, run through Extern, I'm prototyping the pipeline that makes them usable: OCR and layout-aware extraction in Python, document classification and routing, and retrieval-augmented generation so people can ask a document questions instead of reading it end to end.",
    accomplishment:
      "The first stage is done: I audited a real vendor document file, sorted it into quality, compliance and technical documents, catalogued the date formats an extractor will have to handle, and found that its pages had no machine-readable text, which made OCR the first step of the pipeline.",
    breakdown: [
      {
        title: "Auditing a pharmaceutical vendor file",
        summary:
          "Mapped what a real vendor file contains before automating anything: document types, date formats and whether the text is machine-readable.",
        details:
          "I classified each document as quality, compliance or technical, catalogued every date format so the extractor can normalise them, and confirmed the pages were scanned images without a text layer, so OCR has to run before any structured extraction.",
        image: "/images/projects/pfizer-step-1.png",
      },
    ],
  },
  {
    slug: "cadetx-competitor-demand-prediction-using-job-postings",
    title: "Competitor Demand Prediction Using Job Postings",
    description:
      "Reading Google, OpenAI, NVIDIA and Anthropic's public job postings as early signals of where each company is heading, using NLP, trend analysis and demand forecasting.",
    company: { name: "CadetX", logo: "/images/logos/cadetx.png" },
    inProgress: true,
    tags: ["NLP", "Forecasting", "Python", "Competitive Intelligence", "Data Ethics"],
    heroImage: "/images/projects/cadetx-banner.svg",
    cardImage: "/images/projects/cadetx-banner-art.svg",
    overview:
      "Job postings show what a company plans to do before it shows up in earnings reports or product launches. In this 12-sprint CadetX project I'm building an end-to-end hiring-intelligence pipeline for four frontier AI companies: collect postings every week, clean them with NLP, extract skills, track hiring velocity, forecast demand and compare the companies, ending in decision-ready insights for strategy, talent and product teams.\n\nI'm running it solo, rotating through the Scrum Lead, Data Quality, Documentation and Tech Lead roles each sprint, with every decision, dataset and weekly note kept in a public GitHub repository.",
    accomplishment:
      "Six of twelve sprints are done. I built compliant collectors for all four companies, an NLP pipeline over 8,000+ postings, a 212-skill taxonomy, and multi-year hiring histories rebuilt from Internet Archive captures. The signals are already clear: Anthropic's open roles grew about 9× in two years, and each company has a distinct hiring fingerprint, from Anthropic's safety and go-to-market roles to NVIDIA's GPU and HPC stack. Demand forecasting is next.",
    breakdown: [
      {
        title: "Finding legal data sources",
        summary: "Reviewed every company's terms and robots.txt and documented a compliant route for each, before collecting anything.",
        details:
          "Anthropic and OpenAI publish their postings through documented public job-board APIs (Greenhouse and Ashby), with CC BY history from Epoch AI since March 2026. NVIDIA's Workday board allows its sitemap-listed job pages, and Google's careers results pages allow first pages only, so Google is a deliberate sample. All evidence is in a source register.",
        outcome: { url: "https://github.com/FrankPonce/competitor-demand-prediction/blob/main/docs/sprints/sprint-01-data-sources-legal.md", label: "Sprint 1 review" },
      },
      {
        title: "Building the collectors",
        summary: "Four rate-limited collectors that respect robots.txt, scrub personal data and keep each posting's source URL.",
        details:
          "The first snapshot collected 675 Anthropic, 816 OpenAI, 100 NVIDIA and 579 Google postings, plus 4,111 historical Anthropic and OpenAI postings. Weekly snapshots track when each posting first appeared and when it closed, which later becomes hiring velocity. Each company has a data collection report covering sources, legal checks, fields and limitations.",
        outcome: { url: "https://github.com/FrankPonce/competitor-demand-prediction/tree/main/reports/data-collection", label: "Data collection reports" },
      },
      {
        title: "Cleaning the text for NLP",
        summary: "A unified 4,909-posting corpus, with 23–54 % of each description stripped as boilerplate.",
        details:
          "The pipeline splits each posting into responsibilities, requirements and pay, removes company blurbs and legal text, extracts salary ranges, and lemmatizes the text with spaCy, so skills can be compared fairly across companies in the next sprint.",
        outcome: { url: "https://github.com/FrankPonce/competitor-demand-prediction/blob/main/reports/preprocessing/summary.md", label: "Preprocessing summary" },
      },
      {
        title: "Extracting skills",
        summary: "A shared 212-skill taxonomy across 19 categories, turning free-text postings into comparable features.",
        details:
          "Skills, role family, seniority, years of experience and education requirements are extracted from each posting and checked by hand on a sample (89 % precision). The same taxonomy covers all four companies, so a skill means the same thing everywhere.",
        outcome: { url: "https://github.com/FrankPonce/competitor-demand-prediction/blob/main/reports/skills/summary.md", label: "Skills summary" },
      },
      {
        title: "Reading hiring trends",
        summary: "Multi-year open-role histories, rebuilt from Internet Archive captures and validated against daily data within 1.2 %.",
        details:
          "Weekly flows of new and closed postings show who is accelerating and in which teams. Anthropic grew from about 74 open roles at the end of 2024 to about 670 two years later, Google's open roles rose about 70 % since 2023 with a clear yearly cycle, and the role mix shows where each company is shifting its bets.",
        image: "/images/projects/cadetx-open-roles.png",
      },
      {
        title: "Comparing the competitors",
        summary: "Each company's hiring fingerprint: the skills it over-indexes on compared with the other three.",
        details:
          "On like-for-like data, Anthropic leans on safety and go-to-market roles, OpenAI on APIs and platform, NVIDIA on its GPU, HPC and robotics stack, and Google on cloud sales, generative AI and a management layer. The comparison also covers seniority, location footprint and disclosed pay.",
        image: "/images/projects/cadetx-distinctive-skills.png",
      },
    ],
  },
  {
    slug: "wayfair-ai-agent-engineering-for-business-intelligence-externship",
    title: "Wayfair: AI Agents for Category Intelligence",
    description:
      "Four n8n AI agents that track area-rug trends and competitors across Amazon, Walmart and Wayfair, and turn the findings into a content strategy and a live category-intelligence dashboard.",
    company: { name: "Wayfair", logo: "/images/logos/wayfair.png" },
    date: "Aug 2026",
    verified: true,
    tags: ["n8n", "AI Agents", "LLMs", "Competitive Intelligence", "Retail Analytics"],
    heroImage: "/images/projects/wayfair.png",
    overview:
      "A category team needs to know what shoppers will want next and where competitors leave gaps, and that research is slow by hand. In this Wayfair program, run through Extern, I built it as a set of n8n AI agents for the area-rug category: one finds emerging trends in product and social data, one benchmarks competitors' pricing and assortment, one turns both into on-brand content ideas, and one merges everything into a single live dashboard.",
    accomplishment:
      "I built and tested four working agents and their outputs: a market-trend report, a competitor analysis across Amazon, Walmart and Wayfair products, a content-strategy report, and the Area Rug Category Intelligence Dashboard shown here, with video walkthroughs of the workflows.",
    // Previously the Google Slides deck:
    // https://docs.google.com/presentation/d/1rBJiVlPQgJw5gAPcbkuwcFlJ_jhRbTt5-VyuWLCGfSE/edit?usp=sharing
    featuredOutcome: {
      url: "/embeds/area-rug-dashboard.html",
      label: "Area Rug Category Intelligence Dashboard",
      wide: true,
    },
    certificateUrl: "https://extern.com/portfolios/api/certificates/ec33dfec-7420-4fca-9675-fcae9d0479c7",
    breakdown: [
      {
        title: "Moodboard generator",
        summary:
          'A prompt step that turns a short style idea like "beige round rug" into a detailed image prompt for a visual moodboard.',
        details:
          "I designed and iterated the prompt templates and system message, compared the generated moodboards side by side, and kept only the changes that improved style and composition.",
        outcome: {
          url: "https://docs.google.com/document/d/1dATsvZH7sXvLisfRlk9o5QbC9Jga5km3D7d3xJKChEE/edit?usp=sharing",
        },
      },
      {
        title: "Trend discovery agent",
        summary:
          "Finds emerging rug trends by combining Amazon products with Instagram, Pinterest and design-blog signals.",
        details:
          "The agent filters and standardises the product data, uses LLMs to identify the trend segments worth acting on, generates a moodboard image for each, and assembles a market-trend report covering market size, colour palettes, risks and recommendations.",
        outcome: { url: "https://drive.google.com/file/d/1usMxweFUVYHpePtpBiUo4EaIKxoN4s_A/view?usp=sharing" },
        workflow: "/workflows/trend-discovery-agent.json",
      },
      {
        title: "Competitor monitoring agent",
        summary:
          "Benchmarks Wayfair against Amazon and Walmart on price, features and reviews, and shows where the gaps are.",
        details:
          "It merges the three retailers' product feeds into one dataset, then runs a chain of LLM steps for an executive summary, pricing and whitespace analysis, supplier identification and recommendations, assembled into one competitor report.",
        outcome: { url: "https://drive.google.com/file/d/1PYX7B5gxFvyVk6Dv6iP7seMjouJjkxsA/view?usp=sharing" },
        workflow: "/workflows/competitor-analysis-agent.json",
      },
      {
        title: "Content strategy agent",
        summary:
          "Turns the trend and competitor findings into shopper-focused content ideas, social captions and campaigns in Wayfair's voice.",
        details:
          "I rewrote the agent's prompt and system message so every recommendation starts from a real homeowner need and ends in a shoppable content idea, added an executive summary and a structured output, and tested the updated workflow end to end.",
        outcome: { url: "https://www.loom.com/share/34c244b52ba747b495122d77e765c7fb" },
        workflow: "/workflows/content-strategy-agent.json",
      },
      {
        title: "Dashboard builder agent",
        summary:
          "I built an agent that merges the trend and competitor reports into one live category-intelligence dashboard.",
        details:
          "The workflow takes the market-trend and competitor reports through an upload form, parses out segments, color palettes, risks, price bands, whitespace gaps and supplier data, and fills a dashboard template to produce the Area Rug Category Intelligence Dashboard shown above.",
        workflow: "/workflows/dashboard-builder-agent.json",
      },
    ],
  },
  {
    slug: "data-analyst-portfolio",
    title: "BI Dashboards in Tableau and Power BI",
    description:
      "Interactive Tableau and Power BI dashboards that turn raw datasets into clear, filterable stories, from airline customer reviews to bike-share rider behavior.",
    tags: ["Tableau", "Power BI", "SQL Analytics"],
    heroImage: "/images/projects/british-airways-tableau.png",
    overview:
      "Two interactive dashboards, each built end to end: cleaning and shaping the data, choosing the KPIs that matter, and designing views that let someone without an analytics background find answers on their own. Both are live below, so you can filter and click through them here.",
    dashboards: [
      {
        title: "British Airways Reviews (Tableau)",
        description:
          "Customer review ratings from 2016 to 2023, broken down by month, country, aircraft, seat type and traveller type, with KPI tiles for cabin staff, food, entertainment, ground service and seat comfort.",
        outcome: {
          url: "https://public.tableau.com/views/Project1_17261701024660/Dashboard1",
        },
      },
      {
        title: "Cyclistic Bike-Share (Power BI)",
        description: "How casual riders and annual members use Cyclistic bikes differently.",
        outcome: {
          url: "https://app.powerbi.com/view?r=eyJrIjoiZjVjNTY3YTEtNTI3NS00OWEzLTkzMDQtODBiOWYzOGQ5NTdkIiwidCI6ImFjNzllNWE4LWUwZTQtNDM0Yi1hMjkyLTJjODliNWMyODM2NiIsImMiOjF9",
        },
      },
    ],
  },
  {
    slug: "optimizing-post-disaster-road-restoration-with-reinforcement-learning-a-traveler-behavior-aware-approach",
    title:
      "Optimizing Post-Disaster Road Restoration with Reinforcement Learning: A Traveler-Behavior-Aware Approach",
    description:
      "Reinforcement learning that decides which roads to repair first after a disaster. Published in Reliability Engineering & System Safety (Elsevier).",
    company: { name: "Honors College @ Florida International University" },
    date: "Dec 2025",
    tags: ["Reinforcement Learning", "Machine Learning", "Research", "Written Communication"],
    overview:
      "When a tornado or flood blocks roads, crews can only repair a few at a time, nobody knows exactly how long each repair will take, and every road that reopens changes how people drive. The usual goal, finishing the repairs as fast as possible, ignores that last part.\n\nThis paper builds TARM (Traveler-Adaptive Restoration Mechanism): a reinforcement learning agent that decides which damaged roads to restore next, trained inside a day-to-day traffic simulation where travelers adapt their routes gradually. We tested it on the Sioux Falls road network under tornado scenarios based on historical data.",
    accomplishment:
      "Published in Reliability Engineering & System Safety (Elsevier), co-authored with Maryam Babaee, Namrata Saha, Shabnam Rezapour and M. Hadi Amini at FIU.\n\nAgainst two standard ways of ranking repairs, a road-centrality ranking and a traffic-flow heuristic, TARM got traffic moving up to 68.4 % faster after the disaster. The finding that surprised us: more crews and a shorter repair period don't automatically mean better traffic during the response phase, and can even make it worse.",
    featuredOutcome: {
      url: "https://www.sciencedirect.com/science/article/abs/pii/S0951832026001870",
      label: "Reliability Engineering & System Safety",
      image: "/images/projects/ress-journal-cover.jpg",
    },
    figure: {
      src: "/images/projects/tarm-flow.svg",
      title: "How TARM works",
      alt: "Flowchart: a damaged road network feeds a reinforcement learning agent that picks which roads to restore; a day-to-day traffic simulation returns traffic acceleration as the reward; the result is a restoration policy up to 68.4% better than benchmark heuristics.",
      caption:
        "The agent only decides what to repair. Whether that helps is measured in a separate learning environment that simulates how traffic settles day by day, which is what lets the model capture travelers adapting.",
    },
    breakdown: [
      {
        title: "Why it's hard",
        summary: "Few crews, uncertain repair times and travelers who adapt day by day.",
        details:
          "Three things make restoration planning messy: crews are scarce, damage data is incomplete so repair times are uncertain, and every reopened road shifts traffic as people slowly change routes. That calls for a method that is stochastic, sequential (decisions are staged as crews free up) and model-free, which rules out a single classic optimisation model.",
      },
      {
        title: "The method",
        summary: "An RL agent on a Markov decision process, with traffic simulated in its environment.",
        details:
          "At each stage the agent picks a subset of the still-damaged roads for the available crews; the next stage begins once they're restored. Its learning environment runs an optimization-based day-to-day traffic simulation and returns how much the decision sped up post-disaster traffic, which is the reward the agent learns to maximise.",
      },
      {
        title: "The test",
        summary: "Sioux Falls road network, tornado scenarios from historical data, two benchmarks.",
        details:
          "We compared TARM with a flow-unaware ranking by betweenness centrality and a flow-aware heuristic that prioritises roads by traffic flow, across different disruptions and crew levels, and varied how quickly news of each repair reaches travelers.",
      },
      {
        title: "What we found",
        summary: "Up to 68.4 % more traffic acceleration, and faster repairs aren't always better.",
        details:
          "TARM beat both benchmarks in every test instance, by up to 68.4 %. Travelers' route choices and how fast repair information spreads both change the optimal policy. Adding crews to finish sooner didn't necessarily help traffic during the response period, so the length of the restoration period, a common efficiency measure in earlier studies, turns out to be a poor one.",
      },
    ],
    heroImage: "/images/projects/road-restoration.jpg",
  },
];
