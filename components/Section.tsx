import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  setRef: (el: HTMLElement | null) => void;
  children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({ id, title, setRef, children }) => {
  return (
    <section
      id={id}
      ref={setRef}
      className="opacity-0"
      style={{ transform: 'translateY(20px)' }}
    >
      {/* Judul section (selalu tampil) */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold tracking-tight text-slate-100">{title}</h2>
      </div>

      {/* Judul sticky untuk mobile (opsional tetap dipertahankan) */}
      <div className="sticky top-0 lg:hidden bg-slate-900/70 backdrop-blur-sm py-3 -mx-8 sm:-mx-12 md:-mx-20 px-8 sm:px-12 md:px-20 z-10">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200">
          {title}
        </h2>
      </div>

      {children}
    </section>
  );
};
