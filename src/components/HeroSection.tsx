import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const roles = [
  "Backend Specialist",
  "Neural Network Enthusiast", 
  "Competitive Programmer"
];

const HeroSection = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = roles[currentRole];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < role.length) {
          setDisplayText(role.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentRole((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="col-span-12 lg:col-span-7 glass-card-glow p-8 md:p-12"
    >
      <div className="space-y-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex items-center gap-3"
        >
          <div className="w-3 h-3 rounded-full bg-primary animate-pulse-glow" />
          <span className="text-muted-foreground text-sm font-mono">Available for opportunities</span>
        </motion.div>
        
        <h1 className="text-4xl md:text-6xl font-bold text-foreground">
          Hi, I'm{' '}
          <span className="gradient-text">Ashutosh Singh</span>
        </h1>
        
        <div className="h-12 flex items-center">
          <span className="text-xl md:text-2xl text-muted-foreground font-mono">
            {'> '}{displayText}
            <span className="typing-cursor" />
          </span>
        </div>

        <div className="flex gap-3 pt-4">
          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href="#contact"
            className="terminal-button"
          >
            ./contact_me.sh
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href="https://linkedin.com/in/aeroksingh0112"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-lg border border-border text-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
          >
            View Resume
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

export default HeroSection;
