import React from 'react';
import { motion } from 'framer-motion';
import { GitHubIcon, LinkedInIcon, LeetCodeIcon } from './Icons';
// Contact Component
const Contact = () => {
  return (
    <section id="contact" className="relative py-32 px-6 md:px-16 overflow-hidden bg-gray-950">
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-20"
        style={{
          background: "radial-gradient(circle, rgba(168,85,247,0.6) 0%, transparent 70%)",
          filter: "blur(120px)",
        }}
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
      />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-lg md:text-xl font-mono text-cyan-400 mb-4">What's Next?</h2>
          <h3 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-cyan-200 to-purple-300 bg-clip-text text-transparent mb-8">
            Get In Touch
          </h3>
          <p className="text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto mb-12">
            My inbox is always open. Whether you have a question or just want to say hi,
            I'll try my best to get back to you! Feel free to reach out about opportunities or collaborations.
          </p>
        </motion.div>

        <motion.a
          href="mailto:rajeshtanguturi31@gmail.com"
          className="inline-block relative group"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity" />
          <div className="relative px-8 py-4 bg-gray-950 border-2 border-cyan-400 rounded-xl font-mono text-lg text-cyan-400 hover:bg-cyan-400/10 transition-all duration-300">
            Say Hello
          </div>
        </motion.a>

        <motion.div
          className="mt-16 flex justify-center gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {[
            { Icon: GitHubIcon, href: 'https://github.com/RajeshTanguturi', label: 'GitHub' },
            { Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/your-linkedin', label: 'LinkedIn' },
            { Icon: LeetCodeIcon, href: 'https://leetcode.com/Tanguturi_Rajesh/', label: 'LeetCode' },
          ].map(({ Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full blur-md opacity-0 group-hover:opacity-50 transition-opacity" />
              <div className="relative p-3 bg-gray-900 border border-gray-700 rounded-full text-gray-400 group-hover:text-cyan-400 group-hover:border-cyan-400 transition-all duration-300">
                <Icon />
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
