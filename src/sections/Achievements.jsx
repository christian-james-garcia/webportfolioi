import React from 'react';
import { motion } from 'framer-motion';
import { achievementsData } from '../data/portfolio';
import SectionHeading from '../components/SectionHeading';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }
};
const cardVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }
};

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 md:py-28 border-t border-editorial-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="ACHIEVEMENTS"
          title="Moments that shaped me"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {achievementsData.map((item) => (
            <motion.div
              key={item.number}
              variants={cardVariants}
              whileHover={{ y: -5, transition: { duration: 0.22 } }}
              className="group bg-editorial-surface border border-editorial-border rounded-2xl p-6 sm:p-7 shadow-soft hover:shadow-soft-lg hover:border-editorial-accent/40 transition-shadow duration-300 flex items-start gap-5"
            >
              {/* Number Badge */}
              <motion.span
                whileHover={{ rotate: [0, -6, 6, 0], scale: 1.1 }}
                transition={{ duration: 0.35 }}
                className="w-10 h-10 rounded-xl bg-editorial-accentSoft text-editorial-accent font-mono text-sm font-bold flex items-center justify-center shrink-0 border border-editorial-accent/20 cursor-default"
              >
                {item.number}
              </motion.span>

              {/* Text */}
              <div>
                <h3 className="font-display text-xl text-editorial-ink font-normal mb-2 group-hover:text-editorial-accent transition-colors duration-200">
                  {item.title}
                </h3>
                <p className="text-sm text-editorial-muted leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
