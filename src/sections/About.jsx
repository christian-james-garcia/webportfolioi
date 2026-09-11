import React from 'react';
import { motion } from 'framer-motion';
import { aboutData } from '../data/portfolio';
import SectionHeading from '../components/SectionHeading';
import { Target } from 'lucide-react';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } }
};
const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } }
};

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 border-t border-editorial-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker={aboutData.kicker}
          title={aboutData.heading}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">

          {/* Left Column: Narrative Bio & Career Goal */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="lg:col-span-7 space-y-6"
          >
            {aboutData.paragraphs.map((p, idx) => (
              <motion.p
                key={idx}
                variants={itemVariants}
                className="text-base sm:text-lg text-editorial-ink/90 font-normal leading-relaxed"
              >
                {p}
              </motion.p>
            ))}

            {/* Career Goal Card */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -4, boxShadow: '0 12px 40px -8px rgba(196, 72, 31, 0.18)' }}
              className="mt-8 p-6 sm:p-7 rounded-2xl bg-editorial-surface border border-editorial-border shadow-soft relative overflow-hidden transition-shadow duration-300"
            >
              <motion.div
                className="absolute top-0 right-0 w-40 h-40 bg-editorial-accentSoft rounded-full blur-3xl pointer-events-none"
                animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              />

              <div className="flex items-center gap-2 mb-3">
                <Target className="w-4 h-4 text-editorial-accent" />
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-editorial-accent font-semibold">
                  {aboutData.careerGoal.label}
                </span>
              </div>

              <p className="font-display text-lg sm:text-xl text-editorial-ink font-normal leading-snug">
                {aboutData.careerGoal.text}
              </p>
            </motion.div>
          </motion.div>

          {/* Right Column: Quick Facts Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5"
          >
            <motion.div
              whileHover={{ y: -4 }}
              className="bg-editorial-surface border border-editorial-border rounded-3xl p-7 sm:p-8 shadow-soft transition-all duration-300"
            >
              <div className="flex items-center justify-between pb-6 border-b border-editorial-border">
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-editorial-accent font-semibold">
                  QUICK FACTS
                </span>
                <motion.span
                  className="w-2 h-2 rounded-full bg-editorial-accent"
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>

              {/* Facts List */}
              <div className="divide-y divide-editorial-border/60">
                {aboutData.quickFacts.map((fact, i) => (
                  <motion.div
                    key={fact.label}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.4 }}
                    className="py-4"
                  >
                    <span className="font-mono text-[10px] uppercase tracking-wider text-editorial-muted block mb-1">
                      {fact.label}
                    </span>
                    <span className="font-medium text-sm sm:text-base text-editorial-ink block">
                      {fact.value}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Bottom Badge */}
              <div className="pt-6 mt-2 border-t border-editorial-border">
                <p className="font-display text-xl sm:text-2xl text-editorial-ink font-light tracking-tight">
                  {aboutData.badge}
                </p>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
