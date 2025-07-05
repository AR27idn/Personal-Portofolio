import React from 'react';
import { Section } from './Section';
import { SKILLS } from '../constants';

interface SkillsSectionProps {
  setRef: (el: HTMLElement | null) => void;
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ setRef }) => {
  return (
    <Section id="skills" title="Tech Stack & Skills" setRef={setRef}>
      <div className="flex flex-wrap gap-3">
        {SKILLS.map((skill) => (
          <span
            key={skill}
            className="bg-sky-500/10 text-sky-300 border border-sky-500/20 px-3 py-1 rounded-full text-sm font-medium"
          >
            {skill}
          </span>
        ))}
      </div>
    </Section>
  );
};
