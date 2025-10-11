
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import LeetCodeStats from "./components/LeetCodeStats";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import {useState, useEffect} from "react";
const App = () => {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
  };
  
  // Apply dark mode class to HTML element
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return (
    <div>
      <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 font-sans leading-normal tracking-tight transition-colors duration-500">
        <Header theme={theme} toggleTheme={toggleTheme} />
        <main className="container mx-auto px-6 md:px-12 lg:px-24">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <LeetCodeStats />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
export default App;
