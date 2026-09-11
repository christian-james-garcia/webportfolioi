import React from 'react';
import { certificationsData } from '../data/portfolio';
import SectionHeading from '../components/SectionHeading';
import CertificationCard from '../components/CertificationCard';

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 md:py-28 bg-editorial-bgAlt/50 border-t border-editorial-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="CERTIFICATIONS"
          title="Credentials — live via Credly"
          subtitle="(Issued by Cisco & IBM SkillsBuild digital credential programs)"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificationsData.map((cert, index) => (
            <CertificationCard
              key={cert.url}
              cert={cert}
              index={index}
            />
          ))}
        </div>

        {/* Informative Note matching PDF Page 8 footnote */}
        <div className="mt-8 text-center">
          <p className="text-xs font-mono text-editorial-muted">
            All credentials verified directly on Credly with official badge identifiers. Click any badge to view the verifiable digital certificate.
          </p>
        </div>
      </div>
    </section>
  );
}
