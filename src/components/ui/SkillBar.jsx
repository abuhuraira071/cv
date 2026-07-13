import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { SiCplusplus, SiArduino, SiStmicroelectronics, SiAutodesk } from 'react-icons/si';
import { FaPython, FaRaspberryPi, FaLayerGroup, FaCogs, FaChartLine, FaMicrochip } from 'react-icons/fa';

const iconMap = {
  SiCplusplus: SiCplusplus,
  FaPython: FaPython,
  FaChartLine: FaChartLine,
  SiArduino: SiArduino,
  SiStmicroelectronics: SiStmicroelectronics,
  FaRaspberryPi: FaRaspberryPi,
  SiAutodesk: SiAutodesk,
  FaLayerGroup: FaLayerGroup,
  FaMicrochip: FaMicrochip,
  FaCogs: FaCogs,
};

export default function SkillBar({ name, level, icon, index = 0 }) {
  const [ref, isVisible] = useScrollAnimation(0.1);
  const IconComponent = iconMap[icon];

  return (
    <div ref={ref} className="mb-6">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          {IconComponent && <IconComponent className="text-accent text-lg" />}
          <span className="text-white font-medium">{name}</span>
        </div>
        <span className="text-highlight font-semibold">{level}%</span>
      </div>
      <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isVisible ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.5, delay: index * 0.2, ease: 'easeOut' }}
          className="h-full rounded-full bg-gradient-to-r from-accent to-highlight"
          style={{ boxShadow: '0 0 10px rgba(37, 99, 235, 0.5)' }}
        />
      </div>
    </div>
  );
}
