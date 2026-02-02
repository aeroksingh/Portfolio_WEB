import { motion } from 'framer-motion';
import { BookMarked, Code, Lightbulb } from 'lucide-react';

const CurrentlyReadingCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.6 }}
      whileHover={{ 
        rotateX: 2, 
        rotateY: -2,
        scale: 1.02,
        transition: { duration: 0.3 }
      }}
      className="col-span-12 md:col-span-6 lg:col-span-4 glass-card-glow p-6"
      style={{ transformStyle: 'preserve-3d' }}
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
          <BookMarked className="w-5 h-5 text-primary" />
        </div>
        <h3 className="text-lg font-semibold text-foreground">Currently Exploring</h3>
      </div>
      
      <div className="space-y-4">
        <div className="flex items-start gap-3 p-3 rounded-lg bg-secondary/30 border border-border/50">
          <Code className="w-5 h-5 text-primary mt-0.5" />
          <div>
            <p className="text-sm font-medium text-foreground">Deep Learning Architectures</p>
            <p className="text-xs text-muted-foreground">Neural Networks & Transformers</p>
          </div>
        </div>
        
        <div className="flex items-start gap-3 p-3 rounded-lg bg-secondary/30 border border-border/50">
          <Lightbulb className="w-5 h-5 text-primary mt-0.5" />
          <div>
            <p className="text-sm font-medium text-foreground">System Design Patterns</p>
            <p className="text-xs text-muted-foreground">Scalable Backend Architecture</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CurrentlyReadingCard;
