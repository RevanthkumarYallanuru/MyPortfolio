import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, Mail, Github, MapPin } from "lucide-react";

export const ContactSection = () => {
  const openWhatsApp = () => {
    const whatsappUrl = `https://wa.me/917207357312?text=${encodeURIComponent("Hi! I'd like to discuss a project with you.")}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container max-w-4xl mx-auto space-y-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4"
        >
          <h2 className="text-4xl md:text-6xl font-bold gradient-text">Get In Touch</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your next project
          </p>
        </motion.div>

        {/* Contact Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* WhatsApp Contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="glass shadow-card hover:shadow-neon transition-all duration-300 h-full">
              <CardContent className="p-8 text-center space-y-6">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold gradient-text mb-2">WhatsApp Chat</h3>
                  <p className="text-muted-foreground mb-4">
                    Quick response guaranteed! Let's discuss your project requirements directly.
                  </p>
                  <Button
                    onClick={openWhatsApp}
                    className="glass neon-border hover:shadow-neon transition-all duration-300 group"
                  >
                    <MessageCircle className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                    Start WhatsApp Chat
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Email Contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card className="glass shadow-card hover:shadow-neon transition-all duration-300 h-full">
              <CardContent className="p-8 text-center space-y-6">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold gradient-text mb-2">Email</h3>
                  <p className="text-muted-foreground mb-4">
                    Prefer email? Send me a detailed message about your project.
                  </p>
                  <Button
                    variant="outline"
                    asChild
                    className="glass border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                  >
                    <a href="mailto:revnthkumaryallanuru103@gmail.com">
                      <Mail className="w-4 h-4 mr-2" />
                      Send Email
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Card className="glass shadow-card">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold gradient-text mb-6 text-center">Contact Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center space-y-2">
                  <MessageCircle className="w-6 h-6 text-neon-cyan mx-auto" />
                  <div className="text-sm text-muted-foreground">WhatsApp</div>
                  <div className="text-sm">+91 7207357312</div>
                </div>
                <div className="text-center space-y-2">
                  <Mail className="w-6 h-6 text-neon-purple mx-auto" />
                  <div className="text-sm text-muted-foreground">Email</div>
                  <div className="text-sm break-all">revnthkumaryallanuru103@gmail.com</div>
                </div>
                <div className="text-center space-y-2">
                  <Github className="w-6 h-6 text-neon-pink mx-auto" />
                  <div className="text-sm text-muted-foreground">GitHub</div>
                  <div className="text-sm">
                    <a 
                      href="https://github.com/RevanthkumarYallanuru" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-accent hover:text-neon-cyan transition-colors duration-300"
                    >
                      RevanthkumarYallanuru
                    </a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};