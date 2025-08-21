import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About'; // We'll create this next
import Projects from './components/Projects';
import Contact from './components/Contact'; // And this one
import Footer from './components/Footer';   // And finally this

const App = () => {
  return (
    <Router>
      <Navbar />
      <main>
        {/* For a single-page portfolio, you can render all sections directly */}
        <Home />
        <About />
        <Projects />
        <Contact />
        {/* If you wanted separate pages, you would use Routes like this:
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        */}
      </main>
      <Footer />
    </Router>
  );
};

export default App;