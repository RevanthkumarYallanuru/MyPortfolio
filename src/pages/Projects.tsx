import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    image: "/placeholder.svg",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
    featured: true
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    tech: ["React", "TypeScript", "Firebase", "Tailwind CSS"],
    image: "/placeholder.svg",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example"
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "Beautiful weather application with location-based forecasts, interactive maps, and detailed weather analytics.",
    tech: ["Vue.js", "Python", "FastAPI", "PostgreSQL"],
    image: "/placeholder.svg",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example"
  },
  {
    id: 4,
    title: "Social Media Platform",
    description: "Modern social media platform with real-time messaging, post sharing, and advanced privacy controls.",
    tech: ["Next.js", "Socket.io", "Redis", "AWS"],
    image: "/placeholder.svg",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example"
  }
];

export const Projects = () => {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container max-w-6xl mx-auto space-y-16">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4"
        >
          <h1 className="text-4xl md:text-6xl font-bold gradient-text">My Projects</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A collection of projects I've worked on, showcasing various technologies and solutions
          </p>
        </motion.div>

        {/* Featured Project */}
        {projects.filter(p => p.featured).map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <Card className="glass shadow-card hover:shadow-neon transition-all duration-300">
              <CardContent className="p-0">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div className="aspect-video lg:aspect-square bg-gradient-hero rounded-l-lg flex items-center justify-center">
                    <div className="text-6xl text-neon-cyan opacity-50">🚀</div>
                  </div>
                  <div className="p-8 space-y-6">
                    <div className="space-y-2">
                      <span className="text-sm text-accent font-medium">Featured Project</span>
                      <h3 className="text-2xl font-bold gradient-text">{project.title}</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-sm glass rounded-full border border-glass-border"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      <Button className="glass neon-border hover:shadow-neon transition-all duration-300 group">
                        <ExternalLink className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                        Live Demo
                      </Button>
                      <Button variant="outline" className="glass border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}

        {/* Other Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.filter(p => !p.featured).map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
            >
              <Card className="glass shadow-card hover:shadow-neon transition-all duration-300 group">
                <CardContent className="p-0">
                  <div className="aspect-video bg-gradient-hero rounded-t-lg flex items-center justify-center group-hover:bg-gradient-primary transition-all duration-300">
                    <div className="text-4xl text-neon-cyan opacity-50">💻</div>
                  </div>
                  <div className="p-6 space-y-4">
                    <h3 className="text-xl font-bold gradient-text">{project.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs glass rounded-full border border-glass-border"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className="px-2 py-1 text-xs text-muted-foreground">
                          +{project.tech.length - 3} more
                        </span>
                      )}
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" className="glass neon-border hover:shadow-neon transition-all duration-300 flex-1">
                        <ExternalLink className="w-3 h-3 mr-1" />
                        Demo
                      </Button>
                      <Button size="sm" variant="outline" className="glass border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                        <Github className="w-3 h-3" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
