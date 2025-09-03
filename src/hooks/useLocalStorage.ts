import { useState, useEffect } from 'react';

export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  link?: string;
  image?: string;
}

export interface Post {
  id: string;
  title: string;
  content: string;
  image?: string;
  date: string;
}

export interface PortfolioData {
  bio: string;
  skills: string[];
  projects: Project[];
  posts: Post[];
  resume: {
    fileName?: string;
    fileData?: string;
    lastUpdated?: string;
  } | null;
}

const defaultData: PortfolioData = {
  bio: "Passionate freelance web developer with expertise in modern technologies. I create innovative digital solutions that make a difference, specializing in full-stack development with a focus on user experience and performance.",
  skills: [
    "ReactJS", "TailwindCSS", "NodeJS", "ExpressJS", "Supabase", 
    "Python", "Java", "MySQL", "AWS", "Git"
  ],
  projects: [
    {
      id: '1',
      title: 'Realtime Ecommerce Website',
      description: 'Full-stack e-commerce platform with real-time features, secure payment integration, and modern UI/UX design.',
      techStack: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'Stripe'],
      link: '#'
    },
    {
      id: '2',
      title: 'Face Detection System',
      description: 'AI-powered face detection and recognition system using machine learning algorithms for security applications.',
      techStack: ['Python', 'OpenCV', 'TensorFlow', 'Flask', 'SQLite'],
      link: '#'
    },
    {
      id: '3',
      title: 'Cafeteria Management System',
      description: 'Comprehensive management system for cafeteria operations including inventory, orders, and customer management.',
      techStack: ['Java', 'Spring Boot', 'MySQL', 'Thymeleaf', 'Bootstrap'],
      link: '#'
    },
    {
      id: '4',
      title: 'Kiritara Resorts (Property Portfolio)',
      description: 'Elegant property portfolio website showcasing luxury resort properties with booking functionality.',
      techStack: ['React', 'Next.js', 'Tailwind CSS', 'Prisma', 'PostgreSQL'],
      link: '#'
    },
    {
      id: '5',
      title: 'VasaviGrand (Hotel Booking Website)',
      description: 'Modern hotel booking platform with room availability, pricing, and reservation management system.',
      techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Razorpay'],
      link: '#'
    }
  ],
  posts: [
    {
      id: '1',
      title: 'Welcome to my portfolio!',
      content: 'Excited to share my journey as a freelance web developer. Here you\'ll find my latest projects, thoughts on technology, and professional updates.',
      date: new Date().toISOString()
    }
  ],
  resume: null
};

export const useLocalStorage = () => {
  const [data, setData] = useState<PortfolioData>(defaultData);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const savedData = localStorage.getItem('portfolio-data');
      if (savedData) {
        const parsedData = JSON.parse(savedData);
        setData({ ...defaultData, ...parsedData });
      }
    } catch (error) {
      console.error('Error loading data from localStorage:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  const saveData = (newData: Partial<PortfolioData>) => {
    const updatedData = { ...data, ...newData };
    setData(updatedData);
    localStorage.setItem('portfolio-data', JSON.stringify(updatedData));
  };

  const addProject = (project: Omit<Project, 'id'>) => {
    const newProject = { ...project, id: Date.now().toString() };
    const updatedProjects = [...data.projects, newProject];
    saveData({ projects: updatedProjects });
  };

  const updateProject = (id: string, project: Partial<Project>) => {
    const updatedProjects = data.projects.map(p => 
      p.id === id ? { ...p, ...project } : p
    );
    saveData({ projects: updatedProjects });
  };

  const deleteProject = (id: string) => {
    const updatedProjects = data.projects.filter(p => p.id !== id);
    saveData({ projects: updatedProjects });
  };

  const addPost = (post: Omit<Post, 'id' | 'date'>) => {
    const newPost = { 
      ...post, 
      id: Date.now().toString(),
      date: new Date().toISOString()
    };
    const updatedPosts = [newPost, ...data.posts];
    saveData({ posts: updatedPosts });
  };

  const deletePost = (id: string) => {
    const updatedPosts = data.posts.filter(p => p.id !== id);
    saveData({ posts: updatedPosts });
  };

  const updateBio = (bio: string) => {
    saveData({ bio });
  };

  const updateSkills = (skills: string[]) => {
    saveData({ skills });
  };

  const updateResume = (resume: PortfolioData['resume']) => {
    saveData({ resume });
  };

  return {
    data,
    loading,
    addProject,
    updateProject,
    deleteProject,
    addPost,
    deletePost,
    updateBio,
    updateSkills,
    updateResume
  };
};