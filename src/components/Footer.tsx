import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Mail, MessageCircle, Heart } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const openWhatsApp = () => {
    const whatsappUrl = `https://wa.me/917207357312?text=${encodeURIComponent("Hi! I'd like to discuss a project with you.")}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="glass border-t border-glass-border mt-20"
    >
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold gradient-text">Get In Touch</h3>
            <div className="space-y-2 text-muted-foreground">
              <p>Email: revnthkumaryallanuru103@gmail.com</p>
              <p>GitHub: github.com/RevanthkumarYallanuru</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold gradient-text">Quick Links</h3>
            <div className="flex flex-wrap gap-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={openWhatsApp}
                className="hover:glass hover:text-neon-cyan transition-all duration-300"
              >
                <MessageCircle className="w-4 h-4" />
              </Button>
              
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="hover:glass hover:text-neon-purple transition-all duration-300"
              >
                <a href="mailto:revnthkumaryallanuru103@gmail.com">
                  <Mail className="w-4 h-4" />
                </a>
              </Button>
              
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="hover:glass hover:text-neon-pink transition-all duration-300"
              >
                <a 
                  href="https://github.com/RevanthkumarYallanuru" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Github className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>

          {/* Copyright */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold gradient-text">Yallanuru Revanth Kumar</h3>
            <p className="text-muted-foreground text-sm">
              Freelancer | Web Developer
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-neon-pink" />
              <span>© {currentYear}</span>
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};