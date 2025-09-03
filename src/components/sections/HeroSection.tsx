import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, MessageCircle } from "lucide-react";

export const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openWhatsApp = () => {
    const whatsappUrl = `https://wa.me/917207357312?text=${encodeURIComponent("Hi! I'd like to discuss a project with you.")}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="container max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-lg text-muted-foreground"
              >
                Hello, I'm
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-5xl md:text-7xl font-bold gradient-text"
              >
                Yallanuru Revanth Kumar
              </motion.h1>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-2xl md:text-3xl text-accent font-semibold"
              >
                Freelancer | Web Developer
              </motion.div>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-lg text-muted-foreground max-w-2xl leading-relaxed"
              >
                Crafting innovative digital solutions with modern technologies. Specialized in 
                full-stack development, creating web applications that make a difference in the digital world.
              </motion.p>
            </div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Button 
                onClick={() => scrollToSection('projects')}
                className="glass neon-border hover:shadow-neon transition-all duration-300 group"
              >
                View My Work
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button
                variant="outline"
                onClick={openWhatsApp}
                className="glass border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300 group"
              >
                <MessageCircle className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                Let's Chat
              </Button>
              
              <Button
                variant="secondary"
                onClick={() => scrollToSection('contact')}
                className="glass hover:glass transition-all duration-300 group"
              >
                <Download className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                Contact Me
              </Button>
            </motion.div>

            {/* Avatar & GitHub Link */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex items-center gap-4"
            >
              <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">RK</span>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">GitHub:</p>
                <a 
                  href="https://github.com/RevanthkumarYallanuru" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-accent hover:text-neon-cyan transition-colors duration-300"
                >
                  github.com/RevanthkumarYallanuru
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Hero Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-8 -right-8 w-24 h-24 glass rounded-full neon-border opacity-60"
              />
              
              <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute -bottom-8 -left-8 w-32 h-32 glass rounded-full border border-glass-border opacity-40"
              />

              {/* Main Visual Container */}
              <div className="relative glass rounded-2xl p-8 shadow-card">
                <div className="aspect-square bg-gradient-hero rounded-xl flex items-center justify-center">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="w-32 h-32 border-2 border-dashed border-neon-cyan rounded-full flex items-center justify-center"
                  >
                    <motion.div
                      animate={{ rotate: -360 }}
                      transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                      className="text-4xl font-bold gradient-text"
                    >
                      &lt;/&gt;
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};