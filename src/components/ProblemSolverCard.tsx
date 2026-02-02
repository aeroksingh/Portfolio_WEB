import { motion } from 'framer-motion';
import { Trophy, ExternalLink } from 'lucide-react';

const ProblemSolverCard = () => {
  return (
    <motion.a
      href="https://leetcode.com/aerohe"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      whileHover={{ 
        rotateX: -2, 
        rotateY: 2,
        scale: 1.02,
        transition: { duration: 0.3 }
      }}
      className="col-span-12 md:col-span-6 lg:col-span-4 glass-card-glow p-8 cursor-pointer group block"
      style={{ transformStyle: 'preserve-3d' }}
    >
      <div className="flex items-start justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
            <Trophy className="w-5 h-5 text-primary" />
          </div>
          <h2 className="text-xl font-semibold text-foreground">Problem Solver</h2>
        </div>
        <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
      </div>
      
      <div className="text-center py-6">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="stat-number"
        >
          250+
        </motion.div>
        <p className="text-muted-foreground mt-2">LeetCode Problems Solved</p>
      </div>

      <div className="flex justify-center mt-4">
        <div className="px-4 py-2 rounded-full bg-secondary/50 border border-border text-sm font-mono text-foreground flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-primary" />
          Java (DSA)
        </div>
      </div>
    </motion.a>
  );
};

export default ProblemSolverCard;
