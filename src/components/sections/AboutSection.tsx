import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { useLocalStorage } from "@/hooks/useLocalStorage";

export const AboutSection = () => {
  const { data } = useLocalStorage();

  return (
    <section id="about" className="py-20 px-4">
      <div className="container max-w-6xl mx-auto space-y-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4"
        >
          <h2 className="text-4xl md:text-6xl font-bold gradient-text">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate developer crafting digital experiences with cutting-edge technologies
          </p>
        </motion.div>

        {/* Bio Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="glass shadow-card">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-accent mb-6">My Story</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {data.bio}
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="space-y-8"
        >
          <h3 className="text-3xl font-bold text-center gradient-text">Skills & Technologies</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {data.skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.4 }}
                className="px-6 py-3 glass rounded-full border border-glass-border hover:neon-border transition-all duration-300 cursor-default"
              >
                <span className="text-foreground font-medium">{skill}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Card className="glass shadow-card">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center space-y-2">
                  <div className="text-3xl font-bold text-neon-cyan">5+</div>
                  <div className="text-sm text-muted-foreground">Major Projects</div>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-3xl font-bold text-neon-purple">10+</div>
                  <div className="text-sm text-muted-foreground">Technologies</div>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-3xl font-bold text-neon-pink">100%</div>
                  <div className="text-sm text-muted-foreground">Client Satisfaction</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};