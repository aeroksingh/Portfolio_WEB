import { motion } from 'framer-motion';
import { ExternalLink, Sparkles, Code2 } from 'lucide-react';

const projectFeatures = [
  'Developed a full-cycle recruitment platform featuring distinct Recruiter and Candidate ecosystems.',
  'Implemented a custom Django User Model for sophisticated role-based access control (RBAC).',
  'Architected RESTful APIs for job lifecycles, rigorously validated via Postman for 100% edge-case coverage.',
  'Designed a complex relational schema to maintain data integrity across users, job postings, and applications.',
  'Focus: Scalability and production-grade backend logic over simple CRUD operations.',
];

const techStack = ['Django', 'REST API', 'PostgreSQL', 'Python', 'Postman', 'RBAC'];

const ProjectSpotlight = () => {
  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="col-span-12"
    >
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-foreground mb-2">Project Spotlight</h2>
        <p className="text-muted-foreground">Featured work that showcases my expertise</p>
      </div>

      <motion.div
        whileHover={{ 
          rotateX: 1, 
          rotateY: -1,
          transition: { duration: 0.3 }
        }}
        className="glass-card-glow p-8 relative overflow-hidden"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Decorative code background */}
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-5 font-mono text-xs leading-relaxed overflow-hidden pointer-events-none">
          <pre className="text-primary">
{`class HireHub:
    def __init__(self):
        self.platform = "recruitment"
        self.users = []
        self.jobs = []
    
    def create_user(self, role):
        if role in ["recruiter", "candidate"]:
            return User(role=role)
    
    def post_job(self, recruiter, job_data):
        job = Job(**job_data)
        job.owner = recruiter
        self.jobs.append(job)
        return job

    def apply(self, candidate, job):
        application = Application(
            candidate=candidate,
            job=job
        )
        return application.submit()`}
          </pre>
        </div>

        <div className="relative z-10">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-primary/10 border border-primary/20">
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground">HireHub</h3>
                <p className="text-muted-foreground">Full-Stack Recruitment Platform</p>
              </div>
            </div>
            <motion.a
              href="https://hirehub-ex6i.onrender.com/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all duration-300 w-fit"
              style={{
                boxShadow: '0 0 20px hsl(var(--neural-blue) / 0.3)',
              }}
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </motion.a>
          </div>

          {/* Features */}
          <div className="space-y-3 mb-8">
            {projectFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-start gap-3"
              >
                <Code2 className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <p className="text-muted-foreground">{feature}</p>
              </motion.div>
            ))}
          </div>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 pt-6 border-t border-border/50">
            {techStack.map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="px-3 py-1.5 text-sm font-mono rounded-lg bg-primary/10 text-primary border border-primary/20"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default ProjectSpotlight;
