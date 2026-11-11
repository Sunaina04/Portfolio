// Single source of truth for portfolio content. Everything here comes from
// public/Sunaina_Resume.pdf — update both together. Case-study prose only
// restates what the resume says; there are no invented metrics.

export const profile = {
  name: "Sunaina",
  title: "Technical Project Manager & Software Engineer",
  role: "Project Manager",
  company: "Genboot",
  since: "April 2024",
  location: "Mohali, India",
  email: "sunainatakhi64@gmail.com",
  phone: "+91 82849 48195",
  whatsapp: "918284948195", // same number, international format for wa.me links
  linkedin: "https://www.linkedin.com/in/sunaina-ruhaniat-01a650207/",
  resume: "/Sunaina_Resume.pdf",
  availability: "Open to independent projects",
  promise:
    "From idea to execution, I help businesses plan, build, manage, and grow their digital solutions.",
  pitch: "I help businesses plan, build, manage, and grow their digital solutions.",
  intro:
    "I'm a Technical Project Manager and Software Engineer with 6+ years in software. I manage projects end to end, build software and AI-powered solutions myself, bring in the right specialists when a project needs them, and write the content that helps it reach people.",
  about: [
    "My full-time role is Project Manager at Genboot, where I lead software projects from planning to production — requirements, scope, sprint planning, estimation, resource allocation, releases and support. Before that, I spent four years there as a Senior Software Engineer building Python backends, APIs and AI-powered applications.",
    "Independently, I work with businesses on their own digital projects. Where the work matches my skills — project management, backend and web development, AI integrations, content — I do it myself. Where it needs other specialists, I help find suitable developers and coordinate the work.",
  ],
};

// The six hats, shown in the hero and the About section.
export const identities = [
  {
    title: "Technical Project Manager",
    text: "Planning, Agile delivery and stakeholder management — my full-time role since 2024.",
  },
  {
    title: "Software Developer",
    text: "Backend applications and APIs in Python, FastAPI and Django; web apps in React and Next.js.",
  },
  {
    title: "AI Engineer",
    text: "LLM integrations with OpenAI APIs, LangChain and Retrieval-Augmented Generation.",
  },
  {
    title: "End-to-End Project Builder",
    text: "Taking an idea through planning, build, launch and ongoing support.",
  },
  {
    title: "Content Writer",
    text: "Website, blog and SEO-oriented content — including my own platform, Explainer Adda.",
  },
  {
    title: "Digital Solutions Consultant",
    text: "Helping businesses choose the right approach, the right people and the right tools.",
  },
];

// Hero career line
export const milestones = [
  { date: "May 2020", label: "Senior Software Engineer" },
  { date: "April 2024", label: "Project Manager" },
  { date: "Now", label: "Delivering multiple projects end to end" },
];

export interface Role {
  title: string;
  company: string;
  location: string;
  start: string;
  end: string;
  current?: boolean;
  summary: string;
  points: string[];
}

export const experience: Role[] = [
  {
    title: "Project Manager",
    company: "Genboot",
    location: "Mohali, India",
    start: "April 2024",
    end: "Present",
    current: true,
    summary: "End-to-end delivery of multiple software projects, from planning to production.",
    points: [
      "Collaborate with clients and stakeholders to gather requirements, define project scope, and translate business needs into technical solutions.",
      "Manage project planning, sprint planning, effort estimation, resource allocation, cost estimation, and delivery tracking.",
      "Coordinate cross-functional teams, including frontend, backend, QA, UI/UX, and AI engineers.",
      "Monitor project progress, manage risks, and ensure timely milestone delivery.",
      "Drive Agile ceremonies including sprint planning, stand-ups, reviews, and retrospectives.",
      "Manage client communication, project status updates, production releases, and post-deployment support.",
    ],
  },
  {
    title: "Senior Software Engineer",
    company: "Genboot",
    location: "Mohali, India",
    start: "May 2020",
    end: "April 2024",
    summary: "Scalable backend applications and AI-powered products in Python, FastAPI and Django.",
    points: [
      "Designed and implemented RESTful APIs, microservices, and distributed systems.",
      "Built AI-powered applications using OpenAI APIs, Prompt Engineering, LangChain, and Retrieval-Augmented Generation (RAG).",
      "Developed high-performance backend services using PostgreSQL, Redis, and Celery.",
      "Collaborated with cross-functional teams to deliver scalable software solutions.",
      "Conducted code reviews, testing, debugging, and continuous performance improvements.",
      "Contributed to system architecture, production deployments, and technical documentation.",
    ],
  },
];

// Who does the work for each service — kept explicit so visitors can tell
// hands-on work from coordination.
export type DeliveryMode = "self" | "mixed" | "coordinate";

export const deliveryModes: Record<DeliveryMode, string> = {
  self: "Done by me",
  mixed: "Built by me, or with specialists I coordinate",
  coordinate: "Specialists I connect you with",
};

export interface Service {
  id: string;
  letter: string;
  title: string;
  benefit: string;
  mode: DeliveryMode;
  items: string[];
  note?: string;
  related?: { label: string; to: string; external?: boolean }[];
}

export const services: Service[] = [
  {
    id: "project-management",
    letter: "A",
    title: "Project Management & Delivery",
    benefit:
      "Keep your project on scope, on schedule and on budget — with one person accountable for getting it shipped.",
    mode: "self",
    items: [
      "End-to-end project management",
      "Project planning and execution",
      "Requirement gathering and analysis",
      "Sprint planning and Agile management",
      "Resource allocation and team coordination",
      "Client and stakeholder communication",
      "Timeline, budget and delivery management",
      "QA coordination and release management",
    ],
    related: [{ label: "Experience as Project Manager", to: "/#experience" }],
  },
  {
    id: "software-development",
    letter: "B",
    title: "Software Development & Project Building",
    benefit: "Turn an idea into working software — from the first plan to a deployed product.",
    mode: "mixed",
    items: [
      "Web application development",
      "Backend and API development",
      "Custom software solutions",
      "Full project development, from idea to deployment",
      "Technical architecture and solution planning",
      "Connecting you with suitable development resources",
    ],
    related: [
      { label: "Supplier Order Management", to: "/work/supplier-order-management" },
      { label: "ITC", to: "/work/itc" },
      { label: "Marina Mooring", to: "/work/marina-mooring" },
    ],
  },
  {
    id: "ai-solutions",
    letter: "C",
    title: "AI Engineering & AI Solutions",
    benefit:
      "Put AI to practical use — assistants, automation and answers grounded in your own data.",
    mode: "self",
    items: [
      "AI-powered application development",
      "LLM integrations",
      "OpenAI API integrations",
      "Retrieval-Augmented Generation (RAG)",
      "AI chatbots and intelligent assistants",
      "AI workflow automation",
      "AI-based business solutions",
    ],
    related: [{ label: "Sydkik — AI executive assistant", to: "/work/sydkik" }],
  },
  {
    id: "resource-connections",
    letter: "D",
    title: "Developer & Technical Resource Connections",
    benefit:
      "Find the right technical people for the job, and have someone who speaks their language coordinate the work.",
    mode: "coordinate",
    items: [
      "Software developers",
      "Frontend developers",
      "Backend developers",
      "Full-stack developers",
      "Shopify developers",
      "Other specialised development professionals",
    ],
    note: "This is a connection and coordination service. I help you find suitable independent professionals, brief them and keep the work on track — the specialists are not my employees.",
  },
  {
    id: "content-writing",
    letter: "E",
    title: "Content Writing & Digital Content",
    benefit: "Clear, well-researched writing that explains what you do and helps people find it.",
    mode: "self",
    items: [
      "Website content",
      "Blog articles and informational content",
      "SEO-oriented content",
      "Business and professional content",
      "Digital publishing and content development",
    ],
    related: [
      { label: "Explainer Adda — case study", to: "/work/explainer-adda" },
      { label: "explaineradda.com", to: "https://explaineradda.com/", external: true },
    ],
  },
  {
    id: "website-advertising",
    letter: "F",
    title: "Website Advertising & Monetization Support",
    benefit: "Get your website ready to display ads, and set up correctly from the start.",
    mode: "self",
    items: [
      "Integrating advertising into your website",
      "Setting up and configuring supported advertising solutions",
      "Making your website ready for ad implementation",
      "Supporting monetization and advertising workflows",
      "Explaining the requirements for displaying ads",
    ],
    note: "Ad approval and earnings are decided by the advertising network and depend on your site and its traffic. I help with setup and readiness — I can't guarantee approval or revenue.",
  },
];

// How I work: the end-to-end engagement.
export const processSteps: { title: string; text: string; mode?: DeliveryMode }[] = [
  {
    title: "Understand",
    text: "Your business idea, goals and requirements — what success looks like for you.",
  },
  {
    title: "Plan & scope",
    text: "A clear plan with defined scope, priorities and timeline.",
  },
  {
    title: "Design the approach",
    text: "The technical approach and solution architecture, and the skills the project needs.",
  },
  {
    title: "Build",
    text: "I build it myself where it matches my skills, or bring in suitable developers and specialists.",
    mode: "mixed",
  },
  {
    title: "Manage",
    text: "Development, communication and execution — regular updates so you always know where things stand.",
  },
  {
    title: "Test & launch",
    text: "Coordinated testing, deployment and launch.",
  },
  {
    title: "Support & grow",
    text: "Ongoing support or further development, where agreed.",
  },
];

// Nodes for the custom "system sketch" drawn on each project's cover.
export interface SystemSketch {
  inputs: string[];
  core: string[];
  outputs: string[];
}

export interface Project {
  slug: string;
  name: string;
  kind: string;
  summary: string;
  focus: string;
  service: string; // id of the related service, for the case-study CTA
  role: string;
  overview: string;
  problem: string;
  stack: string[];
  stackLabel?: string;
  contributions: string[];
  contributionLabel?: string;
  features: string[];
  outcomes?: string[];
  sketch: SystemSketch;
  link?: string;
  screenshot?: string;
}

export const projects: Project[] = [
  {
    slug: "sydkik",
    kind: "AI application",
    service: "ai-solutions",
    name: "Sydkik",
    summary: "An AI-powered executive assistant",
    focus: "Backend & AI integrations",
    role: "Backend and AI engineering — backend services, OpenAI integrations and third-party API integrations, contributing to system design, code reviews and production deployments.",
    overview:
      "Sydkik is an AI-powered executive assistant that brings email, calendar and meeting workflows together and automates routine productivity tasks.",
    problem:
      "An executive's work is spread across email, calendars and meetings in both Microsoft and Google tools. The assistant needed a backend that connects to those services and uses AI to draft, suggest and summarise on the user's behalf.",
    stack: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "Redis",
      "Celery",
      "OpenAI",
      "LangChain",
      "Pinecone",
      "Microsoft Graph API",
      "Google Calendar API",
    ],
    contributions: [
      "Developed scalable backend services using Python and FastAPI.",
      "Integrated OpenAI APIs to build AI email drafting, smart suggestions, meeting summaries, and productivity automation.",
      "Built calendar, email, and meeting workflows using Microsoft Graph and Google Calendar integrations.",
      "Developed REST APIs and asynchronous background jobs with Celery and Redis, and optimized PostgreSQL database performance.",
      "Implemented notification services, task automation, and secure API integrations.",
    ],
    features: [
      "AI email drafting",
      "Smart suggestions",
      "Meeting summaries",
      "Calendar, email and meeting workflows",
      "Notifications and task automation",
    ],
    sketch: {
      inputs: ["Microsoft Graph", "Google Calendar"],
      core: ["FastAPI services", "Celery + Redis jobs"],
      outputs: ["OpenAI · LangChain", "PostgreSQL", "Pinecone"],
    },
  },
  {
    slug: "itc",
    kind: "Software platform",
    service: "software-development",
    name: "ITC",
    summary: "A real-time traffic management platform",
    focus: "Backend services & APIs",
    role: "Backend engineering — REST APIs, backend services and microservice integration for live traffic data.",
    overview:
      "ITC is a scalable traffic management platform that processes real-time traffic data from multiple traffic cameras and microservices.",
    problem:
      "Live traffic information — events, vehicle counts, congestion levels and camera metadata — arrives at high frequency from many distributed sources, and has to be aggregated and served reliably.",
    stack: ["Python", "React.js", "Redis", "Leaflet.js", "Jest", "React Testing Library"],
    link: "https://itc.city/",
    contributions: [
      "Developed a scalable traffic management platform using Python, processing real-time data from multiple traffic cameras and microservices.",
      "Designed and implemented REST APIs and backend services to aggregate and process live traffic information from distributed systems.",
      "Integrated multiple microservices to collect and synchronize traffic events, vehicle counts, congestion levels, and camera metadata.",
      "Implemented Redis caching for high-frequency real-time requests.",
      "Optimized backend services to process high-volume real-time traffic data.",
    ],
    features: [
      "Real-time traffic data processing",
      "Aggregated traffic events, vehicle counts and congestion levels",
      "Camera metadata synchronisation",
      "Redis-cached live endpoints",
    ],
    outcomes: [
      "Redis caching improved response times for high-frequency real-time requests.",
      "Backend optimisation kept API performance reliable under high-volume real-time data.",
    ],
    sketch: {
      inputs: ["Traffic cameras", "Microservices"],
      core: ["Python REST APIs", "Redis cache"],
      outputs: ["Live traffic data", "React · Leaflet map"],
    },
  },
  {
    slug: "supplier-order-management",
    kind: "Web application",
    service: "software-development",
    name: "Supplier Order Management",
    summary: "A secure ordering app with SSO and role-based access",
    focus: "Full application build",
    role: "Built the application from scratch — authentication, authorization, core modules and performance — and took part in code reviews, testing, debugging and deployment.",
    overview:
      "A scalable, responsive web application for supplier order management, built from scratch with Next.js and Tailwind CSS.",
    problem:
      "Users in different roles needed to sign in securely with their Microsoft accounts, see only what their role allows, and delegate and track work across teams.",
    stack: [
      "Next.js",
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "MSAL.js",
      "Microsoft Entra ID (Azure AD)",
    ],
    link: "https://supplierordermgmt.netlify.app/",
    screenshot: "/images/icons/Redington-nobg.png",
    contributions: [
      "Built the application from scratch using Next.js and Tailwind CSS.",
      "Implemented Single Sign-On (SSO) using Microsoft Authentication Library (MSAL) with Azure Active Directory.",
      "Designed and implemented Role-Based Access Control (RBAC) for secure, role-specific access.",
      "Developed authentication and authorization workflows, including protected routes, session management, and permission-based navigation.",
      "Designed and implemented a work delegation module to assign, reassign, and track tasks across teams.",
    ],
    features: [
      "Microsoft single sign-on",
      "Role-based access control",
      "Protected routes and permission-based navigation",
      "Work delegation: assign, reassign and track tasks",
    ],
    outcomes: [
      "Performance optimised through server-side rendering, code splitting and modern Next.js practices.",
    ],
    sketch: {
      inputs: ["Microsoft Entra ID"],
      core: ["Next.js app", "MSAL single sign-on"],
      outputs: ["Role-based access", "Work delegation"],
    },
  },
  {
    slug: "marina-mooring",
    kind: "Software platform",
    service: "software-development",
    name: "Marina Mooring",
    summary: "Mooring and berth management for marinas",
    focus: "Map features & REST APIs",
    role: "Developed and maintained the platform's interactive map features and REST APIs, working with backend services on data integration.",
    overview:
      "A marina mooring management platform that streamlines berth allocation and marina operations.",
    problem:
      "Marina operators need to see marinas, berths and vessel locations at a glance — and the map has to stay fast with large volumes of location data.",
    stack: ["Python", "React.js", "Leaflet.js", "Jest", "React Testing Library"],
    link: "https://genmoor.vercel.app",
    screenshot: "/images/icons/MoorFind.png",
    contributions: [
      "Developed and maintained a platform to streamline berth allocation and marina operations.",
      "Built interactive map-based features with Leaflet.js to visualize marinas, berths, and vessel locations.",
      "Implemented marker clustering to display and manage large volumes of location data.",
      "Integrated geospatial data and custom map layers for real-time visualization and navigation.",
      "Developed scalable REST APIs and collaborated with backend services for seamless data integration.",
    ],
    features: [
      "Interactive maps of marinas, berths and vessels",
      "Marker clustering",
      "Custom geospatial map layers",
      "Berth allocation workflows",
    ],
    outcomes: [
      "Marker clustering improved map performance and user experience with large volumes of location data.",
    ],
    sketch: {
      inputs: ["Geospatial data"],
      core: ["Leaflet map", "REST APIs"],
      outputs: ["Marker clustering", "Custom map layers"],
    },
  },
  {
    slug: "redscope",
    kind: "Desktop application",
    service: "software-development",
    name: "Redscope",
    summary: "A desktop app for documenting issue resolution",
    focus: "Frontend (Electron)",
    role: "Frontend development of the desktop application, plus code reviews, testing and Agile sprint planning.",
    overview:
      "Redscope is an Electron-based desktop application that helps developers track and document their issue-resolution workflows.",
    problem:
      "The steps a developer takes to resolve an issue are rarely recorded. Redscope helps track and document that workflow so it isn't lost.",
    stack: [
      "React.js",
      "Electron",
      "Transformers.js",
      "Web Workers",
      "Small Language Models (SLMs)",
    ],
    screenshot: "/images/icons/Redscope.png",
    contributions: [
      "Developed the frontend of an Electron-based desktop application for tracking and documenting issue-resolution workflows.",
      "Built responsive and reusable UI components using React.",
      "Participated in code reviews, testing, and Agile sprint planning.",
    ],
    features: [
      "Desktop app built on Electron",
      "Workflow tracking and documentation",
      "Reusable React component library",
    ],
    sketch: {
      inputs: ["Developer workflow"],
      core: ["Electron desktop app", "React UI"],
      outputs: ["Tracked steps", "Documentation"],
    },
  },
];

// Explainer Adda: description taken from the site's own pages (reviewed Nov 2026).
projects.push({
  slug: "explainer-adda",
  name: "Explainer Adda",
  kind: "Content platform",
  service: "content-writing",
  summary: "My content platform that explains AI, technology and more in simple language",
  focus: "Content & digital publishing",
  role: "My own platform — I plan, research, write and publish the content.",
  overview:
    "Explainer Adda is a learning platform built on one idea: explain complex topics in the simplest way possible. It publishes practical guides on AI tools, technology, online tools, digital skills and career growth, alongside explainers on current topics.",
  problem:
    "Information about technology, AI tools and everyday topics is often written for people who already understand it. Students, beginners and busy professionals need clear, practical explanations they can actually use.",
  stack: ["AI tools", "Technology", "Online tools", "Digital skills", "Career growth", "Current topics"],
  stackLabel: "Topics",
  contributionLabel: "What I do",
  contributions: [
    "Plan topics and research each article.",
    "Write guides and explainers in simple, everyday language.",
    "Publish in English and Hindi, so more readers can follow along.",
    "Structure articles for search, with clear titles, summaries and sections.",
  ],
  features: [
    "Guides to AI tools and technology",
    "Study, productivity and career content",
    "Explainers on current topics",
    "Articles in English and Hindi",
  ],
  sketch: {
    inputs: ["Research"],
    core: ["Explainer articles", "SEO-oriented writing"],
    outputs: ["Students & beginners", "Professionals"],
  },
  link: "https://explaineradda.com/",
});

// Toolkit: every skill on the resume, deduplicated into five areas.
// `core` marks the skills named in the resume's opening summary; they are
// set larger on the page.
export interface ToolkitGroup {
  id: string;
  title: string;
  label: string;
  skills: { name: string; core?: boolean }[];
  inPractice?: { label: string; to: string };
}

export const toolkit: ToolkitGroup[] = [
  {
    id: "delivery",
    title: "Delivery",
    label: "Project management",
    skills: [
      { name: "Agile", core: true },
      { name: "Project Planning", core: true },
      { name: "Stakeholder Management", core: true },
      { name: "Team Leadership", core: true },
      { name: "Scrum" },
      { name: "Sprint Planning" },
      { name: "Requirement Gathering" },
      { name: "Risk Management" },
      { name: "Resource Planning" },
      { name: "Delivery Management" },
      { name: "Cost Estimation" },
      { name: "Jira" },
      { name: "Confluence" },
    ],
    inPractice: { label: "Project Manager at Genboot", to: "/#experience" },
  },
  {
    id: "ai",
    title: "AI & LLM",
    label: "Intelligent applications",
    skills: [
      { name: "OpenAI API", core: true },
      { name: "Prompt Engineering", core: true },
      { name: "RAG", core: true },
      { name: "LangChain" },
      { name: "Embeddings" },
      { name: "Vector Search" },
      { name: "Tool Calling" },
      { name: "Pinecone" },
      { name: "Ollama" },
      { name: "Streaming APIs" },
    ],
  },
  {
    id: "backend",
    title: "Backend & Data",
    label: "Services, APIs, storage",
    skills: [
      { name: "Python", core: true },
      { name: "FastAPI", core: true },
      { name: "Django", core: true },
      { name: "RESTful APIs", core: true },
      { name: "Microservices", core: true },
      { name: "Celery" },
      { name: "PostgreSQL" },
      { name: "PGVector" },
      { name: "MySQL" },
      { name: "SQL" },
      { name: "Redis" },
    ],
  },
  {
    id: "frontend",
    title: "Frontend & UI",
    label: "Interfaces and state",
    skills: [
      { name: "React.js" },
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "JavaScript" },
      { name: "Astro.js" },
      { name: "HTML5" },
      { name: "CSS3" },
      { name: "Vanilla JavaScript" },
      { name: "jQuery" },
      { name: "Redux Toolkit" },
      { name: "RTK Query" },
      { name: "React Query" },
      { name: "Tailwind CSS" },
      { name: "Material UI" },
      { name: "Ant Design" },
      { name: "Reactstrap" },
      { name: "Bootstrap" },
      { name: "Jest" },
      { name: "React Testing Library" },
    ],
  },
  {
    id: "ops",
    title: "Cloud, DevOps & Tools",
    label: "Shipping and running it",
    skills: [
      { name: "AWS (EC2, ECS, SQS, SNS)" },
      { name: "Docker" },
      { name: "Kubernetes" },
      { name: "Linux" },
      { name: "Git" },
      { name: "DBeaver" },
      { name: "MySQL Workbench" },
    ],
  },
];

export interface EducationItem {
  degree: string;
  school: string;
  location: string;
  date: string;
  score: string;
}

export const education: EducationItem[] = [
  {
    degree: "Master of Computer Applications (MCA)",
    school: "Guru Nanak Dev University",
    location: "Amritsar, India",
    date: "May 2022",
    score: "9.17 CGPA",
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    school: "Guru Nanak Dev University",
    location: "Amritsar, India",
    date: "May 2020",
    score: "8.80 CGPA",
  },
  {
    degree: "XII (Non-Medical)",
    school: "P.S.E.B",
    location: "Amritsar, India",
    date: "May 2017",
    score: "82.6%",
  },
];
