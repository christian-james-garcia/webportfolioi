import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolio';
import SectionHeading from '../components/SectionHeading';
import ContactForm from '../components/ContactForm';
import { Mail, Github, Facebook, Linkedin, Copy, Check, ExternalLink } from 'lucide-react';

export default function Contact({ onShowToast }) {
  const [copiedKey, setCopiedKey] = useState(null);

  const handleCopy = (text, label, key) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    if (onShowToast) {
      onShowToast(`Copied ${label} to clipboard!`, 'success');
    }
    setTimeout(() => {
      setCopiedKey(null);
    }, 2500);
  };

  const contactMethods = [
    {
      key: 'email',
      label: 'EMAIL',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      copyText: personalInfo.email,
      icon: Mail,
      isPlaceholder: false
    },
    {
      key: 'github',
      label: 'GITHUB',
      value: 'github.com/christian-james-garcia',
      href: personalInfo.github,
      copyText: personalInfo.github,
      icon: Github,
      isPlaceholder: false
    },
    {
      key: 'facebook',
      label: 'FACEBOOK',
      value: 'facebook.com/christianjamescjcj',
      href: personalInfo.facebook,
      copyText: personalInfo.facebook,
      icon: Facebook,
      isPlaceholder: false
    },
    {
      key: 'linkedin',
      label: 'LINKEDIN',
      value: 'LinkedIn profile pending setup',
      href: null,
      copyText: null,
      icon: Linkedin,
      isPlaceholder: true
    }
  ];

  return (
    <section id="contact" className="py-20 md:py-28 bg-editorial-bgAlt/30 border-t border-editorial-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="CONTACT"
          title="Let's build something together"
          subtitle="Open to OJT practicum, freelance work, research collaborations, and full-time roles starting 2027. No spam, no fluff — I reply fast."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Direct Contact Links with Copy Buttons */}
          <div className="lg:col-span-5 space-y-4">
            {contactMethods.map((item) => (
              <div
                key={item.key}
                className="bg-editorial-surface border border-editorial-border rounded-2xl p-5 shadow-soft flex items-center justify-between gap-4 transition-all hover:border-editorial-accent/40"
              >
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="w-10 h-10 rounded-xl bg-editorial-bg flex items-center justify-center text-editorial-accent shrink-0 border border-editorial-border">
                    <item.icon className="w-4 h-4" />
                  </div>
                  
                  <div className="min-w-0">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-editorial-muted block">
                      {item.label}
                    </span>
                    {item.isPlaceholder ? (
                      <span className="text-xs font-mono text-editorial-muted italic block truncate">
                        {item.value}
                      </span>
                    ) : (
                      <a
                        href={item.href}
                        target={item.key !== 'email' ? '_blank' : undefined}
                        rel="noopener noreferrer"
                        className="text-xs sm:text-sm font-medium text-editorial-ink hover:text-editorial-accent block truncate transition-colors"
                      >
                        {item.value}
                      </a>
                    )}
                  </div>
                </div>

                {/* Copy / Status button */}
                {!item.isPlaceholder ? (
                  <button
                    type="button"
                    onClick={() => handleCopy(item.copyText, item.label, item.key)}
                    className="p-2 rounded-lg text-editorial-muted hover:text-editorial-ink hover:bg-editorial-bg transition-colors shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-editorial-accent"
                    title={`Copy ${item.label}`}
                    aria-label={`Copy ${item.label} to clipboard`}
                  >
                    {copiedKey === item.key ? (
                      <Check className="w-4 h-4 text-green-600" />
                    ) : (
                      <span className="font-mono text-[10px] uppercase tracking-wider text-editorial-muted hover:text-editorial-accent flex items-center gap-1">
                        <Copy className="w-3 h-3" />
                        <span className="hidden sm:inline">COPY</span>
                      </span>
                    )}
                  </button>
                ) : (
                  <span className="font-mono text-[9px] uppercase tracking-wider px-2 py-0.5 rounded bg-editorial-bg text-editorial-muted border border-editorial-border/80">
                    Pending
                  </span>
                )}
              </div>
            ))}
          </div>

          {/* Right Column: Formspree-ready Contact Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

        </div>
      </div>
    </section>
  );
}
