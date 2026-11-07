"use client"

import type React from "react"

import { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Download,
  ExternalLink,
} from "lucide-react"
import Image from "next/image"
import ContactForm from './emailingService';
import CompaniesMarquee from "@/components/CompaniesMarquee";
import XGlyph from "@/components/ui/XGlyph";

type Company = { name: string; logo: string };

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.8,
      ease: [0.6, -0.05, 0.01, 0.99]
    }
  })
};


const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

function AnimatedSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
      variants={staggerContainer}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default function Portfolio() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const [menuOpen, setMenuOpen] = useState(false)
  const MAX_ITEMS = 4;
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({});
  const toggleCategory = (category: string) => {
  setExpandedCategories((prev) => ({
    ...prev,
    [category]: !prev[category],
  }));
};
  const skills = {
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
    ]
  }

  const projects: { title: string; description: string; tags: string[]; link?: string }[] = [
    {
      "title": "Mastercard CIS Migration",
      "description": "Contributed to the migration of a legacy Mastercard communications channel to a Java service and validated ISO 8583 message mappings and protocol behavior.",
      "tags": [
        "Java",
        "Spring Boot",
        "ISO 8583",
        "Mastercard CIS"
      ]
    },
    {
      "title": "Merchant Onboarding and Servicing",
      "description": "Built Spring Boot services and Angular dashboards for merchant onboarding and servicing in a PowerCARD integration.",
      "tags": [
        "Spring Boot",
        "Angular",
        "Kafka",
        "REST APIs"
      ]
    },
    {
      "title": "Monetic AI Reversal",
      "description": "Payment reversal eligibility, rules, batch processing and audit trails.",
      "link": "https://github.com/YahyaSaadaoui/monetic-ai-reversal",
      "tags": [
        "Python",
        "FastAPI",
        "React"
      ]
    },
    {
      "title": "Monetic AI Reconciliation",
      "description": "Payment reconciliation and exception handling.",
      "link": "https://github.com/YahyaSaadaoui/monetic-ai-reconciliation",
      "tags": [
        "Python",
        "FastAPI",
        "React"
      ]
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
      ]
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
      ]
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
      ]
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
      ]
    },
    {
      "title": "Nettimer",
      "description": "Automation project for scheduled extraction, processing and notifications.",
      "link": "https://github.com/YahyaSaadaoui/Nettimer",
      "tags": [
        "Python",
        "Playwright"
      ]
    }
  ]

const companies = [
  { name: "HPS", logo: "/images/hps-pic.png" },
  { name: "KamaGaming", logo: "/images/kamagaminglogo.png" },
  { name: "Creative Canal Media", logo: "/images/creativecanalmedialogo.jpeg" },
  { name: "Taj Rayan Car", logo: "/images/tajrayancarlogo.png" },
  { name: "Pixel Shades", logo: "/images/pixelshadelogo.png" },
];


  return (
      <div className="min-h-screen bg-black text-white overflow-x-hidden">
        {/* Navigation */}
        <motion.nav
            initial={{opacity: 0, y: -20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.8}}
            className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10"
        >
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <motion.div
                  whileHover={{scale: 1.05}}
                  className="text-xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent"
              >
                Yahya SAADAOUI
              </motion.div>
              <div className="hidden md:flex items-center space-x-8">
                {["Home", "About", "Skills", "Portfolio", "Contact"].map((item) => (
                    <motion.a
                        key={item}
                        href={`#${item.toLowerCase()}`}
                        whileHover={{scale: 1.1}}
                        className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-300"
                    >
                      {item}
                    </motion.a>
                ))}
              </div>
            </div>
            <div className="md:hidden">
              <button type="button" aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen(!menuOpen)} className="mt-2 rounded border border-white/30 px-3 py-2 text-sm">
                {menuOpen ? "Close menu" : "Menu"}
              </button>
              <div id="mobile-navigation" hidden={!menuOpen} className="pt-2">
                {["Home", "About", "Skills", "Portfolio", "Contact"].map((item) => (
                  <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)} className="block py-2 text-gray-200">{item}</a>
                ))}
              </div>
            </div>
          </div>
        </motion.nav>

        {/* Hero Section */}
        <section id="home" className="relative min-h-screen flex items-center justify-center pt-24">
          <motion.div style={{y}} className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800"/>
          <div className="relative z-10 text-center px-6">
            <motion.div
                initial={{opacity: 0, scale: 0.8}}
                animate={{opacity: 1, scale: 1}}
                transition={{duration: 1.2, ease: [0.6, -0.05, 0.01, 0.99]}}
            >
              <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold tracking-tighter mb-8">
              <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                Yahya Saadaoui
              </span>
              </h1>
              <motion.p
                  initial={{opacity: 0, y: 20}}
                  animate={{opacity: 1, y: 0}}
                  transition={{delay: 0.5, duration: 0.8}}
                  className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-12"
              >
                Implementation Engineer at HPS · Payment Systems & Backend Engineering
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="scroll-mt-20 py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <AnimatedSection>
              <motion.div variants={fadeInUp} className="text-center mb-20">
                <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                  About
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-white to-gray-400 mx-auto"/>
              </motion.div>

              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <motion.div variants={fadeInUp}>
                  <h3 className="text-3xl md:text-4xl font-bold mb-8 text-white">{"I'm Yahya SAADAOUI"}</h3>
                  <p className="text-lg text-gray-300 leading-relaxed mb-8">
                    I work on PowerCARD payment switching, Oracle change data capture, and Kafka integrations for issuer and acquirer systems. My work spans C and Pro*C switch interfaces, PL/SQL event outboxes, payment security, and Java service integrations. I also build full-stack applications and AI developer tools.
                  </p>
                  <div className="flex space-x-4">
                    <a href="https://github.com/YahyaSaadaoui" target="_blank" rel="noopener noreferrer">
                      <Button
                          variant="outline"
                          size="icon"
                          className="border-white/20 hover:bg-white hover:text-black bg-transparent"
                      >
                        <Github className="w-5 h-5"/>
                      </Button>
                    </a>
                    <a href="https://www.linkedin.com/in/yahyasaadaoui" target="_blank" rel="noopener noreferrer">
                      <Button
                          variant="outline"
                          size="icon"
                          className="border-white/20 hover:bg-white hover:text-black bg-transparent"
                      >
                        <Linkedin className="w-5 h-5"/>
                      </Button>
                    </a>
                    <a
                    href="https://x.com/Dslow72"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="X (formerly Twitter)">
                    <Button
                      variant="outline"
                      size="icon"
                      className="border-white/20 hover:bg-white hover:text-black bg-transparent"
                      title="Follow me on X"
                    >
                      <XGlyph className="w-5 h-5" />
                    </Button>
                  </a>
                  </div>
                </motion.div>

                <motion.div variants={fadeInUp} className="relative">
                  <div className="relative aspect-square w-full max-w-xs mx-auto">
                    <div
                        className="absolute inset-0 bg-gradient-to-r from-white/20 to-gray-400/20 rounded-full blur-3xl"/>
                    <Image
                        src="/images/me.png"
                        alt="Yahya SAADAOUI"
                        width={320}
                        height={320}
                        className="relative z-10 rounded-full object-cover w-full h-full border-4 border-white/10"
                    />
                  </div>
                </motion.div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="scroll-mt-20 py-32 px-6 bg-gradient-to-b from-black to-gray-900">
          <div className="max-w-7xl mx-auto">
            <AnimatedSection>
              <motion.div variants={fadeInUp} className="text-center mb-20">
                <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                  Skills
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-white to-gray-400 mx-auto"/>
              </motion.div>

              <p className="mb-10 text-center">
                <a href="https://github.com/YahyaSaadaoui/my-tech-stach/blob/main/requirements.txt" className="text-sm text-gray-200 underline underline-offset-4">Full technology inventory</a>
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
                {Object.entries(skills).map(([category, items], index) => {
                  const isExpanded = expandedCategories[category];
                  const shouldShowToggle = items.length > MAX_ITEMS;
                  const displayedItems = isExpanded ? items : items.slice(0, MAX_ITEMS);

                  return (
                      <motion.div
                          key={category}
                          variants={fadeInUp}
                          transition={{delay: index * 0.1}}
                          className="text-center"
                      >
                        <h3 className="text-xl font-bold mb-6 text-white">{category}</h3>
                        <div className="space-y-3">
                          {displayedItems.map((skill) => (
                              <motion.div
                                  key={skill}
                                  whileHover={{scale: 1.05}}
                                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-3 hover:bg-white/10 transition-all duration-300"
                              >
                                <span className="text-gray-300">{skill}</span>
                              </motion.div>
                          ))}

                          {shouldShowToggle && (
                              <button
                                  onClick={() => toggleCategory(category)}
                                  className="text-sm mt-2 text-gray-400 hover:text-white underline"
                              >
                                {isExpanded ? "Show Less" : "Show More"}
                              </button>
                          )}
                        </div>
                      </motion.div>
                  );
                })}
              </div>
            </AnimatedSection>
          </div>
        </section>


        {/* Portfolio Section */}
        <section id="portfolio" className="scroll-mt-20 py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <AnimatedSection>
              <motion.div variants={fadeInUp} className="text-center mb-20">
                <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                  Portfolio
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-white to-gray-400 mx-auto"/>
              </motion.div>

              <div className="grid lg:grid-cols-2 gap-12">
                {projects.map((project, index) => (
                    <motion.div key={project.title} variants={fadeInUp} transition={{delay: index * 0.1}}>
                      <Card
                          className="bg-white/5 backdrop-blur-sm border-white/10 overflow-hidden hover:bg-white/10 transition-all duration-500 group">
                        <CardContent className="p-6">
                          <h3 className="text-2xl font-bold mb-3 text-white">{project.title}</h3>
                          <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                          <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag) => (
                                <Badge key={tag} variant="outline" className="border-white/20 text-gray-300">
                                  {tag}
                                </Badge>
                            ))}
                          </div>
                          {project.link && (
                            <a href={project.link} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white underline underline-offset-4">
                              <ExternalLink className="h-4 w-4" aria-hidden="true" /> View {project.title} on GitHub
                            </a>
                          )}
                        </CardContent>
                      </Card>
                    </motion.div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Companies Section */}
        <CompaniesMarquee companies={companies} duration={28} />

        {/* Contact Section */}
        <section id="contact" className="scroll-mt-20 py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <AnimatedSection>
              <motion.div variants={fadeInUp} className="text-center mb-20">
                <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                  Contact
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-white to-gray-400 mx-auto"/>
              </motion.div>
              <div className="grid lg:grid-cols-2 gap-16">
                <motion.div variants={fadeInUp}>
                  <h3 className="text-2xl font-bold mb-8 text-white">{"Let's work together"}</h3>
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                        <Mail className="w-5 h-5 text-white"/>
                      </div>
                      <div>
                        <p className="text-sm text-gray-400 uppercase tracking-wider">Email</p>
                        <p className="text-white">yahyasaadaoui2019@gmail.com</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                        <Phone className="w-5 h-5 text-white"/>
                      </div>
                      <div>
                        <p className="text-sm text-gray-400 uppercase tracking-wider">Phone</p>
                        <p className="text-white">+212 0648280812</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-white"/>
                      </div>
                      <div>
                        <p className="text-sm text-gray-400 uppercase tracking-wider">Address</p>
                        <p className="text-white">Morocco</p>
                      </div>
                    </div>
                    <div className="pt-6">
                      <a href="/Yahya_Saadaoui.pdf" download>
                        <Button className="bg-white text-black hover:bg-gray-200 transition-colors duration-300">
                          <Download className="w-4 h-4 mr-2"/>
                          Download CV
                        </Button>
                      </a>
                    </div>
                  </div>
                </motion.div>
                <ContactForm/>
              </div>
            </AnimatedSection>
          </div>
        </section>
        {/* Footer */}
        <footer className="py-12 px-6 border-t border-white/10">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4 text-white">EXPLORE</h3>
                <div className="grid grid-cols-2 gap-2">
                  {["Home", "About", "Skills", "Portfolio", "Contact"].map((item) => (
                      <a
                          key={item}
                          href={`#${item.toLowerCase()}`}
                          className="text-gray-400 hover:text-white transition-colors duration-300"
                      >
                        {item}
                      </a>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4 text-white">FOLLOW</h3>
                <div className="flex space-x-4">
                  <a href="https://github.com/YahyaSaadaoui" target="_blank" rel="noopener noreferrer">
                    <Button
                        variant="outline"
                        size="icon"
                        className="border-white/20 hover:bg-white hover:text-black bg-transparent"
                    >
                      <Github className="w-5 h-5"/>
                    </Button>
                  </a>
                  <a href="https://www.linkedin.com/in/yahyasaadaoui" target="_blank" rel="noopener noreferrer">
                    <Button
                        variant="outline"
                        size="icon"
                        className="border-white/20 hover:bg-white hover:text-black bg-transparent"
                    >
                      <Linkedin className="w-5 h-5"/>
                    </Button>
                  </a>
                  <a
                    href="https://x.com/Dslow72"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="X (formerly Twitter)">
                    <Button
                      variant="outline"
                      size="icon"
                      className="border-white/20 hover:bg-white hover:text-black bg-transparent"
                      title="Follow me on X"
                    >
                      <XGlyph className="w-5 h-5" />
                    </Button>
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-white/10 text-center">
              <p className="text-gray-400">© {new Date().getFullYear()} Yahya SAADAOUI. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
  )
}
