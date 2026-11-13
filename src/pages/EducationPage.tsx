import React from 'react';
import { ArrowRight } from 'lucide-react';
import { PageHeader } from '../components/PageHeader';
import { Reveal } from '../components/Reveal';
import { useRouter } from '../context/RouterContext';
import { EDUCATION_LIST, TRAINING_LIST } from '../data/portfolioData';
import { PageId } from '../types/portfolio';

export function EducationPage() {
  const { navigate } = useRouter();

  return (
    <div className="space-y-14">
      <PageHeader
        kicker="Academic Record & Training"
        title="Education & Training"
        description="Academic qualifications from SSC to MSS alongside Small Business Management training at As-Sunnah Skill Development Institute."
        action={
          <button
            type="button"
            onClick={() => navigate(PageId.Skills)}
            className="inline-flex min-h-[44px] items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-[#0A192F] shadow-xs transition-colors hover:bg-slate-50 dark:border-slate-700 dark:bg-[#0D1B2E] dark:text-slate-100 dark:hover:bg-[#132642]"
          >
            <span>Explore Accounting Skills</span>
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </button>
        }
      />

      {/* Professional Training */}
      <Reveal>
        <section aria-labelledby="training-heading">
          <h2
            id="training-heading"
            className="font-display text-2xl font-bold tracking-tight text-[#0A192F] dark:text-white"
          >
            Professional Training
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-6">
            {TRAINING_LIST.map((training) => (
              <article
                key={training.id}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs sm:p-7 dark:border-slate-800 dark:bg-[#0D1B2E]"
              >
                <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                  <div>
                    <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                      <span>{training.institute}</span>
                      <span aria-hidden="true" className="mx-1.5">·</span>
                      <span>Status: {training.status}</span>
                    </p>
                    <h3 className="mt-1.5 font-display text-xl font-bold text-[#0A192F] dark:text-white">
                      {training.course}
                    </h3>
                  </div>
                  <span className="font-mono text-xs font-semibold text-[#1D4ED8] tabular-nums dark:text-blue-400">
                    {training.year} · {training.duration}
                  </span>
                </div>

                <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {training.description}
                </p>

                <div className="mt-5 border-t border-slate-200 pt-4 dark:border-slate-800">
                  <h4 className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                    Learning Areas
                  </h4>
                  <p className="mt-1.5 text-sm font-medium text-[#0A192F] dark:text-slate-200">
                    {training.learningAreas.join(' · ')}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </Reveal>

      {/* Academic Degrees Timeline (Degree, Subject, Institution, Passing Year only) */}
      <Reveal>
        <section aria-labelledby="degrees-heading" className="space-y-7">
          <h2
            id="degrees-heading"
            className="font-display text-2xl font-bold tracking-tight text-[#0A192F] dark:text-white"
          >
            Academic Qualifications
          </h2>

          <div className="relative space-y-5 pl-6 before:absolute before:top-3 before:bottom-3 before:left-[7px] before:w-px before:bg-slate-200 sm:pl-8 dark:before:bg-slate-800">
            {EDUCATION_LIST.map((edu) => (
              <article key={edu.id} className="relative">
                <span
                  aria-hidden="true"
                  className="absolute top-6 -left-6 flex h-3.5 w-3.5 items-center justify-center rounded-full border-2 border-[#1D4ED8] bg-white sm:-left-8 dark:border-blue-400 dark:bg-[#060E1A]"
                />
                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs transition-shadow hover:shadow-sm dark:border-slate-800 dark:bg-[#0D1B2E]">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                    <div>
                      <h3 className="font-display text-lg font-bold tracking-tight text-[#0A192F] dark:text-white">
                        {edu.degree} — {edu.subject}
                      </h3>
                      <p className="mt-1 text-sm font-medium text-slate-600 dark:text-slate-300">
                        {edu.institution}
                      </p>
                    </div>
                    <div className="flex items-center gap-3 sm:flex-col sm:items-end sm:gap-0.5">
                      <span className="font-mono text-sm font-semibold text-[#1D4ED8] tabular-nums dark:text-blue-400">
                        {edu.year}
                      </span>
                      <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                        {edu.status}
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </Reveal>
    </div>
  );
}
