import React, { useEffect } from 'react';
import { FileSpreadsheet, X } from 'lucide-react';
import { ProjectEntry } from '../types/portfolio';
import { PortfolioImage } from './PortfolioImage';

interface ProjectModalProps {
  project: ProjectEntry | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (!project) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
    >
      <div
        className="fixed inset-0 bg-[#060E1A]/70 backdrop-blur-xs"
        onClick={onClose}
      />
      <div className="relative z-10 flex max-h-[90vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl dark:border-slate-800 dark:bg-[#0D1B2E]">
        <div className="flex items-start justify-between gap-4 border-b border-slate-200 px-6 py-5 dark:border-slate-800">
          <div>
            <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
              <span className="font-semibold text-[#1D4ED8] dark:text-blue-400">
                {project.classification}
              </span>
              <span aria-hidden="true" className="mx-1.5">·</span>
              <span>{project.contextLabel}</span>
            </p>
            <h2
              id="project-modal-title"
              className="mt-1 font-display text-xl font-bold tracking-tight text-[#0A192F] sm:text-2xl dark:text-white"
            >
              {project.title}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close details"
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-slate-200 text-slate-600 transition-colors hover:bg-slate-100 hover:text-[#0A192F] dark:border-slate-700 dark:text-slate-300 dark:hover:bg-[#132642] dark:hover:text-white"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        <div className="overflow-y-auto px-6 py-6 space-y-6">
          {project.sampleImage ? (
            <div className="overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800">
              <PortfolioImage
                src={project.sampleImage}
                alt={project.sampleImageAlt || project.title}
                title={project.title}
                className="aspect-[16/9]"
                aspectClassName="aspect-[16/9]"
              />
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-slate-300 bg-slate-50/80 px-6 py-8 text-center dark:border-slate-700 dark:bg-[#091526]">
              <FileSpreadsheet
                className="h-7 w-7 text-[#1D4ED8] dark:text-blue-400"
                aria-hidden="true"
              />
              <p className="mt-2.5 text-xs font-semibold text-[#0A192F] dark:text-white">
                {project.classification} Record
              </p>
              <p className="mt-1 max-w-md text-xs leading-relaxed text-slate-500 dark:text-slate-400">
                {project.samplePlaceholderNote}
              </p>
            </div>
          )}

          <p className="text-base leading-relaxed text-slate-700 dark:text-slate-200">
            {project.summary}
          </p>

          <div className="grid grid-cols-1 gap-6 border-t border-slate-200 pt-6 md:grid-cols-2 dark:border-slate-800">
            <div>
              <h3 className="font-display text-sm font-semibold text-[#0A192F] dark:text-white">
                Challenge &amp; Focus
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                {project.challenge}
              </p>
            </div>
            <div>
              <h3 className="font-display text-sm font-semibold text-[#0A192F] dark:text-white">
                Approach
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                {project.approach}
              </p>
            </div>
          </div>

          <div className="border-t border-slate-200 pt-6 dark:border-slate-800">
            <h3 className="font-display text-sm font-semibold text-[#0A192F] dark:text-white">
              Deliverables &amp; Activities
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-700 dark:text-slate-200">
              {project.deliverables.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span
                    aria-hidden="true"
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#1D4ED8] dark:bg-blue-400"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="border-t border-slate-200 pt-5 dark:border-slate-800">
            <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
              Tools &amp; Areas:{' '}
              <span className="text-[#0A192F] dark:text-slate-200">
                {project.tools.join(' · ')}
              </span>
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-end gap-3 border-t border-slate-200 bg-slate-50 px-6 py-4 dark:border-slate-800 dark:bg-[#091526]">
          <button
            type="button"
            onClick={onClose}
            className="inline-flex items-center rounded-lg bg-[#0F294A] px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-[#1D4ED8] dark:bg-blue-600 dark:hover:bg-blue-500"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
