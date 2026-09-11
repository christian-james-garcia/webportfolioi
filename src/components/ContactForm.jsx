import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2, AlertCircle, Info, Loader2 } from 'lucide-react';
import Button from './Button';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error | placeholder_notice
  const [errorMessage, setErrorMessage] = useState('');

  const endpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT || 'https://formspree.io/f/your-form-id';
  const isPlaceholderEndpoint = !endpoint || endpoint.includes('your-form-id') || endpoint.includes('xxxx');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error');
      setErrorMessage('Please fill in all fields before sending.');
      return;
    }

    // Safety check for placeholder endpoint
    if (isPlaceholderEndpoint) {
      setStatus('placeholder_notice');
      return;
    }

    try {
      setStatus('submitting');
      setErrorMessage('');

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        const data = await response.json();
        throw new Error(data.error || 'Failed to send message.');
      }
    } catch (err) {
      setStatus('error');
      setErrorMessage(err.message || 'Something went wrong. Please try emailing directly at c537640@gmail.com');
    }
  };

  return (
    <div className="bg-editorial-surface border border-editorial-border rounded-2xl p-6 sm:p-8 shadow-soft">
      <div className="mb-6">
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-editorial-accent font-semibold block mb-1">
          SEND A MESSAGE
        </span>
        <h3 className="font-display text-2xl text-editorial-ink font-normal">
          Start a conversation
        </h3>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4" noValidate>
        {/* Name Field */}
        <div>
          <label htmlFor="contact-name" className="block font-mono text-xs uppercase tracking-wider text-editorial-muted mb-1.5 font-medium">
            Name
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Christian James"
            className="w-full px-4 py-3 rounded-xl bg-editorial-bg border border-editorial-border text-editorial-ink text-sm placeholder:text-editorial-muted/60 focus:bg-editorial-surface focus:border-editorial-accent transition-colors outline-none"
          />
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="contact-email" className="block font-mono text-xs uppercase tracking-wider text-editorial-muted mb-1.5 font-medium">
            Email
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="you@example.com"
            className="w-full px-4 py-3 rounded-xl bg-editorial-bg border border-editorial-border text-editorial-ink text-sm placeholder:text-editorial-muted/60 focus:bg-editorial-surface focus:border-editorial-accent transition-colors outline-none"
          />
        </div>

        {/* Message Field */}
        <div>
          <label htmlFor="contact-message" className="block font-mono text-xs uppercase tracking-wider text-editorial-muted mb-1.5 font-medium">
            Message
          </label>
          <textarea
            id="contact-message"
            name="message"
            rows="4"
            required
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell me about the project — scope, timeline, budget. A 2–3 line brief is fine."
            className="w-full px-4 py-3 rounded-xl bg-editorial-bg border border-editorial-border text-editorial-ink text-sm placeholder:text-editorial-muted/60 focus:bg-editorial-surface focus:border-editorial-accent transition-colors outline-none resize-y"
          />
        </div>

        {/* Submit button */}
        <div className="pt-2">
          <Button
            type="submit"
            disabled={status === 'submitting'}
            className="w-full sm:w-auto"
            icon={status === 'submitting' ? Loader2 : Send}
          >
            {status === 'submitting' ? 'Sending message...' : 'Send message'}
          </Button>
        </div>

        {/* Help text note from design */}
        <p className="text-[11px] font-mono text-editorial-muted leading-relaxed pt-2">
          Delivered directly to <span className="text-editorial-ink font-medium">c537640@gmail.com</span> — wired for Formspree endpoint integration.
        </p>

        {/* Status Messages */}
        <AnimatePresence>
          {status === 'placeholder_notice' && (
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 5 }}
              className="p-4 rounded-xl bg-editorial-accentSoft/60 border border-editorial-accent/30 text-xs text-editorial-ink flex items-start gap-3 mt-4"
            >
              <Info className="w-5 h-5 text-editorial-accent shrink-0 mt-0.5" />
              <div>
                <strong className="font-semibold block text-editorial-accent font-mono uppercase tracking-wider mb-1">
                  Formspree Setup Notice
                </strong>
                <p className="leading-relaxed">
                  The contact form endpoint is currently in placeholder mode (<code className="font-mono bg-editorial-surface/80 px-1 py-0.5 rounded text-[11px]">VITE_FORMSPREE_ENDPOINT</code>). To receive messages directly into your inbox, set your Formspree ID in your <code className="font-mono bg-editorial-surface/80 px-1 py-0.5 rounded text-[11px]">.env</code> file.
                </p>
                <p className="mt-2 text-editorial-ink/80">
                  In the meantime, feel free to email directly at{' '}
                  <a href="mailto:c537640@gmail.com" className="font-semibold text-editorial-accent underline">
                    c537640@gmail.com
                  </a>.
                </p>
              </div>
            </motion.div>
          )}

          {status === 'success' && (
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 5 }}
              className="p-4 rounded-xl bg-green-500/10 border border-green-500/30 text-xs text-editorial-ink flex items-start gap-3 mt-4"
            >
              <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 shrink-0 mt-0.5" />
              <div>
                <strong className="font-semibold block text-green-700 dark:text-green-300 font-mono uppercase tracking-wider mb-1">
                  Message Sent Successfully
                </strong>
                <p className="leading-relaxed">
                  Thank you for reaching out! Christian James will review your message and reply promptly.
                </p>
              </div>
            </motion.div>
          )}

          {status === 'error' && (
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 5 }}
              className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-xs text-editorial-ink flex items-start gap-3 mt-4"
            >
              <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400 shrink-0 mt-0.5" />
              <div>
                <strong className="font-semibold block text-red-700 dark:text-red-300 font-mono uppercase tracking-wider mb-1">
                  Submission Notice
                </strong>
                <p className="leading-relaxed">
                  {errorMessage}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </form>
    </div>
  );
}
