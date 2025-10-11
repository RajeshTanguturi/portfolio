
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';


const About = ({ theme }) => {
    return (
        <motion.section 
            id="about" 
            className="py-24"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
        >
            <h2 className="section-title">About Me</h2>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-center mt-8">
                <div className="md:col-span-3 text-lg text-gray-600 dark:text-gray-300 space-y-4">
                    <p>
                        Hello! I'm Rajesh Tanguturi, a passionate software developer with a knack for creating elegant solutions in the least amount of time. My journey in tech started back in 2022, and since then, I've been hooked on the thrill of turning complex problems into beautiful, intuitive applications.
                    </p>
                    <p>
                        I've had the opportunity to work on a variety of projects, from scalable web applications to interactive data visualizations. My main focus these days is building products and leading projects for our clients at [Your Company].
                    </p>
                    <p>
                        When I'm not at the computer, I'm usually reading, hiking, or exploring new coffee shops.
                    </p>
                </div>
                <div className="md:col-span-2 flex justify-center">
                    <motion.div 
                        className="w-60 h-60 md:w-64 md:h-64 rounded-lg bg-gray-200 dark:bg-gray-800 border-2 border-cyan-400 shadow-lg overflow-hidden group"
                        whileHover={{ scale: 1.05, rotate: 2 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                    >
                        <img 
                            src="/assets/profilepicture.jpg"
                            alt="Rajesh Tanguturi" 
                            onError={(e) => { e.currentTarget.src = 'https://placehold.co/300x300/111827/7DD3FC?text=Your\\nPhoto'; }}
                            className="w-full h-full object-cover"
                        />
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
};

export default About;
