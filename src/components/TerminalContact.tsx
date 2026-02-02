import { useState } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().trim().min(1, 'Name is required').max(100, 'Name must be less than 100 characters'),
  email: z.string().trim().min(1, 'Email is required').email('Please enter a valid email'),
  message: z.string().trim().min(1, 'Message is required').max(1000, 'Message must be less than 1000 characters'),
});

type FormErrors = {
  name?: string;
  email?: string;
  message?: string;
};

const TerminalContact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateField = (field: keyof typeof formData, value: string) => {
    try {
      const partialSchema = z.object({ [field]: contactSchema.shape[field] });
      partialSchema.parse({ [field]: value });
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    } catch (error) {
      if (error instanceof z.ZodError) {
        setErrors((prev) => ({ ...prev, [field]: error.errors[0]?.message }));
      }
    }
  };

  const handleChange = (field: keyof typeof formData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      validateField(field, value);
    }
  };

  const handleBlur = (field: keyof typeof formData) => {
    validateField(field, formData[field]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: FormErrors = {};
      result.error.errors.forEach((err) => {
        const field = err.path[0] as keyof FormErrors;
        fieldErrors[field] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
      setErrors({});
    }, 3000);
  };

  const isValid = contactSchema.safeParse(formData).success;

  return (
    <motion.div
      id="contact"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="col-span-12 glass-card-glow p-8"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
          <Terminal className="w-5 h-5 text-primary" />
        </div>
        <h2 className="text-xl font-semibold text-foreground">Terminal</h2>
        <div className="flex gap-1.5 ml-auto">
          <div className="w-3 h-3 rounded-full bg-destructive/80" />
          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: 'hsl(45 93% 47% / 0.8)' }} />
          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: 'hsl(142 71% 45% / 0.8)' }} />
        </div>
      </div>

      <div className="bg-secondary/30 rounded-lg p-4 mb-6 font-mono text-sm">
        <p className="text-muted-foreground">
          <span className="text-primary">guest@ashutosh</span>
          <span className="text-foreground">:</span>
          <span className="text-primary/70">~</span>
          <span className="text-foreground">$ </span>
          <span className="text-foreground">./init_contact.sh</span>
        </p>
        <p className="text-muted-foreground mt-1">
          Initializing secure connection... <span className="text-primary">Ready</span>
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-mono text-muted-foreground mb-2">
              {'>'} name:
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => handleChange('name', e.target.value)}
              onBlur={() => handleBlur('name')}
              className={`terminal-input w-full font-mono ${
                errors.name ? 'border-destructive focus:border-destructive focus:ring-destructive/30' : ''
              }`}
              placeholder="Enter your name"
            />
            {errors.name && (
              <p className="flex items-center gap-1 mt-1 text-xs font-mono text-destructive">
                <AlertCircle className="w-3 h-3" />
                {errors.name}
              </p>
            )}
          </div>
          <div>
            <label className="block text-sm font-mono text-muted-foreground mb-2">
              {'>'} email:
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => handleChange('email', e.target.value)}
              onBlur={() => handleBlur('email')}
              className={`terminal-input w-full font-mono ${
                errors.email ? 'border-destructive focus:border-destructive focus:ring-destructive/30' : ''
              }`}
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className="flex items-center gap-1 mt-1 text-xs font-mono text-destructive">
                <AlertCircle className="w-3 h-3" />
                {errors.email}
              </p>
            )}
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-mono text-muted-foreground mb-2">
            {'>'} message:
          </label>
          <textarea
            value={formData.message}
            onChange={(e) => handleChange('message', e.target.value)}
            onBlur={() => handleBlur('message')}
            className={`terminal-input w-full font-mono min-h-[120px] resize-none ${
              errors.message ? 'border-destructive focus:border-destructive focus:ring-destructive/30' : ''
            }`}
            placeholder="Type your message here..."
          />
          {errors.message && (
            <p className="flex items-center gap-1 mt-1 text-xs font-mono text-destructive">
              <AlertCircle className="w-3 h-3" />
              {errors.message}
            </p>
          )}
        </div>

        <motion.button
          type="submit"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={`terminal-button flex items-center gap-2 ${
            !isValid && !isSubmitted ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          disabled={isSubmitted || !isValid}
        >
          {isSubmitted ? (
            <>
              <CheckCircle className="w-4 h-4" />
              Message sent successfully!
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              run send_message.sh
            </>
          )}
        </motion.button>
      </form>
    </motion.div>
  );
};

export default TerminalContact;
