import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

export default function CertificationCard({ cert, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.48, delay: index * 0.09, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -7, transition: { duration: 0.25 } }}
      className="group relative bg-editorial-surface border border-editorial-border rounded-2xl p-6 shadow-soft hover:shadow-soft-lg hover:border-editorial-accent/40 transition-shadow duration-300 flex flex-col justify-between"
    >
      {/* Animated accent corner glow */}
      <motion.div
        className="absolute inset-0 rounded-2xl bg-editorial-accentSoft/0 group-hover:bg-editorial-accentSoft/30 transition-colors duration-500 pointer-events-none"
      />

      <div>
        {/* Top Header: Badge Number & Issuer */}
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex items-center gap-3">
            <motion.span
              whileHover={{ rotate: [0, -8, 8, 0] }}
              transition={{ duration: 0.4 }}
              className="w-9 h-9 rounded-xl bg-editorial-accentSoft text-editorial-accent font-mono text-sm font-bold flex items-center justify-center border border-editorial-accent/20 cursor-default"
            >
              {cert.badgeNumber}
            </motion.span>
            {cert.image && (
              <motion.img
                src={cert.image}
                alt={`${cert.title} Credly badge`}
                className="w-10 h-10 object-contain drop-shadow-xs"
                loading="lazy"
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 + 0.2 }}
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            )}
          </div>

          <span className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-md bg-editorial-bg border border-editorial-border text-editorial-muted">
            {cert.issuer}
          </span>
        </div>

        {/* Certificate Name */}
        <h3 className="font-display text-lg sm:text-xl text-editorial-ink font-normal leading-snug mb-2 group-hover:text-editorial-accent transition-colors duration-200">
          {cert.title}
        </h3>

        <p className="text-xs text-editorial-muted mb-4">
          Issued by <strong className="text-editorial-ink font-medium">{cert.issuer}</strong>
        </p>

        {/* Skills Tagged */}
        {cert.skills && (
          <div className="flex flex-wrap gap-1.5 mb-6">
            {cert.skills.map((s, si) => (
              <motion.span
                key={s}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 + si * 0.04 + 0.3 }}
                className="text-[10px] font-mono px-2 py-0.5 rounded bg-editorial-bgAlt border border-editorial-border/70 text-editorial-muted"
              >
                {s}
              </motion.span>
            ))}
          </div>
        )}
      </div>

      {/* Verify Link */}
      <div className="pt-4 border-t border-editorial-border/60">
        <motion.a
          href={cert.url}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ x: 4 }}
          className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-editorial-accent hover:text-editorial-accentHover transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-editorial-accent rounded"
          aria-label={`Verify ${cert.title} on Credly (opens in new tab)`}
        >
          <span>Verify on Credly</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </motion.a>
      </div>
    </motion.div>
  );
}
