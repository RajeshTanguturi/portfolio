import React from 'react';
import { GitHubIcon, LinkedInIcon, TwitterIcon } from './Icons';
import { motion, AnimatePresence } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="relative py-12 px-6 bg-gray-950 border-t border-gray-800/50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <motion.div
          className="flex gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {[
            { Icon: GitHubIcon, href: 'https://github.com/RajeshTanguturi' },
            { Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/your-linkedin' },
            { Icon: TwitterIcon, href: 'https://twitter.com/your-twitter' },
          ].map(({ Icon, href }, index) => (
            <motion.a
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-cyan-400 transition-colors"
              whileHover={{ scale: 1.2, y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <Icon />
            </motion.a>
          ))}
        </motion.div>

        <motion.p
          className="font-mono text-sm text-gray-500"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Designed & Built by{' '}
          <span className="text-cyan-400 font-semibold">Rajesh Tanguturi</span>
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer;
