"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Building2, Calendar, ChevronRight } from "lucide-react"

const experiences = [
  {
    id: 1,
    company: "League Sports Co.",
    position: "Product Manager",
    duration: "2022 - Present",
    description: "Leading multiple product lines at LSC, spanning both traditional sports management platforms and Web3 initiatives. Driving innovation through user-centered design and strategic planning.",
    achievements: [
      "Led product development for Zone, a decentralized finance platform focused on sports collectibles",
      "Managed BitBillionaire, a Web3 NFT marketplace with specialized tools for sports content creators",
      "Directed the evolution of WBL TMS & WBL Play sports management platforms used by leagues globally"
    ],
    skills: ["Product Strategy", "Agile", "Web3", "Sports Tech", "User Research"],
  },
  {
    id: 2,
    company: "TRRAIN Circle Technologies",
    position: "Product Manager Intern",
    duration: "2021 - 2022",
    description: "Contributed to retail technology solutions that bridge the gap between physical and digital shopping experiences, focusing on both customer satisfaction and retail staff empowerment.",
    achievements: [
      "Conducted comprehensive user research to identify critical pain points in retail operations",
      "Developed detailed product specifications and interactive wireframes for new features",
      "Collaborated with engineering teams to implement and test priority enhancements"
    ],
    skills: ["Retail Tech", "UI/UX Design", "Market Research", "Product Roadmapping"],
  },
  {
    id: 3,
    company: "MARM Entertainment Studio",
    position: "Product Intern",
    duration: "2020 - 2021",
    description: "Supported the product team in developing entertainment experiences that drive user engagement and retention across digital platforms.",
    achievements: [
      "Assisted in feature prioritization and backlog management for entertainment products",
      "Analyzed user engagement metrics to identify opportunities for experience improvements",
      "Contributed to content strategy implementation across multiple digital channels"
    ],
    skills: ["Entertainment Tech", "Content Strategy", "Analytics", "User Engagement"],
  }
]

export function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 relative overflow-hidden">
      {/* Subtle background effects */}
      <div className="absolute inset-0 bg-gradient-animation opacity-5"></div>
      <div className="absolute inset-0 light-grid-pattern dark:dark-grid-pattern opacity-20"></div>
      
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <div className="mb-2 text-sm text-primary/60 font-medium uppercase tracking-wider">
            Work Experience
          </div>
          <h2 className="text-4xl font-bold md:text-5xl text-balance mb-4">
            Where I've <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">Worked</span>
          </h2>
          <p className="text-foreground/70 max-w-xl mx-auto">
            My professional journey in product management across sports, retail, and entertainment.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-12">
          {experiences.map((exp, index) => (
            <motion.div 
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative rounded-lg p-0.5 transition-all hover:bg-gradient-to-r hover:from-primary/5 hover:to-transparent"
            >
              <div className="flex flex-col md:flex-row gap-6 p-6 rounded-lg bg-background transition-all">
                {/* Left side - Company and duration */}
                <div className="w-full md:w-1/3 space-y-2">
                  <div className="flex items-center gap-3 mb-2 group-hover:translate-x-0.5 transition-transform duration-300">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/15 transition-colors">
                      <Briefcase className="h-4 w-4 text-primary" />
                    </div>
                    <h3 className="font-bold text-lg">{exp.company}</h3>
                  </div>
                  <div className="flex items-center text-sm text-foreground/60 gap-2 ml-1">
                    <Calendar className="h-3.5 w-3.5" />
                    <span>{exp.duration}</span>
                  </div>
                  <div className="text-sm text-foreground/70 font-medium mt-1 md:ml-1">
                    {exp.position}
                  </div>
                </div>
                
                {/* Right side - Description and details */}
                <div className="w-full md:w-2/3 space-y-4">
                  <p className="text-foreground/80 leading-relaxed">{exp.description}</p>
                  
                  <div className="space-y-3">
                    <h4 className="text-sm font-medium flex items-center gap-1.5 text-primary/90">
                      <ChevronRight className="h-4 w-4 text-primary group-hover:translate-x-0.5 transition-transform" />
                      Key Responsibilities & Projects
                    </h4>
                    <ul className="grid gap-2.5 text-sm text-foreground/70">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start group-hover:translate-x-0.5 transition-transform duration-300" style={{ transitionDelay: `${i * 50}ms` }}>
                          <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0 group-hover:scale-110 transition-transform"></span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {exp.skills.map((skill, i) => (
                      <Badge 
                        key={i} 
                        variant="secondary" 
                        className="rounded-full bg-primary/5 text-foreground/70 hover:bg-primary/15 transition-colors duration-300"
                        style={{ transitionDelay: `${i * 30}ms` }}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Subtle divider except for last item */}
              {index < experiences.length - 1 && (
                <div className="h-px w-full bg-border/40 mt-12"></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 