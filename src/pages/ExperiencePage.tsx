import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { PageHeader } from '../components/PageHeader';
import { Reveal } from '../components/Reveal';
import { useRouter } from '../context/RouterContext';
import { EXPERIENCE_LIST } from '../data/portfolioData';
import { PageId } from '../types/portfolio';

type FilterType = 'All' | 'Full-Time' | 'Additional Experience';

export function ExperiencePage() {
  const { navigate } = useRouter();
  const [filter, setFilter] = useState<FilterType>('All');

  const filteredRoles =
    filter === 'All'
      ? EXPERIENCE_LIST
      : EXPERIENCE_LIST.filter((role) => role.employmentType === filter);

  const filters: FilterType[] = ['All', 'Full-Time', 'Additional Experience'];

  return (
    <div className="space-y-12">
      <PageHeader
        kicker="Career Ledger"
        title="Work Experience"
        description="Verified employment history at Article Label & Accessories Ltd., Uttara, Dhaka."
        action={
          <button
            type="button"
            onClick={() => navigate(PageId.CV)}
            className="inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-[#0F294A] px-5 py-2.5 text-sm font-semibold text-white shadow-xs transition-colors hover:bg-[#1D4ED8] dark:bg-blue-600 dark:hover:bg-blue-500"
          >
            <span>Download Resume</span>
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </button>
        }
      />

      {/* Filter Segmented Control */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div
          role="group"
          aria-label="Filter experience by role type"
          className="inline-flex items-center gap-1 rounded-lg bg-slate-100 p-1 dark:bg-[#0D1B2E]"
        >
          {filters.map((item) => {
            const active = filter === item;
            return (
              <button
                key={item}
                type="button"
                onClick={() => setFilter(item)}
                className={`rounded-md px-3.5 py-1.5 text-xs font-semibold transition-colors whitespace-nowrap shrink-0 ${
                  active
                    ? 'bg-white text-[#0A192F] shadow-xs dark:bg-[#162C4A] dark:text-white'
                    : 'text-slate-600 hover:text-[#0A192F] dark:text-slate-300 dark:hover:text-white'
                }`}
              >
                {item === 'All' ? 'All Roles' : item}
              </button>
            );
          })}
        </div>

        <p className="font-mono text-xs text-slate-500 tabular-nums dark:text-slate-400">
          Showing {filteredRoles.length} of {EXPERIENCE_LIST.length}{' '}
          {EXPERIENCE_LIST.length === 1 ? 'position' : 'positions'}
        </p>
      </div>

      {/* Experience Timeline */}
      {filteredRoles.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50/70 p-8 text-center dark:border-slate-700 dark:bg-[#0D1B2E]">
          <h2 className="font-display text-base font-bold text-[#0A192F] dark:text-white">
            No Additional Experience Entries Added
          </h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
            Future roles can be added in{' '}
            <span className="font-mono text-xs">src/data/portfolioData.ts</span>.
          </p>
        </div>
      ) : (
        <Reveal>
          <div className="relative space-y-6 pl-6 before:absolute before:top-4 before:bottom-4 before:left-[7px] before:w-px before:bg-slate-200 sm:pl-8 dark:before:bg-slate-800">
            {filteredRoles.map((role) => (
              <article key={role.id} className="relative">
                <span
                  aria-hidden="true"
                  className="absolute top-7 -left-6 flex h-3.5 w-3.5 items-center justify-center rounded-full border-2 border-[#1D4ED8] bg-white sm:-left-8 dark:border-blue-400 dark:bg-[#060E1A]"
                />
                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs sm:p-8 dark:border-slate-800 dark:bg-[#0D1B2E]">
                  <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
                    <div className="lg:col-span-4">
                      <p className="font-mono text-xs font-semibold text-[#1D4ED8] tabular-nums dark:text-blue-400">
                        {role.period}
                      </p>
                      <h2 className="mt-1.5 font-display text-lg font-bold text-[#0A192F] dark:text-white">
                        {role.company}
                      </h2>
                      <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                        <span>{role.location}</span>
                        <span aria-hidden="true" className="mx-1.5">·</span>
                        <span>{role.employmentType}</span>
                      </p>
                    </div>

                    <div className="space-y-4 lg:col-span-8">
                      <h3 className="font-display text-xl font-bold tracking-tight text-[#0A192F] dark:text-white">
                        {role.role}
                      </h3>
                      <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                        {role.summary}
                      </p>

                      <div>
                        <h4 className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                          Key Responsibilities
                        </h4>
                        <ul className="mt-2.5 space-y-2.5 text-sm leading-relaxed text-slate-700 dark:text-slate-200">
                          {role.responsibilities.map((bullet) => (
                            <li key={bullet} className="flex items-start gap-2.5">
                              <span
                                aria-hidden="true"
                                className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#1D4ED8] dark:bg-blue-400"
                              />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <p className="border-t border-slate-100 pt-3 text-xs font-medium text-slate-500 dark:border-slate-800 dark:text-slate-400">
                        Operational Areas:{' '}
                        <span className="text-[#0A192F] dark:text-slate-200">
                          {role.toolsAndAreas.join(' · ')}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Reveal>
      )}
    </div>
  );
}
