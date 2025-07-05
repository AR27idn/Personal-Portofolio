import React from 'react';
import { Section } from './Section';
import { EXPERIENCE_DATA } from '../constants';

interface ExperienceSectionProps {
  setRef: (el: HTMLElement | null) => void;
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ setRef }) => {
  return (
    <Section id="experience" title="Experience" setRef={setRef}>
      <div className="relative pl-6 before:absolute before:top-0 before:left-2 before:bottom-0 before:w-px before:bg-slate-700 space-y-10">
        {EXPERIENCE_DATA.map((exp, index) => (
          <div key={index} className="relative">
            {/* Titik Timeline */}
            <div className="absolute left-0 top-1 w-4 h-4 bg-sky-500 rounded-full ring-2 ring-slate-900"></div>

            {/* Konten */}
            <div className="pl-6">
              <h3 className="text-base font-semibold text-slate-200">{exp.role}</h3>
              <p className="text-sm text-sky-400 mb-2">
                {exp.organization} ({exp.startDate} – {exp.endDate})
              </p>
              <ul className="mt-3 space-y-2 list-disc list-inside text-slate-400 leading-snug">
                {exp.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <div className="mt-2 flex flex-wrap gap-2">
                {exp.skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-sky-400/10 text-sky-300 text-xs font-medium px-3 py-1 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};
