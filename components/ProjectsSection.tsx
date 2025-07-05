import React from 'react';
import { Section } from './Section';
import { PROJECTS_DATA } from '../constants';
import { Card } from './Card';
import { GithubIcon, LinkIcon } from './Icons';

interface ProjectsSectionProps {
  setRef: (el: HTMLElement | null) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ setRef }) => {
  return (
    <Section id="projects" title="Projects" setRef={setRef}>
      <div className="space-y-12">
        {PROJECTS_DATA.map((project, index) => {
          // Tentukan apakah project punya link
          const hasLink = project.liveUrl || project.repoUrl;

          return (
            <Card key={index} href={hasLink || undefined}>
              <div className="grid md:grid-cols-4 gap-4 md:gap-6">
                <div className="md:col-span-1">
                  <img
                    src={project.imageUrl}
                    alt={`${project.title} screenshot`}
                    className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1"
                  />
                </div>
                <div className="md:col-span-3">
                  <div className="flex items-center gap-4">
                    <h3 className="text-lg font-medium text-slate-200 group-hover:text-sky-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <div className="flex-grow border-t border-slate-700"></div>

                    {/* Icon GitHub */}
                    {project.repoUrl && (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-sky-400 z-10 relative"
                      >
                        <GithubIcon className="w-5 h-5" />
                      </a>
                    )}

                    {/* Icon Link (Live / Figma) */}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-sky-400 z-10 relative"
                      >
                        <LinkIcon className="w-5 h-5" />
                      </a>
                    )}
                  </div>

                  <p className="mt-2 text-sm text-slate-400">{project.description}</p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <div
                        key={tech}
                        className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300"
                      >
                        {tech}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </Section>
  );
};
