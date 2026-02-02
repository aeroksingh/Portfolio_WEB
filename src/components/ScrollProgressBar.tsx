import { useState, useEffect } from 'react';
import { motion, useSpring } from 'framer-motion';

const ScrollProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scaleX = useSpring(scrollProgress / 100, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="fixed top-0 left-0 right-0 h-1 z-[60] bg-secondary/30">
      <motion.div
        className="h-full bg-primary origin-left"
        style={{
          scaleX,
          boxShadow: '0 0 10px hsl(var(--neural-blue) / 0.5), 0 0 20px hsl(var(--neural-blue) / 0.3)',
        }}
      />
    </div>
  );
};

export default ScrollProgressBar;
