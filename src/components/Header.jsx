import React, { useState, useEffect } from 'react';
import { SunIcon, MoonIcon } from './Icons';

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

    const NavLink = ({ children, section }) => (
        <button
            onClick={() => scrollTo(section.toLowerCase())}
            className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 relative ${
                activeSection === section.toLowerCase()
                ? 'text-cyan-400'
                : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
            }`}
        >
            {children}
            {activeSection === section.toLowerCase() && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-0.5 bg-cyan-400"></span>
            )}
        </button>
    );

    return (
        <header className={`sticky top-0 z-50 transition-shadow duration-300 ${isScrolled ? 'shadow-md bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm' : ''}`}>
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <h1 className="text-xl font-bold text-gray-900 dark:text-white cursor-pointer" onClick={() => scrollTo('home')}>Rajesh Tanguturi</h1>
                <nav className="hidden md:flex items-center space-x-2">
                    {navItems.map(item => <NavLink key={item} section={item}>{item}</NavLink>)}
                    <button onClick={toggleTheme} className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:text-yellow-500 dark:hover:text-yellow-300 transition-colors">
                        {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
                    </button>
                </nav>
                <div className="md:hidden flex items-center">
                     <button onClick={toggleTheme} className="p-2 rounded-full text-gray-600 dark:text-gray-300 transition-colors mr-2">
                        {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
                    </button>
                    <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 dark:text-gray-300 focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path></svg>
                    </button>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden px-4 pt-2 pb-4 space-y-2 bg-white dark:bg-gray-900">
                    {navItems.map(item => <NavLink key={item} section={item}>{item}</NavLink>)}
                </div>
            )}
        </header>
    );
};

export default Header;
