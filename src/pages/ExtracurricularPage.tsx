import React from 'react';
import { ArrowRight } from 'lucide-react';
import { PageHeader } from '../components/PageHeader';
import { Reveal } from '../components/Reveal';
import { useRouter } from '../context/RouterContext';
import { EXTRACURRICULAR_LIST } from '../data/portfolioData';
import { PageId } from '../types/portfolio';

export function ExtracurricularPage() {
  const { navigate } = useRouter();
  const club = EXTRACURRICULAR_LIST[0];

  return (
    <div className="space-y-12">
      <PageHeader
        kicker="Community & Social Welfare"
        title="Extracurricular Activities"
        description="Treasurer and active member of Progoti Club, participating in tree plantation, blood donation, and youth programs."
        action={
          <button
            type="button"
            onClick={() => navigate(PageId.Contact)}
            className="inline-flex min-h-[44px] items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-[#0A192F] shadow-xs transition-colors hover:bg-slate-50 dark:border-slate-700 dark:bg-[#0D1B2E] dark:text-slate-100 dark:hover:bg-[#132642]"
          >
            <span>Connect with Mossarof</span>
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </button>
        }
      />

      {/* Verified Summary Row */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-5">
        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-xs dark:border-slate-800 dark:bg-[#0D1B2E]">
          <p className="font-display text-lg font-bold text-[#0A192F] dark:text-white">
            {club.organization}
          </p>
          <p className="mt-1 text-xs font-medium text-slate-500 dark:text-slate-400">
            Organization
          </p>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-xs dark:border-slate-800 dark:bg-[#0D1B2E]">
          <p className="font-display text-lg font-bold text-[#0A192F] dark:text-white">
            {club.responsibility}
          </p>
          <p className="mt-1 text-xs font-medium text-slate-500 dark:text-slate-400">
            Official Role
          </p>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-xs dark:border-slate-800 dark:bg-[#0D1B2E]">
          <p className="font-display text-lg font-bold text-[#0A192F] dark:text-white">
            {club.membership}
          </p>
          <p className="mt-1 text-xs font-medium text-slate-500 dark:text-slate-400">
            Membership Status
          </p>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-xs dark:border-slate-800 dark:bg-[#0D1B2E]">
          <p className="font-display text-sm font-semibold text-[#0A192F] dark:text-white">
            Tree Plantation · Blood Donation
          </p>
          <p className="mt-1 text-xs font-medium text-slate-500 dark:text-slate-400">
            Youth &amp; Social Programs
          </p>
        </div>
      </div>

      {/* Activities Grid */}
      <Reveal>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {EXTRACURRICULAR_LIST.map((item) => (
            <article
              key={item.id}
              className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-xs transition-shadow hover:shadow-sm sm:p-7 dark:border-slate-800 dark:bg-[#0D1B2E]"
            >
              <div>
                <div className="flex flex-wrap items-baseline justify-between gap-2 text-xs text-slate-500 dark:text-slate-400">
                  <span>{item.category}</span>
                  <span className="font-semibold text-[#1D4ED8] dark:text-blue-400">
                    {item.responsibility} · {item.membership}
                  </span>
                </div>

                <h2 className="mt-3 font-display text-xl font-bold tracking-tight text-[#0A192F] dark:text-white">
                  {item.responsibility} and {item.membership} — {item.organization}
                </h2>
                <p className="mt-1 text-sm font-semibold text-[#1D4ED8] dark:text-blue-400">
                  Focus Areas: {item.activitiesSummary}
                </p>

                <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {item.description}
                </p>

                <ul className="mt-4 space-y-2 border-t border-slate-200 pt-4 text-sm text-slate-700 dark:border-slate-800 dark:text-slate-200">
                  {item.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-2.5">
                      <span
                        aria-hidden="true"
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#1D4ED8] dark:bg-blue-400"
                      />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}

          <div className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-slate-50/70 p-6 shadow-xs sm:p-7 dark:border-slate-800 dark:bg-[#091526]">
            <div>
              <p className="text-xs font-semibold tracking-wide text-[#1D4ED8] uppercase dark:text-blue-400">
                Community Involvement Summary
              </p>
              <h2 className="mt-2 font-display text-lg font-bold text-[#0A192F] dark:text-white">
                Progoti Club Initiatives
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                Active involvement across tree plantation drives, blood donation campaigns, and
                youth community programs while fulfilling Treasurer financial duties.
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
