import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, MessageCircle, Share2, Calendar } from "lucide-react";

const posts = [
  {
    id: 1,
    title: "Launched new e-commerce platform!",
    content: "Just deployed a full-stack e-commerce solution with modern payment integration and real-time inventory management. Excited to share this milestone!",
    image: "/placeholder.svg",
    date: "2024-01-15",
    likes: 42,
    comments: 8,
    tags: ["React", "Node.js", "MongoDB"]
  },
  {
    id: 2,
    title: "Contributing to open source",
    content: "Made my first contribution to a major open source project. Small steps lead to big changes in the developer community.",
    date: "2024-01-10",
    likes: 28,
    comments: 5,
    tags: ["Open Source", "Community"]
  },
  {
    id: 3,
    title: "Learning new technologies",
    content: "Diving deep into Rust and WebAssembly. The performance improvements are incredible! Can't wait to integrate these into upcoming projects.",
    image: "/placeholder.svg",
    date: "2024-01-05",
    likes: 35,
    comments: 12,
    tags: ["Rust", "WebAssembly", "Performance"]
  },
  {
    id: 4,
    title: "Workshop on Modern React Patterns",
    content: "Conducted a workshop on advanced React patterns including custom hooks, context optimization, and performance best practices.",
    date: "2024-01-01",
    likes: 56,
    comments: 15,
    tags: ["React", "Workshop", "Teaching"]
  }
];

export const Gallery = () => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
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
          <h1 className="text-4xl md:text-6xl font-bold gradient-text">Gallery</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My journey in code, updates, and professional milestones
          </p>
        </motion.div>

        {/* Posts Feed */}
        <div className="space-y-8">
          {posts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
            >
              <Card className="glass shadow-card hover:shadow-neon transition-all duration-300">
                <CardContent className="p-0">
                  {/* Post Header */}
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                        <span className="text-white font-bold">YN</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">Your Name</h3>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          {formatDate(post.date)}
                        </div>
                      </div>
                    </div>

                    <h4 className="text-xl font-semibold mb-2 gradient-text">{post.title}</h4>
                    <p className="text-muted-foreground leading-relaxed mb-4">{post.content}</p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-sm glass rounded-full border border-glass-border hover:neon-border transition-all duration-300"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Post Image (if exists) */}
                  {post.image && (
                    <div className="px-6 pb-4">
                      <div className="aspect-video bg-gradient-hero rounded-lg flex items-center justify-center">
                        <div className="text-4xl text-neon-cyan opacity-50">📸</div>
                      </div>
                    </div>
                  )}

                  {/* Post Actions */}
                  <div className="px-6 pb-6">
                    <div className="flex items-center justify-between pt-4 border-t border-glass-border">
                      <div className="flex items-center gap-6">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="flex items-center gap-2 text-muted-foreground hover:text-neon-pink transition-colors duration-300"
                        >
                          <Heart className="w-4 h-4" />
                          {post.likes}
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors duration-300"
                        >
                          <MessageCircle className="w-4 h-4" />
                          {post.comments}
                        </Button>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-muted-foreground hover:text-neon-cyan transition-colors duration-300"
                      >
                        <Share2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Load More Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <Button
            variant="outline"
            className="glass border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300"
          >
            Load More Posts
          </Button>
        </motion.div>
      </div>
    </div>
  );
};