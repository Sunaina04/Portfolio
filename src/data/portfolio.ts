// Single source of truth for portfolio content. Everything here comes from
// public/Sunaina_Resume.pdf — update both together.

export const profile = {
  name: "Sunaina",
  title: "Technical Project Manager & Software Engineer",
  company: "Genboot",
  location: "Mohali, India",
  email: "sunainatakhi64@gmail.com",
  phone: "+91 82849 48195",
  linkedin: "https://www.linkedin.com/in/sunaina-ruhaniat-01a650207/",
  resume: "/Sunaina_Resume.pdf",
  summary:
    "6+ years of experience leading software projects from planning to production and designing scalable backend applications with Python, FastAPI, and Django.",
  about: [
    "I lead software projects end to end — from gathering requirements and defining scope with clients, through sprint planning, estimation and resource allocation, to production releases and post-deployment support. I coordinate cross-functional teams across frontend, backend, QA, UI/UX and AI engineering.",
    "My background is hands-on engineering. Before moving into project management, I spent four years as a Senior Software Engineer building RESTful APIs, microservices and distributed systems with Python, FastAPI and Django, and AI-powered applications with OpenAI APIs, LangChain and Retrieval-Augmented Generation (RAG).",
  ],
  focusAreas: [
    "Agile Delivery",
    "Python & FastAPI",
    "AI & LLM Integrations",
    "RESTful APIs",
    "Stakeholder Management",
    "Microservices",
  ],
};

export const highlights = [
  { value: "6+", label: "Years in software" },
  { value: "4", label: "Years as Senior Software Engineer" },
  { value: "5", label: "Featured projects" },
  { value: "9.17", label: "MCA CGPA" },
];

export interface Role {
  title: string;
  company: string;
  location: string;
  period: string;
  current?: boolean;
  points: string[];
}

export const experience: Role[] = [
  {
    title: "Project Manager",
    company: "Genboot",
    location: "Mohali, India",
    period: "April 2024 – Present",
    current: true,
    points: [
      "Lead end-to-end delivery of multiple software projects from planning to production.",
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
    period: "May 2020 – April 2024",
    points: [
      "Developed scalable backend applications using Python, FastAPI, and Django.",
      "Designed and implemented RESTful APIs, microservices, and distributed systems.",
      "Built AI-powered applications using OpenAI APIs, Prompt Engineering, LangChain, and Retrieval-Augmented Generation (RAG).",
      "Developed high-performance backend services using PostgreSQL, Redis, and Celery.",
      "Collaborated with cross-functional teams to deliver scalable software solutions.",
      "Conducted code reviews, testing, debugging, and continuous performance improvements.",
      "Contributed to system architecture, production deployments, and technical documentation.",
    ],
  },
];

export type PmIcon =
  | "agile"
  | "stakeholders"
  | "estimation"
  | "resources"
  | "tracking"
  | "risk"
  | "teams"
  | "releases";

export const pmCompetencies: { icon: PmIcon; title: string; text: string }[] = [
  {
    icon: "agile",
    title: "Agile & Scrum",
    text: "Drive sprint planning, stand-ups, reviews and retrospectives.",
  },
  {
    icon: "stakeholders",
    title: "Stakeholder Management",
    text: "Gather requirements, define scope and translate business needs into technical solutions.",
  },
  {
    icon: "estimation",
    title: "Estimation",
    text: "Effort and cost estimation for project planning.",
  },
  {
    icon: "resources",
    title: "Resource Allocation",
    text: "Plan and allocate team capacity across multiple projects.",
  },
  {
    icon: "tracking",
    title: "Delivery Tracking",
    text: "Monitor progress and ensure timely milestone delivery.",
  },
  {
    icon: "risk",
    title: "Risk Management",
    text: "Monitor project progress and manage risks to keep milestones on track.",
  },
  {
    icon: "teams",
    title: "Cross-functional Teams",
    text: "Coordinate frontend, backend, QA, UI/UX and AI engineers.",
  },
  {
    icon: "releases",
    title: "Releases & Support",
    text: "Client status updates, production releases and post-deployment support.",
  },
];

export interface Project {
  name: string;
  summary: string;
  focus: string;
  stack: string[];
  contributions: string[];
  link?: string;
  image?: string;
}

export const projects: Project[] = [
  {
    name: "Sydkik",
    summary: "AI-powered executive assistant",
    focus: "Backend & AI integrations",
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
      "Implemented notification services, task automation, and secure API integrations while contributing to system design, code reviews, and production deployments.",
    ],
  },
  {
    name: "ITC",
    summary: "Real-time traffic management platform",
    focus: "Backend services & APIs",
    stack: ["Python", "React.js", "Redis", "Leaflet.js", "Jest", "React Testing Library"],
    link: "https://itc.city/",
    contributions: [
      "Developed a scalable traffic management platform using Python, processing real-time traffic data from multiple traffic cameras and microservices.",
      "Designed and implemented REST APIs and backend services to aggregate and process live traffic information from distributed systems.",
      "Integrated multiple microservices to collect and synchronize traffic events, vehicle counts, congestion levels, and camera metadata.",
      "Implemented Redis caching to improve response times and handle high-frequency real-time requests.",
      "Optimized backend services to process high-volume real-time traffic data while ensuring reliable API performance.",
    ],
  },
  {
    name: "Supplier Order Management",
    summary: "Supplier ordering web app with SSO and role-based access",
    focus: "Full application build",
    stack: [
      "Next.js",
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "MSAL.js",
      "Microsoft Entra ID (Azure AD)",
    ],
    link: "https://supplierordermgmt.netlify.app/",
    image: "/images/icons/Redington-nobg.png",
    contributions: [
      "Built the application from scratch using Next.js and Tailwind CSS.",
      "Implemented Single Sign-On (SSO) using Microsoft Authentication Library (MSAL) with Azure Active Directory.",
      "Designed and implemented Role-Based Access Control (RBAC) for role-specific access across the application.",
      "Developed authentication and authorization workflows, including protected routes, session management, and permission-based navigation.",
      "Designed and implemented a work delegation module to assign, reassign, and track tasks across teams.",
      "Optimized performance through server-side rendering, code splitting, and modern Next.js best practices.",
    ],
  },
  {
    name: "Marina Mooring",
    summary: "Marina mooring and berth management platform",
    focus: "Map features & REST APIs",
    stack: ["Python", "React.js", "Leaflet.js", "Jest", "React Testing Library"],
    link: "https://genmoor.vercel.app",
    image: "/images/icons/Moorfind.png",
    contributions: [
      "Developed and maintained a platform to streamline berth allocation and marina operations.",
      "Built interactive map features with Leaflet.js to visualize marinas, berths, and vessel locations.",
      "Implemented marker clustering to manage large volumes of location data while improving map performance.",
      "Integrated geospatial data and custom map layers to support real-time visualization and navigation.",
      "Developed scalable REST APIs and collaborated with backend services for seamless data integration.",
    ],
  },
  {
    name: "Redscope",
    summary: "Desktop app for tracking and documenting issue resolution",
    focus: "Frontend (Electron)",
    stack: [
      "React.js",
      "Electron",
      "Transformers.js",
      "Web Workers",
      "Small Language Models (SLMs)",
    ],
    image: "/images/icons/Redscope.png",
    contributions: [
      "Developed the frontend of an Electron-based desktop application that helps developers track and document issue resolution workflows.",
      "Built responsive, reusable UI components using React.",
      "Participated in code reviews, testing, and Agile sprint planning.",
    ],
  },
];

export interface SkillGroup {
  title: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: "Project Management",
    skills: [
      "Agile",
      "Scrum",
      "Jira",
      "Confluence",
      "Sprint Planning",
      "Project Planning",
      "Stakeholder Management",
      "Requirement Gathering",
      "Risk Management",
      "Resource Planning",
      "Delivery Management",
      "Cost Estimation",
      "Team Leadership",
    ],
  },
  {
    title: "AI & LLM",
    skills: [
      "OpenAI API",
      "LangChain",
      "Prompt Engineering",
      "RAG",
      "Embeddings",
      "Vector Search",
      "Tool Calling",
      "Pinecone",
      "Ollama",
      "Streaming APIs",
    ],
  },
  {
    title: "Backend",
    skills: ["Python", "FastAPI", "Django", "RESTful APIs", "Celery", "Microservices"],
  },
  {
    title: "Languages",
    skills: ["Python", "JavaScript", "TypeScript", "HTML5", "CSS3"],
  },
  {
    title: "Frontend",
    skills: [
      "React.js",
      "Next.js",
      "Astro.js",
      "Vanilla JavaScript",
      "jQuery",
      "React Query",
      "React Testing Library",
      "Jest",
    ],
  },
  {
    title: "State Management",
    skills: ["Redux Toolkit", "RTK Query", "React Query"],
  },
  {
    title: "UI Libraries",
    skills: ["Tailwind CSS", "Material UI", "Ant Design", "Reactstrap", "Bootstrap"],
  },
  {
    title: "Databases & Caching",
    skills: ["PostgreSQL", "PGVector", "MySQL", "SQL", "Redis"],
  },
  {
    title: "Cloud & DevOps",
    skills: ["AWS (EC2, ECS, SQS, SNS)", "Docker", "Kubernetes", "Linux"],
  },
  {
    title: "Tools",
    skills: ["Git", "DBeaver", "MySQL Workbench"],
  },
];

export interface EducationItem {
  degree: string;
  school: string;
  location: string;
  date: string;
  score: string;
  icon: string;
}

export const education: EducationItem[] = [
  {
    degree: "Master of Computer Applications (MCA)",
    school: "Guru Nanak Dev University",
    location: "Amritsar, India",
    date: "May 2022",
    score: "9.17 CGPA",
    icon: "/images/icons/gndu.png",
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    school: "Guru Nanak Dev University",
    location: "Amritsar, India",
    date: "May 2020",
    score: "8.80 CGPA",
    icon: "/images/icons/gndu.png",
  },
  {
    degree: "XII (Non-Medical)",
    school: "P.S.E.B",
    location: "Amritsar, India",
    date: "May 2017",
    score: "82.6%",
    icon: "/images/icons/school.jpeg",
  },
];
