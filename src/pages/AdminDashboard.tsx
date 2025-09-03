import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { ArrowLeft, Lock, Plus, Trash2, Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";

const ADMIN_PIN = "1234"; // Simple PIN for now

export const AdminDashboard = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [pin, setPin] = useState("");
  const [showPin, setShowPin] = useState(false);
  const { data, addProject, deleteProject, addPost, deletePost, updateBio, updateSkills, updateResume } = useLocalStorage();
  const { toast } = useToast();

  // New post form
  const [newPost, setNewPost] = useState({ title: "", content: "", image: "" });
  
  // New project form
  const [newProject, setNewProject] = useState({
    title: "", 
    description: "", 
    techStack: "", 
    link: ""
  });
  
  // Bio and skills editing
  const [editBio, setEditBio] = useState(data.bio);
  const [editSkills, setEditSkills] = useState(data.skills.join(", "));

  useEffect(() => {
    const savedAuth = localStorage.getItem('admin-auth');
    if (savedAuth === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = () => {
    if (pin === ADMIN_PIN) {
      setIsAuthenticated(true);
      localStorage.setItem('admin-auth', 'true');
      toast({
        title: "Login Successful",
        description: "Welcome to the admin dashboard!",
      });
    } else {
      toast({
        title: "Invalid PIN",
        description: "Please enter the correct PIN.",
        variant: "destructive",
      });
    }
    setPin("");
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('admin-auth');
    toast({
      title: "Logged Out",
      description: "You have been logged out successfully.",
    });
  };

  const handleAddPost = () => {
    if (!newPost.title || !newPost.content) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    addPost(newPost);
    setNewPost({ title: "", content: "", image: "" });
    toast({
      title: "Post Added",
      description: "Your new post has been added successfully!",
    });
  };

  const handleAddProject = () => {
    if (!newProject.title || !newProject.description) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    const projectData = {
      ...newProject,
      techStack: newProject.techStack.split(",").map(tech => tech.trim()),
    };

    addProject(projectData);
    setNewProject({ title: "", description: "", techStack: "", link: "" });
    toast({
      title: "Project Added",
      description: "Your new project has been added successfully!",
    });
  };

  const handleUpdateBio = () => {
    updateBio(editBio);
    toast({
      title: "Bio Updated",
      description: "Your bio has been updated successfully!",
    });
  };

  const handleUpdateSkills = () => {
    const skillsArray = editSkills.split(",").map(skill => skill.trim());
    updateSkills(skillsArray);
    toast({
      title: "Skills Updated",
      description: "Your skills have been updated successfully!",
    });
  };

  const handleResumeUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (file.type !== 'application/pdf') {
      toast({
        title: "Invalid File Type",
        description: "Please upload a PDF file.",
        variant: "destructive",
      });
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const fileData = e.target?.result as string;
      updateResume({
        fileName: file.name,
        fileData,
        lastUpdated: new Date().toISOString()
      });
      toast({
        title: "Resume Uploaded",
        description: "Your resume has been uploaded successfully!",
      });
    };
    reader.readAsDataURL(file);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 animated-bg">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Card className="glass shadow-card w-full max-w-md">
            <CardHeader className="text-center">
              <Lock className="w-12 h-12 text-neon-cyan mx-auto mb-4" />
              <CardTitle className="gradient-text">Admin Access</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="pin">Enter PIN</Label>
                <div className="relative">
                  <Input
                    id="pin"
                    type={showPin ? "text" : "password"}
                    value={pin}
                    onChange={(e) => setPin(e.target.value)}
                    placeholder="Enter admin PIN"
                    onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
                    className="glass"
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="absolute right-2 top-1/2 -translate-y-1/2"
                    onClick={() => setShowPin(!showPin)}
                  >
                    {showPin ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </Button>
                </div>
              </div>
              <Button onClick={handleLogin} className="w-full glass neon-border">
                Login
              </Button>
              <Button variant="outline" asChild className="w-full glass">
                <Link to="/">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Portfolio
                </Link>
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8 px-4 animated-bg">
      <div className="container max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-between items-center"
        >
          <h1 className="text-3xl font-bold gradient-text">Admin Dashboard</h1>
          <div className="flex gap-4">
            <Button variant="outline" asChild className="glass">
              <Link to="/">
                <ArrowLeft className="w-4 h-4 mr-2" />
                View Portfolio
              </Link>
            </Button>
            <Button onClick={handleLogout} variant="destructive">
              Logout
            </Button>
          </div>
        </motion.div>

        {/* Dashboard Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Tabs defaultValue="posts" className="space-y-6">
            <TabsList className="glass">
              <TabsTrigger value="posts">Posts</TabsTrigger>
              <TabsTrigger value="projects">Projects</TabsTrigger>
              <TabsTrigger value="bio">Bio & Skills</TabsTrigger>
              <TabsTrigger value="resume">Resume</TabsTrigger>
            </TabsList>

            {/* Posts Management */}
            <TabsContent value="posts" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Add New Post */}
                <Card className="glass shadow-card">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Plus className="w-5 h-5" />
                      Add New Post
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label htmlFor="postTitle">Title</Label>
                      <Input
                        id="postTitle"
                        value={newPost.title}
                        onChange={(e) => setNewPost({...newPost, title: e.target.value})}
                        placeholder="Post title"
                        className="glass"
                      />
                    </div>
                    <div>
                      <Label htmlFor="postContent">Content</Label>
                      <Textarea
                        id="postContent"
                        value={newPost.content}
                        onChange={(e) => setNewPost({...newPost, content: e.target.value})}
                        placeholder="Post content"
                        rows={4}
                        className="glass"
                      />
                    </div>
                    <Button onClick={handleAddPost} className="w-full glass neon-border">
                      Add Post
                    </Button>
                  </CardContent>
                </Card>

                {/* Existing Posts */}
                <Card className="glass shadow-card">
                  <CardHeader>
                    <CardTitle>Existing Posts ({data.posts.length})</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 max-h-96 overflow-y-auto">
                      {data.posts.map((post) => (
                        <div key={post.id} className="flex justify-between items-start p-3 glass rounded-lg">
                          <div className="flex-1">
                            <h4 className="font-medium">{post.title}</h4>
                            <p className="text-sm text-muted-foreground line-clamp-2">{post.content}</p>
                            <p className="text-xs text-muted-foreground mt-1">
                              {new Date(post.date).toLocaleDateString()}
                            </p>
                          </div>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => deletePost(post.id)}
                            className="text-destructive hover:text-destructive"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Projects Management */}
            <TabsContent value="projects" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Add New Project */}
                <Card className="glass shadow-card">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Plus className="w-5 h-5" />
                      Add New Project
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label htmlFor="projectTitle">Title</Label>
                      <Input
                        id="projectTitle"
                        value={newProject.title}
                        onChange={(e) => setNewProject({...newProject, title: e.target.value})}
                        placeholder="Project title"
                        className="glass"
                      />
                    </div>
                    <div>
                      <Label htmlFor="projectDescription">Description</Label>
                      <Textarea
                        id="projectDescription"
                        value={newProject.description}
                        onChange={(e) => setNewProject({...newProject, description: e.target.value})}
                        placeholder="Project description"
                        rows={3}
                        className="glass"
                      />
                    </div>
                    <div>
                      <Label htmlFor="projectTech">Tech Stack (comma separated)</Label>
                      <Input
                        id="projectTech"
                        value={newProject.techStack}
                        onChange={(e) => setNewProject({...newProject, techStack: e.target.value})}
                        placeholder="React, Node.js, MongoDB"
                        className="glass"
                      />
                    </div>
                    <div>
                      <Label htmlFor="projectLink">Project Link</Label>
                      <Input
                        id="projectLink"
                        value={newProject.link}
                        onChange={(e) => setNewProject({...newProject, link: e.target.value})}
                        placeholder="https://project-url.com"
                        className="glass"
                      />
                    </div>
                    <Button onClick={handleAddProject} className="w-full glass neon-border">
                      Add Project
                    </Button>
                  </CardContent>
                </Card>

                {/* Existing Projects */}
                <Card className="glass shadow-card">
                  <CardHeader>
                    <CardTitle>Existing Projects ({data.projects.length})</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 max-h-96 overflow-y-auto">
                      {data.projects.map((project) => (
                        <div key={project.id} className="flex justify-between items-start p-3 glass rounded-lg">
                          <div className="flex-1">
                            <h4 className="font-medium">{project.title}</h4>
                            <p className="text-sm text-muted-foreground line-clamp-2">{project.description}</p>
                            <div className="flex flex-wrap gap-1 mt-2">
                              {project.techStack.slice(0, 3).map((tech) => (
                                <span key={tech} className="text-xs px-2 py-1 glass rounded">
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => deleteProject(project.id)}
                            className="text-destructive hover:text-destructive"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Bio & Skills Management */}
            <TabsContent value="bio" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="glass shadow-card">
                  <CardHeader>
                    <CardTitle>Update Bio</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Textarea
                      value={editBio}
                      onChange={(e) => setEditBio(e.target.value)}
                      rows={6}
                      className="glass"
                    />
                    <Button onClick={handleUpdateBio} className="w-full glass neon-border">
                      Update Bio
                    </Button>
                  </CardContent>
                </Card>

                <Card className="glass shadow-card">
                  <CardHeader>
                    <CardTitle>Update Skills</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Textarea
                      value={editSkills}
                      onChange={(e) => setEditSkills(e.target.value)}
                      placeholder="ReactJS, NodeJS, Python, etc."
                      rows={6}
                      className="glass"
                    />
                    <Button onClick={handleUpdateSkills} className="w-full glass neon-border">
                      Update Skills
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Resume Management */}
            <TabsContent value="resume">
              <Card className="glass shadow-card max-w-2xl mx-auto">
                <CardHeader>
                  <CardTitle>Resume Management</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <Label htmlFor="resume">Upload Resume (PDF only)</Label>
                    <Input
                      id="resume"
                      type="file"
                      accept=".pdf"
                      onChange={handleResumeUpload}
                      className="glass"
                    />
                  </div>
                  
                  {data.resume && (
                    <div className="p-4 glass rounded-lg">
                      <h4 className="font-medium mb-2">Current Resume</h4>
                      <p className="text-sm text-muted-foreground">
                        File: {data.resume.fileName}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Last updated: {data.resume.lastUpdated ? new Date(data.resume.lastUpdated).toLocaleDateString() : 'Unknown'}
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </div>
  );
};
