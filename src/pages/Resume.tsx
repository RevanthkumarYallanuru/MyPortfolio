import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Eye, Upload } from "lucide-react";

export const Resume = () => {
  const downloadResume = () => {
    // This would download the actual resume file
    console.log("Downloading resume...");
  };

  const viewResume = () => {
    // This would open the resume in a new tab
    console.log("Viewing resume...");
  };

  const uploadResume = () => {
    // This would open file picker for admin
    console.log("Uploading new resume...");
  };

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container max-w-4xl mx-auto space-y-16">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4"
        >
          <h1 className="text-4xl md:text-6xl font-bold gradient-text">Resume</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Download my latest resume or view it online
          </p>
        </motion.div>

        {/* Resume Preview Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="glass shadow-card">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                {/* Resume Preview */}
                <div className="aspect-[3/4] bg-gradient-hero rounded-lg flex items-center justify-center border border-glass-border">
                  <div className="text-center space-y-4">
                    <div className="text-6xl text-neon-cyan opacity-50">📄</div>
                    <div>
                      <h3 className="text-xl font-semibold gradient-text mb-2">Resume Preview</h3>
                      <p className="text-muted-foreground">
                        Your Name - Web Developer
                      </p>
                    </div>
                  </div>
                </div>

                {/* Resume Actions */}
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold gradient-text mb-4">My Resume</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      Get a comprehensive overview of my skills, experience, and achievements. 
                      My resume is regularly updated to reflect my latest projects and professional growth.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <Button
                      onClick={downloadResume}
                      className="w-full glass neon-border hover:shadow-neon transition-all duration-300 group"
                    >
                      <Download className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                      Download Resume (PDF)
                    </Button>
                    
                    <Button
                      onClick={viewResume}
                      variant="outline"
                      className="w-full glass border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300 group"
                    >
                      <Eye className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                      View Online
                    </Button>

                    {/* Admin Upload Button (would be conditionally shown) */}
                    <Button
                      onClick={uploadResume}
                      variant="secondary"
                      className="w-full glass opacity-50 hover:opacity-100 transition-all duration-300"
                    >
                      <Upload className="w-4 h-4 mr-2" />
                      Upload New Resume (Admin)
                    </Button>
                  </div>

                  <div className="text-sm text-muted-foreground">
                    <p>Last updated: January 2024</p>
                    <p>Format: PDF • Size: 2.3 MB</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Resume Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Card className="glass shadow-card">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold gradient-text mb-6">Resume Highlights</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center space-y-2">
                  <div className="text-3xl font-bold text-neon-cyan">4+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-3xl font-bold text-neon-purple">20+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-3xl font-bold text-neon-pink">10+</div>
                  <div className="text-sm text-muted-foreground">Technologies Mastered</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};