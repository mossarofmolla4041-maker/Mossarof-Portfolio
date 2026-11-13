import React, { useState } from 'react';
import { ArrowUpRight, FileSpreadsheet } from 'lucide-react';
import { PageHeader } from '../components/PageHeader';
import { PortfolioImage } from '../components/PortfolioImage';
import { ProjectModal } from '../components/ProjectModal';
import { Reveal } from '../components/Reveal';
import { useRouter } from '../context/RouterContext';
import { PROJECTS_LIST } from '../data/portfolioData';
import { PageId, ProjectClassification, ProjectEntry } from '../types/portfolio';

type FilterClassification = 'All' | ProjectClassification;

export function ProjectsPage() {
  const { navigate } = useRouter();
  const [classification, setClassification] = useState<FilterClassification>('All');
  const [selectedProject, setSelectedProject] = useState<ProjectEntry | null>(null);

  const filters: FilterClassification[] = [
    'All',
    'Training Practice',
    'Applied Skills Showcase',
    'Work Experience',
  ];

  const filteredProjects =
    classification === 'All'
      ? PROJECTS_LIST
      : PROJECTS_LIST.filter((p) => p.classification === classification);

  return (
    <div className="space-y-12">
      <PageHeader
        kicker="Applied Work & Practice"
        title="Practice & Applied Workflows"
        description="Structured training exercises in TallyPrime and MS Excel, applied procurement document formats, and verified Junior Executive order follow-up duties."
        action={
          <button
            type="button"
            onClick={() => navigate(PageId.Contact)}
            className="inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-[#0F294A] px-5 py-2.5 text-sm font-semibold text-white shadow-xs transition-colors hover:bg-[#1D4ED8] dark:bg-blue-600 dark:hover:bg-blue-500"
          >
            <span>Get in Touch</span>
          </button>
        }
      />

      {/* Classification Filter */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div
          role="group"
          aria-label="Filter items by work classification"
          className="inline-flex flex-wrap items-center gap-1 rounded-lg bg-slate-100 p-1 dark:bg-[#0D1B2E]"
        >
          {filters.map((item) => {
            const active = classification === item;
            return (
              <button
                key={item}
                type="button"
                onClick={() => setClassification(item)}
                className={`rounded-md px-3.5 py-1.5 text-xs font-semibold transition-colors whitespace-nowrap shrink-0 ${
                  active
                    ? 'bg-white text-[#0A192F] shadow-xs dark:bg-[#162C4A] dark:text-white'
                    : 'text-slate-600 hover:text-[#0A192F] dark:text-slate-300 dark:hover:text-white'
                }`}
              >
                {item === 'All' ? 'All Entries' : item}
              </button>
            );
          })}
        </div>

        <p className="font-mono text-xs text-slate-500 tabular-nums dark:text-slate-400">
          {filteredProjects.length}{' '}
          {filteredProjects.length === 1 ? 'entry' : 'entries'}
        </p>
      </div>

      {/* Honest Cards Grid */}
      <Reveal>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:border-[#0F294A]/40 hover:shadow-md dark:border-slate-800 dark:bg-[#0D1B2E] dark:hover:border-blue-500/50"
            >
              <button
                type="button"
                onClick={() => setSelectedProject(project)}
                className="flex flex-1 flex-col justify-between p-6 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#1D4ED8]"
              >
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                    <span className="font-semibold tracking-wide text-[#1D4ED8] uppercase dark:text-blue-400">
                      {project.classification}
                    </span>
                    <span className="text-slate-500 dark:text-slate-400">
                      {project.contextLabel}
                    </span>
                  </div>

                  {project.sampleImage ? (
                    <div className="overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800">
                      <PortfolioImage
                        src={project.sampleImage}
                        alt={project.sampleImageAlt ?? project.title}
                        title={project.title}
                        aspectClassName="aspect-[16/10]"
                      />
                    </div>
                  ) : (
                    <div className="flex items-start gap-3 rounded-xl border border-dashed border-slate-300 bg-slate-50/70 p-3.5 dark:border-slate-700 dark:bg-[#091526]">
                      <FileSpreadsheet
                        className="mt-0.5 h-4 w-4 shrink-0 text-slate-400 dark:text-slate-500"
                        aria-hidden="true"
                      />
                      <p className="text-xs leading-relaxed text-slate-500 dark:text-slate-400">
                        {project.samplePlaceholderNote}
                      </p>
                    </div>
                  )}

                  <div>
                    <h2 className="font-display text-lg font-bold tracking-tight text-[#0A192F] transition-colors group-hover:text-[#1D4ED8] dark:text-white dark:group-hover:text-blue-400">
                      {project.title}
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                      {project.summary}
                    </p>
                  </div>

                  <ul className="space-y-1.5 border-t border-slate-100 pt-3.5 text-xs leading-relaxed text-slate-600 dark:border-slate-800 dark:text-slate-300">
                    {project.deliverables.slice(0, 2).map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span
                          aria-hidden="true"
                          className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#1D4ED8] dark:bg-blue-400"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 flex items-center justify-between gap-4 border-t border-slate-100 pt-4 dark:border-slate-800">
                  <p className="truncate text-xs font-medium text-slate-500 dark:text-slate-400">
                    {project.tools.join(' · ')}
                  </p>
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#1D4ED8] whitespace-nowrap shrink-0 dark:text-blue-400">
                    <span>View Details</span>
                    <ArrowUpRight
                      className="h-3.5 w-3.5 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden="true"
                    />
                  </span>
                </div>
              </button>
            </article>
          ))}
        </div>
      </Reveal>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
