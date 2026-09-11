import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Info, Check, X } from 'lucide-react';

export default function Toast({ message, type = 'info', isVisible, onClose }) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="fixed bottom-6 right-6 z-50 max-w-sm bg-editorial-surface border border-editorial-border rounded-xl p-4 shadow-xl flex items-start gap-3 text-editorial-ink"
        >
          {type === 'success' ? (
            <Check className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
          ) : (
            <Info className="w-5 h-5 text-editorial-accent shrink-0 mt-0.5" />
          )}

          <div className="text-xs leading-relaxed flex-1">
            {message}
          </div>

          <button
            onClick={onClose}
            className="text-editorial-muted hover:text-editorial-ink transition-colors p-0.5 rounded"
            aria-label="Dismiss message"
          >
            <X className="w-4 h-4" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
