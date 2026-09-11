import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ChevronRight, FileText } from 'lucide-react';
import { personalInfo } from '../data/portfolio';
import Button from '../components/Button';

// Stagger container variants
const heroContainerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.13, delayChildren: 0.05 }
  }
};
const heroItemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } }
};

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const navOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const handleViewResume = () => {
    window.location.href = 'resume.html';
  };

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 md:pt-36 md:pb-24 flex flex-col justify-between overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Intro — staggered entrance */}
          <motion.div
            variants={heroContainerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col items-start text-left z-10"
          >
            {/* Kicker */}
            <motion.p
              variants={heroItemVariants}
              className="font-mono text-xs sm:text-sm uppercase tracking-[0.22em] text-editorial-accent font-semibold mb-4 flex items-center gap-2"
            >
              <motion.span
                className="w-2 h-2 rounded-full bg-editorial-accent inline-block"
                animate={{ scale: [1, 1.4, 1] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
              />
              {personalInfo.kicker}
            </motion.p>

            {/* Display Heading */}
            <motion.h1
              variants={heroItemVariants}
              className="text-4xl sm:text-6xl md:text-7xl font-display font-normal text-editorial-ink tracking-tight leading-[1.08] mb-6"
            >
              Christian James <br />
              <motion.span
                className="italic font-light"
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.45, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >D. Garcia</motion.span>
            </motion.h1>

            {/* Tagline / Introduction */}
            <motion.p
              variants={heroItemVariants}
              className="text-base sm:text-lg md:text-xl text-editorial-muted max-w-xl font-normal leading-relaxed mb-8"
            >
              {personalInfo.tagline}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={heroItemVariants}
              className="flex flex-wrap items-center gap-3 sm:gap-4 mb-12"
            >
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => scrollTo('projects')}
                className="px-6 py-3 rounded-full bg-editorial-accent text-white text-sm font-medium shadow-sm hover:bg-editorial-accentHover transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-editorial-accent"
              >
                View Projects
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                onClick={handleViewResume}
                className="px-6 py-3 rounded-full border border-editorial-ink/70 text-editorial-ink text-sm font-medium hover:bg-editorial-ink hover:text-editorial-bg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-editorial-accent inline-flex items-center gap-2 dark:border-editorial-border dark:hover:bg-editorial-ink dark:hover:text-editorial-bg"
              >
                <FileText className="w-4 h-4" />
                View Resume
              </motion.button>

              <button
                onClick={() => scrollTo('contact')}
                type="button"
                className="inline-flex items-center gap-1 text-sm font-mono uppercase tracking-wider text-editorial-accent hover:text-editorial-accentHover font-semibold px-2 py-3 transition-colors focus:outline-none focus-visible:underline"
              >
                <span>Contact Me</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </motion.div>

            {/* Small Statistics Counters */}
            <motion.div
              variants={heroItemVariants}
              className="grid grid-cols-3 gap-6 sm:gap-10 pt-6 border-t border-editorial-border/80 w-full max-w-lg"
            >
              {personalInfo.stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.55 + idx * 0.1, duration: 0.4 }}
                  className="flex flex-col"
                >
                  <span className="font-display text-3xl sm:text-4xl text-editorial-ink font-normal tracking-tight">
                    {stat.value}
                  </span>
                  <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-wider text-editorial-muted mt-1">
                    / {stat.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column: Editorial Hero Frame & Floating Technology Pills */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -5 }}
              className="relative w-full max-w-sm sm:max-w-md aspect-[4/5] rounded-3xl bg-editorial-surface border border-editorial-border shadow-soft-xl overflow-hidden p-3"
            >
              {/* Subtle shimmer on card border */}
              <motion.div
                className="absolute inset-0 rounded-3xl border-2 border-editorial-accent/20 pointer-events-none"
                animate={{ opacity: [0.3, 0.8, 0.3] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              />
              {/* Inner card with border */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-editorial-bgAlt flex flex-col justify-between">
                
                {/* Profile Photo */}
                <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
                  <img
                    src={personalInfo.photo}
                    alt="Christian James D. Garcia"
                    className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105"
                    onError={(e) => {
                      // Fallback if image fails to render
                      e.currentTarget.style.display = 'none';
                    }}
                  />

                  {/* Fallback watermark background if image is loading or missing */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none -z-0 opacity-20">
                    <span className="font-display text-8xl font-bold text-editorial-muted">
                      CJG
                    </span>
                    <span className="font-mono text-xs text-editorial-muted uppercase tracking-widest mt-2">
                      Full-Stack Developer
                    </span>
                  </div>
                </div>

                {/* Bottom subtle bar on the photo frame */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent p-4 text-white">
                  <span className="font-mono text-[11px] uppercase tracking-wider opacity-90 block">
                    Innovative College of Science and Technology
                  </span>
                  <span className="font-display text-base font-medium">
                    Christian James D. Garcia
                  </span>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>

      {/* Bottom Scroll Hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="text-center pt-8 pb-2"
      >
        <button
          onClick={() => scrollTo('about')}
          type="button"
          className="inline-flex flex-col items-center gap-1.5 text-editorial-muted hover:text-editorial-accent transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-editorial-accent rounded p-1"
          aria-label="Scroll to About Me section"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.25em]">
            SCROLL TO EXPLORE
          </span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ArrowDown className="w-3.5 h-3.5 text-editorial-accent" />
          </motion.div>
        </button>
      </motion.div>
    </section>
  );
}
