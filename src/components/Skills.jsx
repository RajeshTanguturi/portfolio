import React from 'react';
import { motion } from 'framer-motion';

const Skills = ({ theme }) => {
  const skills = [
    'JavaScript (ES6+)', 'TypeScript', 'React', 'Next.js', 'Node.js', 
    'Tailwind CSS', 'GraphQL', 'PostgreSQL', 'Docker', 'Figma', 'Java', 'Python'
  ];

  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.section 
        id="skills" 
        className="py-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        variants={listVariants}
    >
      <h2 className="section-title">My Tech Stack</h2>
      <motion.ul 
        className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
        variants={listVariants}
      >
        {skills.map(skill => (
          <motion.li 
            key={skill} 
            className="flex items-center space-x-3 bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-md"
            variants={itemVariants}
          >
            <span className="text-cyan-400">▹</span>
            <span className="font-mono text-gray-700 dark:text-gray-200 text-sm md:text-base">{skill}</span>
          </motion.li>
        ))}
      </motion.ul>
    </motion.section>
  );
};

export default Skills;
