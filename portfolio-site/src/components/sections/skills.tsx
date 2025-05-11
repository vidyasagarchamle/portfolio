"use client"

import React from "react"
import { motion } from "framer-motion"
import { BarChart, Brain, Code, Database, LayoutDashboard, LineChart, MessageSquare, PenTool, SearchCheck, Users2, Cpu, Bot } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cn } from "@/lib/utils"

type SkillCategory = {
  id: string
  name: string
  icon: React.ReactNode
  color: string
  description: string
  skills: string[]
}

const skillCategories: SkillCategory[] = [
  {
    id: "product",
    name: "Product Management",
    icon: <LayoutDashboard className="h-5 w-5" />,
    color: "from-blue-500/20 to-blue-500/5",
    description: "Strategic product development, roadmapping, and user-focused methodologies",
    skills: [
      "Product Strategy",
      "Product Roadmapping",
      "User Research",
      "Wireframing",
      "User Stories",
      "A/B Testing",
      "Product Analytics",
      "Go-to-Market Strategy",
    ],
  },
  {
    id: "ai",
    name: "AI & Automation",
    icon: <Bot className="h-5 w-5" />,
    color: "from-purple-500/20 to-purple-500/5",
    description: "Leveraging AI tools and technologies to enhance product development and workflows",
    skills: [
      "Prompt Engineering",
      "AI Workflows",
      "LLM Integration",
      "Cursor IDE",
      "WindSurf AI",
      "Vibe AI",
      "Claude AI",
      "GPT-4",
      "Midjourney",
      "AI-Assisted Development",
      "RAG Systems",
      "Vector Databases"
    ],
  },
  {
    id: "data",
    name: "Data & Analytics",
    icon: <LineChart className="h-5 w-5" />,
    color: "from-green-500/20 to-green-500/5",
    description: "Data-driven decision making and performance analysis methodologies",
    skills: [
      "Data Analysis",
      "Metrics Definition",
      "SQL",
      "Google Analytics",
      "Mixpanel",
      "Amplitude",
      "Tableau",
      "Growth Analysis",
    ],
  },
  {
    id: "tech",
    name: "Technical Skills",
    icon: <Code className="h-5 w-5" />,
    color: "from-orange-500/20 to-orange-500/5",
    description: "Modern technologies and programming skills to collaborate with development teams",
    skills: [
      "Web3/Blockchain",
      "Smart Contracts",
      "API Design",
      "JavaScript",
      "Python",
      "SQL",
      "Git",
    ],
  },
  {
    id: "tools",
    name: "Tools & Software",
    icon: <PenTool className="h-5 w-5" />,
    color: "from-pink-500/20 to-pink-500/5",
    description: "Proficiency with industry-standard tools for product development and collaboration",
    skills: [
      "Figma",
      "Jira",
      "Confluence",
      "Notion",
      "Miro",
      "Linear",
      "GitHub",
      "Slack",
    ],
  },
  {
    id: "leadership",
    name: "Leadership",
    icon: <Users2 className="h-5 w-5" />,
    color: "from-yellow-500/20 to-yellow-500/5",
    description: "Leadership skills to guide cross-functional teams and drive product success",
    skills: [
      "Team Management",
      "Stakeholder Communication",
      "Cross-functional Leadership",
      "Mentoring",
      "Agile/Scrum",
      "Project Management",
    ],
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3 },
  },
}

export function Skills() {
  return (
    <section id="skills" className="py-16 md:py-20 relative overflow-hidden">
      {/* Subtle background effects */}
      <div className="absolute inset-0 bg-gradient-animation opacity-5"></div>
      <div className="absolute inset-0 light-grid-pattern dark:dark-grid-pattern opacity-20"></div>
      
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <div className="mb-2 text-sm text-primary/60 font-medium uppercase tracking-wider">
            Skills
          </div>
          <h2 className="text-4xl font-bold md:text-5xl text-balance mb-4">
            My <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">Skillset</span>
          </h2>
          <p className="text-foreground/70 max-w-xl mx-auto">
            My expertise spans product management, data analytics, and technical skills that help me build successful products.
          </p>
        </motion.div>

        <div className="mx-auto max-w-5xl">
          <Tabs defaultValue="product" className="w-full">
            <TabsList className="mb-8 flex h-auto flex-wrap justify-center gap-2 bg-transparent">
              {skillCategories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="flex items-center gap-2 rounded-full border border-border/50 px-4 py-2 data-[state=active]:bg-primary/10 data-[state=active]:border-primary/30 data-[state=active]:text-primary transition-all duration-200"
                >
                  <span className="p-1 rounded-full bg-background/70">{category.icon}</span>
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>

            {skillCategories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="animate-in fade-in-50 duration-300">
                <Card className="border border-border/40 bg-background/50 backdrop-blur-sm overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-30`}></div>
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
                  <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
                  
                  <CardContent className="p-6 relative z-10">
                    <div className="mb-6 text-center">
                      <div className="inline-flex items-center justify-center p-2 rounded-full bg-background/80 border border-border/30 shadow-sm mb-3">
                        {category.icon}
                      </div>
                      <h3 className="text-xl font-medium mb-2">{category.name}</h3>
                      <p className="text-muted-foreground max-w-2xl mx-auto">{category.description}</p>
                    </div>
                    
                    <motion.div
                      variants={containerVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3"
                    >
                      {category.skills.map((skill, i) => (
                        <motion.div 
                          key={i} 
                          variants={itemVariants}
                          whileHover={{ scale: 1.03, y: -2 }}
                          className="flex items-center justify-center text-center bg-background/80 rounded-lg p-3 border border-border/30 hover:border-primary/30 hover:bg-background/90 hover:text-primary/90 hover:shadow-sm transition-all duration-200 backdrop-blur-sm"
                        >
                          <span>{skill}</span>
                        </motion.div>
                      ))}
                    </motion.div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  )
} 