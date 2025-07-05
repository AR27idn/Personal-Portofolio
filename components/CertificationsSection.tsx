import React from 'react';
import { Section } from './Section';
import { CERTIFICATIONS_DATA } from '../constants';
import { ExternalLinkIcon } from 'lucide-react'; // pakai icon dari lucide (jika tersedia)

interface CertificationsSectionProps {
  setRef: (el: HTMLElement | null) => void;
}

export const CertificationsSection: React.FC<CertificationsSectionProps> = ({ setRef }) => {
  return (
    <Section id="certifications" title="Certifications" setRef={setRef}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {CERTIFICATIONS_DATA.map((cert, index) => (
          <div key={index} className="bg-slate-800/40 border border-slate-700 rounded-2xl p-4 hover:border-sky-500 transition-all">
            <div className="flex flex-col gap-1">
              {/* Title & Badge */}
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-slate-100 text-base">{cert.name}</h3>
                <span className="text-xs px-2 py-1 rounded-full bg-sky-500/10 text-sky-300 border border-sky-500/20">
                  {cert.issuer}
                </span>
              </div>

              {/* Date */}
              <p className="text-xs text-slate-400 italic">{cert.date}</p>

              {/* Link */}
              {cert.credentialUrl && (
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-sky-400 hover:underline mt-2 w-fit"
                >
                  <ExternalLinkIcon className="w-4 h-4" />
                  View Certificate
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};
