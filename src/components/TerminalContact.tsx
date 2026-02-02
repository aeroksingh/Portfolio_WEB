import { useState } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { z } from 'zod';
// import emailjs from 'emailjs/browser';
import emailjs from '@emailjs/browser';

const contactSchema = z.object({
  name: z.string().trim().min(1, 'Name is required'),
  email: z.string().trim().email('Please enter a valid email'),
  message: z.string().trim().min(1, 'Message is required'),
});

type FormErrors = {
  name?: string;
  email?: string;
  message?: string;
};

const TerminalContact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleChange = (field: keyof typeof formData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();

  //   const result = contactSchema.safeParse(formData);
  //   if (!result.success) {
  //     const fieldErrors: FormErrors = {};
  //     result.error.errors.forEach((err) => {
  //       fieldErrors[err.path[0] as keyof FormErrors] = err.message;
  //     });
  //     setErrors(fieldErrors);
  //     return;
  //   }

  //   try {
  //     setIsSubmitting(true);

  //     await emailjs.send(
  //       'YOUR_SERVICE_ID',
  //       'YOUR_TEMPLATE_ID',
  //       {
  //         name: formData.name,
  //         email: formData.email,
  //         message: formData.message,
  //       },
  //       'YOUR_PUBLIC_KEY'
  //     );
      

  //     setIsSent(true);
  //     setFormData({ name: '', email: '', message: '' });

  //     setTimeout(() => setIsSent(false), 3000);
  //   } catch (err) {
  //     alert('Failed to send message. Please try again.');
  //   } finally {
  //     setIsSubmitting(false);
  //   }
  // };
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  const result = contactSchema.safeParse(formData);
  if (!result.success) {
    const fieldErrors: FormErrors = {};
    result.error.errors.forEach((err) => {
      fieldErrors[err.path[0] as keyof FormErrors] = err.message;
    });
    setErrors(fieldErrors);
    return;
  }

  try {
    setIsSubmitting(true);

    await emailjs.send(
      "service_7fp67y8",
      "template_3cytgtd",
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      },
      "N4ObgyL_AwXqtMyLT"
    );

    setIsSent(true);
    setFormData({ name: '', email: '', message: '' });

    setTimeout(() => setIsSent(false), 3000);
  } catch (error) {
    console.error("EmailJS error:", error);
    alert("Failed to send message. Please try again.");
  } finally {
    setIsSubmitting(false);
  }
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
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
          <Terminal className="w-5 h-5 text-primary" />
        </div>
        <h2 className="text-xl font-semibold text-foreground">Terminal</h2>
        <div className="flex gap-1.5 ml-auto">
          <div className="w-3 h-3 rounded-full bg-destructive/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>
      </div>

      {/* Terminal intro */}
      <div className="bg-secondary/30 rounded-lg p-4 mb-6 font-mono text-sm">
        <p className="text-muted-foreground">
          <span className="text-primary">guest@ashutosh</span>:~$ ./init_contact.sh
        </p>
        <p className="text-muted-foreground mt-1">
          Initializing secure connection... <span className="text-primary">Ready</span>
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            className="terminal-input font-mono"
            placeholder="> name"
            value={formData.name}
            onChange={(e) => handleChange('name', e.target.value)}
          />
          <input
            className="terminal-input font-mono"
            placeholder="> email"
            value={formData.email}
            onChange={(e) => handleChange('email', e.target.value)}
          />
        </div>

        <textarea
          className="terminal-input font-mono min-h-[120px]"
          placeholder="> message"
          value={formData.message}
          onChange={(e) => handleChange('message', e.target.value)}
        />

        {Object.values(errors)[0] && (
          <p className="flex items-center gap-1 text-xs font-mono text-destructive">
            <AlertCircle className="w-3 h-3" />
            {Object.values(errors)[0]}
          </p>
        )}

        <motion.button
          type="submit"
          disabled={!isValid || isSubmitting}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="terminal-button flex items-center gap-2"
        >
          {isSent ? (
            <>
              <CheckCircle className="w-4 h-4" />
              Message delivered
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
