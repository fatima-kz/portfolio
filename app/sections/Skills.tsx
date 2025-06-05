'use client';

import { motion } from 'framer-motion';
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, 
  FaDatabase, FaGit, FaFigma, FaDocker, FaPython,
  FaSearch, FaProjectDiagram, FaStar, FaTasks,
  FaUserTie, FaUsers, FaBrain
} from 'react-icons/fa';
import { 
  SiNextdotjs, SiTypescript, SiTailwindcss, SiMongodb, 
  SiGraphql, SiExpress, SiChainlink, SiOpencv, 
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
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My Skills
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life.
          </p>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-4"></div>
        </motion.div>
        
        <div className="space-y-12">
          <SkillCategory title="Technical Skills" skills={technicalSkills} />
          <SkillCategory title="Non Technical " skills={nonTechnicalSkills} />
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
    >
      <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-6">
        {title}
      </h3>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {skills.map((skill) => (
          <SkillCard key={skill.name} skill={skill} />
        ))}
      </div>
    </motion.div>
  );
};

const SkillCard = ({ skill }: { skill: Skill }) => {
  return (
    <motion.div 
      className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 flex flex-col items-center justify-center shadow-md hover:shadow-lg transition-shadow duration-300"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <div className={`mb-3 ${skill.color}`}>
        {skill.icon}
      </div>
      <p className="text-gray-800 dark:text-gray-200 font-medium text-center">
        {skill.name}
      </p>
    </motion.div>
  );
};

export default Skills;
