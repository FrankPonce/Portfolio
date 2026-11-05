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
  bio: "I'm Frank, a data science master's student in the Erasmus Mundus EDISS programme at Åbo Akademi University in Finland, with a BS in Computer Science (Magna Cum Laude) from FIU. I want to help organizations use data and AI to make better strategic decisions: spotting market shifts earlier, understanding competitors, and rethinking how teams work with AI. So far I've built n8n AI agents that turned retail and competitor data into a live category-intelligence dashboard for Wayfair, evaluated conversational and multimodal AI models in English and Spanish at Invisible Technologies and Outlier, and published research on reinforcement learning for post-disaster road restoration. I care about AI that is accurate, explainable and tied to real business outcomes.",
  worksIntro:
    "Projects where data and AI meet business decisions: agents for market and competitor intelligence, document automation, BI dashboards and research, each with the real deliverables embedded so you can explore them right here.",

  /** Little pill above the headline. Set to undefined to hide it. */
  badge: { label: "Pfizer Externship via Extern", logo: "/images/logos/pfizer.png" } as
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

  // TIP: download your resume PDF into /public and change this to "/resume.pdf"
  resumeUrl:
    "https://portfolio-assets.extern.com/portfolios/frank-ponce/assets/resume_a1ea5816-6dc2-464f-a013-2b644a54017a.pdf",

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
        "Part of a four-person data science team building a hiring-intelligence system from public job-posting data: collecting postings legally, extracting skills with NLP, analyzing hiring trends and forecasting competitor demand, working in weekly Scrum sprints with rotating lead roles.",
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
      "A CadetX virtual work experience: using NLP and forecasting on job-posting data from major tech and AI companies to predict competitor demand, skill trends and market direction.",
    company: { name: "CadetX", logo: "/images/logos/cadetx.png" },
    inProgress: true,
    tags: ["NLP", "Forecasting", "Python", "Competitive Intelligence", "Teamwork"],
    heroImage: "/images/projects/cadetx.jpg",
    overview:
      "Job postings show where a company is going, not where it has been. In this 3-month CadetX project I'm part of a team of four data scientists, each specializing in one tech / AI company, building a single hiring-intelligence system from public job-posting data.\n\nThe work runs from legal data sourcing and collection through NLP preprocessing, skill extraction and hiring-trend analysis, to demand forecasting, company similarity scoring and a final mentor-reviewed presentation. The team works in weekly Scrum sprints with rotating roles (Scrum Leader, Data Quality, Documentation and Technical Lead) and keeps all code, data and notes in a shared GitHub repository.",
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
