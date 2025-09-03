import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const skills = [
  { category: "Frontend", items: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Vue.js"] },
  { category: "Backend", items: ["Node.js", "Express", "Python", "Java", "PHP"] },
  { category: "Database", items: ["MongoDB", "MySQL", "PostgreSQL", "Redis"] },
  { category: "Tools", items: ["Git", "Docker", "AWS", "Firebase", "Figma"] },
];

const experiences = [
  {
    title: "Senior Web Developer",
    company: "Tech Company",
    period: "2022 - Present",
    description: "Leading development of modern web applications using React and Node.js"
  },
  {
    title: "Full Stack Developer",
    company: "Startup Inc.",
    period: "2020 - 2022",
    description: "Built scalable web solutions and managed database architecture"
  },
  {
    title: "Junior Developer",
    company: "Dev Agency",
    period: "2019 - 2020",
    description: "Developed responsive websites and learned modern development practices"
  },
];

export const About = () => {
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
          <h1 className="text-4xl md:text-6xl font-bold gradient-text">About Me</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate developer crafting digital experiences with cutting-edge technologies
          </p>
        </motion.div>

        {/* Bio Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="glass shadow-card">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-accent mb-6">My Story</h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Hello! I'm a passionate web developer with over 4 years of experience creating 
                  digital solutions that make a difference. My journey began with curiosity about 
                  how websites work, and it has evolved into a deep love for crafting user-centric 
                  applications.
                </p>
                <p>
                  I specialize in the MERN stack (MongoDB, Express.js, React, Node.js) and have 
                  extensive experience with Python and Java. I believe in writing clean, maintainable 
                  code and staying up-to-date with the latest industry trends and best practices.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new technologies, contributing to 
                  open-source projects, or sharing knowledge with the developer community.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="space-y-8"
        >
          <h2 className="text-3xl font-bold text-center gradient-text">Skills & Technologies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skillGroup, index) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              >
                <Card className="glass shadow-card hover:shadow-neon transition-all duration-300">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-accent mb-4">{skillGroup.category}</h3>
                    <div className="space-y-2">
                      {skillGroup.items.map((skill) => (
                        <div
                          key={skill}
                          className="px-3 py-2 glass rounded-lg text-sm border border-glass-border hover:neon-border transition-all duration-300"
                        >
                          {skill}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="space-y-8"
        >
          <h2 className="text-3xl font-bold text-center gradient-text">Experience</h2>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
              >
                <Card className="glass shadow-card hover:shadow-neon transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-foreground">{exp.title}</h3>
                        <p className="text-accent font-medium">{exp.company}</p>
                      </div>
                      <span className="text-sm text-muted-foreground mt-2 md:mt-0">{exp.period}</span>
                    </div>
                    <p className="text-muted-foreground">{exp.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};