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
  /** Lower is better for every row. */
  rows: { metric: string; detail?: string; baseline: number; model: number; decimals?: number }[];
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
      title: "Pfizer Advanced: AI-Powered Document Insights & Data Extraction Externship",
      subtitle: "In progress",
      logo: "/images/logos/pfizer.png",
    },
    {
      title: "Wayfair AI Agent Engineering for Business Intelligence Externship",
      subtitle: "Completed · Aug 2026",
      logo: "/images/logos/wayfair.png",
    },
  ] as { title: string; subtitle: string; logo?: string }[],

  /** `logo` is optional; `description` shows under the title. */
  experience: [
    {
      title: "Data Scientist (Virtual Work Experience)",
      company: "CadetX",
      dates: "In progress",
      logo: "/images/logos/cadetx.png",
      description:
        "Building a hiring-intelligence pipeline from Google, OpenAI, NVIDIA and Anthropic job postings, running all four Scrum roles solo: legally reviewed sources, four collectors (2,170 live and 4,111 historical postings) and a 4,909-posting NLP corpus so far, with skill extraction, trend analysis and demand forecasting next.",
    },
    {
      title: "AI Training Specialist",
      company: "Outlier",
      dates: "Jun 2026 - Nov 2026",
      logo: "/images/logos/outlier.svg",
      description:
        "Evaluated and refined conversational AI models by reviewing audio transcripts and text prompt-response pairs in English and Spanish. Assessed the accuracy, linguistic naturalness and contextual nuance of speech and text outputs against strict project rubrics, and checked cross-lingual consistency and factual correctness to improve LLM voice-and-text interactions.",
    },
    {
      title: "Multimodal Agent Evaluator",
      company: "Invisible Technologies",
      dates: "May 2026 - Aug 2026",
      logo: "/images/logos/invisible.png",
      description:
        "Evaluated conversational AI agents on comprehension, response quality, task completion and adherence to business rules. Audited JSON tool-call outputs to catch hallucinations, parameter errors and workflow failures, and produced labeled training data and feedback to make the models more reliable.",
    },
    {
      title: "Data Analyst Sprintern",
      company: "StartupFIU",
      dates: "Jan 2024 - May 2024",
      logo: "/images/logos/startupfiu.png",
      description:
        "Analyzed and feature-engineered demographic and event-attendance data with Pandas and Excel, applied NLP models to text data, and presented insights on growing community engagement.",
    },
    {
      title: "Business Intelligence Intern",
      company: "CDR Companies",
      dates: "Aug 2023 - Dec 2023",
      logo: "/images/logos/cdr.png",
      description:
        "Developed and tested features on the CDR Health Salesforce platform through Jira tickets, analyzed database objects and visualized them in Tableau, and built a dashboard component that made inserting records into the SQL database simpler.",
    },
  ] as { title: string; company: string; dates: string; logo?: string; description?: string }[],

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

  skills: ["AI for Business Strategy", "Data Analysis", "AI Engineering", "Business Intelligence", "Data Science", "Machine Learning"],
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
    heroImage: "/images/projects/tasehinta-dashboard.jpg",
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
    slug: "pfizer-advanced-ai-powered-document-insights-data-extraction-externship",
    title: "Pfizer Advanced: AI-Powered Document Insights & Data Extraction Externship",
    description:
      "Prototype AI-powered document intelligence with Pfizer—using OCR, LLMs, and RAG to automate real enterprise PDF workflows and build a standout portfolio project.",
    company: { name: "Pfizer", logo: "/images/logos/pfizer.png" },
    verified: true,
    inProgress: true,
    tags: ["AI & ML", "Python", "Document Intelligence", "Presentation Skills"],
    heroImage: "/images/projects/pfizer.jpg",
    overview:
      "The externship focused on prototyping AI document-intelligence workflows for enterprise PDFs, combining OCR, retrieval-augmented generation, and LLM techniques. The work summarized technical foundations, compared model approaches, and produced explainable notes on LLM architectures and their components.",
    accomplishment:
      "I classified documents from a vendor file into quality, compliance, and technical categories, cataloged date formats present, and determined that pages lacked machine-readable text, requiring OCR for structured-data extraction.",
    breakdown: [
      {
        title: "How AI Reads Pharmaceutical Documents",
        summary:
          "I reviewed a sample pharmaceutical vendor file and identified document types, date formats, and OCR needs.",
        details:
          "I inspected the provided vendor file, classified documents (quality, compliance, technical), cataloged date formats found, and noted that pages lacked machine-readable text so OCR was required to extract structured data.",
        image: "/images/projects/pfizer-step-1.png",
      },
    ],
  },
  {
    slug: "cadetx-competitor-demand-prediction-using-job-postings",
    title: "Competitor Demand Prediction Using Job Postings",
    description:
      "A CadetX virtual work experience: reading Google, OpenAI, NVIDIA and Anthropic's public job postings as signals of where each company is heading, with NLP, trend analysis and demand forecasting.",
    company: { name: "CadetX", logo: "/images/logos/cadetx.png" },
    inProgress: true,
    tags: ["NLP", "Forecasting", "Python", "Competitive Intelligence", "Data Ethics"],
    heroImage: "/images/projects/cadetx.jpg",
    overview:
      "Job postings show what a company plans to do before it shows up in earnings reports or product launches. In this 12-sprint CadetX project I'm building an end-to-end hiring-intelligence pipeline for four frontier AI companies: collect postings every week, clean them with NLP, extract skills, track hiring velocity, forecast demand and compare the companies, ending in decision-ready insights for strategy, talent and product teams.\n\nI'm running it solo, rotating through the Scrum Lead, Data Quality, Documentation and Tech Lead roles each sprint, with every decision, dataset and weekly note kept in a public GitHub repository.",
    accomplishment:
      "Three of twelve sprints are done. I reviewed the terms and robots.txt of every source and found a compliant collection route for each company, built four collectors that took a first snapshot of 2,170 live postings plus 4,111 historical ones, and cleaned them into a unified 4,909-posting NLP corpus. Skill extraction is next.",
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
    ],
  },
  {
    slug: "wayfair-ai-agent-engineering-for-business-intelligence-externship",
    title: "Wayfair AI Agent Engineering for Business Intelligence Externship",
    description:
      "Learn one of the most in-demand skills shaping the future of work: building AI agents. In this externship, you’ll step into the role of an AI Agent Developer and use n8n to design agents that think, plan, and act on real data — automating insights, decisions, and workflows. No coding experience required. By the end, you’ll create a live dashboard powered by your own AI agents, gaining hands-on experience that applies to any role or industry — from marketing and consulting to product management and data science.",
    company: { name: "Wayfair", logo: "/images/logos/wayfair.png" },
    date: "Aug 2026",
    verified: true,
    tags: ["AI Workflow Design", "AI Agent Development", "Web Scraping & Data Extraction", "Presentation Skills"],
    heroImage: "/images/projects/wayfair.png",
    overview:
      "During my externship with Wayfair, I developed AI agents for business intelligence, focusing on market trends and competitive analysis. By utilizing n8n, I created agents that automated data insights, enhancing decision-making processes. The culmination of my work was a live dashboard powered by these agents, showcasing practical applications of AI in the retail sector.",
    accomplishment:
      "I produced tested prompt templates and moodboard outputs, a packaged trend report with a Loom demo, and a competitor-analysis PDF based on a unified retailer dataset.",
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
        title: "Getting Started with AI Agents - Moodboard Generator",
        summary:
          "I built and refined a Prompt Node that turned short style inputs into detailed visual prompts for a moodboard generator.",
        details:
          'During the externship I created prompt templates and tested outputs. I translated brief inputs (e.g., "beige round rug") into full visual prompts, reviewed generated moodboards, and noted where system-message tweaks improved style and composition.',
        outcome: {
          url: "https://docs.google.com/document/d/1dATsvZH7sXvLisfRlk9o5QbC9Jga5km3D7d3xJKChEE/edit?usp=sharing",
        },
      },
      {
        title: "Building the Consumer Trend Discovery AI Agent",
        summary:
          "I built an end-to-end Trend Discovery Agent and packaged its final report, visuals, and demo recording as the project deliverable.",
        details:
          "The project scoped rug trends, assembled Amazon and social signals, ran AI classification and image generation, and produced a packaged trend report PDF plus a demo video. The submission included the final report, PDF, and Loom recording.",
        outcome: { url: "https://drive.google.com/file/d/1usMxweFUVYHpePtpBiUo4EaIKxoN4s_A/view?usp=sharing" },
        workflow: "/workflows/trend-discovery-agent.json",
      },
      {
        title: "Building the Competitor Monitoring AI Agent",
        summary:
          "I delivered a Competitor Monitoring Agent that collected, analyzed, and assembled competitor product data into a structured report for the rugs category.",
        details:
          "During the externship I combined retailer product feeds into a unified dataset, built AI prompts to analyze pricing, features, and reviews, and produced a PDF report summarizing competitor gaps and patterns.",
        outcome: { url: "https://drive.google.com/file/d/1PYX7B5gxFvyVk6Dv6iP7seMjouJjkxsA/view?usp=sharing" },
        workflow: "/workflows/competitor-analysis-agent.json",
      },
      {
        title: "Designing the AI Insights & Content Agent",
        summary:
          "I updated and tested the AI Insights & Content Agent to produce on-brand, shopper-focused content and a structured content strategy report.",
        details:
          "The project evaluated the agent, rewrote its prompt and system message, added an executive summary and content-idea structure, and tested the updated workflow. The submission produced a downloadable content strategy report and a walkthrough recording.",
        outcome: { url: "https://www.loom.com/share/34c244b52ba747b495122d77e765c7fb" },
        workflow: "/workflows/content-strategy-agent.json",
      },
      {
        title: "Building the Dashboard Builder Agent",
        summary:
          "I built an agent that merges the trend and competitor reports into one live category-intelligence dashboard.",
        details:
          "The workflow takes the market-trend (P2) and competitor-analysis (P3) HTML reports through an upload form, parses out segments, color palettes, risks, price bands, whitespace gaps and supplier data, and fills a dashboard template to produce the Area Rug Category Intelligence Dashboard shown above.",
        workflow: "/workflows/dashboard-builder-agent.json",
      },
    ],
  },
  {
    slug: "data-analyst-portfolio",
    title: "Data Analyst Portfolio",
    description:
      "Interactive Tableau and Power BI dashboards that turn raw datasets into clear, filterable stories, from airline customer reviews to bike-share rider behavior.",
    tags: ["Tableau", "Power BI", "SQL Analytics"],
    heroImage: "/images/projects/british-airways-tableau.png",
    overview:
      "A collection of BI dashboards I built to practice end-to-end analysis: cleaning and shaping the data, picking the right KPIs, and designing interactive views that let anyone explore the results on their own. Each one below is live, so you can filter and click through it right here.",
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
    slug: "vista-trade",
    title: "Vista Trade",
    description:
      "Frutiger Aero-inspired React web app that helps you track stock prices with a real-time API and build a portfolio. Provides analytics for both stock prices and trading volume",
    tags: ["React", "Typescript"],
    // TIP: save this image into /public/images/projects/ and point to it locally
    heroImage:
      "https://portfolio-assets.extern.com/portfolios/frank-ponce/assets/project_image_b1261b31-aaee-442e-978d-190cf001652c.jpg",
  },
  {
    slug: "optimizing-post-disaster-road-restoration-with-reinforcement-learning-a-traveler-behavior-aware-approach",
    title:
      "Optimizing Post-Disaster Road Restoration with Reinforcement Learning: A Traveler-Behavior-Aware Approach",
    description: "Research paper published in Reliability Engineering & System Safety (Elsevier).",
    company: { name: "Honors College @ Florida International University" },
    date: "Dec 2025",
    tags: ["Machine Learning", "Data Science", "Written Communication"],
    accomplishment:
      "My research on using reinforcement learning to plan post-disaster road restoration, accounting for how travelers actually behave, was published in Reliability Engineering & System Safety, an Elsevier journal.",
    featuredOutcome: {
      url: "https://www.sciencedirect.com/science/article/abs/pii/S0951832026001870",
      label: "Reliability Engineering & System Safety",
      image: "/images/projects/ress-journal-cover.jpg",
    },
    // TIP: save this image into /public/images/projects/ and point to it locally
    heroImage:
      "https://portfolio-assets.extern.com/portfolios/frank-ponce/assets/project_image_9102a97b-cf9c-4734-9ca7-b91981b02e80.jpg",
  },
];
