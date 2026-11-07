"use client"

import { useState } from "react"
import { motion, useReducedMotion } from "framer-motion"
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
import Link from "next/link"
import { skills, timeline } from "./portfolio-data"
import ContactForm from './emailingService';
import CompaniesMarquee from "@/components/CompaniesMarquee";
import XGlyph from "@/components/ui/XGlyph";

export default function Portfolio() {
  const reduceMotion = useReducedMotion()
  const [menuOpen, setMenuOpen] = useState(false)
  const MAX_ITEMS = 4;
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({});
  const toggleCategory = (category: string) => {
  setExpandedCategories((prev) => ({
    ...prev,
    [category]: !prev[category],
  }));
};
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
            initial={false}
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
        <section id="home" className="relative isolate min-h-[100svh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-800 pt-24">
          <div className="relative z-10 text-center px-6">
            <motion.div
                initial={reduceMotion ? false : {opacity: 0, scale: 0.96}}
                animate={{opacity: 1, scale: 1}}
                transition={{duration: 1.2, ease: [0.6, -0.05, 0.01, 0.99]}}
            >
              <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold tracking-tighter mb-8">
              <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                Yahya Saadaoui
              </span>
              </h1>
              <motion.p
                  initial={reduceMotion ? false : {opacity: 0, y: 20}}
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
        <section id="about" className="grid min-h-[100svh] items-center scroll-mt-28 border-t border-white/10 px-6 py-20 md:py-28">
          <div className="max-w-7xl mx-auto">
              <motion.div className="text-center mb-20">
                <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                  About
                </h2>
              </motion.div>

              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <motion.div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-8 text-white">{"I'm Yahya SAADAOUI"}</h3>
                  <p className="text-lg text-gray-300 leading-relaxed mb-8">
                    I’m a software engineer based in Casablanca and an Implementation Engineer at HPS. I started with web development and built full-stack applications through academic, freelance, and personal projects using React, Angular, Java, and Spring Boot. That work gave me experience across interfaces, backend services, API integration, and deployment.
                  </p>
                  <p className="mb-8 text-lg leading-relaxed text-gray-300">
                    At HPS, I moved from merchant onboarding and servicing to Mastercard CIS migration during my internships. Today I work on PowerCARD switching for issuer and acquirer systems, including ATM and POS transaction flows, Oracle PL/SQL and change data capture, Kafka and Avro integrations, and payment security with HSMs and TR-31 key blocks.
                  </p>
                  <p className="mb-8 text-lg leading-relaxed text-gray-300">
                    I also build full-stack applications and experiment with AI tools for payments and software development. My projects range from early web apps to payment reconciliation prototypes and tools for capturing engineering context.
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

                <motion.div className="relative">
                  <div className="relative aspect-square w-full max-w-xs mx-auto">
                    <div
                        className="absolute inset-0 bg-gradient-to-r from-white/20 to-gray-400/20 rounded-full blur-3xl"/>
                    <Image
                        src="/images/about-portrait.jpg"
                        alt="Yahya SAADAOUI"
                        width={320}
                        height={320}
                        className="relative z-10 rounded-full object-cover w-full h-full border-4 border-white/10"
                    />
                  </div>
                </motion.div>
              </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="grid min-h-[100svh] items-center scroll-mt-28 border-t border-white/10 px-6 py-20 md:py-28 bg-zinc-950">
          <div className="max-w-7xl mx-auto">
              <motion.div className="text-center mb-20">
                <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                  Skills
                </h2>
              </motion.div>

              <p className="mb-10 text-center">
                <Link href="/tech-stack" className="text-sm text-gray-200 underline underline-offset-4">Explore the full tech stack</Link>
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
                {Object.entries(skills).map(([category, items]) => {
                  const isExpanded = expandedCategories[category];
                  const shouldShowToggle = items.length > MAX_ITEMS;
                  const displayedItems = isExpanded ? items : items.slice(0, MAX_ITEMS);

                  return (
                      <motion.div
                          key={category}
                         
                         
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
                                  type="button"
                                  aria-expanded={Boolean(isExpanded)}
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
          </div>
        </section>


        {/* Portfolio Section */}
        <section id="portfolio" className="min-h-[100svh] scroll-mt-28 border-t border-white/10 px-6 py-20 md:py-28">
          <div className="max-w-7xl mx-auto">
              <motion.div className="text-center mb-20">
                <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                  Experience & Project Timeline
                </h2>
              </motion.div>

              <ol className="mx-auto max-w-4xl space-y-12 border-l border-white/15 pl-5 md:pl-10">
                {timeline.map(([year, entries]) => (
                  <li key={year} className="relative">
                    <span aria-hidden="true" className="absolute -left-5 top-3 h-3 w-3 -translate-x-1/2 rounded-full bg-zinc-300 md:-left-10" />
                    <h3 className="mb-5 text-2xl font-semibold text-white">{year}</h3>
                    <ul className="space-y-5">
                      {entries.map((project) => (
                        <li key={project.title}>
                          <Card className="overflow-hidden border-white/10 bg-white/5">
                            <CardContent className="grid gap-5 p-5 sm:p-6">
                              {project.image && (
                                <Image src={project.image} alt="" width={640} height={360} className="h-36 w-full rounded-lg object-contain sm:w-64" />
                              )}
                              <div>
                                {project.date && (
                                  <time dateTime={project.date} className="text-sm text-gray-400">
                                    {project.label ?? new Intl.DateTimeFormat("en", { month: "short", year: "numeric", timeZone: "UTC" }).format(new Date(project.date + "-01"))}
                                  </time>
                                )}
                                <h4 className="mb-2 text-xl font-semibold text-white">{project.title}</h4>
                                <p className="mb-4 leading-relaxed text-gray-300">{project.description}</p>
                                <div className="flex flex-wrap gap-2">
                                  {project.tags.map((tag) => (
                                    <Badge key={tag} variant="outline" className="border-white/20 text-gray-300">{tag}</Badge>
                                  ))}
                                </div>
                                {project.link && (
                                  <a href={project.link} className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-white underline underline-offset-4">
                                    <ExternalLink className="h-4 w-4" aria-hidden="true" /> View {project.title} on GitHub
                                  </a>
                                )}
                              </div>
                            </CardContent>
                          </Card>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ol>
          </div>
        </section>

        {/* Companies Section */}
        <CompaniesMarquee companies={companies} duration={28} />

        {/* Contact Section */}
        <section id="contact" className="grid min-h-[100svh] items-center scroll-mt-28 border-t border-white/10 px-6 py-20 md:py-28">
          <div className="max-w-7xl mx-auto">
              <motion.div className="text-center mb-20">
                <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                  Contact
                </h2>
              </motion.div>
              <div className="grid lg:grid-cols-2 gap-16">
                <motion.div>
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
                      <Button asChild className="bg-white text-black hover:bg-gray-200 transition-colors duration-300">
                        <a href="/Yahya_Saadaoui.pdf" download="CV yahya.pdf">
                          <Download className="w-4 h-4 mr-2"/>
                          Download CV
                        </a>
                      </Button>
                    </div>
                  </div>
                </motion.div>
                <ContactForm/>
              </div>
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

