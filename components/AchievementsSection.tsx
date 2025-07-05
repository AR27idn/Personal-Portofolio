import React from 'react';
import { Section } from './Section';
import { ACHIEVEMENTS } from '../constants';
import { ExternalLinkIcon } from 'lucide-react';

interface AchievementsSectionProps {
  setRef: (el: HTMLElement | null) => void;
}

export const AchievementsSection: React.FC<AchievementsSectionProps> = ({ setRef }) => {
  return (
    <Section id="achievements" title="Awards & Achievements" setRef={setRef}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {ACHIEVEMENTS.map((item, index) => (
          <div key={index} className="bg-slate-800/40 border border-slate-700 rounded-2xl p-4 hover:border-sky-500 transition-all">
            <h3 className="text-slate-200 font-semibold text-base">{item.title}</h3>
            <p className="text-sm text-slate-400">{item.description}</p>
            {item.credentialUrl && (
              <a
                href={item.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm text-sky-400 hover:underline mt-2"
              >
                <ExternalLinkIcon className="w-4 h-4" />
                View Certificate
              </a>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
};
