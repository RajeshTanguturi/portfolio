import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';

const Navbar = () => {
  const [lastYPos, setLastYPos] = useState(0);
  const [shouldShowNav, setShouldShowNav] = useState(true);
  const controls = useAnimation();

  useEffect(() => {
    function handleScroll() {
      const yPos = window.scrollY;
      const isScrollingUp = yPos < lastYPos;

      setShouldShowNav(isScrollingUp);
      setLastYPos(yPos);
    }

    window.addEventListener("scroll", handleScroll, false);

    return () => {
      window.removeEventListener("scroll", handleScroll, false);
    };
  }, [lastYPos]);

  useEffect(() => {
    if (shouldShowNav) {
      controls.start({ opacity: 1, y: 0 });
    } else {
      controls.start({ opacity: 0, y: -100 });
    }
  }, [shouldShowNav, controls]);


  const navLinks = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "Projects", path: "/projects" },
    { title: "Contact", path: "/contact" },
  ];

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 py-4 px-8 bg-primary/80 backdrop-blur-sm"
      animate={controls}
      initial={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold tracking-wider">
          YourName.
        </Link>
        <ul className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <li key={link.title}>
              <Link to={link.path} className="relative group text-secondary hover:text-white transition-colors duration-300">
                {link.title}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;