import React from 'react';
import { motion } from 'framer-motion';
import { GitHubIcon, LinkedInIcon, LeetCodeIcon } from './Icons';

const Contact = ({ theme }) => (
    <motion.section 
        id="contact" 
        className="py-24 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1 }}
    >
        <h2 className="text-lg md:text-xl font-mono text-cyan-400">What's Next?</h2>
        <h3 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-4">Get In Touch</h3>
        <p className="mt-6 max-w-xl mx-auto text-base md:text-lg text-gray-600 dark:text-gray-300">
            My inbox is always open. Whether you have a question or just want to say hi,
            I'll try my best to get back to you! Feel free to reach out about opportunities or collaborations.
        </p>
        <motion.a 
            href="mailto:rajeshtanguturi@gmail.com"
            className="inline-block mt-10 px-8 py-4 border border-cyan-400 text-cyan-400 rounded-md font-mono text-lg hover:bg-cyan-400/10 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            Say Hello
        </motion.a>
        
        <div className="mt-12 flex justify-center space-x-8">
            <motion.a 
                href="https://github.com/RajeshTanguturi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
            >
                <GitHubIcon />
            </motion.a>
            <motion.a 
                href="https://www.linkedin.com/in/your-linkedin" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
            >
                <LinkedInIcon />
            </motion.a>
            <motion.a 
                href="https://leetcode.com/Tanguturi_Rajesh/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
            >
                <LeetCodeIcon />
            </motion.a>
        </div>
    </motion.section>
);

export default Contact;
