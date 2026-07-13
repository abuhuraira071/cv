import { motion } from 'framer-motion';

export default function LoadingScreen({ isLoading }) {
  if (!isLoading) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[100] bg-primary flex items-center justify-center"
    >
      <div className="text-center">
        <div className="relative w-20 h-20 mx-auto mb-6">
          <div className="absolute inset-0 rounded-full border-2 border-accent/30 border-t-accent animate-spin" />
          <div className="absolute inset-2 rounded-full border-2 border-highlight/30 border-t-highlight animate-spin" style={{ animationDirection: 'reverse', animationDuration: '0.8s' }} />
          <div className="absolute inset-4 rounded-full bg-accent/20 flex items-center justify-center">
            <span className="text-lg font-bold gradient-text">S</span>
          </div>
        </div>
        <p className="text-white text-lg font-medium">Loading...</p>
      </div>
    </motion.div>
  );
}
