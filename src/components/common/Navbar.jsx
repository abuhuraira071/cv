import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaDownload, FaSun, FaMoon } from 'react-icons/fa';
import { navLinks, personalInfo } from '../../data/portfolioData';

export default function Navbar({ darkMode, toggleDarkMode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'glass-dark shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link
            to="hero"
            smooth={true}
            duration={500}
            className="text-xl font-bold text-white cursor-pointer"
          >
            <span className="gradient-text">&lt;</span>
            <span className="text-white">{personalInfo.firstName}</span>
            <span className="gradient-text"> /&gt;</span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                smooth={true}
                duration={500}
                offset={-80}
                spy={true}
                activeClass="text-accent"
                className="px-4 py-2 text-gray-300 hover:text-accent transition-colors text-sm font-medium cursor-pointer"
              >
                {link.name}
              </Link>
            ))}
            <button
              onClick={toggleDarkMode}
              className="ml-4 p-2 text-gray-300 hover:text-accent transition-colors"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>
            <a
              href={personalInfo.resumeUrl}
              download
              className="ml-2 px-4 py-2 bg-accent text-white rounded-lg text-sm font-medium hover:bg-accent/80 transition-colors flex items-center gap-2"
            >
              <FaDownload /> CV
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden"
            >
              <div className="flex flex-col py-4 space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    smooth={true}
                    duration={500}
                    offset={-80}
                    spy={true}
                    activeClass="text-accent"
                    onClick={() => setIsOpen(false)}
                    className="px-4 py-3 text-gray-300 hover:text-accent hover:bg-white/5 transition-colors text-sm font-medium cursor-pointer rounded-lg"
                  >
                    {link.name}
                  </Link>
                ))}
                <hr className="border-white/10 mx-4 my-2" />
                <button
                  onClick={toggleDarkMode}
                  className="mx-4 px-4 py-3 text-gray-300 hover:text-accent hover:bg-white/5 transition-colors text-sm font-medium flex items-center gap-2 rounded-lg"
                >
                  {darkMode ? <FaSun /> : <FaMoon />} {darkMode ? 'Light' : 'Dark'} Mode
                </button>
                <a
                  href={personalInfo.resumeUrl}
                  download
                  className="mx-4 mt-2 px-4 py-3 bg-accent text-white rounded-lg text-sm font-medium hover:bg-accent/80 transition-colors flex items-center gap-2 justify-center"
                >
                  <FaDownload /> Download CV
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
