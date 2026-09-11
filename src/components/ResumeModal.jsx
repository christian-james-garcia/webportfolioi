import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, ArrowLeft, AlertCircle, CheckCircle2, FileText } from 'lucide-react';
import Button from './Button';

const RESUME_PDF_PATH = '/asset/Garcia_Christian.pdf';

export default function ResumeModal({ isOpen, onClose }) {
  const [downloadStarted, setDownloadStarted] = useState(false);

  if (!isOpen) return null;

  const handleDownloadClick = () => {
    setDownloadStarted(true);
    // Trigger real file download
    const link = document.createElement('a');
    link.href = RESUME_PDF_PATH;
    link.download = 'Garcia_Christian_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setTimeout(() => setDownloadStarted(false), 3000);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="fixed inset-0 z-50 overflow-y-auto bg-black/65 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 md:p-10"
        onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.93, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.93, y: 30 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full max-w-4xl bg-editorial-surface border border-editorial-border rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col"
          role="dialog"
          aria-modal="true"
          aria-label="Resume of Christian James D. Garcia"
        >
          {/* Top action bar */}
          <div className="sticky top-0 z-10 bg-editorial-bgAlt dark:bg-editorial-bgAlt border-b border-editorial-border px-5 py-3.5 flex items-center justify-between">
            <button
              onClick={onClose}
              type="button"
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-editorial-muted hover:text-editorial-accent transition-colors focus:outline-none focus-visible:underline"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to portfolio</span>
            </button>

            <div className="flex items-center gap-3">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                onClick={handleDownloadClick}
                className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-semibold border transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-editorial-accent ${
                  downloadStarted
                    ? 'bg-green-500 text-white border-green-500'
                    : 'bg-editorial-accent text-white border-editorial-accent hover:bg-editorial-accentHover'
                }`}
              >
                <AnimatePresence mode="wait">
                  {downloadStarted ? (
                    <motion.span
                      key="check"
                      initial={{ opacity: 0, scale: 0.7 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.7 }}
                      className="flex items-center gap-1.5"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5" /> Downloading…
                    </motion.span>
                  ) : (
                    <motion.span
                      key="dl"
                      initial={{ opacity: 0, scale: 0.7 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.7 }}
                      className="flex items-center gap-1.5"
                    >
                      <Download className="w-3.5 h-3.5" /> Download PDF
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>

              <button
                onClick={onClose}
                type="button"
                className="p-1.5 rounded-lg text-editorial-muted hover:text-editorial-ink hover:bg-editorial-surface transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-editorial-accent"
                aria-label="Close resume preview"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Embedded PDF Viewer */}
          <div className="flex-1 min-h-[60vh]">
            <iframe
              src={RESUME_PDF_PATH}
              title="Garcia Christian Resume PDF"
              className="w-full h-full min-h-[70vh] border-0"
              style={{ minHeight: 620 }}
            />
          </div>

          {/* Footer strip */}
          <div className="px-5 py-3 border-t border-editorial-border bg-editorial-bgAlt flex items-center justify-between text-[11px] font-mono text-editorial-muted">
            <span className="flex items-center gap-1.5">
              <FileText className="w-3.5 h-3.5 text-editorial-accent" />
              Garcia_Christian_Resume.pdf
            </span>
            <span>All credentials verified · Portfolio by CJG.</span>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
