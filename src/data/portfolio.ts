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
  // Instagram handle without the @ (e.g. "sunaina.builds"). Left empty until
  // provided; the link appears everywhere automatically once it's set.
  instagram: "",
  resume: "/Sunaina_Resume.pdf",
  availability: "Open to independent projects",
  // Hero: one positioning line (main clause set large, the rest smaller).
  headline: {
    lead: ["I", "plan,", "build", "and"],
    emphasis: "deliver",
    rest: ["software", "and", "AI", "products", "for", "businesses"],
    tail: "— and bring in the right developers when the project needs more hands.",
  },
  roleLine: ["Technical Project Manager", "Python & AI Engineer", "6+ years"],
  pitch: "I help businesses plan, build and run their software projects.",
  intro:
    "By day I'm a Project Manager at Genboot, leading software projects from planning to production. Before that I spent four years there as a Senior Software Engineer building Python backends, APIs and AI-powered applications. Independently, I take on projects for businesses: I build the parts that match my skills myself, and bring in and coordinate suitable developers for the rest.",
  replyTime: "within 24 hours",
};

// Three figures beside the hero headline. Each is backed by the resume or
// the reply time above; the case-study count is filled in from projects.
export const heroStats = [
  { value: "6+", label: "years in software", note: "Project Manager at Genboot since 2024" },
  { value: "CASE_STUDIES", label: "case studies", note: "AI, web, maps, real-time data, content" },
  { value: "24h", label: "reply time", note: "Email, WhatsApp or the form" },
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

export type ServiceTier = "core" | "network" | "extra";

export interface Service {
  id: string;
  tier: ServiceTier;
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
    tier: "core",
    letter: "A",
    title: "Project Management & Delivery",
    benefit:
      "Keep your project on scope, on schedule and on budget — with one person accountable for getting it shipped.",
    mode: "self",
    items: [
      "Running your project from kickoff to launch",
      "Turning your requirements into a clear plan and scope",
      "Planning the work in short, regular cycles (Agile sprints)",
      "Coordinating developers, designers, testers and AI engineers",
      "Regular updates on progress, risks and decisions",
      "Managing timeline, budget and delivery",
      "Coordinating testing and release",
    ],
    related: [{ label: "Experience as Project Manager", to: "/#experience" }],
  },
  {
    id: "software-development",
    tier: "core",
    letter: "B",
    title: "Software Development & Project Building",
    benefit: "Turn an idea into working software — from the first plan to a deployed product.",
    mode: "mixed",
    items: [
      "Web apps, customer portals and internal tools",
      "Backends and APIs that connect your systems",
      "Dashboards and map-based applications",
      "Secure sign-in and role-based access",
      "Taking a product from idea to deployment",
      "Technical architecture and planning",
    ],
    related: [
      { label: "Supplier Order Management", to: "/work/supplier-order-management" },
      { label: "ITC", to: "/work/itc" },
      { label: "Marina Mooring", to: "/work/marina-mooring" },
    ],
  },
  {
    id: "ai-solutions",
    tier: "core",
    letter: "C",
    title: "AI Engineering & AI Solutions",
    benefit:
      "Put AI to practical use — assistants, automation and answers based on your own documents and data.",
    mode: "self",
    items: [
      "AI assistants that draft emails, summarize meetings and suggest next steps",
      "Chatbots that answer questions from your own documents (RAG)",
      "Automating repetitive work with AI",
      "Adding AI features to an existing product (OpenAI and other models)",
      "New AI-powered applications, built from scratch",
    ],
    related: [{ label: "Sydkik — AI executive assistant", to: "/work/sydkik" }],
  },
  {
    id: "resource-connections",
    tier: "network",
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
      "Other specialized development professionals",
    ],
    note: "This is a connection and coordination service. I help you find suitable independent professionals, brief them and keep the work on track — the specialists are not my employees.",
  },
  {
    id: "content-writing",
    tier: "extra",
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
    tier: "extra",
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
    title: "Understand & scope",
    text: "Your idea, goals and requirements, turned into a clear plan with defined scope, priorities and timeline.",
  },
  {
    title: "Design the approach",
    text: "The technical approach and architecture, and the skills the project needs.",
  },
  {
    title: "Build",
    text: "I build it myself where it matches my skills, or bring in suitable developers and specialists.",
    mode: "mixed",
  },
  {
    title: "Manage & test",
    text: "Development, communication and testing — with regular updates so you always know where things stand.",
  },
  {
    title: "Launch & support",
    text: "Deployment and launch, then ongoing support or further development where agreed.",
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
  context?: string; // where the work was done, e.g. delivered at Genboot
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
    context: "Delivered as part of the Genboot team",
    kind: "AI application",
    service: "ai-solutions",
    name: "Sydkik",
    summary: "An AI-powered executive assistant",
    focus: "Backend & AI integrations",
    role: "Backend and AI engineering — backend services, OpenAI integrations and third-party API integrations, contributing to system design, code reviews and production deployments.",
    overview:
      "Sydkik is an AI-powered executive assistant that brings email, calendar and meeting workflows together and automates routine productivity tasks.",
    problem:
      "An executive's work is spread across email, calendars and meetings in both Microsoft and Google tools. The assistant needed a backend that connects to those services and uses AI to draft, suggest and summarize on the user's behalf.",
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
    context: "Delivered as part of the Genboot team",
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
      "Camera metadata synchronization",
      "Redis-cached live endpoints",
    ],
    outcomes: [
      "Redis caching improved response times for high-frequency real-time requests.",
      "Backend optimization kept API performance reliable under high-volume real-time data.",
    ],
    sketch: {
      inputs: ["Traffic cameras", "Microservices"],
      core: ["Python REST APIs", "Redis cache"],
      outputs: ["Live traffic data", "React · Leaflet map"],
    },
  },
  {
    slug: "supplier-order-management",
    context: "Delivered as part of the Genboot team",
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
    screenshot: "/images/work/supplier-order-management.png",
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
      "Performance optimized through server-side rendering, code splitting and modern Next.js practices.",
    ],
    sketch: {
      inputs: ["Microsoft Entra ID"],
      core: ["Next.js app", "MSAL single sign-on"],
      outputs: ["Role-based access", "Work delegation"],
    },
  },
  {
    slug: "marina-mooring",
    context: "Delivered as part of the Genboot team",
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
    screenshot: "/images/work/marina-mooring.png",
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
    context: "Delivered as part of the Genboot team",
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
    screenshot: "/images/work/redscope.png",
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

// Toolkit: the core skills only (the full list is in the resume PDF).
export interface ToolkitGroup {
  id: string;
  title: string;
  label: string;
  skills: string[];
  inPractice?: { label: string; to: string };
}

export const toolkit: ToolkitGroup[] = [
  {
    id: "delivery",
    title: "Delivery",
    label: "Project management",
    skills: ["Agile & Scrum", "Sprint planning", "Stakeholder management", "Risk management", "Jira & Confluence"],
    inPractice: { label: "Project Manager at Genboot", to: "/#experience" },
  },
  {
    id: "ai",
    title: "AI & LLM",
    label: "Intelligent applications",
    skills: ["OpenAI API", "LangChain", "RAG", "Prompt engineering", "Pinecone"],
  },
  {
    id: "backend",
    title: "Backend & Data",
    label: "Services, APIs, storage",
    skills: ["Python", "FastAPI", "Django", "REST APIs", "PostgreSQL", "Redis"],
  },
  {
    id: "frontend",
    title: "Web & Cloud",
    label: "Interfaces and shipping",
    skills: ["React", "Next.js", "TypeScript", "AWS", "Docker"],
  },
];

// Shown as one line under Employment.
export const education = [
  { degree: "MCA", school: "Guru Nanak Dev University", year: "2022" },
  { degree: "BCA", school: "Guru Nanak Dev University", year: "2020" },
];
