import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaArrowDown } from 'react-icons/fa';
import { personalInfo } from '../../data/portfolioData';

class Particle {
  constructor(canvas) {
    this.canvas = canvas;
    this.reset();
  }

  reset() {
    this.x = Math.random() * this.canvas.width;
    this.y = Math.random() * this.canvas.height;
    this.size = Math.random() * 2 + 0.5;
    this.speedX = (Math.random() - 0.5) * 0.5;
    this.speedY = (Math.random() - 0.5) * 0.5;
    this.opacity = Math.random() * 0.5 + 0.1;
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    if (this.x < 0 || this.x > this.canvas.width) this.speedX *= -1;
    if (this.y < 0 || this.y > this.canvas.height) this.speedY *= -1;
  }

  draw(ctx, color) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

function ParticleBackground() {
  return (
    <canvas
      ref={(canvas) => {
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        let animationId;
        const particles = [];
        const particleCount = 80;

        const getAccentColor = () => {
          const style = getComputedStyle(document.documentElement);
          return style.getPropertyValue('--color-accent').trim();
        };

        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;

        for (let i = 0; i < particleCount; i++) {
          const p = new Particle(canvas);
          p.size = Math.random() * 2 + 0.5;
          particles.push(p);
        }

        function hexToRgba(hex, opacity) {
          const r = parseInt(hex.slice(1, 3), 16);
          const g = parseInt(hex.slice(3, 5), 16);
          const b = parseInt(hex.slice(5, 7), 16);
          return `rgba(${r}, ${g}, ${b}, ${opacity})`;
        }

        function connectParticles(accentColor) {
          for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
              const dx = particles[i].x - particles[j].x;
              const dy = particles[i].y - particles[j].y;
              const distance = Math.sqrt(dx * dx + dy * dy);
              if (distance < 150) {
                ctx.beginPath();
                ctx.strokeStyle = hexToRgba(accentColor, 0.1 * (1 - distance / 150));
                ctx.lineWidth = 0.5;
                ctx.moveTo(particles[i].x, particles[i].y);
                ctx.lineTo(particles[j].x, particles[j].y);
                ctx.stroke();
              }
            }
          }
        }

        function animate() {
          const accentColor = getAccentColor();
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          particles.forEach((p) => {
            p.update();
            p.draw(ctx, hexToRgba(accentColor, p.opacity));
          });
          connectParticles(accentColor);
          animationId = requestAnimationFrame(animate);
        }

        animate();

        const handleResize = () => {
          canvas.width = canvas.offsetWidth;
          canvas.height = canvas.offsetHeight;
        };
        window.addEventListener('resize', handleResize);

        return () => {
          cancelAnimationFrame(animationId);
          window.removeEventListener('resize', handleResize);
        };
      }}
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  );
}

const roles = [
  'Electrical & Electronic Engineering Student',
  'Embedded Systems Enthusiast',
  'IoT Developer',
  'Problem Solver',
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout;

    if (!isDeleting && charIndex < currentRole.length) {
      timeout = setTimeout(() => {
        setDisplayText(currentRole.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, 80);
    } else if (!isDeleting && charIndex === currentRole.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setDisplayText(currentRole.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, 40);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-20">
      <ParticleBackground />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/50 via-primary/30 to-primary" />
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-highlight/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />

      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="relative w-32 h-32 sm:w-40 sm:h-40 mx-auto mb-6 sm:mb-8">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-accent to-highlight animate-spin-slow" />
            <div className="absolute inset-1 rounded-full bg-primary flex items-center justify-center">
              <div className="w-[7.5rem] h-[7.5rem] sm:w-36 sm:h-36 rounded-full bg-gradient-to-br from-accent/30 to-highlight/30 flex items-center justify-center">
                <span className="text-3xl sm:text-5xl font-bold text-white">{personalInfo.firstName[0]}</span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-highlight font-mono text-base sm:text-lg mb-4"
        >
          Hello, I'm
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-4"
        >
          <span className="gradient-text">{personalInfo.firstName}</span>{' '}
          <span className="text-white">{personalInfo.lastName}</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 min-h-8"
        >
          <span>{displayText}</span>
          <span className="typewriter-cursor text-accent">|</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="flex flex-wrap gap-4 justify-center mb-8"
        >
          <a
            href={personalInfo.resumeUrl}
            download
            className="px-6 sm:px-8 py-2.5 sm:py-3 bg-accent text-white rounded-full font-medium hover:bg-accent/80 transition-all duration-300 flex items-center gap-2 glow text-sm sm:text-base"
          >
            <FaDownload /> Download CV
          </a>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            offset={-80}
            className="px-6 sm:px-8 py-2.5 sm:py-3 border-2 border-accent text-accent rounded-full font-medium hover:bg-accent hover:text-white transition-all duration-300 text-sm sm:text-base"
          >
            Contact Me
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
          className="flex gap-6 justify-center mb-12"
        >
          <a href="https://github.com/ssr.mndl" target="_blank" rel="noopener noreferrer"
            className="text-gray-400 hover:text-accent transition-colors text-2xl">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/md-shishir-mondol" target="_blank" rel="noopener noreferrer"
            className="text-gray-400 hover:text-accent transition-colors text-2xl">
            <FaLinkedin />
          </a>
          <a href="mailto:postbox.shishir@gmail.com"
            className="text-gray-400 hover:text-accent transition-colors text-2xl">
            <FaEnvelope />
          </a>
        </motion.div>

      </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        >
          <Link
            to="about"
            smooth={true}
            duration={500}
            offset={-80}
            className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-accent hover:border-accent/50 transition-all cursor-pointer"
            aria-label="Scroll to about section"
          >
            <FaArrowDown className="animate-bounce" />
          </Link>
        </motion.div>
    </section>
  );
}
