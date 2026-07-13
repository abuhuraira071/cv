import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp, FaHeart } from 'react-icons/fa';
import { personalInfo, navLinks } from '../../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-secondary py-12 relative">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">
              <span className="gradient-text">&lt;</span>
              <span className="text-white">{personalInfo.firstName}</span>
              <span className="gradient-text"> /&gt;</span>
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Electrical & Electronic Engineering undergraduate at RUET with a passion for embedded systems, IoT, and problem-solving.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  className="block text-gray-400 hover:text-accent transition-colors text-sm cursor-pointer"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              <a href="https://github.com/ssr.mndl" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 hover:text-accent hover:bg-accent/10 transition-all">
                <FaGithub />
              </a>
              <a href="https://linkedin.com/in/md-shishir-mondol" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 hover:text-accent hover:bg-accent/10 transition-all">
                <FaLinkedin />
              </a>
              <a href="mailto:postbox.shishir@gmail.com"
                className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 hover:text-accent hover:bg-accent/10 transition-all">
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm flex items-center gap-1">
            &copy; {new Date().getFullYear()} {personalInfo.name}
          </p>
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent hover:bg-accent hover:text-white transition-all"
            aria-label="Scroll to top"
          >
            <FaArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
}

