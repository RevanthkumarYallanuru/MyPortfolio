import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Eye, FileText } from "lucide-react";
import { useLocalStorage } from "@/hooks/useLocalStorage";

export const ResumeSection = () => {
  const { data } = useLocalStorage();

  const downloadResume = () => {
    if (data.resume?.fileData) {
      const link = document.createElement('a');
      link.href = data.resume.fileData;
      link.download = data.resume.fileName || 'resume.pdf';
      link.click();
    } else {
      console.log("No resume available for download");
    }
  };

  const viewResume = () => {
    if (data.resume?.fileData) {
      window.open(data.resume.fileData, '_blank');
    } else {
      console.log("No resume available to view");
    }
  };

  return (
    <section id="resume" className="py-20 px-4">
      <div className="container max-w-4xl mx-auto space-y-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4"
        >
          <h2 className="text-4xl md:text-6xl font-bold gradient-text">Resume</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Download my latest resume or view it online
          </p>
        </motion.div>

        {/* Resume Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="glass shadow-card">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                {/* Resume Preview */}
                <div className="aspect-[3/4] bg-gradient-hero rounded-lg flex items-center justify-center border border-glass-border">
                  <div className="text-center space-y-4">
                    <FileText className="w-16 h-16 text-neon-cyan opacity-50 mx-auto" />
                    <div>
                      <h3 className="text-xl font-semibold gradient-text mb-2">Resume Preview</h3>
                      <p className="text-muted-foreground">
                        Yallanuru Revanth Kumar - Freelancer | Web Developer
                      </p>
                    </div>
                  </div>
                </div>

                {/* Resume Actions */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold gradient-text mb-4">My Resume</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Get a comprehensive overview of my skills, experience, and achievements. 
                      My resume is regularly updated to reflect my latest projects and professional growth.
                    </p>
                  </div>

                  <div className="space-y-4">
                    {data.resume ? (
                      <>
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
                        
                        <div className="text-sm text-muted-foreground">
                          <p>Last updated: {data.resume.lastUpdated ? new Date(data.resume.lastUpdated).toLocaleDateString() : 'Recently'}</p>
                          <p>Format: PDF</p>
                        </div>
                      </>
                    ) : (
                      <div className="text-center py-8">
                        <FileText className="w-12 h-12 text-muted-foreground opacity-50 mx-auto mb-4" />
                        <p className="text-muted-foreground">Resume not yet uploaded</p>
                        <p className="text-sm text-muted-foreground mt-2">
                          Check back soon or contact me directly for my latest resume
                        </p>
                      </div>
                    )}
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