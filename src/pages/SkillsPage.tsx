import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { PageHeader } from '../components/PageHeader';
import { Reveal } from '../components/Reveal';
import { useRouter } from '../context/RouterContext';
import { SKILL_DOMAINS } from '../data/portfolioData';
import { PageId } from '../types/portfolio';

type DomainFilter =
  | 'all'
  | 'core-accounting'
  | 'tally-excel'
  | 'purchase-office'
  | 'other-tools';

export function SkillsPage() {
  const { navigate } = useRouter();
  const [domainFilter, setDomainFilter] = useState<DomainFilter>('all');

  const visibleDomains =
    domainFilter === 'all'
      ? SKILL_DOMAINS
      : SKILL_DOMAINS.filter((d) => d.id === domainFilter);

  const filterButtons: { id: DomainFilter; label: string }[] = [
    { id: 'all', label: 'All Skills' },
    { id: 'core-accounting', label: 'Core Accounting' },
    { id: 'tally-excel', label: 'TallyPrime & Excel' },
    { id: 'purchase-office', label: 'Purchase & Office' },
    { id: 'other-tools', label: 'Other Tools & Soft Skills' },
  ];

  return (
    <div className="space-y-12">
      <PageHeader
        kicker="Accounting & Office Capabilities"
        title="Skills & Technical Tools"
        description="Bookkeeping, voucher posting, journal entries, bank reconciliation, TallyPrime, MS Excel, VAT/tax documentation, purchase paperwork, and supporting tools."
        action={
          <button
            type="button"
            onClick={() => navigate(PageId.Projects)}
            className="inline-flex min-h-[44px] items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-[#0A192F] shadow-xs transition-colors hover:bg-slate-50 dark:border-slate-700 dark:bg-[#0D1B2E] dark:text-slate-100 dark:hover:bg-[#132642]"
          >
            <span>See Applied Practice</span>
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </button>
        }
      />

      {/* Interactive Domain Tabs */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div
          role="group"
          aria-label="Filter skills by domain"
          className="inline-flex flex-wrap items-center gap-1 rounded-lg bg-slate-100 p-1 dark:bg-[#0D1B2E]"
        >
          {filterButtons.map((btn) => {
            const active = domainFilter === btn.id;
            return (
              <button
                key={btn.id}
                type="button"
                onClick={() => setDomainFilter(btn.id)}
                className={`rounded-md px-3.5 py-1.5 text-xs font-semibold transition-colors whitespace-nowrap shrink-0 ${
                  active
                    ? 'bg-white text-[#0A192F] shadow-xs dark:bg-[#162C4A] dark:text-white'
                    : 'text-slate-600 hover:text-[#0A192F] dark:text-slate-300 dark:hover:text-white'
                }`}
              >
                {btn.label}
              </button>
            );
          })}
        </div>

        <p className="text-xs text-slate-500 dark:text-slate-400">
          Primary accounting competencies listed first
        </p>
      </div>

      {/* Organized Category Grid */}
      <Reveal>
        <div className="grid grid-cols-1 gap-7 lg:grid-cols-2">
          {visibleDomains.map((domain) => (
            <section
              key={domain.id}
              className={`rounded-2xl border p-6 shadow-xs transition-shadow hover:shadow-sm sm:p-7 ${
                domain.isSecondary
                  ? 'border-slate-200/80 bg-slate-50/70 dark:border-slate-800/80 dark:bg-[#091526]'
                  : 'border-slate-200 bg-white dark:border-slate-800 dark:bg-[#0D1B2E]'
              }`}
            >
              <div className="border-b border-slate-200 pb-4 dark:border-slate-800">
                <h2 className="font-display text-xl font-bold text-[#0A192F] dark:text-white">
                  {domain.title}
                </h2>
                <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                  {domain.subtitle}
                </p>
              </div>

              <div className="mt-4 divide-y divide-slate-200 dark:divide-slate-800">
                {domain.items.map((skill) => (
                  <div key={skill.name} className="py-4 first:pt-2 last:pb-0">
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h3 className="font-display text-sm font-bold text-[#0A192F] dark:text-white">
                        {skill.name}
                      </h3>
                      <span className="text-xs font-medium text-[#1D4ED8] dark:text-blue-400">
                        {skill.source}
                      </span>
                    </div>
                    <p className="mt-1.5 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                      {skill.context}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </Reveal>
    </div>
  );
}
