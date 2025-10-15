import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
  const skills = [
  { name: "JavaScript", color: "from-yellow-400 to-yellow-600" },
  { name: "React.js", color: "from-cyan-400 to-cyan-600" },
  { name: "Node.js", color: "from-green-400 to-green-600" },
  { name: "Express.js", color: "from-gray-400 to-gray-600" },
  { name: "MongoDB", color: "from-green-500 to-green-700" },
  { name: "Python", color: "from-blue-500 to-yellow-400" },
  { name: "TensorFlow", color: "from-orange-400 to-orange-600" },
  { name: "CNN / Deep Learning", color: "from-purple-400 to-pink-500" },
  { name: "HTML5 & CSS3", color: "from-indigo-400 to-indigo-600" },
  { name: "REST APIs", color: "from-teal-400 to-teal-600" },
  { name: "Tailwind CSS", color: "from-cyan-300 to-blue-500" }
];


  return (
    <section
      id="skills"
      className="relative py-32 px-6 md:px-16 overflow-hidden bg-gray-950"
    >
      {/* Subtle background glow */}
      <motion.div
        className="absolute top-1/2 right-0 w-[500px] h-[500px] rounded-full opacity-20"
        style={{
          background:
            "radial-gradient(circle, rgba(34,211,238,0.6) 0%, transparent 70%)",
          filter: "blur(100px)",
        }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 15, repeat: Infinity }}
      />

      <div className="max-w-7xl mx-auto relative z-10 text-left">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white via-cyan-200 to-purple-300 bg-clip-text text-transparent">
            My Tech Stack
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mb-16"></div>
        </motion.div>

        {/* Skill Tabs */}
        <div className="flex flex-wrap gap-4 md:gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 0px 20px rgba(34,211,238,0.4)",
              }}
              className={`px-6 py-3 rounded-full bg-gradient-to-r ${skill.color} text-white font-medium text-lg shadow-md cursor-default select-none transition-transform duration-300`}
            >
              {skill.name}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
