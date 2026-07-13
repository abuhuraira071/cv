import { motion } from 'framer-motion';
import { FaGraduationCap, FaStar } from 'react-icons/fa';
import AnimatedSection from '../ui/AnimatedSection';
import TimelineItem from '../ui/TimelineItem';
import { educationData } from '../../data/portfolioData';

export default function Education() {
  return (
    <AnimatedSection id="education" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-white">
          My <span className="gradient-text">Education</span>
        </h2>

        <div className="max-w-3xl mx-auto">
          {educationData.map((edu, index) => (
            <TimelineItem key={edu.id} index={index} isLeft={true}>
              <div className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-accent/50 transition-all duration-300 card-hover">
                <div className="flex items-start justify-between mb-3 flex-wrap gap-2">
                  <div>
                    <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                    <p className="text-accent font-medium">{edu.institution}</p>
                  </div>
                  <span className="px-3 py-1 bg-highlight/10 text-highlight text-sm rounded-full whitespace-nowrap">
                    {edu.period}
                  </span>
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <FaGraduationCap className="text-highlight" />
                  <span className="text-gray-300">CGPA: <span className="text-highlight font-semibold">{edu.cgpa}</span></span>
                </div>
                <p className="text-gray-400 text-sm mb-3">{edu.description}</p>
                {edu.achievements && (
                  <ul className="space-y-1">
                    {edu.achievements.map((achievement, i) => (
                      <li key={i} className="text-gray-400 text-sm flex items-start gap-2">
                        <span className="text-accent mt-1">•</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </TimelineItem>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
