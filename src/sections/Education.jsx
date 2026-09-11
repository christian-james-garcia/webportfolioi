import React from 'react';
import { motion } from 'framer-motion';
import { educationData } from '../data/portfolio';
import SectionHeading from '../components/SectionHeading';
import { GraduationCap, Award, Calendar } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-20 md:py-28 bg-editorial-bgAlt/40 border-t border-editorial-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="EDUCATION"
          title="Academic foundation"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-editorial-surface border border-editorial-border rounded-3xl p-7 sm:p-10 shadow-soft max-w-4xl"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-editorial-border">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-editorial-accentSoft text-editorial-accent flex items-center justify-center shrink-0 border border-editorial-accent/20">
                <GraduationCap className="w-6 h-6" />
              </div>

              <div>
                <h3 className="font-display text-2xl sm:text-3xl text-editorial-ink font-normal tracking-tight mb-1">
                  {educationData.degree}
                </h3>
                <p className="text-base text-editorial-muted">
                  {educationData.school}
                </p>
              </div>
            </div>

            {/* Graduating Badge */}
            <div className="self-start md:self-auto">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-editorial-accentSoft text-editorial-accent font-mono text-xs uppercase tracking-wider font-semibold border border-editorial-accent/30">
                <Calendar className="w-3.5 h-3.5" />
                {educationData.badge}
              </span>
            </div>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono text-editorial-muted">
            <span>Academic Cycle: {educationData.period}</span>
            <span className="text-editorial-ink/80 max-w-md text-right sm:text-right text-left">
              {educationData.details}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
