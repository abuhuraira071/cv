import { motion } from 'framer-motion';
import AnimatedSection from '../ui/AnimatedSection';
import SkillBar from '../ui/SkillBar';
import { skillsData } from '../../data/portfolioData';

export default function Skills() {
  return (
    <AnimatedSection id="skills" className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-white">
          My <span className="gradient-text">Skills</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {skillsData.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-accent/50 transition-all duration-300"
            >
              <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                <span className="w-1 h-6 bg-accent rounded-full inline-block" />
                {category.category}
              </h3>
              {category.skills.map((skill, i) => (
                <SkillBar key={i} name={skill.name} level={skill.level} icon={skill.icon} index={i} />
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
