import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ResumeModal from "./ResumeModal";



const Hero = ({ theme = "dark" }) => {
  const [isResumeModalOpen, setResumeModalOpen] = useState(false);
  const [currentText, setCurrentText] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const texts = [
    "Full Stack Developer",
    "AI & Machine Learning Enthusiast",
    "Software Engineer in the Making",
    "Problem Solver",
    "Tech Explorer",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollTo = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-full min-h-screen bg-gray-950 text-white overflow-hidden">
      <motion.section
        id="home"
        className="w-full min-h-screen flex items-center justify-center relative px-6 md:px-16"
      >
        {/* === ANIMATED MESH GRADIENT BACKGROUND === */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Main gradient orbs */}
          <motion.div
            className="absolute top-0 -right-1/4 w-[800px] h-[800px] rounded-full opacity-30"
            style={{
              background: "radial-gradient(circle, rgba(34,211,238,0.8) 0%, transparent 70%)",
              filter: "blur(80px)",
            }}
            animate={{
              x: [0, 50, 0],
              y: [0, 100, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          
          <motion.div
            className="absolute top-1/4 -left-1/4 w-[700px] h-[700px] rounded-full opacity-30"
            style={{
              background: "radial-gradient(circle, rgba(168,85,247,0.8) 0%, transparent 70%)",
              filter: "blur(80px)",
            }}
            animate={{
              x: [0, -50, 0],
              y: [0, -50, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          
          <motion.div
            className="absolute bottom-0 left-1/2 w-[600px] h-[600px] rounded-full opacity-25"
            style={{
              background: "radial-gradient(circle, rgba(236,72,153,0.8) 0%, transparent 70%)",
              filter: "blur(80px)",
            }}
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              scale: [1, 1.15, 1],
            }}
            transition={{
              duration: 22,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Interactive gradient that follows mouse */}
          <motion.div
            className="absolute w-[500px] h-[500px] rounded-full opacity-20 pointer-events-none"
            style={{
              background: "radial-gradient(circle, rgba(96,165,250,0.6) 0%, transparent 70%)",
              filter: "blur(60px)",
              left: `${mousePosition.x * 100}%`,
              top: `${mousePosition.y * 100}%`,
              transform: "translate(-50%, -50%)",
            }}
            transition={{
              type: "spring",
              damping: 30,
              stiffness: 200,
            }}
          />

          {/* Subtle grid overlay */}
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `linear-gradient(rgba(34,211,238,0.3) 1px, transparent 1px),
                               linear-gradient(90deg, rgba(34,211,238,0.3) 1px, transparent 1px)`,
              backgroundSize: "100px 100px",
            }}
          />
        </div>

        {/* === CONTENT === */}
        <div className="max-w-5xl z-10 text-left relative">
          {/* Floating particles */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-cyan-400 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>

          <motion.h2
            className="text-base md:text-lg text-cyan-400 font-mono tracking-wide mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Hi, my name is
          </motion.h2>

          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-extrabold mt-2 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            style={{
              background: "linear-gradient(135deg, #fff 0%, #22d3ee 50%, #a855f7 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Rajesh Tanguturi
          </motion.h1>

          {/* Animated Titles with gradient */}
          <div className="h-20 md:h-24 flex items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentText}
                initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
                transition={{ duration: 0.6 }}
              >
                <span 
                  className="text-3xl md:text-5xl font-bold"
                  style={{
                    background: "linear-gradient(135deg, #e5e7eb 0%, #22d3ee 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {texts[currentText]}
                </span>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Description */}
          <motion.p
            className="mt-6 text-base md:text-lg text-gray-300 max-w-2xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            I'm a Computer Science undergrad passionate about building
            <span className="text-cyan-400 font-semibold">
              {" "}AI-driven full-stack applications{" "}
            </span>
            that make real-world impact. Skilled in the
            <span className="text-purple-400 font-semibold"> MERN stack </span>
            and experienced in
            <span className="text-pink-400 font-semibold"> CNN model deployment </span>
            with REST APIs. I love integrating ML models into web systems to create
            scalable and intelligent products.
          </motion.p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-5 mt-10">
            <motion.button
              onClick={() => scrollTo("projects")}
              className="group relative px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-xl font-mono text-lg overflow-hidden transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Check out my projects</span>
              <motion.div
                className="absolute inset-0 bg-cyan-400/10"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>

            <motion.button
              onClick={() => setResumeModalOpen(true)}
              className="group relative px-8 py-4 rounded-xl font-mono text-lg overflow-hidden transition-all duration-300"
              style={{
                background: "linear-gradient(135deg, #22d3ee 0%, #a855f7 100%)",
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                View Resume
              </span>
              <motion.div
                className="absolute inset-0 bg-white/20"
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </div>

        </div>

        {/* Resume Modal */}
        <ResumeModal
          isOpen={isResumeModalOpen}
          onClose={() => setResumeModalOpen(false)}
        />
      </motion.section>
    </div>
  );
};

export default Hero;