import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { useLocalStorage } from "@/hooks/useLocalStorage";

export const ProjectsSection = () => {
  const { data } = useLocalStorage();

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container max-w-6xl mx-auto space-y-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4"
        >
          <h2 className="text-4xl md:text-6xl font-bold gradient-text">Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Showcase of my technical expertise and creative problem-solving abilities
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {data.projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
            >
              <Card className="glass shadow-card hover:shadow-neon transition-all duration-300 h-full">
                <CardContent className="p-6 space-y-4">
                  {/* Project Image Placeholder */}
                  <div className="aspect-video bg-gradient-hero rounded-lg flex items-center justify-center">
                    <div className="text-4xl text-neon-cyan opacity-50">💻</div>
                  </div>

                  {/* Project Info */}
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold gradient-text">{project.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs glass rounded-full border border-glass-border"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Project Links */}
                    <div className="flex gap-3 pt-2">
                      {project.link && (
                        <Button
                          variant="outline"
                          size="sm"
                          asChild
                          className="glass border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                        >
                          <a href={project.link} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            View Project
                          </a>
                        </Button>
                      )}
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-muted-foreground hover:text-neon-cyan transition-colors duration-300"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};