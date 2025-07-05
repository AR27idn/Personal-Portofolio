
import React, { useState, useEffect, useRef } from 'react';
import { Navbar } from './components/Navbar';
import { MobileNavbar } from './components/MobileNavbar';
import { AboutSection } from './components/AboutSection';
import { EducationSection } from './components/EducationSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ProjectsSection } from './components/ProjectsSection';
import { CertificationsSection } from './components/CertificationsSection';
import { AchievementsSection } from './components/AchievementsSection';
import { SkillsSection } from './components/SkillsSection';
import { ContactSection } from './components/ContactSection';
import { SECTIONS } from './constants';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('about');
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      { rootMargin: '-30% 0px -30% 0px', threshold: 0.2 }
    );

    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      Object.values(sectionRefs.current).forEach((ref) => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, []);

  const setRef = (id: string) => (el: HTMLElement | null) => {
    sectionRefs.current[id] = el;
  };

  return (
    <div className="flex min-h-screen flex-col lg:flex-row">
      <MobileNavbar sections={SECTIONS} />
      <Navbar sections={SECTIONS} activeSection={activeSection} />
      <main className="flex-1 lg:pl-[450px] pt-16 lg:pt-0">
        <div className="p-8 sm:p-12 md:p-20 lg:py-24 space-y-24">
          <AboutSection setRef={setRef('about')} />
          <EducationSection setRef={setRef('education')} />
          <ExperienceSection setRef={setRef('experience')} />
          <ProjectsSection setRef={setRef('projects')} />
          <CertificationsSection setRef={setRef('certifications')} />
          <SkillsSection setRef={setRef('Skill')} />  
          <AchievementsSection setRef={setRef('Achievements')} />
          <ContactSection setRef={setRef('contact')} />
        </div>
      </main>
    </div>
  );
};

export default App;
