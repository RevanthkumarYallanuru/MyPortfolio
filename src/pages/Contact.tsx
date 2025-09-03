import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, Mail, MapPin, Phone } from "lucide-react";

export const Contact = () => {
  const openWhatsApp = () => {
    // Replace with your WhatsApp number
    const phoneNumber = "1234567890"; // Your phone number without + or spaces
    const message = "Hi! I'd like to discuss a project with you.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  const sendEmail = () => {
    window.location.href = "mailto:your.email@example.com?subject=Project Inquiry";
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
          <h1 className="text-4xl md:text-6xl font-bold gradient-text">Get In Touch</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Let's discuss your next project and bring your ideas to life
          </p>
        </motion.div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* WhatsApp Contact */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="glass shadow-card hover:shadow-neon transition-all duration-300 h-full">
              <CardContent className="p-8 text-center space-y-6">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold gradient-text mb-2">WhatsApp Chat</h3>
                  <p className="text-muted-foreground mb-6">
                    Quick response and real-time communication for urgent inquiries
                  </p>
                  <Button
                    onClick={openWhatsApp}
                    className="glass neon-border hover:shadow-neon transition-all duration-300 group w-full"
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
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card className="glass shadow-card hover:shadow-neon transition-all duration-300 h-full">
              <CardContent className="p-8 text-center space-y-6">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold gradient-text mb-2">Email</h3>
                  <p className="text-muted-foreground mb-6">
                    For detailed project discussions and formal communication
                  </p>
                  <Button
                    onClick={sendEmail}
                    variant="outline"
                    className="glass border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300 w-full group"
                  >
                    <Mail className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                    Send Email
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Card className="glass shadow-card">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold gradient-text mb-8 text-center">Contact Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="space-y-3">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Phone</h4>
                    <p className="text-muted-foreground">+1 (234) 567-8900</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Email</h4>
                    <p className="text-muted-foreground">your.email@example.com</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Location</h4>
                    <p className="text-muted-foreground">Your City, Country</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center space-y-6"
        >
          <h3 className="text-2xl font-bold gradient-text">Ready to Start Your Project?</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I'm always excited to work on new projects and help bring your ideas to life. 
            Whether it's a simple website or a complex web application, let's discuss how we can work together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={openWhatsApp}
              className="glass neon-border hover:shadow-neon transition-all duration-300 group"
            >
              <MessageCircle className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
              Quick Chat on WhatsApp
            </Button>
            <Button
              onClick={sendEmail}
              variant="outline"
              className="glass border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300"
            >
              <Mail className="w-4 h-4 mr-2" />
              Send Detailed Email
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};