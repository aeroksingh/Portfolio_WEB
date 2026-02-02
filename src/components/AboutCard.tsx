import { motion } from 'framer-motion';
import { Code2, Brain, BookOpen } from 'lucide-react';

const AboutCard = () => {
  return (
    <div className="flex flex-col lg:flex-row items-start gap-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        whileHover={{ 
          rotateX: 2, 
          rotateY: -2,
          transition: { duration: 0.3 }
        }}
        className="glass-card-glow p-8 flex-1"
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-lg bg-primary/10 border border-cyan-500/20">
            <Code2 className="w-5 h-5 text-cyan-400" />
          </div>
          <h2 className="text-xl font-semibold text-cyan-400">🧑‍💻 About Me</h2>
        </div>

        <div className="text-muted-foreground leading-relaxed space-y-4">
          <p>
            I’m a backend-focused developer who enjoys building systems that are simple on the surface and solid underneath. I work mainly with Node.js and Django, designing clean APIs, handling data flows, and thinking carefully about scalability and performance.
          </p>

          <p>
            I have a strong foundation in Java and Data Structures & Algorithms, and I regularly solve problems to sharpen my logical thinking and approach to edge cases. I like breaking complex requirements into clear, maintainable components and writing code that’s easy to reason about.
          </p>

          <p>
            I’m especially interested in system design—how services interact, how data moves, and how small design decisions affect systems at scale. I value clean architecture, readable code, and learning by building.
          </p>

          <p>
            Beyond development, I’m a curious learner who enjoys reading and occasionally exploring machine learning concepts to broaden my perspective as an engineer.
          </p>

          <div className="flex gap-4 mt-4">
            <div className="flex items-center gap-2 text-sm text-cyan-400">
              <Brain className="w-4 h-4 text-cyan-400" />
              <span className="text-muted-foreground">ML Explorer</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-cyan-400">
              <BookOpen className="w-4 h-4 text-cyan-400" />
              <span className="text-muted-foreground">Avid Reader</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* <div className="flex-shrink-0">
        <img
          src="/myphoto.JPG"
          alt="Profile photo"
          className="w-40 h-40 md:w-44 md:h-44 lg:w-48 lg:h-48 rounded-full object-cover ring-2 ring-cyan-400/40 shadow-[0_0_35px_rgba(34,211,238,0.35)]"
        />
      </div> */}
    </div>
  );
};

export default AboutCard;
