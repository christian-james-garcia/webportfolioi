import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';

const NAV_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Capstone', href: '#capstone' },
  { label: 'Experience', href: '#experience' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Education', href: '#education' },
  { label: 'Resume', href: 'resume.html' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar({ isDark, toggleTheme }) {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = NAV_ITEMS.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + 140;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    if (!href.startsWith('#')) {
      setMobileMenuOpen(false);
      return;
    }
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      setMobileMenuOpen(false);
      const navOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      window.history.pushState(null, '', href);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-editorial-bg/95 dark:bg-editorial-bg/95 backdrop-blur-md border-b border-editorial-border py-3 shadow-soft'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="group flex items-center gap-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-editorial-accent rounded"
          aria-label="Christian James D. Garcia — Return to top"
        >
          <span className="font-display text-2xl md:text-3xl font-bold tracking-tight text-editorial-ink">
            CJG<span className="text-editorial-accent">.</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center space-x-1 lg:space-x-3 text-xs lg:text-sm font-medium" aria-label="Main Navigation">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`relative px-2.5 py-1.5 transition-colors rounded-md font-mono uppercase tracking-wider text-xs ${
                  isActive
                    ? 'text-editorial-accent font-semibold'
                    : 'text-editorial-ink/75 hover:text-editorial-accent'
                }`}
                aria-current={isActive ? 'page' : undefined}
              >
                {item.label}
                {isActive && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-2.5 right-2.5 h-[2px] bg-editorial-accent rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Action Controls: Theme Toggle & Mobile Trigger */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle Pill (SOLID / OXIDE) */}
          <button
            onClick={toggleTheme}
            type="button"
            className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-editorial-border bg-editorial-surface/80 hover:border-editorial-accent text-editorial-ink transition-all text-xs font-mono tracking-wider focus:outline-none focus-visible:ring-2 focus-visible:ring-editorial-accent shadow-xs"
            aria-label={`Switch to ${isDark ? 'light cream' : 'dark oxide'} theme`}
            title={`Current: ${isDark ? 'Dark Oxide' : 'Cream Light'}`}
          >
            <span className="text-[11px] uppercase text-editorial-muted hidden sm:inline">
              {isDark ? 'OXIDE' : 'SOLID'}
            </span>
            <div className="relative w-8 h-4 rounded-full bg-editorial-border flex items-center p-0.5 transition-colors">
              <motion.div
                className="w-3 h-3 rounded-full bg-editorial-accent shadow-sm flex items-center justify-center text-white"
                layout
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                style={{ x: isDark ? 16 : 0 }}
              >
                {isDark ? <Moon className="w-2 h-2 text-white" /> : <Sun className="w-2 h-2 text-white" />}
              </motion.div>
            </div>
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            type="button"
            className="xl:hidden p-2 rounded-lg border border-editorial-border text-editorial-ink hover:text-editorial-accent hover:border-editorial-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-editorial-accent transition-colors"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="xl:hidden overflow-hidden bg-editorial-bg dark:bg-editorial-bg border-b border-editorial-border px-4 pt-3 pb-6 shadow-soft-lg"
          >
            <nav className="flex flex-col space-y-2 pt-2" aria-label="Mobile Navigation">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`px-4 py-2.5 rounded-lg font-mono text-sm uppercase tracking-wider flex items-center justify-between transition-colors ${
                      isActive
                        ? 'bg-editorial-accentSoft text-editorial-accent font-bold'
                        : 'text-editorial-ink hover:bg-editorial-surface'
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && (
                      <span className="w-2 h-2 rounded-full bg-editorial-accent" />
                    )}
                  </a>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
