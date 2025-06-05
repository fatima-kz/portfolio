'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl: string;
  liveUrl: string;
};

const projects: Project[] = [  
  {
    id: 1,
    title: "Chameleon",
    description: "A language exchange platform that connects language learners with native speakers for real-time conversation practice.",
    image: "/projects/chameleon11.jpg",
    tags: ["Next.js", "Node.js", "MongoDB", "LiveKit", "Tailwind CSS"],
    githubUrl: "https://github.com/Minas-Code/Chameleon",
    liveUrl: "https://chameleon.apps.minascode.com/"
  },
  {
    id: 2,
    title: "AI Video Editor",
    description: "A video editor that uses AI to automatically edit videos, add effects only through simple user prompts making video creation faster and easier.",
    image: "/projects/cd.jpg",
    tags: ["OpenCV", "Ultralytics", "Gemini API", "Streamlit"],
    githubUrl: "https://github.com/fatima-kz/aiEditor",
    liveUrl: ""
  },
  {
    id: 3,
    title: "AI Scheduling Assistant for Physiotherapy",
    description: "An AI-powered scheduling assistant designed for physiotherapy clinics. It automates appointment bookings, manages therapist availability, sends reminders to patients, and optimizes schedules to reduce gaps and cancellations.",
    image: "/projects/aisc.png",
    tags: ["Gemini Api", "Streamlit", "LangGraph", "RAG", "Pandas"],
    githubUrl: "https://github.com/fatima-kz/Mediease",
    liveUrl: ""
  },
  {
    id: 4,
    title: "Stock Videos Website",
    description: "A platform where users can browse, search, and download high-quality stock videos for personal or commercial use.",
    image: "/projects/video.png",
    tags: ["JavaScript", "HTML", "Express.js", "CSS", "MongoDB", "Render"],
    githubUrl: "https://github.com/fatima-kz/stockSite",
    liveUrl: "https://www.stockvideo.site/"
  },
  {
    id: 5,
    title: "Plot Search",
    description: "A text analysis tool to analyze movie plots and recommend similar movies based on their textual content.",
    image: "/projects/plot-search.jpg",
    tags: ["NLP", "Flask", "Html", "CSS", "TF-IDF", "Pandas"],
    githubUrl: "https://github.com/fatima-kz/PlotSearch2",
    liveUrl: ""
  },
  {
    id: 6,
    title: "School Portal",
    description: "An on-going project in developement and testing. A school management system that allows students, teachers, and administrators to manage school operations efficiently.",
    image: "/projects/little gems (2).png",
    tags: ["Next.js", "PostgreSQL", "Prisma", "Tailwind CSS"],
    githubUrl: "https://github.com/CUIGirls/next-dashboard-ui",
    liveUrl: "https://school-portal-lac.vercel.app"
  },
  {
    id: 7,
    title: "Space Game",
    description: "Designed and developed a 2D space-themed game using Unity with C#, incorporating custom graphics and gameplay mechanics",
    image: "/projects/space-game.jpg",
    tags: ["Unity", "C#"],
    githubUrl: "https://github.com/fatima-kz/Space-Game",
    liveUrl: ""
  },
  {
    id: 8,
    title: "RAG Nursing Agent",
    description: "An AI-powered assistant that answers nursing-related questions by retrieving information from uploaded PDF documents. Utilizes Retrieval-Augmented Generation (RAG) to provide accurate, context-aware responses to user queries.",
    image: "/projects/nursing.jpg",
    tags: ["RAG", "LangChain", "OpenAI", "Streamlit", "PDF Parsing"],
    githubUrl: "https://github.com/fatima-kz/Med_agent",
    liveUrl: "https://fatima-kz-med-agent-app-0cyjoz.streamlit.app/"
  },
  
  
];

const Projects = () => {
  return (    <section id="projects" className="py-20 bg-pastel-blue/10 dark:from-gray-800 dark:to-indigo-950 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-pastel-pink/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-pastel-blue/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-heading-dark">
            My Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of the projects I&apos;ve worked on. Each project represents a unique challenge and solution.
          </p>
          <div className="w-24 h-1 bg-pastel-blue mx-auto mt-4 rounded-full"></div>
        </motion.div><div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
        
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >          <Link href="https://github.com/fatima-kz" 
            className="inline-flex items-center gap-2 px-8 py-4 bg-pastel-lavender text-gray-800 font-medium rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-pastel-lavender/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-xl" />
            <span>See More on GitHub</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  return (    <motion.article 
      className="glass dark:glass-dark rounded-xl overflow-hidden shadow-lg hover:shadow-pastel-blue/30 transition-all duration-500 group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
    >      <div className="relative h-48 sm:h-56 overflow-hidden">
        <Image 
          src={project.image} 
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-pastel-lavender/40 opacity-30 group-hover:opacity-60 transition-opacity duration-500"></div>
        
        <div className="absolute top-3 right-3">
          <motion.div 
            className="w-8 h-8 rounded-full bg-pastel-blue flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
          >
            <FaExternalLinkAlt className="text-white text-xs" />
          </motion.div>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-pastel-lavender mb-2">
          {project.title}
        </h3>
        
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
          {project.description}
        </p>        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="px-2 py-0.5 bg-pastel-blue/20 dark:bg-pastel-blue/30 text-gray-700 dark:text-pastel-blue text-xs rounded-full border border-pastel-blue/30 transition-all duration-300 hover:shadow-pastel-blue/20">
              {tag}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span className="px-2 py-0.5 text-xs text-gray-500 dark:text-gray-400">
              +{project.tags.length - 3} more
            </span>
          )}
        </div>
        
        <div className="flex justify-between">
          <Link href={project.githubUrl} 
            className="inline-flex items-center gap-1 text-gray-700 hover:text-gradient-purple-pink dark:text-gray-300 text-sm font-medium transition duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
            <span>Source Code</span>
          </Link>
          
          {project.liveUrl && (
            <Link href={project.liveUrl} 
              className="inline-flex items-center gap-1 text-gray-700 hover:text-gradient-cyan-blue dark:text-gray-300 text-sm font-medium transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaExternalLinkAlt />
              <span>Live Demo</span>
            </Link>
          )}
        </div>
      </div>
    </motion.article>
  );
};

export default Projects;
