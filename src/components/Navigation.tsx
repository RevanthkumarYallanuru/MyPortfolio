import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X, Home, User, FolderOpen, Image, FileText, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
  { path: "/", label: "Home", icon: Home },
  { path: "/about", label: "About", icon: User },
  { path: "/projects", label: "Projects", icon: FolderOpen },
  { path: "/gallery", label: "Gallery", icon: Image },
  { path: "/resume", label: "Resume", icon: FileText },
  { path: "/contact", label: "Contact", icon: Mail },
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 nav-blur">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo/Brand */}
        <Link to="/" className="flex items-center space-x-2">
          <motion.div
            className="text-2xl font-bold gradient-text"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            Portfolio
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <Link key={item.path} to={item.path}>
                <Button
                  variant="ghost"
                  className={`flex items-center gap-2 transition-all duration-300 ${
                    isActive 
                      ? "glass neon-border text-neon-cyan" 
                      : "hover:glass hover:text-accent"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {item.label}
                </Button>
              </Link>
            );
          })}
        </div>

        {/* Theme Toggle & Mobile Menu Button */}
        <div className="flex items-center gap-2">
          <ThemeToggle />
          
          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden glass"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="md:hidden overflow-hidden glass border-t border-glass-border"
      >
        <div className="container mx-auto p-4 space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
              >
                <Button
                  variant="ghost"
                  className={`w-full justify-start gap-3 transition-all duration-300 ${
                    isActive 
                      ? "glass neon-border text-neon-cyan" 
                      : "hover:glass hover:text-accent"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {item.label}
                </Button>
              </Link>
            );
          })}
        </div>
      </motion.div>
    </nav>
  );
};