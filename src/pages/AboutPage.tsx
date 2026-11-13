import React from 'react';
import { ArrowRight } from 'lucide-react';
import { PageHeader } from '../components/PageHeader';
import { PortfolioImage } from '../components/PortfolioImage';
import { Reveal } from '../components/Reveal';
import { useRouter } from '../context/RouterContext';
import {
  ABOUT_CONTENT,
  EDUCATION_LIST,
  EXPERIENCE_LIST,
  EXTRACURRICULAR_LIST,
  PORTFOLIO_IMAGES,
  PROFILE,
  REFERENCE_STATEMENT,
  TRAINING_LIST,
} from '../data/portfolioData';
import { PageId } from '../types/portfolio';

export function AboutPage() {
  const { navigate } = useRouter();

  const primaryEdu = EDUCATION_LIST[0];
  const primaryTraining = TRAINING_LIST[0];
  const primaryExp = EXPERIENCE_LIST[0];
  const primaryClub = EXTRACURRICULAR_LIST[0];

  const facts = [
    { label: 'Full Name', value: PROFILE.fullName },
    { label: 'Target Role', value: PROFILE.targetRole },
    { label: 'Location', value: PROFILE.location },
    { label: 'Phone', value: PROFILE.phone },
    { label: 'Email', value: PROFILE.email },
    { label: 'LinkedIn', value: PROFILE.linkedinLabel },
    { label: 'Languages', value: PROFILE.languages },
    {
      label: 'Education',
      value: `${primaryEdu.degree}, ${primaryEdu.subject} — ${primaryEdu.institution} (${primaryEdu.year})`,
    },
    {
      label: 'Training',
      value: `${primaryTraining.course} — ${primaryTraining.institute} (${primaryTraining.year}, ${primaryTraining.duration})`,
    },
    {
      label: 'Recent Role',
      value: `${primaryExp.role}, ${primaryExp.company} (${primaryExp.period})`,
    },
    {
      label: 'Extracurricular',
      value: `${primaryClub.responsibility} & ${primaryClub.membership}, ${primaryClub.organization}`,
    },
  ];

  return (
    <div className="space-y-14">
      <PageHeader
        kicker="Biography & Overview"
        title="About Me"
        description="Junior Accounts Officer candidate with practical accounting training, operations coordination experience, and postgraduate academic background."
        action={
          <button
            type="button"
            onClick={() => navigate(PageId.CV)}
            className="inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-[#0F294A] px-5 py-2.5 text-sm font-semibold text-white shadow-xs transition-colors hover:bg-[#1D4ED8] dark:bg-blue-600 dark:hover:bg-blue-500"
          >
            <span>View Full CV</span>
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </button>
        }
      />

      <section className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12">
        <div className="space-y-6 lg:col-span-7">
          <h2 className="font-display text-2xl font-bold tracking-tight text-[#0A192F] text-balance sm:text-3xl dark:text-white">
            {ABOUT_CONTENT.headline}
          </h2>
          <div className="space-y-5 text-base leading-relaxed text-slate-600 dark:text-slate-300">
            {ABOUT_CONTENT.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            <button
              type="button"
              onClick={() => navigate(PageId.Skills)}
              className="inline-flex min-h-[40px] items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-4 py-2 text-xs font-semibold text-[#0A192F] shadow-xs transition-colors hover:bg-slate-50 dark:border-slate-700 dark:bg-[#0D1B2E] dark:text-slate-100 dark:hover:bg-[#132642]"
            >
              <span>Accounting &amp; Office Skills</span>
              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => navigate(PageId.Education)}
              className="inline-flex min-h-[40px] items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-4 py-2 text-xs font-semibold text-[#0A192F] shadow-xs transition-colors hover:bg-slate-50 dark:border-slate-700 dark:bg-[#0D1B2E] dark:text-slate-100 dark:hover:bg-[#132642]"
            >
              <span>Education &amp; Training</span>
              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </button>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs dark:border-slate-800 dark:bg-[#0D1B2E]">
            <p className="text-xs font-semibold tracking-wide text-[#1D4ED8] uppercase dark:text-blue-400">
              References
            </p>
            <p className="mt-1.5 text-sm font-medium text-[#0A192F] dark:text-slate-100">
              {REFERENCE_STATEMENT}
            </p>
          </div>
        </div>

        <div className="space-y-6 lg:col-span-5">
          <div className="rounded-2xl border border-slate-200 bg-white p-2.5 shadow-sm dark:border-slate-800 dark:bg-[#0D1B2E]">
            <div className="overflow-hidden rounded-xl bg-slate-100 dark:bg-[#091526]">
              <PortfolioImage
                src={PORTFOLIO_IMAGES.profilePhoto}
                alt="Studio portrait of Mossarof Molla"
                title={PROFILE.fullName}
                className="aspect-[4/5]"
                aspectClassName="aspect-[4/5]"
                objectPositionClassName="object-top"
              />
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs dark:border-slate-800 dark:bg-[#0D1B2E]">
            <h3 className="font-display text-sm font-bold text-[#0A192F] dark:text-white">
              Quick Profile Summary
            </h3>
            <dl className="mt-4 divide-y divide-slate-200 text-sm dark:divide-slate-800">
              {facts.map((fact) => (
                <div key={fact.label} className="py-3 first:pt-0 last:pb-0">
                  <dt className="text-xs font-medium text-slate-500 dark:text-slate-400">
                    {fact.label}
                  </dt>
                  <dd className="mt-0.5 font-medium text-[#0A192F] dark:text-slate-100">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <Reveal>
        <section
          aria-labelledby="principles-heading"
          className="border-t border-slate-200 pt-12 dark:border-slate-800"
        >
          <h2
            id="principles-heading"
            className="font-display text-2xl font-bold tracking-tight text-[#0A192F] dark:text-white"
          >
            Core Work Principles
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            {ABOUT_CONTENT.principles.map((principle) => (
              <div
                key={principle.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs transition-shadow hover:shadow-sm dark:border-slate-800 dark:bg-[#0D1B2E]"
              >
                <p className="font-mono text-xs font-semibold text-[#1D4ED8] tabular-nums dark:text-blue-400">
                  {principle.index}
                </p>
                <h3 className="mt-2 font-display text-lg font-bold text-[#0A192F] dark:text-white">
                  {principle.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {principle.body}
                </p>
              </div>
            ))}
          </div>
        </section>
      </Reveal>
    </div>
  );
}
