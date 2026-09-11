export const personalInfo = {
  name: "Christian James D. Garcia",
  shortName: "Christian James",
  initials: "CJG",
  title: "Full-stack web and app developer",
  kicker: "WEB DEVELOPER / APP DEVELOPER",
  tagline: "BSIT student at Innovative College of Science and Technology building full-stack web and app systems that solve real problems for businesses and communities.",
  email: "c537640@gmail.com",
  github: "https://github.com/christian-james-garcia",
  facebook: "https://facebook.com/christianjamescjcj",
  linkedinPlaceholder: "LinkedIn profile pending setup",
  degree: "Bachelor of Science in Information Technology (BSIT)",
  school: "Innovative College of Science and Technology",
  yearLevel: "4th-year BSIT student",
  gradYear: "2027",
  photo: "/asset/forresume.png",
  stats: [
    { value: "03", label: "SYSTEMS BUILT" },
    { value: "2027", label: "EXPECTED GRAD" },
    { value: "ICST", label: "INSTITUTION" }
  ]
};

export const aboutData = {
  kicker: "ABOUT ME",
  heading: "A builder, not just a coder.",
  paragraphs: [
    "I am Christian James, a 4th-year BSIT student at Innovative College of Science and Technology, set to graduate in 2027. I build full-stack web and app systems and I am genuinely curious about applied AI. I take messy real-world problems — the kind that come with spreadsheets, phone calls, and paperwork — and turn them into software people actually use.",
    "Hands-on builds like inventory, booking, and logistics systems have taught me that the best software starts with understanding the user day-to-day life."
  ],
  careerGoal: {
    label: "CAREER GOAL",
    text: "Grow into a full-stack developer who ships AI-augmented tools for small businesses and local government."
  },
  quickFacts: [
    { label: "DEGREE", value: "BSIT - 4th year" },
    { label: "SCHOOL", value: "Innovative College of Science & Technology" },
    { label: "GRADUATION", value: "Expected 2027" },
    { label: "FOCUS", value: "Web & app development + applied AI" },
    { label: "ROLE", value: "Capstone researcher & full-stack dev" }
  ],
  badge: "Full-stack developer"
};

export const skillCategories = [
  {
    code: "S-01",
    title: "Languages",
    description: "Core programming and scripting foundations",
    skills: ["JavaScript", "PHP", "Java", "Python", "C#"]
  },
  {
    code: "W-02",
    title: "Web & Frontend",
    description: "Modern component-based user interfaces and styling",
    skills: ["React", "Tailwind", "Framer Motion", "HTML / CSS", "Bootstrap", "Laravel"]
  },
  {
    code: "D-03",
    title: "Data & Backend",
    description: "Robust data architectures, relational & NoSQL stores",
    skills: ["SQL Server", "MongoDB", "Node.js", "REST APIs", "MySQL", "PostgreSQL"]
  },
  {
    code: "T-04",
    title: "Tools & Workflow",
    description: "Version control, IDE, and modern design tools",
    skills: ["Git / GitHub", "VS Code", "Figma", "Canva"]
  }
];

export const projectFilterCategories = [
  "All",
  "Capstone",
  "Web",
  "Mobile",
  "Database",
  "UI/UX"
];

export const projectsData = [
  {
    id: "gigi-fashion",
    number: "01",
    codeName: "GIGI",
    title: "Gigi Fashion",
    subtitle: "Inventory Management System",
    category: "Web",
    secondaryCategories: ["Database"],
    description: "Stock tracking, purchase orders, and low-stock alerts engineered for a fast-paced retail clothing business.",
    technologies: ["React", "SQL Server", "Tailwind"],
    hasLiveDemo: false,
    hasGithub: false,
    accentColor: "#C4481F"
  },
  {
    id: "kamada",
    number: "02",
    codeName: "KAMADA",
    title: "Kamada",
    subtitle: "Hotel Management System",
    category: "Web",
    secondaryCategories: ["Database", "UI/UX"],
    description: "Room bookings, guest check-in/out, billing calculations, and housekeeping scheduling unified in one responsive dashboard.",
    technologies: ["React", "MongoDB", "Framer Motion"],
    hasLiveDemo: false,
    hasGithub: false,
    accentColor: "#D96839"
  },
  {
    id: "logistiwaste",
    number: "03",
    codeName: "LOGI",
    title: "Logistiwaste",
    subtitle: "Waste Logistics & Recycling",
    category: "Web",
    secondaryCategories: ["Database"],
    description: "Collection scheduling, route planning, and recycling credit tracking connecting haulers, administrators, and households.",
    technologies: ["React", "SQL Server", "Node.js"],
    hasLiveDemo: false,
    hasGithub: false,
    accentColor: "#8A7A68"
  },
  {
    id: "ibosys-card",
    number: "04",
    codeName: "IBOSYS",
    title: "Ibosys",
    subtitle: "Interactive Bongabong Ordinance System",
    category: "Capstone",
    secondaryCategories: ["Web", "Database"],
    description: "A centralized ordinance library, public search portal, and compliance tracking platform for the Municipality of Bongabong.",
    technologies: ["React", "SQL Server", "Node.js", "Research"],
    hasLiveDemo: false,
    hasGithub: false,
    accentColor: "#C4481F"
  }
];

export const capstoneData = {
  kicker: "FEATURED CAPSTONE",
  title: "Ibosys - Interactive Bongabong Ordinance System",
  meta: "FULL-STACK | RESEARCH | PUBLIC SECTOR",
  description: "My capstone as researcher and full-stack developer: an ordinance library and monitoring system for the Municipality of Bongabong — search, archive, publish, and track local ordinances digitally instead of filing cabinets.",
  problem: "Paper ordinance records are hard to find, verify, and monitor.",
  objective: "Digitize, standardize, and surface local legislation.",
  impact: "Faster lookup for the public and the municipal office.",
  results: "Digitized the ordinance lifecycle end-to-end and proved a reusable template for small-town governance systems.",
  keyModules: [
    "+ Ordinance library",
    "+ Search & filter",
    "+ Publish / archive",
    "+ Reports & monitoring"
  ],
  erdTables: [
    {
      name: "ordinances",
      fields: ["id (PK)", "title", "number", "category_id (FK)", "status", "date_enacted", "full_text"]
    },
    {
      name: "categories",
      fields: ["id (PK)", "name", "slug", "parent_id (FK)", "description"]
    },
    {
      name: "users",
      fields: ["id (PK)", "name", "email", "role (Admin/Staff/Public)", "department", "created_at"]
    }
  ]
};

export const experienceData = {
  kicker: "EXPERIENCE",
  heading: "Where I have applied the craft",
  ojtNotice: {
    title: "Professional Experience / OJT",
    status: "Coming Soon",
    description: "Formal OJT details will be added once internship placement begins in 2026/2027. Currently channeling technical skills into civic research, open projects, and operational systems."
  },
  timeline: [
    {
      period: "2026 - 2027",
      title: "Capstone Researcher & Full-stack Developer",
      organization: "Innovative College of Science and Technology | Ibosys project",
      description: "Researched the problem space and built the interactive ordinance system end-to-end — from database design to the UI — while documenting the study for research.",
      tags: ["React", "SQL Server", "Research", "Node.js"]
    },
    {
      period: "2023 - Present",
      title: "Class Officer - Auditor",
      organization: "BSIT Class | ICST",
      description: "Kept the class budget honest — managing records, receipts, and audits. Learned accountability, attention to detail, and clear communication under pressure.",
      tags: ["Financial Records", "Audits", "Integrity"]
    },
    {
      period: "2024 - 2026",
      title: "System Builds Team / Solo Dev",
      organization: "Gigi Fashion · Kamada · Logistiwaste",
      description: "Designed and developed three working systems covering inventory, hotel booking, and waste logistics — scoping requirements from real processes.",
      tags: ["React", "MongoDB", "SQL Server", "Node.js"]
    }
  ]
};

export const certificationsData = [
  {
    badgeNumber: "01",
    title: "IT Customer Support Basics",
    issuer: "Cisco",
    issueDate: "Verified Credential",
    url: "https://www.credly.com/badges/481ac85a-6268-44e3-aa50-0f4626671249/public_url",
    image: "https://images.credly.com/images/474a03c6-b5e1-44df-b313-adf0fed6c531/linkedin_thumb_blob",
    skills: ["Customer Support", "Troubleshooting", "Help Desk"]
  },
  {
    badgeNumber: "02",
    title: "Introduction to Modern AI",
    issuer: "Cisco",
    issueDate: "Verified Credential",
    url: "https://www.credly.com/badges/694c900d-e3d5-4a8c-8bbb-16ab090ea148/public_url",
    image: "https://images.credly.com/images/e2d12302-10f9-40d4-8ff1-066a7008b61d/linkedin_thumb_blob",
    skills: ["Modern AI", "Neural Networks", "AI Concepts"]
  },
  {
    badgeNumber: "03",
    title: "Hardware and Upgrade Support",
    issuer: "Cisco",
    issueDate: "Verified Credential",
    url: "https://www.credly.com/badges/63dd3dc1-6729-4798-81cf-4a3c8421c956/public_url",
    image: "https://images.credly.com/images/94cbdf0d-3e44-44b2-b213-866fe22aa7d5/linkedin_thumb_blob",
    skills: ["Hardware Support", "System Upgrades", "Maintenance"]
  },
  {
    badgeNumber: "04",
    title: "AI Fundamentals: Foundations for Understanding AI",
    issuer: "IBM SkillsBuild",
    issueDate: "Verified Credential",
    url: "https://www.credly.com/badges/feea6794-2bee-4591-b1ac-f219a29fea7d/public_url",
    image: "https://images.credly.com/images/e0644ccc-dd87-4e27-82e4-0facf461cd1f/linkedin_thumb_AI_20Fundamentals_20Foundations_20for_20Understanding_20AI.png",
    skills: ["AI Foundations", "Machine Learning", "IBM Credentials"]
  },
  {
    badgeNumber: "05",
    title: "AI Fundamentals: Foundations for Understanding AI",
    issuer: "Cisco (in collaboration with IBM SkillsBuild)",
    issueDate: "Verified Credential",
    url: "https://www.credly.com/badges/e127899f-7d0a-4cc1-b173-64665c0f3a1d/public_url",
    image: "https://images.credly.com/images/fa29f782-3029-44f9-9fb1-631c3278a68a/linkedin_thumb_blob",
    skills: ["AI Foundations", "Machine Learning", "Cisco & IBM"]
  }
];

export const achievementsData = [
  {
    number: "01",
    title: "Capstone Researcher",
    description: "Led research and documentation for Ibosys — defining the problem, methodology, and evidence the system solves it for municipal governance."
  },
  {
    number: "02",
    title: "Leadership — Class Officer (Auditor)",
    description: "Elected auditor of the BSIT class: managed financial records, receipts, budget transparency, and audits with integrity."
  },
  {
    number: "03",
    title: "Three systems, real operations",
    description: "Shipped inventory, hotel, and logistics systems modeled on genuine business workflows and practical operational requirements."
  },
  {
    number: "04",
    title: "Research-Driven Problem Solving",
    description: "Bridged technical implementation with formal methodology to ensure software addresses real user pain points."
  }
];

export const educationData = {
  degree: "Bachelor of Science in Information Technology (BSIT)",
  school: "Innovative College of Science and Technology",
  period: "2023 – 2027 (expected)",
  badge: "GRADUATING 2027",
  details: "Focused on full-stack web and app engineering, database architecture, systems analysis, and applied artificial intelligence."
};
