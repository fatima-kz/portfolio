'use client';

import { motion } from 'framer-motion';
import { 
  FaReact, FaNodeJs, 
  FaGit, FaPython,
  FaSearch, FaProjectDiagram, FaStar, FaTasks,
  FaUserTie, FaUsers, FaBrain
} from 'react-icons/fa';
import { 
  SiNextdotjs, SiTailwindcss, SiMongodb, 
  SiExpress, SiChainlink, SiOpencv, 
  SiStreamlit, SiNotion 
} from 'react-icons/si';

type Skill = {
  name: string;
  icon: React.ReactNode;
  color: string;
};

const technicalSkills: Skill[] = [
  { name: 'Next.js', icon: <SiNextdotjs size={32} />, color: 'text-black dark:text-white' },
  { name: 'React', icon: <FaReact size={32} />, color: 'text-cyan-400' },
  { name: 'Node.js', icon: <FaNodeJs size={32} />, color: 'text-green-500' },
  { name: 'MongoDB', icon: <SiMongodb size={32} />, color: 'text-green-600' },
  { name: 'Express.js', icon: <SiExpress size={32} />, color: 'text-gray-600' },
  { name: 'Tailwind CSS', icon: <SiTailwindcss size={32} />, color: 'text-cyan-500' },
  { name: 'Python', icon: <FaPython size={32} />, color: 'text-yellow-400' },
  { name: 'LangChain', icon: <SiChainlink size={32} />, color: 'text-purple-500' },
  { name: 'LangGraph', icon: <FaProjectDiagram size={32} />, color: 'text-rose-500' },
  { name: 'Gemini AI', icon: <FaStar size={32} />, color: 'text-indigo-500' },
  { name: 'RAG', icon: <FaSearch size={32} />, color: 'text-yellow-400' },
  { name: 'OpenCV', icon: <SiOpencv size={32} />, color: 'text-blue-400' },
  { name: 'Streamlit', icon: <SiStreamlit size={32} />, color: 'text-pink-500' },
  { name: 'Git', icon: <FaGit size={32} />, color: 'text-orange-600' },
];


const nonTechnicalSkills: Skill[] = [
  { name: 'Project Management', icon: <FaTasks size={32} />, color: 'text-blue-500' },
  { name: 'Notion (Docs + PM)', icon: <SiNotion size={32} />, color: 'text-black dark:text-white' },
  { name: 'Problem Solving', icon: <FaBrain size={32} />, color: 'text-purple-600' },
  { name: 'Leadership', icon: <FaUserTie size={32} />, color: 'text-indigo-600' },
  { name: 'Teamwork', icon: <FaUsers size={32} />, color: 'text-teal-500' },
];


const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-pastel-mint/10 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Floating code symbols background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div 
          className="absolute top-20 left-1/4 text-4xl text-pastel-purple/30 dark:text-pastel-lavender/20 font-mono"
          animate={{ 
            y: [0, -15, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ repeat: Infinity, duration: 5 }}
        >
          &lt;/&gt;
        </motion.div>
        <motion.div 
          className="absolute bottom-20 right-1/4 text-5xl text-pastel-blue/30 dark:text-pastel-blue/20 font-mono"
          animate={{ 
            y: [0, 20, 0],
            rotate: [0, -5, 0]
          }}
          transition={{ repeat: Infinity, duration: 6 }}
        >
          { }
        </motion.div>
        <motion.div 
          className="absolute top-1/3 right-1/3 text-4xl text-pastel-pink/30 dark:text-pastel-pink/20 font-mono"
          animate={{ 
            y: [0, 15, 0],
            rotate: [0, 10, 0]
          }}
          transition={{ repeat: Infinity, duration: 7 }}
        >
          [ ]
        </motion.div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-heading-dark">
            My Skills
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life.
          </p>
          <div className="w-24 h-1 bg-pastel-mint mx-auto mt-4 rounded-full"></div>
        </motion.div>
          <div className="space-y-12">
          <SkillCategory title="Technical Skills" skills={technicalSkills} />
          <SkillCategory title="Non Technical Skills" skills={nonTechnicalSkills} />
        </div>
      </div>
    </section>
  );
};

const SkillCategory = ({ title, skills }: { title: string; skills: Skill[] }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >      <h3 className="text-xl font-bold text-pastel-blue mb-6 inline-block">
        {title}
      </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
        {skills.map((skill, index) => (
          <SkillCard key={skill.name} skill={skill} index={index} />
        ))}
      </div>
    </motion.div>
  );
};

const SkillCard = ({ skill, index }: { skill: Skill; index: number }) => {
  return (
    <motion.div 
      className="glass dark:glass-dark rounded-lg p-6 flex flex-col items-center justify-center hover:shadow-pastel-mint/30 transition-all duration-300 relative overflow-hidden group"
      whileHover={{ y: -5, scale: 1.05 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.4, 
        delay: index * 0.05,
        type: "spring",
        stiffness: 200
      }}
    >
      <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-pastel-lavender/20 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
      
      <motion.div 
        className={`mb-4 ${skill.color} z-10`}
        whileHover={{ rotate: [0, -10, 10, -10, 0] }}
        transition={{ duration: 0.5 }}
      >
        {skill.icon}
      </motion.div>
      
      <p className="text-gray-800 dark:text-gray-200 font-medium text-center z-10">
        {skill.name}
      </p>
    </motion.div>
  );
};

export default Skills;
