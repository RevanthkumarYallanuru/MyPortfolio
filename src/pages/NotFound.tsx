import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center px-4 animated-bg">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-8"
      >
        <div className="space-y-4">
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-8xl md:text-9xl font-bold gradient-text"
          >
            404
          </motion.div>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground">
            Page Not Found
          </h1>
          <p className="text-lg text-muted-foreground max-w-md mx-auto">
            Oops! The page you're looking for seems to have wandered off into the digital void.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link to="/">
            <Button className="glass neon-border hover:shadow-neon transition-all duration-300 group">
              <Home className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
              Go Home
            </Button>
          </Link>
          <Button
            variant="outline"
            onClick={() => window.history.back()}
            className="glass border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300 group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
            Go Back
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-sm text-muted-foreground"
        >
          Lost? Try navigating from the menu above or contact me if you think this is an error.
        </motion.div>
      </motion.div>
    </div>
  );
};

export default NotFound;
