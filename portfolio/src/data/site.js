export const profile = {
  name: "Muhammad Chaudhry",
  roles: [
    "Software Engineer",
    "AI Data Engineer",
    "Full-Stack Developer",
    "Problem Solver",
  ],
  tagline:
    "I build data pipelines, AI tools, and web apps. Lately I've been making sure the numbers a leadership team looks at are ones they can check.",
  availability: "Open to full-time software, AI, and data engineering roles",
  email: "chaudhrysayyam85@gmail.com",
  github: "https://github.com/MuhammadC11",
  linkedin: "https://www.linkedin.com/in/mc56/",
  resume: "/Resume.pdf",
};

export const education = {
  school: "Binghamton University, SUNY",
  degree: "B.S. Computer Science",
  honors: "Dean's List",
  year: "Class of 2026",
  coursework: [
    "Intelligent Robotics",
    "Computer Networks",
    "Operating Systems",
    "Machine Learning",
    "Data Structures",
  ],
};

export const experience = [
  {
    id: "sailpoint",
    company: "SailPoint",
    role: "AI Data Engineering Intern",
    period: "May 2026 — Present",
    current: true,
    summary:
      "I build the tools that tell leadership what our AI agents cost and who is using them.",
    highlights: [
      "Built an AI assistant that answers plain-English questions about company AI agent cost, usage, and adoption using Python, Google Gemini, and BigQuery, routing each question to one of 78 tested SQL query templates so every number reported to IT and finance leadership is auditable instead of AI-generated.",
      "Designed and shipped a multi-tab Looker dashboard reporting 11 executive KPIs, spend per agent, cloud cost by project and service, adoption by department, and user feedback, giving leadership self-serve analytics with no SQL required.",
      "Engineered the Google Cloud data pipeline behind both tools, modeling billing exports, request telemetry, and HR system data into curated BigQuery tables, and reconciled dashboard totals to match the GCP billing console exactly; documented all pipeline and dashboard runbooks in Confluence.",
      "Consolidated two overlapping sales assistants into a single unified sales agent and built a revenue analytics tool on top of it, letting sales teams ask about pipeline, bookings, and ARR in plain English behind read-only query validation and per-representative access controls.",
    ],
    stack: [
      "Python",
      "Google Gemini",
      "BigQuery",
      "Looker",
      "Google ADK",
      "GCP",
      "Confluence",
    ],
  },
  {
    id: "yaqoob",
    company: "Yaqoob Electronics",
    role: "Developer Intern",
    period: "Dec 2025 — Feb 2026",
    summary:
      "Shipped accounting and inventory features on a platform a few thousand businesses run their books on.",
    highlights: [
      "Designed and deployed 12+ core feature sets for an accounting platform serving 2,000+ customers, including a supplier management module and \"discontinued\" item tracking that preserves historical data integrity.",
      "Refactored profit calculation logic to resolve discrepancies across 15,000+ historical entries, reaching full financial accuracy by implementing FIFO batch-sales logic and adding summary financial reports.",
      "Engineered an automated stock synchronization system and return-item workflow that keeps inventory levels and true profit margins accurate in real time.",
    ],
    stack: ["PHP", "SQL", "JavaScript"],
  },
  {
    id: "unadat",
    company: "Unadat",
    role: "Software Engineer Intern",
    period: "Feb 2024 — Apr 2024",
    summary:
      "Sped up our deploys and built the goal tracking page on a personal finance app.",
    highlights: [
      "Automated deployment and removed manual steps, reducing development downtime from 90 seconds to 6 seconds.",
      "Built a new goals and milestones page so users could track their financial goals at a glance.",
      "Worked in an agile process using Jira to coordinate tasks across five teams, keeping code integration smooth between them.",
    ],
    stack: ["JavaScript", "Vue", "Jira", "Agile"],
  },
];

export const skillGroups = [
  {
    label: "Languages",
    items: ["Python", "SQL", "TypeScript", "JavaScript", "C++", "PHP"],
  },
  {
    label: "AI & Data",
    items: ["Google Gemini", "Google ADK", "BigQuery", "Looker", "Google Cloud"],
  },
  {
    label: "Web",
    items: ["React", "Vue", "Node.js", "Express", "PostgreSQL", "MongoDB", "Firebase", "REST"],
  },
  {
    label: "Tooling",
    items: ["Docker", "Git", "Jira", "Agile"],
  },
];

export const projects = [
  {
    id: "forkcast",
    title: "Forkcast",
    description:
      "I could never decide what to cook, so I built something that searches recipes by whatever is already in the fridge. It also handles grocery lists, macros, and a daily food journal. Student accounts get dining-hall tracking, so you can see what you ate and what you spent.",
    tech: ["React", "PostgreSQL", "Express", "Node.js", "Spoonacular API"],
    image: "/forkcast.webp",
    links: { code: "https://github.com/MuhammadC11/Forkcast" },
    year: "2025",
    featured: true,
  },
  {
    id: "pillpal",
    title: "PillPal",
    description:
      "Built at SBUHacks after watching older relatives struggle with prescription labels they couldn't read. Take a photo, Google Cloud Vision pulls the text off the label, and the app reads the instructions back to you in your own language. Big icons, 10+ languages, no small print.",
    tech: ["React Native", "MongoDB", "Express", "Google Cloud Vision", "OpenAI"],
    image: "/pillpal.webp",
    links: { code: "https://github.com/MuhammadC11/PillPal-SBUHacks-24" },
    year: "2024",
    award: "Best Use of Google Cloud — SBUHacks",
    featured: true,
  },
  {
    id: "lowballd",
    title: "Lowballd",
    description:
      "A place to post your fits, scroll through what everyone else is wearing, and haggle over the pieces you want. Auth0 handles logins and MongoDB holds the feed.",
    tech: ["Vue", "Node.js", "MongoDB", "Auth0"],
    image: "/lowballd.webp",
    links: {
      live: "https://lowballd.netlify.app/",
      code: "https://github.com/MuhammadC11/Lowballd-Frontend",
    },
    year: "2024",
    featured: true,
  },
  {
    id: "anchor",
    title: "Anchor",
    description:
      "Four of us built this in 36 hours at HackPrinceton. Tell it what you're working on, it turns that into a checklist, then blocks any tab that has nothing to do with it. Pomodoro, except it holds you to it.",
    tech: ["JavaScript", "HTML/CSS", "OpenAI API", "Chrome Extensions"],
    image: "/anchor.webp",
    links: {
      live: "https://devpost.com/software/anchor-n81947",
      code: "https://github.com/MuhammadC11/Anchor",
    },
    year: "2023",
  },
  {
    id: "swim",
    title: "Swim Workout Generator",
    description:
      "Another HackPrinceton build. Answer a few questions and it writes you a full swim workout. Firebase saves the sets, so you can come back to one that went well.",
    tech: ["Vue", "Node.js", "Firebase"],
    image: "/swg.webp",
    links: {
      live: "https://swimworkoutgenerator.netlify.app/",
      code: "https://github.com/MuhammadC11/HackPrinceton",
    },
    year: "2023",
  },
  {
    id: "weather",
    title: "Weather App",
    description:
      "One of the first things I ever built. Type a city, get the weather. It's still here because it's where async requests and APIs finally clicked for me.",
    tech: ["JavaScript", "HTML/CSS", "REST"],
    image: "/weather.webp",
    links: {
      live: "https://mcweather.netlify.app/",
      code: "https://github.com/MuhammadC11/weather-app",
    },
    year: "2023",
  },
];

export const leadership = [
  {
    org: "Muslim Students' Association",
    role: "Interfaith Chair",
    period: "May 2025 — May 2026",
    detail:
      "Represented the MSA across cross-cultural forums, including an interfaith radio show, to build a more inclusive campus.",
  },
  {
    org: "Computer Science Club, Hunter College",
    role: "Vice President",
    period: "Aug 2023 — May 2024",
    detail:
      "Founded and grew a CS community by running technical workshops, sharing internship leads, and hosting networking events.",
  },
];
