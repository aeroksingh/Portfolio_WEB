import { motion } from 'framer-motion';
import { Code2, Brain, BookOpen } from 'lucide-react';

const AboutCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      whileHover={{ 
        rotateX: 2, 
        rotateY: -2,
        transition: { duration: 0.3 }
      }}
      className="col-span-12 lg:col-span-5 glass-card-glow p-8"
      style={{ transformStyle: 'preserve-3d' }}
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
          <Code2 className="w-5 h-5 text-primary" />
        </div>
        <h2 className="text-xl font-semibold text-foreground">About Me</h2>
      </div>
      
      <p className="text-muted-foreground leading-relaxed mb-6">
        I am a backend-heavy developer who thrives at the intersection of logic and scalability. 
        Whether it's architecting robust APIs with Node.js and Django or optimizing algorithms in Java, 
        I build with precision.
      </p>
      
      <p className="text-muted-foreground leading-relaxed mb-6">
        Beyond the terminal, I'm a lifelong learner exploring the depths of Neural Networks, 
        Machine Learning, and a good book.
      </p>

      <div className="flex gap-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Brain className="w-4 h-4 text-primary" />
          <span>ML Explorer</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <BookOpen className="w-4 h-4 text-primary" />
          <span>Avid Reader</span>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutCard;
