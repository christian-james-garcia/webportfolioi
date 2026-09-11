import React from 'react';
import { motion } from 'framer-motion';
import { Download, Sparkles, ArrowRight } from 'lucide-react';

const RESUME_PDF_PATH = '/asset/Garcia_Christian.pdf';

export default function ResumeSection({ onOpenResume }) {
  const handleDirectDownload = () => {
    const link = document.createElement('a');
    link.href = RESUME_PDF_PATH;
    link.download = 'Garcia_Christian_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="resume" className="py-20 md:py-28 border-t border-editorial-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Editorial Accent Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-3xl bg-editorial-accent text-white p-8 sm:p-12 md:p-16 overflow-hidden shadow-soft-xl"
        >
          {/* Background radial dot grid */}
          <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:22px_22px] pointer-events-none" />

          {/* Animated blurred blobs for depth */}
          <motion.div
            className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-white/10 blur-3xl pointer-events-none"
            animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute -bottom-12 -left-12 w-56 h-56 rounded-full bg-white/10 blur-3xl pointer-events-none"
            animate={{ scale: [1, 1.12, 1], opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          />

          <div className="relative z-10 max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex items-center gap-2 mb-5"
            >
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-white font-mono text-xs uppercase tracking-wider font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                RESUME & CREDENTIALS
              </span>
              <span className="font-mono text-xs text-white/70 hidden sm:inline">
                PDF · Available for download
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-3xl sm:text-5xl md:text-6xl font-display font-normal tracking-tight leading-[1.12] mb-6 text-white"
            >
              Looking for a developer with momentum?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-base sm:text-lg md:text-xl text-white/90 font-light leading-relaxed mb-8 max-w-2xl"
            >
              4th-year BSIT — full-stack web, app, and data systems. Available for OJT practicum, freelance builds, and graduate roles starting 2027.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap items-center gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.04, backgroundColor: '#F3EADD' }}
                whileTap={{ scale: 0.97 }}
                type="button"
                onClick={onOpenResume}
                className="px-6 py-3 rounded-full bg-white text-editorial-ink font-medium text-sm transition-all shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-white inline-flex items-center gap-2"
              >
                View resume
                <ArrowRight className="w-4 h-4" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.04, backgroundColor: 'rgba(255,255,255,0.15)' }}
                whileTap={{ scale: 0.97 }}
                type="button"
                onClick={handleDirectDownload}
                className="px-6 py-3 rounded-full border border-white text-white font-medium text-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white inline-flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                Download PDF
              </motion.button>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
