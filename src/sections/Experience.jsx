import React from 'react';
import { motion } from 'framer-motion';
import { experienceData } from '../data/portfolio';
import SectionHeading from '../components/SectionHeading';
import { Briefcase, Clock, Calendar, CheckCircle2 } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28 border-t border-editorial-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker={experienceData.kicker}
          title={experienceData.heading}
        />

        {/* Clear Notice / Placeholder for Formal OJT as requested */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 p-6 rounded-2xl bg-editorial-accentSoft/50 border border-editorial-accent/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
        >
          <div className="flex items-start gap-3">
            <Clock className="w-5 h-5 text-editorial-accent shrink-0 mt-1" />
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-display text-lg text-editorial-ink font-medium">
                  {experienceData.ojtNotice.title}
                </h3>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider bg-editorial-accent text-white font-semibold">
                  {experienceData.ojtNotice.status}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-editorial-ink/80 leading-relaxed max-w-3xl">
                {experienceData.ojtNotice.description}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Academic & Practical Timeline */}
        <div className="space-y-8 relative before:absolute before:inset-0 before:left-3.5 sm:before:left-4 before:w-[2px] before:bg-editorial-border/80">
          {experienceData.timeline.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
              className="relative flex items-start gap-6 sm:gap-8 pl-1 sm:pl-2"
            >
              {/* Timeline Bullet */}
              <div className="w-6 h-6 rounded-full bg-editorial-surface border-2 border-editorial-accent shrink-0 z-10 flex items-center justify-center shadow-xs mt-1">
                <span className="w-2 h-2 rounded-full bg-editorial-accent" />
              </div>

              {/* Content Card */}
              <div className="flex-1 bg-editorial-surface border border-editorial-border rounded-2xl p-6 sm:p-7 shadow-soft hover:border-editorial-accent/40 transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-2">
                  <h4 className="font-display text-xl sm:text-2xl text-editorial-ink font-normal">
                    {item.title}
                  </h4>
                  <span className="font-mono text-xs text-editorial-accent font-semibold">
                    {item.period}
                  </span>
                </div>

                <p className="font-mono text-xs uppercase tracking-wider text-editorial-muted mb-3">
                  {item.organization}
                </p>

                <p className="text-sm text-editorial-ink/80 leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded text-xs font-mono bg-editorial-bg border border-editorial-border text-editorial-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
