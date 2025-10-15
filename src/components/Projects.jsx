import React from 'react';
import { motion } from 'framer-motion';
import { GitHubIcon, ExternalLinkIcon } from './Icons';

const Projects = () => {
  const projectData = [
    {
      title: 'Medical Report Generator',
      description: 'A deep learning application that automatically creates captions for medical images using InceptionV3 and LSTM networks. Analyzes medical images to generate detailed captions, assisting in interpretation and documentation.',
      tech: ['Computer Vision', 'MERN Stack', 'TensorFlow', 'InceptionV3', 'LSTM'],
      liveUrl: '#',
      githubUrl: 'https://github.com/RajeshTanguturi/Medical-Image-Captioning-Chest-X-rays',
      period: 'Apr 2024 - Jul 2024',
      gradient: 'from-cyan-500 to-blue-600',
    },
    {
      title: 'TyreGuard: Intelligent Analyzer',
      description: 'MERN stack application with Flask and TensorFlow backend. Analyzes tyre conditions at tollgates by capturing images and linking reports to vehicle numbers. Achieved 90%+ accuracy using CNNs.',
      tech: ['MERN Stack', 'Flask', 'TensorFlow', 'CNN', 'Computer Vision'],
      liveUrl: '#',
      githubUrl: 'https://github.com/RajeshTanguturi/TiresOnHighways',
      period: 'Oct 2023 - Feb 2024',
      gradient: 'from-purple-500 to-pink-600',
    },
  ];

  return (
    <section id="projects" className="relative py-32 px-6 md:px-16 overflow-hidden bg-gray-950">
      <motion.div
        className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full opacity-20"
        style={{
          background: "radial-gradient(circle, rgba(236,72,153,0.6) 0%, transparent 70%)",
          filter: "blur(100px)",
        }}
        animate={{
          y: [0, -50, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white via-cyan-200 to-purple-300 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mb-16"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projectData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br opacity-20 group-hover:opacity-30 blur-xl transition-opacity duration-300 rounded-2xl"
                   style={{
                     background: `linear-gradient(135deg, ${project.gradient.includes('cyan') ? '#22d3ee' : '#a855f7'}, ${project.gradient.includes('blue') ? '#3b82f6' : '#ec4899'})`
                   }}
              />
              
              <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300 h-full flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <div className={`text-sm font-mono text-transparent bg-clip-text bg-gradient-to-r ${project.gradient}`}>
                    {project.period}
                  </div>
                  <div className="flex gap-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-cyan-400 transition-colors transform hover:scale-110"
                    >
                      <GitHubIcon />
                    </a>
                    <a
                      href={project.liveUrl}
                      className="text-gray-400 hover:text-cyan-400 transition-colors transform hover:scale-110"
                    >
                      <ExternalLinkIcon />
                    </a>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-300 mb-6 flex-grow leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-mono bg-gray-800 text-cyan-400 rounded-full border border-cyan-500/30 hover:border-cyan-500 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
