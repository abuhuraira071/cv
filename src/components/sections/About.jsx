import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaBirthdayCake, FaProjectDiagram, FaCertificate, FaCode, FaAward } from 'react-icons/fa';
import AnimatedSection from '../ui/AnimatedSection';
import { personalInfo, statsData } from '../../data/portfolioData';

function StatCard({ stat }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = stat.value;
    const duration = 2000;
    const stepTime = Math.abs(Math.floor(duration / end));
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) clearInterval(timer);
    }, stepTime);
    return () => clearInterval(timer);
  }, [stat.value]);

  const icons = { FaProjectDiagram, FaCertificate, FaCode, FaAward };
  const Icon = icons[stat.icon];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center p-6 bg-white/5 rounded-xl border border-white/10 hover:border-accent/50 transition-all duration-300"
    >
      <div className="text-3xl text-accent mb-3 flex justify-center">
        {Icon && <Icon />}
      </div>
      <div className="text-3xl font-bold text-white mb-1">{count}+</div>
      <div className="text-gray-400 text-sm">{stat.label}</div>
    </motion.div>
  );
}

export default function About() {
  return (
    <AnimatedSection id="about" className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-white">
          About <span className="gradient-text">Me</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative w-72 h-72 mx-auto">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-accent to-highlight animate-spin-slow" />
              <div className="absolute inset-1 rounded-2xl bg-primary flex items-center justify-center">
                <div className="w-full h-full rounded-2xl bg-gradient-to-br from-accent/20 to-highlight/20 flex items-center justify-center">
                  <span className="text-8xl font-bold gradient-text">{personalInfo.firstName[0]}{personalInfo.lastName[0]}</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Who I <span className="gradient-text">Am</span>
            </h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              {personalInfo.profileSummary}
            </p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="flex items-center gap-3 text-gray-300">
                <FaBirthdayCake className="text-accent" />
                <div>
                  <span className="text-sm text-gray-500">Age</span>
                  <p className="font-medium">{personalInfo.age} Years</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <FaMapMarkerAlt className="text-accent" />
                <div>
                  <span className="text-sm text-gray-500">Location</span>
                  <p className="font-medium">{personalInfo.location}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <FaEnvelope className="text-accent" />
                <div>
                  <span className="text-sm text-gray-500">Email</span>
                  <p className="font-medium">{personalInfo.email}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <FaPhone className="text-accent" />
                <div>
                  <span className="text-sm text-gray-500">Phone</span>
                  <p className="font-medium">{personalInfo.phone}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {statsData.map((stat, index) => (
            <StatCard key={index} stat={stat} />
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
