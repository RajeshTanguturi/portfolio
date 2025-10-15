import React, { useState, useEffect } from 'react';
import { SunIcon, MoonIcon } from './Icons';
// import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';



const Header = ({ theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = ['Home', 'About', 'Skills', 'Projects', 'LeetCode', 'Contact'];

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 10);
    const sections = navItems.map(item => document.getElementById(item.toLowerCase()));
    let currentSection = 'home';
    sections.forEach(section => {
      if (section && window.scrollY >= section.offsetTop - 100) {
        currentSection = section.id;
      }
    });
    setActiveSection(currentSection);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  const NavLink = ({ children, section }) => {
    const isActive = activeSection === section.toLowerCase();
    
    return (
      <motion.button
        onClick={() => scrollTo(section.toLowerCase())}
        className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 ${
          isActive ? 'text-cyan-400' : 'text-gray-300 hover:text-white'
        }`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {children}
        {isActive && (
          <motion.span
            className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500"
            layoutId="activeSection"
            transition={{ type: "spring", stiffness: 380, damping: 30 }}
          />
        )}
      </motion.button>
    );
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-gray-950/90 backdrop-blur-lg border-b border-gray-800/50 shadow-lg shadow-cyan-500/5'
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <motion.h1
          className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent cursor-pointer"
          onClick={() => scrollTo('home')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Rajesh Tanguturi
        </motion.h1>

        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map(item => <NavLink key={item} section={item}>{item}</NavLink>)}
        </nav>

        <div className="md:hidden flex items-center gap-2">
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-300 focus:outline-none"
            whileTap={{ scale: 0.9 }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
            </svg>
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden bg-gray-900/95 backdrop-blur-lg border-t border-gray-800"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-4 py-4 space-y-2">
              {navItems.map(item => <NavLink key={item} section={item}>{item}</NavLink>)}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
export default Header;
