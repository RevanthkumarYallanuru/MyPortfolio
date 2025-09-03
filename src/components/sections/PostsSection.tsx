import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, MessageCircle, Share2, Calendar } from "lucide-react";
import { useLocalStorage } from "@/hooks/useLocalStorage";

export const PostsSection = () => {
  const { data } = useLocalStorage();

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <section id="posts" className="py-20 px-4">
      <div className="container max-w-4xl mx-auto space-y-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4"
        >
          <h2 className="text-4xl md:text-6xl font-bold gradient-text">Posts & Updates</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My journey in code, updates, and professional milestones
          </p>
        </motion.div>

        {/* Posts Feed */}
        <div className="space-y-8">
          {data.posts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
            >
              <Card className="glass shadow-card hover:shadow-neon transition-all duration-300">
                <CardContent className="p-0">
                  {/* Post Header */}
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                        <span className="text-white font-bold">RK</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">Yallanuru Revanth Kumar</h3>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          {formatDate(post.date)}
                        </div>
                      </div>
                    </div>

                    <h4 className="text-xl font-semibold mb-2 gradient-text">{post.title}</h4>
                    <p className="text-muted-foreground leading-relaxed mb-4">{post.content}</p>
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
                          <span>Like</span>
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors duration-300"
                        >
                          <MessageCircle className="w-4 h-4" />
                          <span>Comment</span>
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

        {data.posts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center py-12"
          >
            <div className="text-4xl text-neon-cyan opacity-50 mb-4">📝</div>
            <p className="text-muted-foreground">No posts yet. Check back soon for updates!</p>
          </motion.div>
        )}
      </div>
    </section>
  );
};