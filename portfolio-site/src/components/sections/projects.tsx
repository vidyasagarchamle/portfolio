"use client"

import * as React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ExternalLink, Github, ArrowUpRight, Youtube, Twitter, Play, Headphones } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type ProjectLink = {
  type: 'website' | 'github' | 'youtube' | 'twitter';
  url: string;
  label: string;
};

type Project = {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
  tags: string[];
  links: ProjectLink[];
};

const projects: Project[] = [
  {
    id: 1,
    title: "Token Trails",
    description: "AI-generated podcast series exploring Web3 technologies and blockchain innovations with engaging storytelling.",
    icon: <Headphones className="h-5 w-5" />,
    image: "/images/project-1-placeholder.png",
    tags: ["Web3", "Podcast", "AI", "Blockchain", "Media"],
    links: [
      { type: 'website', url: "https://tokentrails.example.com", label: "Visit" },
      { type: 'youtube', url: "https://youtube.com/@tokentrails", label: "YouTube" },
      { type: 'twitter', url: "https://twitter.com/tokentrails", label: "Twitter" },
    ],
  },
  {
    id: 2,
    title: "DePolls",
    description: "A decentralized polling application built on Ethereum for secure, transparent community decision-making.",
    icon: <ExternalLink className="h-5 w-5" />,
    image: "/images/project-1-placeholder.png",
    tags: ["Web3", "DApp", "Ethereum", "Smart Contracts"],
    links: [
      { type: 'website', url: "https://depolls.example.com", label: "Visit" },
      { type: 'github', url: "https://github.com/yourusername/depolls", label: "Code" },
    ],
  },
  {
    id: 3,
    title: "Modera AI",
    description: "AI-powered content moderation platform helping social media companies detect policy violations automatically.",
    icon: <Play className="h-5 w-5" />,
    image: "/images/project-2-placeholder.png",
    tags: ["AI/ML", "Content Moderation", "Dashboard"],
    links: [
      { type: 'website', url: "https://modera.example.com", label: "Visit" },
      { type: 'github', url: "https://github.com/yourusername/modera", label: "Code" },
    ],
  }
]

export function Projects() {
  return (
    <section id="projects" className="py-16 md:py-20 relative overflow-hidden">
      {/* Subtle background effects */}
      <div className="absolute inset-0 bg-gradient-animation opacity-5"></div>
      <div className="absolute inset-0 light-grid-pattern dark:dark-grid-pattern opacity-20"></div>
      
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-10"
        >
          <div className="mb-2 text-sm text-primary/60 font-medium uppercase tracking-wider">
            Projects
          </div>
          <h2 className="text-4xl font-bold md:text-5xl text-balance mb-4">
            Featured <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-foreground/70 max-w-xl mx-auto">
            Showcasing some of my notable projects and contributions.
          </p>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative rounded-xl overflow-hidden border border-border/40 bg-background/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col h-full"
            >
              {/* Project header with icon */}
              <div className="p-5 flex items-center justify-between border-b border-border/20">
                <div className="flex items-center gap-2">
                  <span className="flex items-center justify-center h-8 w-8 rounded-full bg-primary/10 text-primary">
                    {project.icon}
                  </span>
                  <h3 className="text-xl font-bold">{project.title}</h3>
                </div>
                <div className="flex-shrink-0">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-background/80 text-primary group-hover:bg-primary/10 transition-colors">
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </div>
              
              {/* Project content */}
              <div className="p-5 flex-grow">
                <p className="text-foreground/70 mb-4 text-sm">{project.description}</p>
                
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="rounded-full bg-muted/70 text-foreground/70 text-xs py-0 px-2">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
              
              {/* Project links */}
              <div className="p-5 pt-0 mt-auto">
                <div className="flex flex-wrap items-center gap-2">
                  {project.links.map((link, i) => (
                    <a 
                      key={i}
                      href={link.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={cn(
                        "flex items-center gap-1.5 text-xs font-medium rounded-full px-3 py-1 transition-colors",
                        link.type === 'website' ? "bg-primary/10 text-primary hover:bg-primary/20" :
                        link.type === 'github' ? "bg-muted text-foreground/70 hover:text-foreground hover:bg-muted/80" :
                        link.type === 'youtube' ? "bg-red-500/10 text-red-500 hover:bg-red-500/20" :
                        "bg-blue-500/10 text-blue-500 hover:bg-blue-500/20"
                      )}
                    >
                      {link.type === 'website' && <ArrowUpRight className="h-3 w-3" />}
                      {link.type === 'github' && <Github className="h-3 w-3" />}
                      {link.type === 'youtube' && <Youtube className="h-3 w-3" />}
                      {link.type === 'twitter' && <Twitter className="h-3 w-3" />}
                      <span>{link.label}</span>
                    </a>
                  ))}
                </div>
              </div>
              
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/5 pointer-events-none"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 