import { motion } from 'framer-motion';
import { FaCertificate, FaCalendarAlt } from 'react-icons/fa';
import AnimatedSection from '../ui/AnimatedSection';
import { certificationsData } from '../../data/portfolioData';

export default function Certifications() {
  return (
    <AnimatedSection id="certifications" className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-white">
          My <span className="gradient-text">Certifications</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {certificationsData.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-accent/50 transition-all duration-300 card-hover flex gap-4"
            >
              <div className="w-14 h-14 rounded-xl bg-accent/20 flex items-center justify-center flex-shrink-0">
                <FaCertificate className="text-accent text-xl" />
              </div>
              <div>
                <div className="flex items-start justify-between mb-2 flex-wrap gap-1">
                  <h3 className="text-lg font-bold text-white">{cert.title}</h3>
                  <span className="px-2 py-0.5 bg-highlight/10 text-highlight text-xs rounded-full">{cert.type}</span>
                </div>
                <p className="text-accent text-sm mb-1">{cert.issuer}</p>
                <span className="text-gray-500 text-xs flex items-center gap-1 mb-2">
                  <FaCalendarAlt /> {cert.date}
                </span>
                <p className="text-gray-400 text-sm">{cert.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
