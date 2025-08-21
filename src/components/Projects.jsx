import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

// Import your project images
import project1Img from '../assets/projects/project1.png';
import project2Img from '../assets/projects/project2.png';
import project3Img from '../assets/projects/project3.png';

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce site with product listings, a shopping cart, and a checkout process.",
    image: project1Img,
    tags: ["React", "Node.js", "MongoDB", "TailwindCSS"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Task Management App",
    description: "A web application to manage tasks with features like drag-and-drop, deadlines, and user authentication.",
    image: project2Img,
    tags: ["Vue.js", "Firebase", "SCSS"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Portfolio Website",
    description: "The very website you are looking at, built with a focus on minimalistic design and smooth animations.",
    image: project3Img,
    tags: ["React", "Framer Motion", "TailwindCSS"],
    liveUrl: "#",
    githubUrl: "#",
  },
];

const cardVariants = {
  offscreen: {
    y: 50,
    opacity: 0
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8
    }
  }
};

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-tertiary">
      <div className="container mx-auto">
        <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
        >
            <p className="text-secondary uppercase tracking-wider">My Work</p>
            <h2 className="text-4xl md:text-5xl font-bold mt-2">Projects.</h2>
        </motion.div>

        <div className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden rounded-lg bg-primary shadow-lg"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.4 }}
              variants={cardVariants}
            >
              <img src={project.image} alt={project.title} className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-6">
                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-secondary text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 h-0 group-hover:h-auto">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map(tag => <span key={tag} className="px-2 py-1 text-xs bg-gray-700 rounded-full">{tag}</span>)}
                </div>
                <div className="flex items-center space-x-4 mt-4">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-white"><FaGithub size={24}/></a>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-white"><FaExternalLinkAlt size={22}/></a>
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