
import React from 'react';
import { Section } from './Section';
import { EXPERIENCE_DATA } from '../constants';
import { Card } from './Card';

interface ExperienceSectionProps {
  setRef: (el: HTMLElement | null) => void;
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ setRef }) => {
  return (
    <Section id="experience" title="Experience" setRef={setRef}>
      <div className="space-y-12">
        {EXPERIENCE_DATA.map((exp, index) => (
          <Card key={index}>
              <div className="grid sm:grid-cols-4 gap-x-4">
                  <div className="text-xs font-semibold uppercase text-slate-500 tracking-wider mb-2 sm:mb-0 sm:col-span-1">{exp.startDate} — {exp.endDate}</div>
                  <div className="sm:col-span-3">
                      <h3 className="text-lg font-medium text-slate-200 group-hover:text-sky-400 transition-colors duration-300">{exp.role} · {exp.organization}</h3>
                      <ul className="mt-2 space-y-2 list-disc list-inside text-slate-400">
                        {exp.description.map((item, i) => (
                            <li key={i}>{item}</li>
                        ))}
                      </ul>
                      <div className="mt-4 flex flex-wrap gap-2">
                          {exp.skills.map((skill) => (
                              <div key={skill} className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300">
                                  {skill}
                              </div>
                          ))}
                      </div>
                  </div>
              </div>
          </Card>
        ))}
      </div>
    </Section>
  );
};
