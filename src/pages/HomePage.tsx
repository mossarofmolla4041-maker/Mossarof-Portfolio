import React, { useState } from 'react';
import { ArrowRight, Download, FileSpreadsheet, Mail } from 'lucide-react';
import { PortfolioImage } from '../components/PortfolioImage';
import { ProjectModal } from '../components/ProjectModal';
import { Reveal } from '../components/Reveal';
import { useRouter } from '../context/RouterContext';
import {
  EXPERIENCE_LIST,
  PAGE_ROUTES,
  PORTFOLIO_IMAGES,
  PROFILE,
  PROJECTS_LIST,
} from '../data/portfolioData';
import { PageId, ProjectEntry } from '../types/portfolio';

export function HomePage() {
  const { navigate } = useRouter();
  const [selectedProject, setSelectedProject] = useState<ProjectEntry | null>(null);

  const featuredProjects = PROJECTS_LIST.filter((p) => p.featured);
  const recentRoles = EXPERIENCE_LIST;

  return (
    <div className="space-y-16 lg:space-y-20">
      {/* Accounting-Centered Two-Column Hero Section */}
      <section aria-label="Introduction">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide text-slate-500 uppercase dark:text-slate-400">
              <span aria-hidden="true" className="h-px w-6 bg-[#1D4ED8] dark:bg-blue-400" />
              <span>{PROFILE.location}</span>
            </p>

            <h1
              className="mt-4 font-display font-extrabold tracking-tight text-[#0A192F] text-balance dark:text-white"
              style={{ fontSize: 'clamp(2.45rem, 4.6vw, 3.85rem)', lineHeight: 1.05 }}
            >
              {PROFILE.fullName}
            </h1>

            <p className="mt-3 font-display text-lg font-semibold tracking-tight text-[#1D4ED8] sm:text-xl dark:text-blue-400">
              {PROFILE.headlineTitle}
            </p>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-600 dark:text-slate-300">
              {PROFILE.introLead}
            </p>

            {/* Primary Accounting Focus List */}
            <div className="mt-6 grid grid-cols-1 gap-2 border-y border-slate-200 py-4 text-xs font-medium text-[#0A192F] sm:grid-cols-2 dark:border-slate-800 dark:text-slate-200">
              {PROFILE.coreAccountingHighlights.map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <span
                    aria-hidden="true"
                    className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#1D4ED8] dark:bg-blue-400"
                  />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-3.5">
              <button
                type="button"
                onClick={() => navigate(PageId.CV)}
                className="inline-flex min-h-[46px] items-center gap-2 rounded-lg bg-[#0F294A] px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-[#1D4ED8] hover:shadow-md dark:bg-blue-600 dark:hover:bg-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D4ED8] focus-visible:ring-offset-2 dark:focus-visible:ring-offset-[#060E1A]"
              >
                <Download className="h-4 w-4" aria-hidden="true" />
                <span>Download CV</span>
              </button>

              <button
                type="button"
                onClick={() => navigate(PageId.Contact)}
                className="inline-flex min-h-[46px] items-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-[#0A192F] shadow-xs transition-colors duration-150 hover:border-[#0F294A] hover:bg-slate-50 dark:border-slate-700 dark:bg-[#0D1B2E] dark:text-slate-100 dark:hover:border-blue-500 dark:hover:bg-[#132642] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D4ED8]"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                <span>Contact Me</span>
              </button>

              <button
                type="button"
                onClick={() => navigate(PageId.Skills)}
                className="inline-flex min-h-[46px] items-center gap-1.5 px-2 py-2.5 text-sm font-semibold text-[#1D4ED8] underline-offset-4 hover:underline dark:text-blue-400"
              >
                <span>View Skills</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-slate-500 dark:text-slate-400">
              <a
                href={`mailto:${PROFILE.email}`}
                className="font-medium text-[#0F294A] underline-offset-4 hover:underline dark:text-blue-400"
              >
                {PROFILE.email}
              </a>
              <span aria-hidden="true">·</span>
              <span className="font-mono tabular-nums">{PROFILE.phone}</span>
              {PROFILE.linkedinUrl && (
                <>
                  <span aria-hidden="true">·</span>
                  <a
                    href={PROFILE.linkedinUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="font-medium text-[#0F294A] underline-offset-4 hover:underline dark:text-blue-400"
                  >
                    LinkedIn
                  </a>
                </>
              )}
            </div>
          </div>

          {/* Portrait Frame */}
          <div className="lg:col-span-5">
            <div className="mx-auto max-w-sm rounded-2xl border border-slate-200/90 bg-white p-2.5 shadow-md lg:ml-auto lg:mr-0 dark:border-slate-800 dark:bg-[#0D1B2E]">
              <div className="overflow-hidden rounded-xl bg-slate-100 dark:bg-[#091526]">
                <PortfolioImage
                  src={PORTFOLIO_IMAGES.profilePhoto}
                  alt="Studio portrait of Mossarof Molla"
                  title={PROFILE.fullName}
                  className="aspect-[4/5]"
                  aspectClassName="aspect-[4/5]"
                  objectPositionClassName="object-top"
                  priority
                />
              </div>
              <div className="flex items-center justify-between px-2 pt-3 pb-1 text-xs">
                <span className="font-display font-bold text-[#0A192F] dark:text-white">
                  {PROFILE.fullName}
                </span>
                <span className="font-medium text-[#1D4ED8] dark:text-blue-400">
                  {PROFILE.targetRole}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Column Core Competency Strip */}
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-5">
          {PROFILE.metrics.map((metric) => (
            <div
              key={metric.label}
              className="rounded-xl border border-slate-200/90 bg-white p-5 shadow-xs dark:border-slate-800 dark:bg-[#0D1B2E]"
            >
              <p className="font-display text-lg font-bold tracking-tight text-[#0A192F] sm:text-xl dark:text-white">
                {metric.value}
              </p>
              <p className="mt-1 text-xs font-medium text-slate-500 dark:text-slate-400">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Work Experience Snapshot */}
      <Reveal>
        <section aria-labelledby="experience-snapshot-heading">
          <div className="grid grid-cols-1 gap-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-xs sm:p-8 lg:grid-cols-12 dark:border-slate-800 dark:bg-[#0D1B2E]">
            <div className="lg:col-span-4">
              <p className="text-xs font-semibold tracking-wide text-[#1D4ED8] uppercase dark:text-blue-400">
                Work Experience
              </p>
              <h2
                id="experience-snapshot-heading"
                className="mt-1.5 font-display text-2xl font-bold tracking-tight text-[#0A192F] dark:text-white"
              >
                Operations &amp; Documentation
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                Direct workplace experience processing daily order sheets, preparing delivery
                challans, and coordinating production and QC follow-up.
              </p>
              <button
                type="button"
                onClick={() => navigate(PageId.Experience)}
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[#1D4ED8] underline-offset-4 hover:underline dark:text-blue-400"
              >
                <span>View full responsibilities</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>

            <div className="divide-y divide-slate-200 lg:col-span-8 dark:divide-slate-800">
              {recentRoles.map((role) => (
                <div key={role.id} className="py-2 first:pt-0 last:pb-0">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                    <h3 className="font-display text-lg font-bold text-[#0A192F] dark:text-white">
                      {role.role}
                    </h3>
                    <span className="font-mono text-xs font-medium text-slate-500 tabular-nums dark:text-slate-400">
                      {role.period}
                    </span>
                  </div>
                  <p className="mt-1 text-sm font-semibold text-[#1D4ED8] dark:text-blue-400">
                    <span>{role.company}</span>
                    <span aria-hidden="true" className="mx-1.5 text-slate-400">·</span>
                    <span className="font-normal text-slate-500 dark:text-slate-400">
                      {role.location}
                    </span>
                  </p>
                  <ul className="mt-3 space-y-1.5 text-sm text-slate-600 dark:text-slate-300">
                    {role.responsibilities.slice(0, 3).map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span
                          aria-hidden="true"
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#1D4ED8] dark:bg-blue-400"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      {/* Honest Practice & Applied Work Cards (No decorative stock photos) */}
      <Reveal>
        <section aria-labelledby="selected-work-heading">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold tracking-wide text-[#1D4ED8] uppercase dark:text-blue-400">
                Practice &amp; Applied Work
              </p>
              <h2
                id="selected-work-heading"
                className="mt-1.5 font-display text-2xl font-bold tracking-tight text-[#0A192F] sm:text-3xl dark:text-white"
              >
                Accounting, Excel &amp; Order Workflows
              </h2>
            </div>
            <button
              type="button"
              onClick={() => navigate(PageId.Projects)}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1D4ED8] underline-offset-4 hover:underline dark:text-blue-400"
            >
              <span>View all items</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            {featuredProjects.map((project) => (
              <article
                key={project.id}
                className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:border-[#0F294A]/40 hover:shadow-md dark:border-slate-800 dark:bg-[#0D1B2E] dark:hover:border-blue-500/50"
              >
                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="flex flex-1 flex-col justify-between p-6 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#1D4ED8]"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 text-xs">
                      <span className="font-semibold text-[#1D4ED8] dark:text-blue-400">
                        {project.classification}
                      </span>
                      <FileSpreadsheet
                        className="h-4 w-4 text-slate-400 dark:text-slate-500"
                        aria-hidden="true"
                      />
                    </div>
                    <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                      {project.contextLabel}
                    </p>
                    <h3 className="mt-3 font-display text-lg font-bold tracking-tight text-[#0A192F] transition-colors group-hover:text-[#1D4ED8] dark:text-white dark:group-hover:text-blue-400">
                      {project.title}
                    </h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                      {project.summary}
                    </p>
                  </div>

                  <div className="mt-6 flex items-center justify-between gap-2 border-t border-slate-100 pt-4 text-xs dark:border-slate-800">
                    <span className="truncate font-medium text-slate-500 dark:text-slate-400">
                      {project.tools.slice(0, 3).join(' · ')}
                    </span>
                    <span className="inline-flex items-center gap-1 font-semibold text-[#0F294A] whitespace-nowrap shrink-0 dark:text-blue-400">
                      <span>Details</span>
                      <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </span>
                  </div>
                </button>
              </article>
            ))}
          </div>
        </section>
      </Reveal>

      {/* Simplified Portfolio Directory */}
      <Reveal>
        <section
          aria-labelledby="directory-heading"
          className="rounded-2xl border border-slate-200 bg-slate-50/70 p-6 sm:p-8 dark:border-slate-800 dark:bg-[#0D1B2E]/80"
        >
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold tracking-wide text-[#1D4ED8] uppercase dark:text-blue-400">
                Quick Navigation
              </p>
              <h2
                id="directory-heading"
                className="mt-1 font-display text-xl font-bold tracking-tight text-[#0A192F] sm:text-2xl dark:text-white"
              >
                Explore Portfolio Sections
              </h2>
            </div>
            <button
              type="button"
              onClick={() => navigate(PageId.CV)}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0F294A] underline-offset-4 hover:underline dark:text-blue-400"
            >
              <span>Open CV Preview &amp; Export</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {PAGE_ROUTES.filter((r) => r.id !== PageId.Home).map((route) => (
              <button
                key={route.id}
                type="button"
                onClick={() => navigate(route.id)}
                className="group flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-5 text-left shadow-xs transition-all duration-150 hover:-translate-y-0.5 hover:border-[#0F294A] hover:shadow-sm dark:border-slate-800 dark:bg-[#091526] dark:hover:border-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D4ED8]"
              >
                <div>
                  <h3 className="font-display text-base font-bold text-[#0A192F] transition-colors group-hover:text-[#1D4ED8] dark:text-white dark:group-hover:text-blue-400">
                    {route.label}
                  </h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                    {route.summary}
                  </p>
                </div>
                <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-[#0F294A] dark:text-slate-200">
                  <span>Open</span>
                  <ArrowRight
                    className="h-3.5 w-3.5 transition-transform duration-150 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </span>
              </button>
            ))}
          </div>
        </section>
      </Reveal>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
