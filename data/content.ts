export type Project = { title: string; subtitle: string; keywords: string[]; images: string[]; summary: string; points: string[]; link: string };
export type Job = { title: string; org: string; date: string; points: string[] };

/* ===== PROYEK: tambah/ubah di sini. images = path di /public, mis. "/img/proyek1-a.png" ===== */

export const projects: Project[] = [
  {
    title: "IT Performance Monitoring Dashboard",
    subtitle: "Watsons Indonesia | Academic Project",
    keywords: ["Power BI", "IT Balanced Scorecard", "KPI"],
    images: ["/img/dashboard-1.png", "/img/dashboard-2.png", "/img/dashboard-3.png"],
    summary:
      "Developed an interactive IT performance dashboard using the IT Balanced Scorecard framework to monitor KPIs, operational trends, and strategic IT performance.",
    points: [
      "IT performance and KPI visualization",
      "Operational and customer metrics monitoring",
      "Strategic performance evaluation"
    ],
    link: "https://intip.in/DashboardMonitoringWatsons"
  },
  {
    title: "Academic Data Warehouse & ETL Pipeline",
    subtitle: "Academic Information System | Individual Project",
    keywords: ["Python", "MySQL", "ETL", "Star Schema"],
    images: ["/img/dwh-1.png"],
    summary:
      "Designed a dimensional data warehouse and ETL pipelines to transform academic transactional data into structured datasets for analytical reporting.",
    points: [
      "Star schema and dimensional data modeling",
      "Historical and incremental ETL pipelines",
      "Source-to-target mapping and metadata tracking"
    ],
    link: "https://intip.in/AcademicDWH"
  },
  {
    title: "Budget Buddy – Software Requirements Specification",
    subtitle: "Personal Finance Application | Academic Project",
    keywords: ["Business Analysis", "SRS", "Requirements Engineering"],
    images: ["/img/srs.png"],
    summary:
      "Conducted business analysis and requirements elicitation for a personal finance application, translating user needs into structured software specifications.",
    points: [
      "Functional and non-functional requirements",
      "Use case analysis and system specifications",
      "Software Requirements Specification documentation"
    ],
    link: "https://intip.in/BudgetBuddy"
  },
  {
    title: "Petrotechnical Application Dashboard",
    subtitle: "PT Pertamina Hulu Rokan | Internship Project",
    keywords: ["Power BI", "Power Query", "Data Modeling"],
    images: [],
    summary:
      "Developed a centralized dashboard to monitor petrotechnical software applications, utilization, licensing, and budget planning across regional operations.",
    points: [
      "Monitoring of 25+ applications and 180+ users",
      "Data cleansing and relational data modeling",
      "Interactive software utilization and licensing analytics"
    ],
    link: "#"
  },
  {
    title: "Multi-Algorithm Cycling Route Optimization",
    subtitle: "Surabaya Historical Tourism | Academic Project",
    keywords: [
      "Python",
      "Route Optimization",
      "ACO",
      "SA",
      "PSO",
      "GA",
      "Optuna"
    ],
    images: ["/img/sc-1.jpeg"],
    summary:
      "Developed and compared four metaheuristic algorithms to optimize cycling routes across 31 locations in Surabaya, balancing travel distance, elevation constraints, and cyclist fatigue.",
    points: [
      "Implemented ACO, SA, PSO, and GA with Optuna-based hyperparameter tuning",
      "Modeled real-world road distances, elevation constraints, and cyclist fatigue",
      "Achieved the shortest route of 85.06 km using ACO, with the lowest overall fitness score"
    ],
    link: "https://intip.in/RouteOptProject"
  },
  {
    title: "Electricity Consumption Forecasting",
    subtitle: "Time Series Analytics | Academic Project",
    keywords: ["Python", "LightGBM", "LSTM", "XGBoost"],
    images: ["/img/forecast-1.png"],
    summary:
      "Developed and evaluated machine learning models to forecast electricity consumption using time series analysis and ensemble learning.",
    points: [
      "Time series preprocessing and feature engineering",
      "LightGBM, XGBoost, and ensemble LSTM modeling",
      "Forecast evaluation using RMSE"
    ],
    link: "https://intip.in/ElectricityForecasting"
  },
  {
    title: "IT Risk Management Analysis",
    subtitle: "Government Internal Audit | Academic Project",
    keywords: ["ISO 31000", "Risk Management", "IT Governance"],
    images: ["/img/risk-1.png"],
    summary:
      "Analyzed IT and operational risks within a government internal audit institution using the ISO 31000 risk management framework.",
    points: [
      "IT risk identification and assessment",
      "Asset and operational risk analysis",
      "Risk mitigation and governance planning"
    ],
    link: "https://intip.in/RiskManagementAnalysis"
  },
  {
    title: "StreamIn – Subscription Management System",
    subtitle: "Full-Stack Development | Academic Project",
    keywords: ["Laravel", "Database", "CRUD", "System Design"],
    images: [],
    summary:
      "Developed a full-stack platform for managing streaming subscriptions, integrating service packages, payment workflows, and centralized account management.",
    points: [
      "Database and application architecture",
      "Authentication, CRUD, and payment workflows",
      "Centralized subscription management"
    ],
    link: "https://intip.in/StreamInFullStack"
  },
  {
    title: "Stream.in – UI/UX Design",
    subtitle: "Streaming Subscription Platform | Academic Project",
    keywords: ["Figma", "UI/UX", "Prototyping", "Usability Testing"],
    images: [],
    summary:
      "Designed an end-to-end user experience for a streaming subscription platform, from initial wireframes to interactive prototypes and usability evaluation.",
    points: [
      "User flows and interface wireframing",
      "Low- and high-fidelity prototyping",
      "Usability testing and design evaluation"
    ],
    link: "https://intip.in/UIUXDesignStreamIn"
  },
  {
    title: "Champify – E-Learning & Achievement Platform",
    subtitle: "Mobile Application | Academic Project",
    keywords: ["Flutter", "Supabase", "BaaS", "Mobile Development"],
    images: [],
    summary:
      "Developed a mobile learning and achievement platform integrating educational content, interactive quizzes, and competition tracking.",
    points: [
      "Supabase-based relational data management",
      "Interactive quizzes with automated scoring",
      "Learning progress and competition tracking"
    ],
    link: "https://intip.in/Champify"
  }
];


export const jobs: Job[] = [
  { title: "Enterprise Architecture", org: "PT Pelabuhan Indonesia (Persero)", date: "Jul 2026 – Present", points: [
    "Mapped enterprise applications, business functions, and technology infrastructure across on-premises and cloud environments.",
    "Supported cloud operations and application deployments across GCP, OCI, and Alibaba Cloud, including Kubernetes and CI/CD configurations.",
    "Analyzed cloud billing and resource utilization data to support cost monitoring and infrastructure management."] },
  { title: "Information Management & Data Analytics", org: "PT Pertamina Hulu Rokan Regional 1", date: "Jan – Feb 2026", points: [
    "Developed a Power BI dashboard to monitor 25+ software applications used by 180+ users.",
    "Transformed and modeled operational data using Power Query to improve data consistency and reporting.",
    "Built interactive visualizations to support software utilization and licensing analysis."] },
  { title: "Database Analysis Teaching Assistant", org: "Information Systems ITS", date: "Sep – Des 2025", points: [
    "Facilitated practical sessions on database analysis and PL/pgSQL programming.",
    "Guided students in implementing database functions, triggers, procedures, and transactions."] },
];

export const stack: [string, string[]][] = [
  ["Data & analitik", ["Python", "SQL", "PL/pgSQL", "Power BI", "Power Query", "Data modeling"]],
  ["Data warehouse", ["Star schema", "ETL", "Source-to-target mapping", "Metadata"]],
  ["Cloud & infrastruktur", ["GCP", "OCI", "Alibaba Cloud", "Kubernetes", "kubectl", "Git"]],
  ["Bisnis & enterprise", ["Business process analysis", "IT Balanced Scorecard", "SRS", "SAP S/4HANA"]],
];
