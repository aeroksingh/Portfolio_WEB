import { motion } from 'framer-motion';
import { Server, Layout, Sparkles } from 'lucide-react';

const techStacks = [
  {
    title: "Backend",
    icon: Server,
    skills: ["Node.js", "Django", "REST APIs"],
    delay: 0.3
  },
  {
    title: "Frontend", 
    icon: Layout,
    skills: ["React.js"],
    delay: 0.4
  },
  {
    title: "Interests",
    icon: Sparkles,
    skills: ["Machine Learning", "Neural Networks"],
    delay: 0.5
  }
];

const TechStackGrid = () => {
  return (
    <>
      {techStacks.map((stack) => (
        <motion.div
          key={stack.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: stack.delay }}
          whileHover={{ 
            rotateX: -2, 
            rotateY: 2,
            scale: 1.02,
            transition: { duration: 0.3 }
          }}
          className="col-span-12 md:col-span-6 lg:col-span-4 glass-card-glow p-6"
          style={{ transformStyle: 'preserve-3d' }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
              <stack.icon className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground">{stack.title}</h3>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {stack.skills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1.5 rounded-lg bg-secondary/50 border border-border text-sm text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors duration-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </>
  );
};

export default TechStackGrid;
