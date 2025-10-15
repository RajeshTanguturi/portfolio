import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';




const About = () => {
  return (
    <section id="about" className="relative py-32 px-6 md:px-16 overflow-hidden bg-gray-950">
      <motion.div
        className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full opacity-20"
        style={{
          background: "radial-gradient(circle, rgba(168,85,247,0.6) 0%, transparent 70%)",
          filter: "blur(100px)",
        }}
        animate={{
          x: [0, 50, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
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
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mb-16"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-center">
  <motion.div
    className="lg:col-span-3 space-y-6"
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: 0.2 }}
  >
    <p className="text-lg text-gray-300 leading-relaxed">
      Hello! I'm <span className="text-cyan-400 font-semibold">Rajesh Tanguturi</span>, a Computer Science undergrad passionate about building intelligent web applications. I specialize in the <span className="text-purple-400 font-semibold">MERN stack</span> and <span className="text-pink-400 font-semibold">AI/ML integration</span>, turning ideas into functional, real-world solutions.
    </p>
    <p className="text-lg text-gray-300 leading-relaxed">
      I have worked on projects like <span className="text-purple-400 font-semibold">Tyre Crack Detection</span> using CNN models, and <span className="text-pink-400 font-semibold">Chest X-Ray Image Captioning</span> combining deep learning and NLP. These experiences strengthened my skills in full-stack development, REST APIs, and deploying ML models seamlessly into web applications.
    </p>
    <p className="text-lg text-gray-300 leading-relaxed">
      Outside of coding, I enjoy solving challenging problems on <span className="text-cyan-400 font-semibold">LeetCode</span>, participating in hackathons, and enhancing my strategic thinking through chess and long-distance cycling.
    </p>
  </motion.div>



          <motion.div
            className="lg:col-span-2 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="relative group">
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
              />
              <div className="relative w-72 h-72 rounded-2xl overflow-hidden border-2 border-cyan-400/30 transform group-hover:scale-105 transition-transform duration-300">
                <img 
                  src="profilepicture.png"
                  alt="Rajesh Tanguturi" 
                  onError={(e) => { e.currentTarget.src = 'https://placehold.co/400x400/111827/22d3ee?text=Rajesh\\nTanguturi'; }}
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;