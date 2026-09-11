import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Sparkles } from 'lucide-react';

export default function ProjectCard({ project, onActionClick }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 24, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.94, y: 12 }}
      transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8, transition: { duration: 0.28, ease: 'easeOut' } }}
      className="group bg-editorial-surface border border-editorial-border rounded-2xl overflow-hidden shadow-soft hover:shadow-soft-lg hover:border-editorial-accent/50 transition-shadow duration-300 flex flex-col justify-between"
    >
      <div>
        {/* Visual Header Banner */}
        <div className="relative h-44 sm:h-48 bg-editorial-bgAlt border-b border-editorial-border flex items-center justify-center overflow-hidden p-6">
          {/* Dot grid pattern */}
          <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#C4481F_1px,transparent_1px)] [background-size:16px_16px]" />

          {/* Floating code name with slide reveal */}
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="font-display text-4xl sm:text-5xl font-light tracking-widest text-editorial-ink/70 group-hover:text-editorial-accent transition-colors duration-300 select-none"
          >
            {project.codeName}
          </motion.span>

          {/* Top category pill */}
          <div className="absolute top-4 left-4 flex items-center gap-1.5 px-2.5 py-1 rounded bg-editorial-surface/90 backdrop-blur-xs border border-editorial-border font-mono text-[11px] uppercase tracking-wider text-editorial-accent font-semibold">
            <span>{project.category}</span>
          </div>

          {/* Sparkle badge */}
          <div className="absolute top-4 right-4 flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider bg-editorial-accentSoft text-editorial-accent">
            <Sparkles className="w-3 h-3" />
            <span>System</span>
          </div>

          {/* Shimmer sweep on hover */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 -translate-x-full group-hover:translate-x-full transition-transform duration-700"
          />
        </div>

        {/* Card Body */}
        <div className="p-6 sm:p-7">
          <div className="flex items-baseline justify-between mb-1">
            <h3 className="font-display text-2xl text-editorial-ink font-normal tracking-tight group-hover:text-editorial-accent transition-colors duration-200">
              {project.title}
            </h3>
          </div>

          <p className="font-mono text-xs text-editorial-accent uppercase tracking-wider mb-3">
            {project.subtitle}
          </p>

          <p className="text-sm text-editorial-muted leading-relaxed mb-6">
            {project.description}
          </p>

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech, ti) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: ti * 0.05 }}
                className="px-2.5 py-1 rounded text-xs font-mono bg-editorial-bg border border-editorial-border text-editorial-ink/90"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
      </div>

      {/* Card Footer: Action buttons & Number */}
      <div className="px-6 sm:px-7 pb-6 pt-2 border-t border-editorial-border/60 flex items-center justify-between">
        <div className="flex items-center gap-4 text-xs font-medium">
          {/* Live Demo Action */}
          <motion.button
            type="button"
            onClick={() => onActionClick(project, 'demo')}
            whileHover={{ x: 3 }}
            className="inline-flex items-center gap-1 text-editorial-ink hover:text-editorial-accent font-medium transition-colors focus:outline-none focus-visible:underline"
            title="Preview demo status"
          >
            <span>Live demo</span>
            <span className="text-editorial-accent">&gt;</span>
          </motion.button>

          {/* GitHub Action */}
          <motion.button
            type="button"
            onClick={() => onActionClick(project, 'github')}
            whileHover={{ x: 2 }}
            className="inline-flex items-center gap-1 text-editorial-muted hover:text-editorial-ink font-medium transition-colors focus:outline-none focus-visible:underline"
            title="Repository status"
          >
            <Github className="w-3.5 h-3.5" />
            <span>GitHub</span>
          </motion.button>
        </div>

        {/* Serial Number */}
        <span className="font-mono text-lg font-light text-editorial-muted/40 group-hover:text-editorial-accent/60 transition-colors">
          {project.number}
        </span>
      </div>
    </motion.div>
  );
}
