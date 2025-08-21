// src/components/Footer.js
import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    // Remember to replace '#' with your actual social media profile URLs
    const socialLinks = [
        { icon: <FaGithub />, url: 'https://github.com/your-username' },
        { icon: <FaLinkedin />, url: 'https://linkedin.com/in/your-username' },
        { icon: <FaTwitter />, url: 'https://twitter.com/your-username' },
    ];

    return (
        <footer className="bg-primary py-8 px-4 sm:px-6 lg:px-8 border-t border-t-gray-800">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left">
                <p className="text-secondary mb-4 md:mb-0">
                    &copy; {new Date().getFullYear()} YourName. All rights reserved.
                </p>
                <div className="flex space-x-6">
                    {socialLinks.map((link, index) => (
                        <a 
                            key={index} 
                            href={link.url} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-secondary hover:text-white transition-transform duration-300 hover:scale-110"
                        >
                            {/* Clones the icon element to add size property */}
                            {React.cloneElement(link.icon, { size: 24 })}
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;