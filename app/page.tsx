"use client"

import type React from "react"

import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
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
  const MAX_ITEMS = 4;
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({});
  const toggleCategory = (category: string) => {
  setExpandedCategories((prev) => ({
    ...prev,
    [category]: !prev[category],
  }));
};
const skills = {
  Languages: [
    "Java", "Python", "JavaScript", "TypeScript", "PHP",
    "C", "C++", "C#", "SQL", "PL/SQL"
  ],
  Frameworks: [
    "Spring Boot", "Spring Security", "Spring Integration", ".NET",
    "Node.js", "Symfony", "Laravel", "React.js", "Next.js",
    "Angular", "Vue.js", "Bootstrap", "Tailwind CSS"
  ],
  Databases: [
    "PostgreSQL", "MySQL", "MongoDB", "RocksDB", "Firebase",
    "Supabase", "Prisma", "Transact SQL"
  ],
  Tools: [
    "Git", "GitHub", "Bitbucket", "Docker", "AWS",
    "Ngrok", "CI/CD", "Maven", "Gradle", "Jira", "Trello"
  ],
  DevOps: [
    "Docker", "Kubernetes", "CI/CD Pipelines", "AWS"
  ],
  Platforms: [
    "Vercel", "Firebase", "Supabase"
  ],
  Design: [
    "Figma", "Photoshop", "Adobe Illustrator", "Adobe Premiere",
    "Adobe Audition", "Audacity"
  ],
  Auth: [
    "JWT Authentication", "Clerk"
  ],
  IDEs: [
    "IntelliJ IDEA", "Visual Studio Code", "Visual Studio", "OpenLens"
  ],
  Certifications: [
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
  ],

};


  const projects = [
    {
      title: "Mastercard Channel Migration – HPS",
      description:
          "Migrated a legacy C communication channel to Java Spring Boot, handling Mastercard CIS protocol messages. Built a reusable SDK, mapped ISO 8583 fields, and ensured protocol compliance with clean architecture and modular services.",
      image: "/images/hps.png",
      tags: [
        "Spring Boot",
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
        "Java",
        "Microservices",
        "Cloud Computing"
      ],
      link: "#",
    },
    {
      title: "CBS SmartBox System – HPS",
      description:
          "Engineered a microservice-based backend and an Angular dashboard for integrating HPS’s SmartBox with PowerCARD. Enabled merchant onboarding, servicing, contract generation, and real-time updates using Kafka and AWS S3.",
      image: "/images/cbslogo.png",
      tags: [
        "Spring Boot",
        "Angular",
        "Kafka",
        "Eureka",
        "Spring Security",
        "AWS S3",
        "REST APIs",
        "Docker",
        "Full-Stack",
        "DevOps",
        "Java",
        "Software Architecture"
      ],
      link: "#",
    },
        {
      title: "KamaGaming",
      description:"Gaming Portal to a real gaming pc with high end performance, with pre installed games and a lot of features.",
      image: "./images/kamagaming.png",
      tags: ["Wordpress", "CSS", "JS" ],
      link: "#",
    },
    {
      title: "Ekspecto",
      description:"Ekspecto is a versatile social media platform, encompassing various features. Built with Laravel and Tailwind CSS, among other technologies.",
      image: "./images/ekspecto.jpg",
      tags: ["Laravel", "Tailwind CSS", "AWS" ,"MySQL"],
      link: "#",
    },
    {
      title: "Pixel Shades",
      description: "Contributed to multiple web projects with a focus on responsive React development and full-stack solutions. Delivered custom WordPress websites from scratch, collaborated with managers to align with project goals, and implemented UI/UX improvements across platforms.",
      image: "./images/pixelshades.png",
      tags: ["React", "WordPress", "Full-Stack", "Responsive Design"],
      link: "#",
    },
    {
      title: "Nike Store",
      description:
        "Step up your style game with our shoe store eCommerce website. Explore a curated collection of trendy and comfortable footwear options, offering something for every occasion and taste.",
      image: "./images/NIkeStore.png",
      tags: ["React", "Next.js", "Tailwind CSS", "Stripe"],
      link: "#",
    },
    {
      title: "React ToDo Web App",
      description:
        "Organize your tasks effortlessly with our React-based Todo app. Enjoy drag-and-drop functionality, easily add, delete, and modify tasks, and stay productive with a seamless user experience.",
      image: "./images/to do app react screen shot .png",
      tags: ["React", "TypeScript", "Local Storage"],
      link: "#",
    },
    {
      title: "Weather Forecast App",
      description:
        "Stay ahead of the weather with our intuitive weather forecast web app. Get accurate and up-to-date weather information tailored to your location, helping you plan your day with confidence.",
      image: "./images/weather_forecastapp.JPG",
      tags: ["JavaScript", "Weather API", "CSS3"],
      link: "#",
    },

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
          </div>
        </motion.nav>

        {/* Hero Section */}
        <section id="home" className="relative min-h-screen flex items-center justify-center">
          <motion.div style={{y}} className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800"/>
          <div className="relative z-10 text-center px-6">
            <motion.div
                initial={{opacity: 0, scale: 0.8}}
                animate={{opacity: 1, scale: 1}}
                transition={{duration: 1.2, ease: [0.6, -0.05, 0.01, 0.99]}}
            >
              <h1 className="text-8xl md:text-6xl lg:text-[12rem] font-bold tracking-tighter mb-8">
              <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                HELLO.
              </span>
              </h1>
              <motion.p
                  initial={{opacity: 0, y: 20}}
                  animate={{opacity: 1, y: 0}}
                  transition={{delay: 0.5, duration: 0.8}}
                  className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-12"
              >
                FullStack Engineer crafting exceptional digital experiences
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-32 px-6">
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
                    FullStack Engineer with a strong academic background and hands-on experience in full-stack
                    development gained through intensive internship, freelance, and real-world projects. Skilled in
                    backend
                    technologies such as Java, Spring Boot, Kafka, and microservices architecture, as well as frontend
                    development using React, Angular, and JavaScript. Contributed to production-grade systems, API
                    integrations, and scalable solutions during my final-year internship at HPS and other
                    professional-grade
                    projects. Comfortable working with cloud-native tools like Docker and Kubernetes and committed to
                    delivering clean, maintainable, and secure code.
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
                  <div className="relative w-80 h-80 mx-auto">
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
        <section id="skills" className="py-32 px-6 bg-gradient-to-b from-black to-gray-900">
          <div className="max-w-7xl mx-auto">
            <AnimatedSection>
              <motion.div variants={fadeInUp} className="text-center mb-20">
                <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                  Skills
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-white to-gray-400 mx-auto"/>
              </motion.div>

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
        <section id="portfolio" className="py-32 px-6">
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
                        <div className="relative overflow-hidden">
                          <Image
                              src={project.image || "/placeholder.svg"}
                              alt={project.title}
                              width={600}
                              height={300}
                              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div
                              className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <Button
                                variant="outline"
                                size="sm"
                                className="border-white text-white hover:bg-white hover:text-black bg-transparent"
                            >
                              <ExternalLink className="w-4 h-4 mr-2"/>
                              View Project
                            </Button>
                          </div>
                        </div>
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
        <section id="contact" className="py-32 px-6">
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
