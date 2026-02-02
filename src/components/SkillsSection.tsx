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
            className="glass-card-glow p-6"
            style={{ transformStyle: 'preserve-3d' }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
                <category.icon className="w-5 h-5 text-primary" />
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
                  <Badge
                    variant="secondary"
                    className="bg-secondary/50 text-foreground border border-border/50 hover:border-primary/30 hover:bg-primary/10 transition-all duration-300"
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
