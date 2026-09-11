import React from 'react';
import { ArrowUp } from 'lucide-react';

export default function Footer({ onNavClick }) {
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const navLinks = [
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

  return (
    <footer className="bg-editorial-bgAlt dark:bg-editorial-bgAlt border-t border-editorial-border py-12 md:py-16 text-editorial-ink">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-10 border-b border-editorial-border/60">
          <div>
            <a
              href="#home"
              onClick={scrollToTop}
              className="font-display text-2xl font-bold tracking-tight text-editorial-ink block mb-1"
            >
              CJG<span className="text-editorial-accent">.</span>
            </a>
            <p className="text-xs font-mono text-editorial-muted">
              Web & app developer — Christian James D. Garcia
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-5 gap-y-2 text-xs font-mono uppercase tracking-wider text-editorial-muted" aria-label="Footer Navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => onNavClick ? onNavClick(e, link.href) : undefined}
                className="hover:text-editorial-accent transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-editorial-muted">
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-2.5 py-1 rounded bg-editorial-surface border border-editorial-border text-[11px] text-editorial-accent">
              BUILT WITH REACT + TAILWIND + FRAMER MOTION
            </span>
            <span>Copyright © 2026 Christian James D. Garcia. All rights reserved.</span>
          </div>

          <button
            onClick={scrollToTop}
            type="button"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-editorial-border hover:border-editorial-accent hover:text-editorial-accent transition-colors font-mono uppercase tracking-wider text-[11px] focus:outline-none focus-visible:ring-2 focus-visible:ring-editorial-accent"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
