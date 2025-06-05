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
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of the projects I've worked on. Each project represents a unique challenge and solution.
          </p>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-4"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link href="https://github.com/fatima-kz" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 hover:bg-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600 text-white font-medium rounded-lg transition duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
            See More on GitHub
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  return (
    <motion.article 
      className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <div className="relative h-56">
        <Image 
          src={project.image} 
          alt={project.title}
          fill
          className="object-cover"
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          {project.title}
        </h3>
        
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span key={tag} className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs rounded-full">
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex justify-between">
          <Link href={project.githubUrl} 
            className="inline-flex items-center gap-1 text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 text-sm font-medium transition duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
            Source Code
          </Link>
          
          <Link href={project.liveUrl} 
            className="inline-flex items-center gap-1 text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 text-sm font-medium transition duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaExternalLinkAlt />
            Live Demo
          </Link>
        </div>
      </div>
    </motion.article>
  );
};

export default Projects;
