import React from 'react';

interface PageHeaderProps {
  kicker: string;
  title: string;
  description: string;
  action?: React.ReactNode;
}

export function PageHeader({
  kicker,
  title,
  description,
  action,
}: PageHeaderProps) {
  return (
    <div className="border-b border-slate-200 pb-8 dark:border-slate-800">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="max-w-3xl">
          <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide text-[#1D4ED8] uppercase dark:text-blue-400">
            <span aria-hidden="true" className="h-px w-5 bg-[#1D4ED8] dark:bg-blue-400" />
            <span>{kicker}</span>
          </p>
          <h1 className="mt-2.5 font-display text-3xl font-extrabold tracking-tight text-[#0A192F] text-balance sm:text-4xl dark:text-white">
            {title}
          </h1>
          <p className="mt-3 text-base leading-relaxed text-slate-600 sm:text-[17px] dark:text-slate-300">
            {description}
          </p>
        </div>
        {action && <div className="shrink-0">{action}</div>}
      </div>
    </div>
  );
}
