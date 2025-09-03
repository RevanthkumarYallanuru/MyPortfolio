import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Sun, Moon } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

export const Header = () => {
  const { theme, toggleTheme } = useTheme();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50 nav-blur"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Name */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl font-bold gradient-text cursor-pointer"
            onClick={() => scrollToSection('hero')}
          >
            Revanth Kumar
          </motion.div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {[
              { name: 'About', id: 'about' },
              { name: 'Projects', id: 'projects' },
              { name: 'Posts', id: 'posts' },
              { name: 'Resume', id: 'resume' },
              { name: 'Contact', id: 'contact' }
            ].map((item, index) => (
              <motion.button
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                onClick={() => scrollToSection(item.id)}
                className="text-muted-foreground hover:text-accent transition-colors duration-300"
              >
                {item.name}
              </motion.button>
            ))}
          </nav>

          {/* Actions */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="flex items-center space-x-4"
          >
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="hover:glass transition-all duration-300"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              asChild
              className="hover:glass transition-all duration-300"
            >
              <a 
                href="https://github.com/RevanthkumarYallanuru" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Github className="w-4 h-4" />
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.header>
  );
};