import React from 'react';
import { motion } from 'framer-motion';
import { GitHubIcon, ExternalLinkIcon } from './Icons';

const Projects = ({ theme }) => {
  const projectData = [
    {
      title: 'Medical-Report-Generator',
      description: 'A deep learning application that automatically creates captions for medical images. Utilizing sophisticated neural networks like InceptionV3 and LSTM, this tool analyzes medical images to generate detailed captions, assisting in the interpretation and documentation of medical observations.',
      tech: ['Computer Vision', 'MERN Stack', 'Deep Learning', 'TensorFlow', 'Neural Networks', 'InceptionV3', 'LSTM'],
      liveUrl: '#',
      githubUrl: 'https://github.com/RajeshTanguturi/Medical-Image-Captioning-Chest-X-rays',
      period: 'Apr 2024 - Jul 2024',
    },
    {
      title: 'TyreGuard: Intelligent Tyre Condition Analyzer',
      description: 'Built using MERN stack, Flask, and TensorFlow, TyreGuard analyzes tyre conditions at tollgates by capturing images and linking reports to vehicle numbers. Achieved 90%+ accuracy using CNNs for image analysis, with seamless backend integration via Flask.',
      tech: ['Computer Vision', 'MERN Stack', 'Flask', 'TensorFlow', 'CNN', 'Image Analysis'],
      liveUrl: '#',
      githubUrl: 'https://github.com/RajeshTanguturi/TiresOnHighways',
      period: 'Oct 2023 - Feb 2024',
    },
  ];

  const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
          opacity: 1,
          transition: { staggerChildren: 0.2 }
      }
  };

  const itemVariants = {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.section 
        id="projects" 
        className="py-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
    >
      <h2 className="section-title">Things I've Built</h2>
      <motion.div 
        className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
      >
        {projectData.map((project, i) => (
          <motion.div 
            key={i} 
            className="bg-gray-100 dark:bg-gray-800 border border-transparent dark:border-gray-700 rounded-lg p-6 flex flex-col justify-between shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 hover:-translate-y-2"
            variants={itemVariants}
            transition={{ duration: 0.5 }}
          >
            <div>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{project.title}</h3>
                <div className="flex space-x-3">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"><GitHubIcon /></a>
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"><ExternalLinkIcon /></a>
                </div>
              </div>
              {project.period && (
                <div className="mb-2">
                  <span className="text-sm font-medium text-cyan-600 dark:text-cyan-400">{project.period}</span>
                </div>
              )}
              <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm md:text-base">{project.description}</p>
            </div>
            <ul className="flex flex-wrap gap-x-3 gap-y-1 font-mono text-sm text-cyan-600 dark:text-cyan-300">
              {project.tech.map(t => <li key={t}>{t}</li>)}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Projects;
