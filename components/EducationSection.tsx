
import React from 'react';
import { Section } from './Section';
import { EDUCATION_DATA } from '../constants';
import { Card } from './Card';

interface EducationSectionProps {
  setRef: (el: HTMLElement | null) => void;
}

export const EducationSection: React.FC<EducationSectionProps> = ({ setRef }) => {
  return (
    <Section id="education" title="Education" setRef={setRef}>
      <div className="space-y-8">
          {EDUCATION_DATA.map((edu, index) => (
          <Card key={index}>
        {/* Judul Institusi & Tahun */}
        <div className="flex justify-between items-start">
          <div className="font-bold text-lg text-slate-200 group-hover:text-sky-400 transition-colors duration-300">
            {edu.institution}
          </div>
          <div className="text-xs text-slate-500 uppercase tracking-wider">
            {edu.startYear} — {edu.endYear}
          </div>
        </div>

        {/* Subjudul: Gelar + Jurusan */}
        <div className="text-slate-300 mt-1 font-medium">
          {edu.degree}
        </div>
        <div className="text-slate-400 italic">
          {edu.field}
        </div>

        {/* GPA jika ada */}
        {edu.gpa && (
          <div className="text-slate-400 mt-1">
            GPA: <span className="font-semibold">{edu.gpa}</span>
          </div>
        )}
      </Card>
    ))}
      </div>
    </Section>
  );
};