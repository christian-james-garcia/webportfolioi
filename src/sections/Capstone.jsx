import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { capstoneData } from '../data/portfolio';
import Button from '../components/Button';
import { Database, FileText, CheckCircle2, ChevronRight, Layers, Table, X } from 'lucide-react';

export default function Capstone({ onActionClick }) {
  const [showCaseStudyModal, setShowCaseStudyModal] = useState(false);

  return (
    <section id="capstone" className="py-20 md:py-28 bg-editorial-bgAlt/40 border-t border-editorial-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-mono text-xs md:text-sm uppercase tracking-[0.2em] text-editorial-accent font-semibold mb-3"
          >
            {capstoneData.kicker}
          </motion.p>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl lg:text-6xl font-display font-normal text-editorial-ink tracking-tight leading-[1.12] mb-4"
          >
            {capstoneData.title}
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded bg-editorial-accentSoft text-editorial-accent font-mono text-xs uppercase tracking-wider font-semibold"
          >
            {capstoneData.meta}
          </motion.div>
        </div>

        {/* Main Capstone Feature Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Context, Problem, Objective, Impact */}
          <div className="lg:col-span-7 space-y-8">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-base sm:text-lg text-editorial-ink/90 font-normal leading-relaxed"
            >
              {capstoneData.description}
            </motion.p>

            {/* 3 Pillars: Problem, Objective, Impact */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-2">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="p-5 rounded-xl bg-editorial-surface border border-editorial-border shadow-soft"
              >
                <span className="font-mono text-[11px] uppercase tracking-wider text-editorial-accent font-semibold block mb-2">
                  PROBLEM
                </span>
                <p className="text-xs sm:text-sm text-editorial-ink/80 leading-relaxed">
                  {capstoneData.problem}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="p-5 rounded-xl bg-editorial-surface border border-editorial-border shadow-soft"
              >
                <span className="font-mono text-[11px] uppercase tracking-wider text-editorial-accent font-semibold block mb-2">
                  OBJECTIVE
                </span>
                <p className="text-xs sm:text-sm text-editorial-ink/80 leading-relaxed">
                  {capstoneData.objective}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="p-5 rounded-xl bg-editorial-surface border border-editorial-border shadow-soft"
              >
                <span className="font-mono text-[11px] uppercase tracking-wider text-editorial-accent font-semibold block mb-2">
                  IMPACT
                </span>
                <p className="text-xs sm:text-sm text-editorial-ink/80 leading-relaxed">
                  {capstoneData.impact}
                </p>
              </motion.div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Button
                variant="primary"
                onClick={() => setShowCaseStudyModal(true)}
              >
                Open case study
              </Button>

              <Button
                variant="secondary"
                onClick={() => onActionClick({ title: 'Ibosys Capstone' }, 'github')}
              >
                GitHub repo
              </Button>

              <Button
                variant="secondary"
                onClick={() => onActionClick({ title: 'Ibosys Documentation' }, 'docs')}
              >
                Docs
              </Button>
            </div>
          </div>

          {/* Right Column: ERD Visual Preview & Key Modules */}
          <div className="lg:col-span-5 space-y-6">
            {/* ERD Preview Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-editorial-surface border border-editorial-border rounded-2xl p-6 shadow-soft"
            >
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-editorial-border">
                <div className="flex items-center gap-2">
                  <Database className="w-4 h-4 text-editorial-accent" />
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-editorial-accent font-semibold">
                    ERD PREVIEW
                  </span>
                </div>
                <span className="text-[10px] font-mono text-editorial-muted">SQL Server Relational Schema</span>
              </div>

              {/* Schema Table Diagram Cards */}
              <div className="space-y-3">
                {capstoneData.erdTables.map((tbl) => (
                  <div
                    key={tbl.name}
                    className="p-3.5 rounded-xl bg-editorial-bg border border-editorial-border hover:border-editorial-accent/50 transition-colors"
                  >
                    <div className="flex items-center justify-between font-mono text-xs font-semibold text-editorial-ink mb-1.5">
                      <span className="text-editorial-accent">table: {tbl.name}</span>
                      <Table className="w-3.5 h-3.5 text-editorial-muted" />
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {tbl.fields.map((fld) => (
                        <span
                          key={fld}
                          className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-editorial-surface border border-editorial-border/60 text-editorial-muted"
                        >
                          {fld}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Key Modules & Results */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-editorial-surface border border-editorial-border rounded-2xl p-6 shadow-soft"
            >
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-editorial-accent font-semibold block mb-3">
                KEY MODULES
              </span>

              <div className="grid grid-cols-2 gap-2 text-xs font-mono text-editorial-ink mb-5">
                {capstoneData.keyModules.map((mod) => (
                  <div key={mod} className="flex items-center gap-1.5">
                    <span className="text-editorial-accent font-bold">+</span>
                    <span>{mod.replace('+ ', '')}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-editorial-border">
                <span className="font-display italic text-sm text-editorial-accent block mb-1">
                  Results
                </span>
                <p className="text-xs text-editorial-muted leading-relaxed">
                  {capstoneData.results}
                </p>
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Case Study Modal */}
      <AnimatePresence>
        {showCaseStudyModal && (
          <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-2xl bg-editorial-surface border border-editorial-border rounded-2xl p-6 sm:p-8 shadow-2xl"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className="font-mono text-xs uppercase tracking-wider text-editorial-accent block mb-1">
                    CAPSTONE CASE STUDY
                  </span>
                  <h3 className="font-display text-2xl text-editorial-ink">
                    Ibosys: Municipal Ordinance System
                  </h3>
                </div>
                <button
                  onClick={() => setShowCaseStudyModal(false)}
                  className="p-1 rounded-lg text-editorial-muted hover:text-editorial-ink transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-editorial-ink/90 leading-relaxed max-h-[60vh] overflow-y-auto pr-2">
                <p>
                  <strong>Project Background:</strong> Municipalities like Bongabong historically relied on physical paper archives and cumbersome binders to store resolutions, municipal acts, and community ordinances. Public citizens and local legislative personnel faced significant friction locating historical records.
                </p>
                <p>
                  <strong>Architectural Approach:</strong> Christian James engineered a full-stack solution utilizing React on the frontend for an intuitive catalog search experience, Node.js for REST services, and SQL Server with normalized relational tables to ensure data integrity and audit logging.
                </p>
                <p>
                  <strong>Key Modules Implemented:</strong>
                </p>
                <ul className="list-disc list-inside space-y-1 pl-2 text-editorial-muted">
                  <li>Full-text search by title, number, year, and subject taxonomy.</li>
                  <li>Granular role-based permissions (Public citizen view vs Municipal clerk archive).</li>
                  <li>Automated categorization and PDF attachment archiving.</li>
                  <li>Legislative compliance reports and ordinance amendment tracking.</li>
                </ul>
                <p>
                  <strong>Research Contribution:</strong> Serves as the primary capstone thesis project demonstrating how lightweight, cost-effective web technologies can modernize local government units.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-editorial-border flex justify-end">
                <Button
                  variant="secondary"
                  onClick={() => setShowCaseStudyModal(false)}
                >
                  Close Case Study
                </Button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
