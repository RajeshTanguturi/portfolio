import React from 'react';
import { GitHubIcon, LinkedInIcon, TwitterIcon } from './Icons';

const Footer = ({ theme }) => (
  <footer className="py-8">
    <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
       <div className="flex space-x-6">
            <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white transition-colors"><GitHubIcon /></a>
            <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white transition-colors"><LinkedInIcon /></a>
            <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white transition-colors"><TwitterIcon /></a>
        </div>
      <p className="text-gray-400 dark:text-gray-500 mt-4 md:mt-0 font-mono text-sm">
        Designed & Built by Rajesh Tanguturi
      </p>
    </div>
  </footer>
);

export default Footer;
