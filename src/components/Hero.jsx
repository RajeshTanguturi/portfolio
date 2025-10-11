import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ResumeModal from './ResumeModal';

const Hero = ({ theme }) => {
    const [isResumeModalOpen, setResumeModalOpen] = useState(false);
    
    const scrollTo = (sectionId) => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <motion.section 
    id="home" 
    className="min-h-screen flex flex-col justify-center items-start relative z-0 overflow-hidden"
>
    <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-bl from-cyan-400/30 via-purple-400/20 to-transparent -z-10 rounded-full blur-3xl pointer-events-none"></div>
    <div className="absolute bottom-0 right-1/4 w-1/2 h-1/2 bg-gradient-to-tr from-cyan-500/20 to-transparent -z-10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="max-w-3xl relative z-10">
                <motion.h2 className="text-lg md:text-xl text-cyan-400 font-mono" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 0.5 }}>Hi, my name is</motion.h2>
                <motion.h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-gray-900 dark:text-white mt-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 0.5 }}>
                    Rajesh Tanguturi.
                </motion.h1>
                <motion.h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-500 dark:text-gray-400 mt-3" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6, duration: 0.5 }}>
                    I build things for the web.
                </motion.h3>
                <motion.p className="mt-6 text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-xl" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8, duration: 0.5 }}>
                    I'm a software engineer specializing in building (and occasionally designing)
                    exceptional digital experiences. Currently, I'm focused on building
                    accessible, human-centered products.
                </motion.p>
                <div className="flex flex-wrap gap-4 mt-8">
                    <motion.button 
                        onClick={() => scrollTo('projects')}
                        className="px-8 py-4 border border-cyan-400 text-cyan-400 rounded-md font-mono text-lg hover:bg-cyan-400/10 transition-colors duration-300"
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 0.5 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Check out my projects!
                    </motion.button>
                    <motion.button 
                        onClick={() => setResumeModalOpen(true)}
                        className="px-8 py-4 bg-cyan-500 text-white rounded-md font-mono text-lg hover:bg-cyan-600 transition-colors duration-300 flex items-center justify-center"
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2, duration: 0.5 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        View Resume
                    </motion.button>
                </div>

            </div>
               
            
            {/* Resume Modal */}
            <ResumeModal 
                isOpen={isResumeModalOpen} 
                onClose={() => setResumeModalOpen(false)} 
            />
        </motion.section>
    );
};

export default Hero;
