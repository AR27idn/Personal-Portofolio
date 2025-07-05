// components/MobileNavbar.tsx

import React, { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { X } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { SiTiktok } from 'react-icons/si';
import { PERSONAL_INFO } from '../constants';

interface MobileNavbarProps {
  sections: { id: string; title: string }[];
}

export const MobileNavbar: React.FC<MobileNavbarProps> = ({ sections }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lg:hidden">
      {/* Top Navbar */}
      <div className="fixed top-0 left-0 w-full h-16 bg-slate-900/80 backdrop-blur-sm flex items-center justify-between px-6 z-50">
        <h1 className="text-lg font-bold text-white">{PERSONAL_INFO.name}</h1>
        <button onClick={() => setIsOpen(true)} className="text-white text-xl">☰</button>
      </div>

      {/* Drawer */}
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="fixed inset-0 z-50">
        <Dialog.Panel className="fixed top-0 left-0 w-72 h-full bg-slate-900 p-6 flex flex-col justify-between shadow-lg">
          {/* Close button */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold text-white">{PERSONAL_INFO.name}</h2>
            <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-white">
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Sections */}
          <nav>
            <ul className="space-y-4">
              {sections.map(({ id, title }) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    onClick={() => setIsOpen(false)}
                    className="block text-slate-300 hover:text-sky-400 font-medium transition"
                  >
                    {title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Socials */}
          <div className="flex items-center space-x-5 pt-8">
            <SocialLink href="https://github.com/AR27idn" icon={<GithubIcon className="w-5 h-5" />} />
            <SocialLink href="https://www.linkedin.com/in/muhammad-arfy-rafa-f/" icon={<LinkedinIcon className="w-5 h-5" />} />
            <SocialLink href="https://www.tiktok.com/@arfyrafa27" icon={<SiTiktok className="w-5 h-5" />} />
          </div>
        </Dialog.Panel>
      </Dialog>
    </div>
  );
};

const SocialLink = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-slate-400 hover:text-white transition"
  >
    {icon}
  </a>
);
