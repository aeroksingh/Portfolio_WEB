import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { 
  Code, 
  Brain, 
  BarChart3, 
  Globe, 
  Cloud, 
  Wrench 
} from 'lucide-react';

const skillCategories = [
  {
    title: 'Languages',
    icon: Code,
    skills: ['Python', 'C', 'Java (DSA)', 'JavaScript', 'SQL'],
  },
  {
    title: 'ML & AI',
    icon: Brain,
    skills: ['TensorFlow', 'Scikit-learn', 'Keras', 'OpenCV', 'Hugging Face'],
  },
  {
    title: 'Data Science',
    icon: BarChart3,
    skills: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Jupyter'],
  },
  {
    title: 'Web Dev',
    icon: Globe,
    skills: ['Node.js', 'Django', 'React', 'Flask', 'Streamlit', 'HTML5/CSS3', 'Figma'],
  },
  {
    title: 'Cloud/DB',
    icon: Cloud,
    skills: ['MySQL', 'Google Cloud', 'Firebase', 'Supabase'],
  },
  {
    title: 'Tools',
    icon: Wrench,
    skills: ['Git', 'GitHub', 'VS Code', 'PyCharm', 'Linux (Ubuntu)', 'Postman'],
  },
];

const chipBase =
  "px-3 py-1 rounded-full text-xs font-medium border backdrop-blur-md transition-all duration-300 hover:shadow-[0_0_15px_currentColor]";

const SkillsSection = () => {
  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="col-span-12"
    >
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-foreground mb-2">Technical Arsenal</h2>
        <p className="text-muted-foreground">Technologies and tools I work with</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            whileHover={{ 
              rotateX: 2, 
              rotateY: -2,
              transition: { duration: 0.3 }
            }}
            className={
              // base card classes + category border/shadow
              `glass-card-glow p-6 ${
                category.title === 'Languages'
                  ? 'border-blue-500/30 shadow-[0_0_25px_rgba(59,130,246,0.15)]'
                  : category.title === 'ML & AI'
                  ? 'border-purple-500/30 shadow-[0_0_25px_rgba(168,85,247,0.15)]'
                  : category.title === 'Data Science'
                  ? 'border-emerald-500/30 shadow-[0_0_25px_rgba(16,185,129,0.15)]'
                  : category.title === 'Web Dev'
                  ? 'border-cyan-500/30 shadow-[0_0_25px_rgba(6,182,212,0.15)]'
                  : category.title.includes('Cloud')
                  ? 'border-orange-500/30 shadow-[0_0_25px_rgba(249,115,22,0.15)]'
                  : category.title === 'Tools'
                  ? 'border-yellow-500/30 shadow-[0_0_25px_rgba(234,179,8,0.15)]'
                  : ''
              }`
            }
            style={{ transformStyle: 'preserve-3d' }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div
                className={`p-2 rounded-lg bg-primary/10 ${
                  category.title === 'Languages'
                    ? 'border border-blue-400/20'
                    : category.title === 'ML & AI'
                    ? 'border border-purple-400/20'
                    : category.title === 'Data Science'
                    ? 'border border-emerald-400/20'
                    : category.title === 'Web Dev'
                    ? 'border border-cyan-400/20'
                    : category.title.includes('Cloud')
                    ? 'border border-orange-400/20'
                    : category.title === 'Tools'
                    ? 'border border-yellow-400/20'
                    : 'border border-primary/20'
                }`}
              >
                <category.icon
                  className={`w-5 h-5 ${
                    category.title === 'Languages'
                      ? 'text-blue-400'
                      : category.title === 'ML & AI'
                      ? 'text-purple-400'
                      : category.title === 'Data Science'
                      ? 'text-emerald-400'
                      : category.title === 'Web Dev'
                      ? 'text-cyan-400'
                      : category.title.includes('Cloud')
                      ? 'text-orange-400'
                      : category.title === 'Tools'
                      ? 'text-yellow-400'
                      : 'text-primary'
                  }`}
                />
              </div>

              <h3 className="text-lg font-semibold text-foreground">{category.title}</h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.3, 
                    delay: categoryIndex * 0.1 + skillIndex * 0.05 
                  }}
                >
                  {
                    // determine chip classes per category/skill
                  }
                  <Badge
                    variant="secondary"
                    className={(() => {
                      const cat = category.title;
                      // Languages specific
                      if (cat === 'Languages') {
                        if (skill.toLowerCase().startsWith('python')) {
                          return `${chipBase} text-blue-400 border-blue-400/40 bg-blue-400/10 shadow-[0_0_10px_rgba(59,130,246,0.4)]`;
                        }
                        if (skill.toLowerCase().includes('java') && !skill.toLowerCase().includes('javascript')) {
                          return `${chipBase} text-orange-400 border-orange-400/40 bg-orange-400/10`;
                        }
                        if (skill.toLowerCase().includes('javascript')) {
                          return `${chipBase} text-yellow-300 border-yellow-300/40 bg-yellow-300/10`;
                        }
                        if (skill.toLowerCase().includes('sql')) {
                          return `${chipBase} text-emerald-400 border-emerald-400/40 bg-emerald-400/10`;
                        }
                        if (skill.toLowerCase().trim() === 'c') {
                          return `${chipBase} text-slate-300 border-slate-400/30 bg-slate-400/10`;
                        }
                        return `${chipBase} bg-secondary/50 text-foreground border border-border/50`;
                      }

                      // Other categories: use category color tones
                      if (cat === 'ML & AI') {
                        return `${chipBase} text-purple-300 border-purple-400/30 bg-purple-400/10`;
                      }
                      if (cat === 'Data Science') {
                        return `${chipBase} text-emerald-300 border-emerald-400/30 bg-emerald-400/10`;
                      }
                      if (cat === 'Web Dev') {
                        return `${chipBase} text-cyan-300 border-cyan-400/30 bg-cyan-400/10`;
                      }
                      if (cat.includes('Cloud')) {
                        return `${chipBase} text-orange-300 border-orange-400/30 bg-orange-400/10`;
                      }
                      if (cat === 'Tools') {
                        return `${chipBase} text-yellow-300 border-yellow-400/30 bg-yellow-400/10`;
                      }
                      return `${chipBase} bg-secondary/50 text-foreground border border-border/50`;
                    })()}
                  >
                    {skill}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default SkillsSection;
