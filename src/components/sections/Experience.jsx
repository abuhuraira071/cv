import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaMicrochip, FaChevronDown, FaMapMarkerAlt } from 'react-icons/fa';
import AnimatedSection from '../ui/AnimatedSection';
import TimelineItem from '../ui/TimelineItem';
import { experienceData } from '../../data/portfolioData';

export default function Experience() {
  const [expandedId, setExpandedId] = useState(null);

  return (
    <AnimatedSection id="experience" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-white">
          My <span className="gradient-text">Experience</span>
        </h2>

        <div className="max-w-3xl mx-auto">
          {experienceData.map((exp, index) => (
            <div key={exp.id} className="relative pl-8 pb-8 border-l-2 border-accent/30">
              <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-accent border-2 border-highlight" />
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-accent/50 transition-all duration-300 card-hover"
              >
                <div className="flex items-start justify-between mb-4 flex-wrap gap-2">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center">
                      <FaMicrochip className="text-accent text-xl" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                      <p className="text-accent font-medium">{exp.company}</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-highlight/10 text-highlight text-sm rounded-full whitespace-nowrap">
                    {exp.period}
                  </span>
                </div>
                <div className="flex items-center gap-4 mb-4 text-sm text-gray-400">
                  <span className="flex items-center gap-1"><FaMapMarkerAlt className="text-accent" /> {exp.location}</span>
                </div>
                <p className="text-gray-400 mb-4">{exp.description}</p>
                <button
                  onClick={() => setExpandedId(expandedId === exp.id ? null : exp.id)}
                  className="flex items-center gap-2 text-accent hover:text-highlight transition-colors text-sm font-medium"
                >
                  {expandedId === exp.id ? 'Show Less' : 'View Details'}
                  <FaChevronDown className={`transition-transform ${expandedId === exp.id ? 'rotate-180' : ''}`} />
                </button>
                {expandedId === exp.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="mt-4"
                  >
                    <h4 className="text-white font-semibold mb-3">Responsibilities</h4>
                    <ul className="space-y-2 mb-4">
                      {exp.responsibilities.map((resp, i) => (
                        <li key={i} className="text-gray-400 text-sm flex items-start gap-2">
                          <span className="text-accent mt-1">•</span>
                          {resp}
                        </li>
                      ))}
                    </ul>
                    <h4 className="text-white font-semibold mb-2">Skills Acquired</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, i) => (
                        <span key={i} className="px-3 py-1 bg-white/5 text-gray-300 rounded-md border border-white/10 text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                )}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
