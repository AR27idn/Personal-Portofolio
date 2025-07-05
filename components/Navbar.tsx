import React from 'react';
import { PERSONAL_INFO } from '../constants';
import { GithubIcon, LinkedinIcon } from './Icons';
import { SiTiktok } from 'react-icons/si';

interface NavbarProps {
  sections: { id: string; title: string }[];
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ sections, activeSection }) => {
  return (
    <header className="fixed top-0 left-0 h-16 lg:min-h-screen w-full lg:w-[450px] bg-slate-900/70 backdrop-blur-sm lg:bg-slate-900/100 lg:backdrop-blur-none z-50">
      <div className="flex flex-col min-h-screen justify-between p-8 sm:p-12 lg:p-20 lg:py-16">
        
        {/* --- Identity Section --- */}
        <div>
          <h1 className="text-2xl sm:text-5xl font-bold text-slate-100 tracking-tight">
            {PERSONAL_INFO.name}
          </h1>
          <h2 className="mt-3 text-lg sm:text-xl font-medium text-slate-100 tracking-wide">
            {PERSONAL_INFO.title}
          </h2>

          {/* --- Nav Section --- */}
          <nav className="hidden lg:block mt-1">
            <ul className="space-y-1">
              {sections.map(({ id, title }) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    className="group flex items-center py-2 transition-all ease-in-out duration-300"
                  >
                    <span
                      className={`nav-indicator mr-4 h-px w-8 bg-slate-500 transition-all group-hover:w-16 group-hover:bg-slate-200 ${
                        activeSection === id ? 'w-16 bg-slate-200' : ''
                      }`}
                    />
                    <span
                      className={`nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 ${
                        activeSection === id ? 'text-slate-200' : ''
                      }`}
                    >
                      {title}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* --- Social Links --- */}
        <div className="hidden lg:flex items-center space-x-6">
          <SocialLink href="https://github.com/AR27idn" icon={<GithubIcon className="w-6 h-6" />} />
          <SocialLink href="https://www.linkedin.com/in/muhammad-arfy-rafa-f/" icon={<LinkedinIcon className="w-6 h-6" />} />
          <SocialLink href="https://www.tiktok.com/@arfyrafa27" icon={<SiTiktok className="w-6 h-6" />} />
        </div>
      </div>
    </header>
  );
};

/** Mini component for social icons */
const SocialLink = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-slate-400 hover:text-slate-100 transition-colors duration-300"
  >
    {icon}
  </a>
);
