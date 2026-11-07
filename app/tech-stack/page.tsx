import type { Metadata } from "next"
import Link from "next/link"
import { skills } from "../portfolio-data"

export const metadata: Metadata = {
  title: "Tech Stack | Yahya Saadaoui",
  description: "Skills and technologies across payments engineering, full-stack development, and AI projects.",
}

const projectStacks = [
  {
    "label": "Selected public GitHub projects",
    "items": [
      "Monetic AI Reversal - Python, FastAPI, React",
      "https://github.com/YahyaSaadaoui/monetic-ai-reversal",
      "Monetic AI Reconciliation - Python, FastAPI, React",
      "https://github.com/YahyaSaadaoui/monetic-ai-reconciliation",
      "OmniMemory - TypeScript, VS Code Extension API, SQLite, OpenAI APIs",
      "https://github.com/YahyaSaadaoui/OmniMemory",
      "IssueDesk - ASP.NET Core 9, EF Core, SQL Server, React, TypeScript",
      "https://github.com/YahyaSaadaoui/issue-tracking-system",
      "ExpensesTracker - Next.js, React, TypeScript, Supabase, Recharts",
      "https://github.com/YahyaSaadaoui/ExpensesTracker",
      "Agentic AI Frontend - Next.js, React, Vercel AI SDK, OpenAI APIs",
      "https://github.com/YahyaSaadaoui/AgenticAiFrontEnd",
      "Nettimer - Python, Playwright",
      "https://github.com/YahyaSaadaoui/Nettimer",
      "Portfolio - Next.js 14, React 18, TypeScript, Tailwind CSS 3, Framer Motion, EmailJS",
      "https://github.com/YahyaSaadaoui/myPortfolio"
    ]
  },
  {
    "label": "Shared repository stack",
    "items": [
      "TypeScript, Node.js, pnpm workspaces",
      "Next.js 15, React 19, assistant-ui, Vercel AI SDK 6",
      "Mastra, Mastra Studio, Mastra Memory, Mastra RAG, MCP, Mastra Observability",
      "SiliconFlow (primary reasoning provider), Anthropic (fallback), OpenAI (embeddings)",
      "Langfuse (LLM tracing and observability)",
      "Better Auth 1.6, SQLite (better-sqlite3), libSQL (@libsql/client)",
      "Zod, Playwright, tsup, tsx, Vitest, GitHub Actions",
      "Docker, Docker Compose"
    ]
  },
  {
    "label": "dev-devison",
    "items": [
      "https://github.com/susalexart/dev-devison/tree/7380ce6",
      "TypeScript 6, Node.js >=22.12, pnpm 11.5.0",
      "Three.js, React Three Fiber, Drei (3D web UI)",
      "Drizzle ORM, Drizzle Kit (database schema and migrations)",
      "Forgejo 11 (self-hosted Git), Forgejo MCP (repository operations)",
      "Dokploy and @dokploy/sdk (deployment integration)",
      "Caddy 2 (reverse proxy and TLS)",
      "Langfuse v3 services backed by PostgreSQL 16, ClickHouse 24, Redis 7, and MinIO",
      "OpenTelemetry (tracing)",
      "Biome (linting and formatting)",
      "Project CLI and MCP packages for tool routing, vault access, and scoped filesystem access"
    ]
  },
  {
    "label": "consulting-agency",
    "items": [
      "https://github.com/susalexart/consulting-agency/tree/d864b39",
      "TypeScript 5, Node.js >=20 in package.json, Node.js 22 in Docker, pnpm 9.0.0",
      "Firecrawl (web search and scraping), DuckDuckGo HTML (fallback search)",
      "Playwright (web browsing), pdf-parse (PDF extraction)",
      "Vitest V8 coverage",
      "Mastra citation-overlap and claim-faithfulness evaluators",
      "Documented shared deployment behind dev-devison's Caddy proxy with umbrella app sessions"
    ]
  },
  {
    "label": "Screenshot-only tools and references",
    "items": [
      "Agno (Python AI agent framework)",
      "Grafana (observability dashboards)",
      "Prometheus (metrics collection and time-series storage)",
      "WAGate (WhatsApp session management, as labeled in the screenshot)",
      "Baileys (TypeScript WhatsApp Web library)",
      "AromaCloud ERP (visible application, implementation stack undetermined)",
      "Footnote LLM generation (search topic)",
      "RTL compatibility (search topic)"
    ]
  }
]

export default function TechStackPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-16 text-white">
      <div className="mx-auto max-w-6xl">
        <Link href="/#skills" className="text-sm text-gray-300 underline underline-offset-4">Back to portfolio skills</Link>
        <h1 className="mt-8 text-4xl font-bold sm:text-6xl">Tech Stack</h1>
        <p className="mt-4 max-w-2xl text-gray-300">Skills I use in payments and software engineering, alongside the technologies behind my projects and the AI repositories I’ve reviewed.</p>
        <section className="mt-12 border-t border-white/15 pt-8">
          <h2 className="mb-6 text-2xl font-semibold">Skills and tools</h2>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {Object.entries(skills).map(([category, items]) => (
              <article key={category} className="rounded-xl border border-white/10 bg-white/5 p-5">
                <h3 className="mb-4 text-lg font-semibold">{category}</h3>
                <ul className="flex flex-wrap gap-2">
                  {items.map((item) => <li key={item} className="rounded border border-white/15 px-2 py-1 text-sm text-gray-300">{item}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </section>
        <section className="mt-12 border-t border-white/15 pt-8">
          <h2 className="mb-6 text-2xl font-semibold">Project stacks and tools reviewed</h2>
          <div className="grid gap-5 md:grid-cols-2">
            {projectStacks.map(({ label, items }) => (
              <article key={label} className="rounded-xl border border-white/10 bg-white/5 p-5">
                <h3 className="mb-4 text-lg font-semibold">{label}</h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  {items.map((item) => (
                    <li key={item} className="break-words">
                      {item.startsWith("https://github.com/") ? <a href={item} className="underline underline-offset-4">{item.replace("https://github.com/", "")}</a> : item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}

