import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, FileText } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
          isScrolled ? 'w-[95%] max-w-5xl' : 'w-[90%] max-w-4xl'
        }`}
      >
        <div className="glass-card px-6 py-3 flex items-center justify-between">
          {/* Logo (Left) */}
          <div className="flex items-center flex-1">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#home');
              }}
              className="font-mono text-lg font-semibold text-primary"
            >
              {'<ashutosh/>'}
            </a>
          </div>

          {/* Desktop Navigation (Center) */}
          {!isMobile && (
            <>
              <div className="flex-1 flex items-center justify-center gap-6">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 font-medium"
                  >
                    {link.label}
                  </a>
                ))}
              </div>

              {/* Right placeholder / Resume (Right) */}
              <div className="flex items-center flex-1 justify-end">
                <motion.a
                  href="https://drive.google.com/file/d/1TXFQZFJNiEwTqsHB7j8Qs7Tl4yZ4OdIK/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 border border-primary/30 text-primary text-sm font-mono hover:bg-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_20px_hsl(var(--neural-blue)/0.3)]"
                >
                  <FileText className="w-4 h-4" />
                  Resume
                </motion.a>
              </div>
            </>
          )}

          {/* Mobile Menu Toggle */}
          {isMobile && (
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg bg-secondary/50 text-muted-foreground hover:text-primary transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          )}
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobile && isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-background/80 backdrop-blur-md"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 h-full w-72 bg-card border-l border-border p-6 pt-20"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col gap-4">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="text-lg text-muted-foreground hover:text-primary transition-colors duration-300 font-medium py-2"
                  >
                    {link.label}
                  </motion.a>
                ))}
                <motion.a
                  href="https://drive.google.com/file/d/1TXFQZFJNiEwTqsHB7j8Qs7Tl4yZ4OdIK/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navLinks.length * 0.1 }}
                  className="flex items-center gap-2 px-4 py-3 rounded-lg bg-primary/10 border border-primary/30 text-primary font-mono mt-4 hover:bg-primary/20 transition-all"
                >
                  <FileText className="w-4 h-4" />
                  Resume
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
