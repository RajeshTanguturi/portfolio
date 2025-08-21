// src/components/About.js
import React from 'react';
import { motion } from 'framer-motion';
import profilePic from '../assets/profile.png'; // Add a professional profile picture here

const About = () => {
  const fadeIn = (direction, delay) => ({
    hidden: {
      y: direction === 'up' ? 80 : direction === 'down' ? -80 : 0,
      opacity: 0,
      x: direction === 'left' ? 80 : direction === 'right' ? -80 : 0,
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: 'tween',
        duration: 1.2,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  });

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-primary">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
            variants={fadeIn('right', 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
        >
          <img src={profilePic} alt="Profile" className="rounded-full w-80 h-80 mx-auto object-cover border-4 border-tertiary shadow-lg" />
        </motion.div>
        <motion.div
            variants={fadeIn('left', 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
        >
          <p className="text-secondary uppercase tracking-wider">Introduction</p>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-6">Overview.</h2>
          <p className="text-secondary leading-relaxed">
            I'm a skilled software developer with experience in JavaScript, and expertise in frameworks like React, Node.js, and Three.js. I'm a quick learner and collaborate closely with clients to create efficient, scalable, and user-friendly solutions that solve real-world problems. Let's work together to bring your ideas to life!
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;