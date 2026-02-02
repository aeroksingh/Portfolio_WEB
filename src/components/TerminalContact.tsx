import { useState } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Send, CheckCircle } from 'lucide-react';

const TerminalContact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <motion.div
      id="contact"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.7 }}
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
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="terminal-input w-full font-mono"
              placeholder="Enter your name"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-mono text-muted-foreground mb-2">
              {'>'} email:
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="terminal-input w-full font-mono"
              placeholder="Enter your email"
              required
            />
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-mono text-muted-foreground mb-2">
            {'>'} message:
          </label>
          <textarea
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="terminal-input w-full font-mono min-h-[120px] resize-none"
            placeholder="Type your message here..."
            required
          />
        </div>

        <motion.button
          type="submit"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="terminal-button flex items-center gap-2"
          disabled={isSubmitted}
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
