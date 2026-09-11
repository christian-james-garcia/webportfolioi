import React from 'react';
import { motion } from 'framer-motion';

export default function SkillCard({ category, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
      className="group relative bg-editorial-surface border border-editorial-border rounded-2xl p-6 sm:p-7 shadow-soft transition-shadow duration-300 hover:shadow-soft-lg hover:border-editorial-accent/40 flex flex-col justify-between"
    >
      {/* Animated glowing dot corner on hover */}
      <motion.div
        className="absolute top-4 right-4 w-2 h-2 rounded-full bg-editorial-accent opacity-0 group-hover:opacity-100"
        animate={{ scale: [1, 1.6, 1] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div>
        {/* Category Code Pill */}
        <div className="flex items-center justify-between mb-5">
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 + 0.2 }}
            className="inline-flex items-center px-2.5 py-1 rounded-md bg-editorial-accentSoft text-editorial-accent font-mono text-xs font-semibold tracking-wider"
          >
            {category.code}
          </motion.span>
          <span className="text-xs font-mono text-editorial-muted">
            {category.skills.length} skills
          </span>
        </div>

        {/* Category Title */}
        <h3 className="font-display text-xl sm:text-2xl text-editorial-ink font-normal mb-2 tracking-tight group-hover:text-editorial-accent transition-colors duration-200">
          {category.title}
        </h3>

        <p className="text-xs text-editorial-muted mb-6 leading-relaxed">
          {category.description}
        </p>

        {/* Skills Tag Pills — staggered on hover */}
        <div className="flex flex-wrap gap-2">
          {category.skills.map((skill, si) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 + si * 0.04 + 0.3, duration: 0.3 }}
              whileHover={{ scale: 1.07, backgroundColor: 'var(--color-accent)', color: '#fff', borderColor: 'var(--color-accent)' }}
              className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium bg-editorial-bg border border-editorial-border text-editorial-ink transition-colors cursor-default"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
