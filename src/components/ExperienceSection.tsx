import { motion } from 'framer-motion';
import { Briefcase, Calendar, CheckCircle } from 'lucide-react';

const highlights = [
  'Engineered the core backend architecture for a high-traffic Parking Slot Booking system using Django and REST Framework.',
  'Optimized user onboarding by designing an automated User ID generation system and seamless UI logic.',
  'Reduced system latency by implementing efficient database queries for real-time slot availability.',
];

const ExperienceSection = () => {
  return (
    <motion.section
      id="experience"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="col-span-12"
    >
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-foreground mb-2">Professional Experience</h2>
        <p className="text-muted-foreground">Building real-world solutions</p>
      </div>

      <motion.div
        whileHover={{ 
          rotateX: 1, 
          rotateY: -1,
          transition: { duration: 0.3 }
        }}
        className="glass-card-glow p-8 border-l-4 border-l-primary"
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-primary/10 border border-primary/20">
              <Briefcase className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-foreground">Backend Development Intern</h3>
              <p className="text-primary font-medium">ParkBy Pvt Ltd (TBI)</p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground text-sm font-mono">
            <Calendar className="w-4 h-4" />
            <span>Aug 2025 - Oct 2025</span>
          </div>
        </div>

        <div className="space-y-4">
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.15 }}
              className="flex items-start gap-3"
            >
              <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
              <p className="text-muted-foreground">{highlight}</p>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-border/50">
          {['Django', 'REST Framework', 'PostgreSQL', 'Python'].map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs font-mono rounded-full bg-secondary/50 text-muted-foreground border border-border/50"
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
};

export default ExperienceSection;
