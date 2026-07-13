import { useState, useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import LoadingScreen from './components/common/LoadingScreen';
import ScrollToTop from './components/common/ScrollToTop';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Education from './components/sections/Education';
import Projects from './components/sections/Projects';
import Experience from './components/sections/Experience';
import Skills from './components/sections/Skills';
import Organizations from './components/sections/Organizations';
import Certifications from './components/sections/Certifications';
import Contact from './components/sections/Contact';

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  if (isLoading) {
    return <LoadingScreen isLoading={isLoading} />;
  }

  return (
    <HelmetProvider>
      <div className="min-h-screen bg-primary text-white">
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Hero />
        <About />
        <Education />
        <Projects />
        <Experience />
        <Skills />
        <Organizations />
        <Certifications />
        <Contact />
        <Footer />
        <ScrollToTop />
      </div>
    </HelmetProvider>
  );
}
