
import React from 'react';

interface CardProps {
  children: React.ReactNode;
  href?: string;
}

export const Card: React.FC<CardProps> = ({ children, href }) => {
  const commonClasses = "block p-6 rounded-lg bg-slate-800/50 transition-all duration-300";
  const interactiveClasses = "hover:bg-slate-800/80 hover:shadow-lg hover:shadow-slate-950/50 group cursor-pointer";

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={`${commonClasses} ${interactiveClasses}`}>
        {children}
      </a>
    );
  }

  return (
    <div className={`${commonClasses}`}>
      {children}
    </div>
  );
};
