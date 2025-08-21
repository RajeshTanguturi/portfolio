import { motion } from 'framer-motion'; // <-- Add this line
import React from 'react';
import { FiArrowDown } from 'react-icons/fi';

const Home = () => {
  const line1 = "Hello, I'm a";
  const line2 = "Creative Developer";

  const sentence = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.08,
      },
    },
  };

  const letter = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section id="home" className="h-screen flex flex-col justify-center items-center text-center">
      <motion.h1
        className="text-4xl md:text-7xl font-bold tracking-wider leading-tight"
        variants={sentence}
        initial="hidden"
        animate="visible"
      >
        {line1.split("").map((char, index) => (
          <motion.span key={char + "-" + index} variants={letter}>
            {char}
          </motion.span>
        ))}
        <br />
        <span className="text-gradient">
          {line2.split("").map((char, index) => (
            <motion.span key={char + "-" + index} variants={letter}>
              {char}
            </motion.span>
          ))}
        </span>
      </motion.h1>
      <motion.p
        className="mt-6 text-lg md:text-xl text-secondary max-w-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.5 }}
      >
        I design and build beautiful and responsive web applications.
        Specializing in modern frontend technologies.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 2.0 }}
        className="absolute bottom-10"
      >
        <FiArrowDown className="text-3xl animate-bounce" />
      </motion.div>
    </section>
  );
};

export default Home;