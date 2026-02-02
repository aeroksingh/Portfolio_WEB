import { motion } from 'framer-motion';
import { Linkedin, Instagram, Code2 } from 'lucide-react';

const socialLinks = [
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/aeroksingh0112/",
    label: "LinkedIn"
  },
  {
    icon: Instagram, 
    href: "https://instagram.com/aerohe.vz",
    label: "Creative Perspective"
  },
  {
    icon: Code2,
    href: "https://leetcode.com/aerohe",
    label: "LeetCode"
  }
];

const SocialDock = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.8 }}
      className="floating-dock"
    >
      {socialLinks.map((social, index) => (
        <motion.a
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className="dock-icon group relative"
          whileHover={{ scale: 1.1, y: -4 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 + index * 0.1 }}
        >
          <social.icon className="w-5 h-5" />
          <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 rounded-md bg-card border border-border text-xs text-foreground whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {social.label}
          </span>
        </motion.a>
      ))}
    </motion.div>
  );
};

export default SocialDock;
