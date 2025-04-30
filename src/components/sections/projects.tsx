"use client"

import Image from "next/image"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

// Sample project data - replace with your actual projects
const projects = [
  {
    id: 1,
    title: "BonnieCraft Landing Page and Store",
    description: "A full-stack landing page and digital store for a Minecraft server, featuring shopping cart, online payment, and user authentication.",
    image: "project1",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "MySQL", "SlipOK", "Javascript"],
    demoUrl: "https://project1.zpleum.dev",
    githubUrl: "https://github.zpleum.dev/project1",
    featured: true,
  },
  {
    id: 2,
    title: "BonnieCraft Admin verify with Discord",
    description: "An admin verification system using the Discord API, integrated with MySQL and real-time permission management for Minecraft servers.",
    image: "project2",
    tags: ["PHP", "MySQL", "Tailwind CSS", "Javascript", "Discord API"],
    demoUrl: "https://project2.zpleum.dev",
    githubUrl: "https://github.zpleum.dev/project2",
    featured: true,
  },
  {
    id: 3,
    title: "BonnieCraft Anti Hacking System",
    description: "A custom anti-cheat system built for Minecraft servers, integrated with core plugins like LuckPerms and CMI for enhanced security.",
    image: "project3",
    tags: ["Java", "Minecraft", "Luckperms", "CMI"],
    demoUrl: "https://project3.zpleum.dev",
    githubUrl: "https://github.zpleum.dev/project3",
    featured: true,
  },
  {
    id: 4,
    title: "Mc Zero Landing Page",
    description: "A clean, responsive landing page for the Mc Zero project, built with pure HTML, CSS, and JavaScript.",
    image: "project4",
    tags: ["HTML", "CSS", "JavaScript"],
    demoUrl: "https://project4.zpleum.dev",
    githubUrl: "https://github.zpleum.dev/project4",
    featured: false,
  },
  {
    id: 5,
    title: "Valentine's Day Card",
    description: "An interactive and visually appealing Valentine’s Day card built with Tailwind CSS and JavaScript to share love digitally.",
    image: "project5",
    tags: ["HTML", "Javascript", "Tailwind CSS"],
    demoUrl: "https://project5.zpleum.dev",
    githubUrl: "https://github.zpleum.dev/project4",
    featured: false,
  },
  {
    id: 6,
    title: "Christmas Card",
    description: "A minimal and festive web-based Christmas card, designed to deliver holiday cheer using HTML, CSS, and JavaScript.",
    image: "",
    tags: ["HTML", "CSS", "JavaScript"],
    demoUrl: "https://project6.zpleum.dev",
    githubUrl: "https://github.zpleum.dev/project4",
    featured: false,
  },
]

export function ProjectsSection() {
  // Filter only featured projects
  const featuredProjects = projects.filter(project => project.featured)
  const otherProjects = projects.filter(project => !project.featured)

  return (
    <section
      id="projects"
      className="py-20 md:py-24 bg-muted/50"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
              My Projects
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Featured Work
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Check out some of my recent projects that showcase my skills and expertise.
            </p>
          </div>
        </div>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mt-12">
          {featuredProjects.map((project) => (
            <Card key={project.id} className="overflow-hidden flex flex-col h-full">
              <div className="relative h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader className="pb-2">
                <CardTitle>{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="py-2 flex-grow">
                <CardDescription className="mb-4">{project.description}</CardDescription>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.slice(0, 3).map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                  {project.tags.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{project.tags.length - 3} more
                    </Badge>
                  )}
                </div>
              </CardContent>
              <CardFooter className="flex gap-2">
                <Button asChild size="sm" variant="outline" className="flex-1">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-1">
                    <Github className="h-4 w-4" />
                    <span>Code</span>
                  </a>
                </Button>
                <Button asChild size="sm" className="flex-1">
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-1">
                    <ExternalLink className="h-4 w-4" />
                    <span>Demo</span>
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {otherProjects.length > 0 && (
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-center mb-8">Other Projects</h3>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {otherProjects.map((project) => (
                <Card key={project.id} className="overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">{project.title}</CardTitle>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.tags.slice(0, 2).map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                      {project.tags.length > 2 && (
                        <Badge variant="outline" className="text-xs">
                          +{project.tags.length - 2} more
                        </Badge>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent className="py-2">
                    <CardDescription>{project.description}</CardDescription>
                  </CardContent>
                  <CardFooter className="flex gap-2">
                    <Button asChild size="sm" variant="ghost" className="h-8 w-8 p-0">
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                        <span className="sr-only">GitHub</span>
                      </a>
                    </Button>
                    <Button asChild size="sm" variant="ghost" className="h-8 w-8 p-0">
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                        <span className="sr-only">Demo</span>
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        )}

        <div className="flex justify-center mt-12">
          <Button asChild variant="outline">
            <a href="https://github.zpleum.dev" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <Github className="h-4 w-4" />
              <span>See more on GitHub</span>
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
