import { motion } from 'framer-motion';
import { FaUsers } from 'react-icons/fa';
import AnimatedSection from '../ui/AnimatedSection';
import { organizationsData } from '../../data/portfolioData';

export default function Organizations() {
  return (
    <AnimatedSection id="organizations" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-white">
          Organizations & <span className="gradient-text">Leadership</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {organizationsData.map((org, index) => (
            <motion.div
              key={org.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-accent/50 transition-all duration-300 card-hover"
            >
              <div className="w-14 h-14 rounded-xl bg-accent/20 flex items-center justify-center mb-4">
                <FaUsers className="text-accent text-xl" />
              </div>
              <h3 className="text-lg font-bold text-white mb-1">{org.name}</h3>
              <p className="text-accent font-medium text-sm mb-2">{org.role}</p>
              <span className="inline-block px-3 py-1 bg-highlight/10 text-highlight text-xs rounded-full mb-3">
                {org.period}
              </span>
              <p className="text-gray-400 text-sm mb-3">{org.description}</p>
              <div className="space-y-1">
                {org.activities.map((activity, i) => (
                  <p key={i} className="text-gray-500 text-xs flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    {activity}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
