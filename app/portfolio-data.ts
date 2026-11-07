export const skills = {
  "Payment systems": [
    "PowerCARD",
    "ISO 8583",
    "BASE24",
    "ATM and POS switching",
    "Authorization, advice and reversals",
    "Settlement and reconciliation",
    "Visa and Mastercard integrations"
  ],
  "Data and streaming": [
    "Oracle SQL and PL/SQL",
    "Oracle GoldenGate and CDC",
    "Transactional outbox",
    "Apache Kafka",
    "Avro",
    "librdkafka"
  ],
  "Payment security": [
    "HSM integration",
    "TR-31 key blocks",
    "PIN and MAC processing",
    "mTLS and MLE",
    "SASL and Kerberos"
  ],
  "Backend and delivery": [
    "C and Pro*C",
    "Java and Spring Boot",
    "Spring Integration",
    "Python and FastAPI",
    "C# and ASP.NET Core",
    "Docker, Jenkins and GitHub Actions",
    "Linux, Unix and CMake"
  ],
  "Web and AI": [
    "TypeScript",
    "Next.js and React",
    "Angular",
    "Tailwind CSS",
    "Vercel AI SDK and OpenAI APIs",
    "Mastra, MCP and RAG",
    "Langfuse",
    "VS Code Extension API"
  ],
  "Languages": [
    "Java",
    "Python",
    "JavaScript",
    "TypeScript",
    "PHP",
    "C",
    "C++",
    "C#",
    "SQL",
    "PL/SQL"
  ],
  "Frameworks": [
    "Spring Boot",
    "Spring Security",
    "Spring Integration",
    ".NET",
    "Node.js",
    "Symfony",
    "Laravel",
    "React.js",
    "Next.js",
    "Angular",
    "Vue.js",
    "Bootstrap",
    "Tailwind CSS"
  ],
  "Databases": [
    "PostgreSQL",
    "MySQL",
    "MongoDB",
    "RocksDB",
    "Firebase",
    "Supabase",
    "Prisma",
    "Transact SQL"
  ],
  "Tools": [
    "Git",
    "GitHub",
    "Bitbucket",
    "Docker",
    "AWS",
    "Ngrok",
    "CI/CD",
    "Maven",
    "Gradle",
    "Jira",
    "Trello"
  ],
  "DevOps": [
    "Docker",
    "Kubernetes",
    "CI/CD Pipelines",
    "AWS"
  ],
  "Platforms": [
    "Vercel",
    "Firebase",
    "Supabase"
  ],
  "Design": [
    "Figma",
    "Photoshop",
    "Adobe Illustrator",
    "Adobe Premiere",
    "Adobe Audition",
    "Audacity"
  ],
  "Auth": [
    "JWT Authentication",
    "Clerk"
  ],
  "IDEs": [
    "IntelliJ IDEA",
    "Visual Studio Code",
    "Visual Studio",
    "OpenLens"
  ],
  "Certifications": [
    "Docker, Kubernetes, and Containers",
    "DevOps Fundamentals",
    "React Native",
    "Git and GitHub",
    "Virtual Networks (Azure)",
    "React (Meta)",
    "ASP.NET Fundamentals",
    "Python For Everybody",
    "Modeling Software Systems using UML",
    "Unix System Basics"
  ]
}

interface TimelineProject {
  title: string
  description: string
  tags: string[]
  date?: string
  label?: string
  link?: string
  image?: string
}

export const timeline: [string, TimelineProject[]][] = [
  [
    "2026",
    [
      {
        "title": "ATM PIN and transaction security",
        "description": "Worked on ATM PIN and withdrawal processing and MAC validation across C interfaces and PowerCARD Switch.",
        "tags": [
          "C",
          "ATM",
          "HSM",
          "MAC"
        ],
        "date": "2026-09",
        "label": "Sep – Oct 2026"
      },
      {
        "title": "Multi-interface payment gateway",
        "description": "Worked on independent payment interfaces and host message routing for a multi-channel gateway.",
        "tags": [
          "C",
          "PowerCARD",
          "ISO 8583"
        ],
        "date": "2026-07",
        "label": "Jul 2026"
      },
      {
        "title": "Card-management API integration",
        "description": "Integrated card-management services across Java APIs and PowerCARD database flows.",
        "tags": [
          "Java",
          "Spring Boot",
          "PL/SQL"
        ],
        "date": "2026-06",
        "label": "Jun – Aug 2026"
      },
      {
        "title": "OmniMemory",
        "description": "VS Code extension that captures engineering context from conversations and Git, generates structured memory cards and indexes them locally.",
        "link": "https://github.com/YahyaSaadaoui/OmniMemory",
        "tags": [
          "TypeScript",
          "VS Code Extension API",
          "SQLite",
          "OpenAI APIs"
        ],
        "date": "2026-06"
      },
      {
        "title": "Oracle CDC and Kafka data products",
        "description": "Built event outbox and change-data-capture flows, aligned Kafka and Avro contracts, and prepared rerunnable migrations and recovery scripts.",
        "tags": [
          "Oracle",
          "PL/SQL",
          "Kafka",
          "Avro",
          "CDC"
        ],
        "date": "2026-05",
        "label": "May – Oct 2026"
      },
      {
        "title": "Acquiring UI and Maker/Checker",
        "description": "Worked on merchant acquiring screens and Maker/Checker approval workflows.",
        "tags": [
          "Angular",
          "TypeScript",
          "PowerCARD"
        ],
        "date": "2026-04",
        "label": "Apr – Jul 2026"
      },
      {
        "title": "BASE24 and ATM/POS switching",
        "description": "Diagnosed and corrected ATM and POS processing across authorization, advice and reversal flows.",
        "tags": [
          "C",
          "BASE24",
          "ISO 8583"
        ],
        "date": "2026-04",
        "label": "Apr – Jun 2026"
      },
      {
        "title": "Payment notification rollout",
        "description": "Adapted and deployed an existing Kafka notification integration for a second banking environment.",
        "tags": [
          "Kafka",
          "PL/SQL",
          "Unix"
        ],
        "date": "2026-03",
        "label": "Mar – Apr 2026"
      },
      {
        "title": "Host interfaces and TR-31 key handling",
        "description": "Worked on host messaging, TR-31 support and notification processing performance.",
        "tags": [
          "Pro*C",
          "HSM",
          "TR-31",
          "PL/SQL"
        ],
        "date": "2026-02",
        "label": "Feb – Aug 2026"
      },
      {
        "title": "ExpensesTracker",
        "description": "Personal finance dashboard with transaction tracking, reporting, charts and spreadsheet import and export.",
        "link": "https://github.com/YahyaSaadaoui/ExpensesTracker",
        "tags": [
          "Next.js",
          "React",
          "TypeScript",
          "Supabase",
          "Recharts"
        ],
        "date": "2026-01"
      },
      {
        "title": "Nettimer",
        "description": "Automation project for scheduled extraction, processing and notifications.",
        "link": "https://github.com/YahyaSaadaoui/Nettimer",
        "tags": [
          "Python",
          "Playwright"
        ],
        "date": "2026-01"
      }
    ]
  ],
  [
    "2025",
    [
      {
        "title": "Kafka notifications for PowerCARD",
        "description": "Integrated Kafka notification delivery and adapted the implementation across PowerCARD environments.",
        "tags": [
          "Pro*C",
          "PL/SQL",
          "Kafka"
        ],
        "date": "2025-11",
        "label": "Nov 2025 – Apr 2026"
      },
      {
        "title": "Monetic AI Reversal",
        "description": "Payment reversal eligibility, rules, batch processing and audit trails.",
        "link": "https://github.com/YahyaSaadaoui/monetic-ai-reversal",
        "tags": [
          "Python",
          "FastAPI",
          "React"
        ],
        "date": "2025-08"
      },
      {
        "title": "Monetic AI Reconciliation",
        "description": "Payment reconciliation and exception handling.",
        "link": "https://github.com/YahyaSaadaoui/monetic-ai-reconciliation",
        "tags": [
          "Python",
          "FastAPI",
          "React"
        ],
        "date": "2025-08"
      },
      {
        "title": "IssueDesk",
        "description": "Issue lifecycle management with a Clean Architecture API, CQRS, and a React interface.",
        "link": "https://github.com/YahyaSaadaoui/issue-tracking-system",
        "tags": [
          "ASP.NET Core 9",
          "EF Core",
          "SQL Server",
          "React",
          "TypeScript"
        ],
        "date": "2025-08"
      },
      {
        "title": "Agentic AI Frontend",
        "description": "Chat interface prototype for AI-powered applications.",
        "link": "https://github.com/YahyaSaadaoui/AgenticAiFrontEnd",
        "tags": [
          "Next.js",
          "React",
          "Vercel AI SDK",
          "OpenAI APIs"
        ],
        "date": "2025-08"
      },
      {
        "title": "Mastercard Channel Migration – HPS",
        "description": "Migrated a legacy C communication channel to Java Spring Boot, handling Mastercard CIS protocol messages. Built a reusable SDK, mapped ISO 8583 fields, and ensured protocol compliance with clean architecture and modular services.",
        "tags": [
          "Java",
          "Spring Boot",
          "ISO 8583",
          "Mastercard CIS",
          "Spring Integration",
          "Spring Security",
          "Kafka",
          "PostgreSQL",
          "RocksDB",
          "OpenTelemetry",
          "OpenLens",
          "Docker",
          "Gradle",
          "Git",
          "Elasticsearch",
          "Microservices",
          "Cloud Computing"
        ],
        "image": "/images/hps.png",
        "date": "2025-02",
        "label": "Feb – Jul 2025"
      }
    ]
  ],
  [
    "2024",
    [
      {
        "title": "CBS SmartBox System – HPS",
        "description": "Engineered a microservice-based backend and an Angular dashboard for integrating HPS’s SmartBox with PowerCARD. Enabled merchant onboarding, servicing, contract generation, and real-time updates using Kafka and AWS S3.",
        "tags": [
          "Spring Boot",
          "Angular",
          "Kafka",
          "REST APIs",
          "Eureka",
          "Spring Security",
          "AWS S3",
          "Docker",
          "Full-Stack",
          "DevOps",
          "Java",
          "Software Architecture"
        ],
        "image": "/images/cbslogo.png",
        "date": "2024-07",
        "label": "Summer 2024"
      }
    ]
  ],
  [
    "2023",
    [
      {
        "title": "Nike Store",
        "description": "Step up your style game with our shoe store eCommerce website. Explore a curated collection of trendy and comfortable footwear options, offering something for every occasion and taste.",
        "tags": [
          "React",
          "Next.js",
          "Tailwind CSS",
          "Stripe"
        ],
        "image": "/images/NIkeStore.png",
        "link": "https://github.com/YahyaSaadaoui/NikeStore",
        "date": "2023-01"
      },
      {
        "title": "React ToDo Web App",
        "description": "Organize your tasks effortlessly with our React-based Todo app. Enjoy drag-and-drop functionality, easily add, delete, and modify tasks, and stay productive with a seamless user experience.",
        "tags": [
          "React",
          "TypeScript",
          "Local Storage"
        ],
        "image": "/images/to do app react screen shot .png",
        "link": "https://github.com/YahyaSaadaoui/React-Todo-List",
        "date": "2023-01"
      },
      {
        "title": "Weather Forecast App",
        "description": "Stay ahead of the weather with our intuitive weather forecast web app. Get accurate and up-to-date weather information tailored to your location, helping you plan your day with confidence.",
        "tags": [
          "JavaScript",
          "Weather API",
          "CSS3"
        ],
        "image": "/images/weather_forecastapp.JPG",
        "link": "https://github.com/YahyaSaadaoui/Weather-Forecast",
        "date": "2023-01"
      }
    ]
  ],
  [
    "2022",
    [
      {
        "title": "First personal portfolio",
        "description": "My first portfolio repository on GitHub.",
        "tags": [
          "Personal website"
        ],
        "link": "https://github.com/YahyaSaadaoui/PORTFOLIO",
        "date": "2022-02"
      }
    ]
  ],
  [
    "Earlier work",
    [
      {
        "title": "KamaGaming",
        "description": "Gaming Portal to a real gaming pc with high end performance, with pre installed games and a lot of features.",
        "tags": [
          "Wordpress",
          "CSS",
          "JS"
        ],
        "image": "/images/kamagaming.png"
      },
      {
        "title": "Ekspecto",
        "description": "Ekspecto is a versatile social media platform, encompassing various features. Built with Laravel and Tailwind CSS, among other technologies.",
        "tags": [
          "Laravel",
          "Tailwind CSS",
          "AWS",
          "MySQL"
        ],
        "image": "/images/ekspecto.jpg"
      },
      {
        "title": "Pixel Shades",
        "description": "Contributed to multiple web projects with a focus on responsive React development and full-stack solutions. Delivered custom WordPress websites from scratch, collaborated with managers to align with project goals, and implemented UI/UX improvements across platforms.",
        "tags": [
          "React",
          "WordPress",
          "Full-Stack",
          "Responsive Design"
        ],
        "image": "/images/pixelshades.png"
      }
    ]
  ]
]

