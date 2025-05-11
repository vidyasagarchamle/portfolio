"use client"

import React from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowRight } from "lucide-react"

const blogPosts = [
  {
    id: 1,
    title: "Building User-Centric Products in Web3",
    description: "How to apply traditional user-centric design principles in decentralized applications while maintaining Web3 values.",
    date: "May 15, 2023",
    readTime: "5 min read",
    tags: ["Web3", "Product Design", "UX"],
    slug: "#",
  },
  {
    id: 2,
    title: "Data-Driven Product Management: A Guide for PMs",
    description: "How to leverage data effectively to make better product decisions and measure success.",
    date: "March 10, 2023",
    readTime: "7 min read",
    tags: ["Data", "Product Management", "Analytics"],
    slug: "#",
  },
  {
    id: 3,
    title: "The Future of Product Management in AI-Driven Companies",
    description: "Exploring how product management evolves in organizations where AI is at the core of the product offering.",
    date: "January 22, 2023",
    readTime: "6 min read",
    tags: ["AI", "Future of Work", "Product Strategy"],
    slug: "#",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}

export function Blog() {
  return (
    <section id="blog" className="py-16 md:py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Blog</h2>
          <div className="mx-auto h-1 w-20 bg-primary" />
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Thoughts on product management, Web3, and building digital experiences.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {blogPosts.map((post) => (
            <motion.div key={post.id} variants={itemVariants}>
              <Card className="h-full transition-all duration-300 hover:shadow-md">
                <CardHeader>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <CardTitle className="mt-2 line-clamp-2 hover:text-primary">
                    <a href={post.slug}>{post.title}</a>
                  </CardTitle>
                  <CardDescription className="line-clamp-2">
                    {post.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="rounded-full">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" className="w-full justify-between font-medium" asChild>
                    <a href={post.slug}>
                      Read Article
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 text-center">
          <Button variant="outline" size="lg" className="rounded-full" asChild>
            <a href="#">View All Posts</a>
          </Button>
        </div>
      </div>
    </section>
  )
} 