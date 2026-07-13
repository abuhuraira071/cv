import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaMicrochip } from 'react-icons/fa';

export default function ProjectCard({ project, index, onViewDetails }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group relative bg-white/5 rounded-xl overflow-hidden border border-white/10 hover:border-accent/50 transition-all duration-500 card-hover"
    >
      <div className="relative h-48 bg-gradient-to-br from-accent/20 to-highlight/20 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-highlight/10" />
        <FaMicrochip className="text-6xl text-accent/30 group-hover:text-accent/50 transition-all duration-500 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent" />
      </div>
      <div className="p-6">
        <span className="inline-block px-3 py-1 text-xs font-semibold text-highlight bg-highlight/10 rounded-full mb-3">
          {project.category}
        </span>
        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-gray-400 text-sm mb-4 line-clamp-2">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, i) => (
            <span key={i} className="px-2 py-1 text-xs bg-white/5 text-gray-300 rounded-md border border-white/10">
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-3">
          <button
            onClick={() => onViewDetails(project)}
            className="flex-1 px-4 py-2 bg-accent text-white rounded-lg text-sm font-medium hover:bg-accent/80 transition-colors"
          >
            View Details
          </button>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 border border-white/20 text-white rounded-lg text-sm font-medium hover:bg-white/10 transition-colors flex items-center gap-2"
          >
            <FaGithub /> Code
          </a>
        </div>
      </div>
    </motion.div>
  );
}
