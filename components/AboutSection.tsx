
import React from 'react';
import { Section } from './Section';
import { PERSONAL_INFO } from '../constants';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './Icons';

interface AboutSectionProps {
  setRef: (el: HTMLElement | null) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ setRef }) => {
  return (
    <Section id="about" title="About Me" setRef={setRef}>
      <div className="space-y-4 text-slate-400 leading-relaxed">
        {PERSONAL_INFO.about.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
      <div className="flex lg:hidden items-center space-x-6 mt-8">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-100 transition-colors duration-300">
            <GithubIcon className="w-7 h-7" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-100 transition-colors duration-300">
            <LinkedinIcon className="w-7 h-7" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-100 transition-colors duration-300">
            <TwitterIcon className="w-7 h-7" />
          </a>
        </div>
    </Section>
  );
};
