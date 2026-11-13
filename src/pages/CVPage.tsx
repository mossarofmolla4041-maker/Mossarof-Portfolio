import React, { useState } from 'react';
import { Check, Download, FileText, Printer } from 'lucide-react';
import { PageHeader } from '../components/PageHeader';
import {
  EDUCATION_LIST,
  EXPERIENCE_LIST,
  EXTRACURRICULAR_LIST,
  PROFILE,
  REFERENCE_STATEMENT,
  SKILL_DOMAINS,
  TRAINING_LIST,
} from '../data/portfolioData';

function generatePlainTextCV(): string {
  const lines: string[] = [
    PROFILE.fullName.toUpperCase(),
    PROFILE.targetRole,
    PROFILE.location,
    `${PROFILE.phone} | ${PROFILE.email} | ${PROFILE.linkedinLabel}`,
    '',
    'PROFESSIONAL SUMMARY',
    '--------------------',
    PROFILE.introLead,
    '',
    'SKILLS',
    '------',
  ];

  SKILL_DOMAINS.forEach((domain) => {
    lines.push(`${domain.title}:`);
    domain.items.forEach((item) => {
      lines.push(`  • ${item.name}: ${item.context}`);
    });
  });
  lines.push('');

  lines.push('EXPERIENCE', '----------');
  EXPERIENCE_LIST.forEach((exp) => {
    lines.push(`${exp.role} (${exp.period})`);
    lines.push(`${exp.company}, ${exp.location}`);
    exp.responsibilities.forEach((r) => lines.push(`  • ${r}`));
    lines.push('');
  });

  lines.push('TRAINING', '--------');
  TRAINING_LIST.forEach((tr) => {
    lines.push(`${tr.course} — ${tr.institute} (${tr.year} | ${tr.duration})`);
    lines.push(`  ${tr.learningAreas.join(', ')}`);
    lines.push('');
  });

  lines.push('EDUCATION', '---------');
  EDUCATION_LIST.forEach((edu) => {
    lines.push(`${edu.degree} (${edu.subject}) | ${edu.year}`);
    lines.push(`  ${edu.institution}`);
  });
  lines.push('');

  lines.push('ADDITIONAL INFORMATION', '----------------------');
  lines.push(`Languages: ${PROFILE.languages}`);
  EXTRACURRICULAR_LIST.forEach((item) => {
    lines.push(
      `Extra-Curricular: ${item.responsibility} and ${item.membership.toLowerCase()}, ${item.organization} (${item.activitiesSummary})`
    );
  });
  lines.push('');

  lines.push('REFERENCES', '----------');
  lines.push(REFERENCE_STATEMENT);

  return lines.join('\n');
}

function generateStandaloneHtmlCV(): string {
  const expHtml = EXPERIENCE_LIST.map(
    (exp) => `
    <div style="margin-bottom:14px;">
      <div style="display:flex;justify-content:space-between;align-items:baseline;">
        <strong>${exp.role}</strong>
        <span style="font-size:12px;color:#475569;">${exp.period}</span>
      </div>
      <div style="font-size:12px;color:#334155;margin-bottom:4px;">${exp.company}, ${exp.location}</div>
      <ul style="margin:4px 0 0 18px;padding:0;font-size:13px;line-height:1.5;">
        ${exp.responsibilities.map((r) => `<li>${r}</li>`).join('')}
      </ul>
    </div>`
  ).join('');

  const eduHtml = EDUCATION_LIST.map(
    (edu) => `
    <div style="margin-bottom:8px;">
      <div style="display:flex;justify-content:space-between;align-items:baseline;">
        <strong>${edu.degree} — ${edu.subject}</strong>
        <span style="font-size:12px;color:#334155;">${edu.year}</span>
      </div>
      <div style="font-size:13px;color:#475569;">${edu.institution}</div>
    </div>`
  ).join('');

  const trainingHtml = TRAINING_LIST.map(
    (tr) => `
    <div style="margin-bottom:10px;">
      <div style="display:flex;justify-content:space-between;align-items:baseline;">
        <strong>${tr.course} — ${tr.institute}</strong>
        <span style="font-size:12px;color:#475569;">${tr.year} | ${tr.duration}</span>
      </div>
      <div style="font-size:13px;color:#334155;">${tr.learningAreas.join(', ')}</div>
    </div>`
  ).join('');

  const clubHtml = EXTRACURRICULAR_LIST.map(
    (item) =>
      `<p style="font-size:13px;margin:4px 0;"><strong>Extra-Curricular:</strong> ${item.responsibility} and ${item.membership.toLowerCase()}, ${item.organization} (${item.activitiesSummary})</p>`
  ).join('');

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<title>Mossarof Molla — Junior Accounts Officer CV</title>
<style>
  body { font-family: system-ui, -apple-system, sans-serif; color: #0A192F; max-width: 820px; margin: 32px auto; padding: 0 24px; line-height: 1.5; }
  h1 { margin: 0; font-size: 26px; letter-spacing: -0.02em; }
  h2 { font-size: 13px; text-transform: uppercase; letter-spacing: 0.08em; color: #1D4ED8; border-bottom: 1px solid #E2E8F0; padding-bottom: 4px; margin-top: 22px; }
  p.role { font-size: 14px; font-weight: 600; color: #0F294A; margin: 4px 0 0 0; }
  p.meta { font-size: 13px; color: #475569; margin: 4px 0 0 0; }
</style>
</head>
<body>
  <h1>${PROFILE.fullName}</h1>
  <p class="role">${PROFILE.targetRole}</p>
  <p class="meta">${PROFILE.location}</p>
  <p class="meta">${PROFILE.phone} · ${PROFILE.email} · ${PROFILE.linkedinLabel}</p>
  <h2>Professional Summary</h2>
  <p style="font-size:13.5px;">${PROFILE.introLead}</p>
  <h2>Skills</h2>
  ${SKILL_DOMAINS.map(
    (d) =>
      `<p style="font-size:13px;margin:4px 0;"><strong>${d.title}:</strong> ${d.items
        .map((i) => `${i.name} (${i.context})`)
        .join(' ')}</p>`
  ).join('')}
  <h2>Experience</h2>
  ${expHtml}
  <h2>Training</h2>
  ${trainingHtml}
  <h2>Education</h2>
  ${eduHtml}
  <h2>Additional Information</h2>
  <p style="font-size:13px;margin:4px 0;"><strong>Languages:</strong> ${PROFILE.languages}</p>
  ${clubHtml}
  <h2>References</h2>
  <p style="font-size:13px;margin:4px 0;">${REFERENCE_STATEMENT}</p>
</body>
</html>`;
}

export function CVPage() {
  const [downloadedFormat, setDownloadedFormat] = useState<string | null>(null);

  const triggerDownload = (
    content: string,
    filename: string,
    mimeType: string,
    label: string
  ) => {
    const blob = new Blob([content], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    setDownloadedFormat(label);
    setTimeout(() => setDownloadedFormat(null), 2600);
  };

  return (
    <div className="space-y-10">
      <div className="no-print">
        <PageHeader
          kicker="Curriculum Vitae"
          title="CV Preview & Download"
          description="Print an A4 PDF copy via browser print or download standalone HTML and TXT versions."
        />
      </div>

      {/* Export Action Bar */}
      <div className="no-print flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-xs dark:border-slate-800 dark:bg-[#0D1B2E]">
        <div>
          <h2 className="font-display text-sm font-bold text-[#0A192F] dark:text-white">
            Export &amp; Print Options
          </h2>
          <p className="mt-0.5 text-xs text-slate-600 dark:text-slate-300">
            Save as PDF via Print, or download clean HTML and TXT versions of this CV.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={() => window.print()}
            className="inline-flex min-h-[42px] items-center gap-2 rounded-lg bg-[#0F294A] px-4 py-2 text-xs font-semibold text-white shadow-xs transition-colors hover:bg-[#1D4ED8] dark:bg-blue-600 dark:hover:bg-blue-500"
          >
            <Printer className="h-4 w-4" aria-hidden="true" />
            <span>Print / Save PDF</span>
          </button>

          <button
            type="button"
            onClick={() =>
              triggerDownload(
                generateStandaloneHtmlCV(),
                'Mossarof_Molla_CV.html',
                'text/html;charset=utf-8',
                'HTML'
              )
            }
            className="inline-flex min-h-[42px] items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2 text-xs font-semibold text-[#0A192F] transition-colors hover:bg-slate-100 dark:border-slate-700 dark:bg-[#091526] dark:text-slate-100 dark:hover:bg-[#132642]"
          >
            {downloadedFormat === 'HTML' ? (
              <Check className="h-4 w-4 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
            ) : (
              <Download className="h-4 w-4" aria-hidden="true" />
            )}
            <span>{downloadedFormat === 'HTML' ? 'Downloaded HTML' : 'Download HTML'}</span>
          </button>

          <button
            type="button"
            onClick={() =>
              triggerDownload(
                generatePlainTextCV(),
                'Mossarof_Molla_CV.txt',
                'text/plain;charset=utf-8',
                'TXT'
              )
            }
            className="inline-flex min-h-[42px] items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2 text-xs font-semibold text-[#0A192F] transition-colors hover:bg-slate-100 dark:border-slate-700 dark:bg-[#091526] dark:text-slate-100 dark:hover:bg-[#132642]"
          >
            {downloadedFormat === 'TXT' ? (
              <Check className="h-4 w-4 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
            ) : (
              <FileText className="h-4 w-4" aria-hidden="true" />
            )}
            <span>{downloadedFormat === 'TXT' ? 'Downloaded TXT' : 'Download TXT'}</span>
          </button>
        </div>
      </div>

      {/* Live A4 Paper Sheet Preview */}
      <article
        aria-label="Curriculum Vitae Document Preview"
        className="print-cv-sheet mx-auto max-w-4xl rounded-2xl border border-slate-200 bg-white p-7 text-[#0A192F] shadow-sm sm:p-12 dark:border-slate-700"
      >
        {/* CV Header */}
        <header className="border-b-2 border-[#0F294A] pb-5">
          <h2 className="font-display text-3xl font-bold tracking-tight text-[#0A192F]">
            {PROFILE.fullName.toUpperCase()}
          </h2>
          <p className="mt-1 text-sm font-semibold text-[#0F294A]">
            {PROFILE.targetRole}
          </p>
          <p className="mt-1 text-xs text-slate-700">{PROFILE.location}</p>
          <p className="mt-0.5 text-xs text-slate-700">
            <span className="font-mono tabular-nums">{PROFILE.phone}</span>
            <span aria-hidden="true" className="mx-2">|</span>
            <span>{PROFILE.email}</span>
            <span aria-hidden="true" className="mx-2">|</span>
            <a
              href={PROFILE.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="underline-offset-2 hover:underline"
            >
              {PROFILE.linkedinLabel}
            </a>
          </p>
        </header>

        {/* Professional Summary */}
        <section className="mt-6">
          <h3 className="border-b border-slate-200 pb-1 font-display text-xs font-bold tracking-wider text-[#0F294A] uppercase">
            Professional Summary
          </h3>
          <p className="mt-2.5 text-xs leading-relaxed text-slate-700">
            {PROFILE.introLead}
          </p>
        </section>

        {/* Skills */}
        <section className="mt-6">
          <h3 className="border-b border-slate-200 pb-1 font-display text-xs font-bold tracking-wider text-[#0F294A] uppercase">
            Skills
          </h3>
          <div className="mt-3 space-y-2.5 text-xs leading-relaxed text-slate-700">
            {SKILL_DOMAINS.map((domain) => (
              <div key={domain.id}>
                <p className="font-semibold text-[#0A192F]">{domain.title}</p>
                {domain.items.map((item) => (
                  <p key={item.name}>
                    <span className="font-medium text-[#0A192F]">{item.name}:</span>{' '}
                    {item.context}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section className="mt-6">
          <h3 className="border-b border-slate-200 pb-1 font-display text-xs font-bold tracking-wider text-[#0F294A] uppercase">
            Experience
          </h3>
          <div className="mt-3 space-y-4">
            {EXPERIENCE_LIST.map((role) => (
              <div key={role.id}>
                <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between">
                  <h4 className="font-display text-sm font-bold text-[#0A192F]">
                    {role.role}
                  </h4>
                  <span className="font-mono text-xs text-slate-600 tabular-nums">
                    {role.period}
                  </span>
                </div>
                <p className="text-xs font-medium text-slate-600">
                  {role.company}, {role.location}
                </p>
                <ul className="mt-2 list-disc space-y-1 pl-4 text-xs leading-relaxed text-slate-700">
                  {role.responsibilities.map((r) => (
                    <li key={r}>{r}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Training */}
        <section className="mt-6">
          <h3 className="border-b border-slate-200 pb-1 font-display text-xs font-bold tracking-wider text-[#0F294A] uppercase">
            Training
          </h3>
          <div className="mt-3 space-y-2">
            {TRAINING_LIST.map((tr) => (
              <div key={tr.id}>
                <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between">
                  <h4 className="font-display text-xs font-bold text-[#0A192F]">
                    {tr.course}{' '}
                    <span className="font-normal text-slate-700">— {tr.institute}</span>
                  </h4>
                  <span className="font-mono text-xs text-slate-600 tabular-nums">
                    {tr.year} | {tr.duration}
                  </span>
                </div>
                <p className="mt-1 text-xs text-slate-700">
                  {tr.learningAreas.join(', ')}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="mt-6">
          <h3 className="border-b border-slate-200 pb-1 font-display text-xs font-bold tracking-wider text-[#0F294A] uppercase">
            Education
          </h3>
          <div className="mt-3 space-y-3">
            {EDUCATION_LIST.map((edu) => (
              <div
                key={edu.id}
                className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between"
              >
                <div>
                  <h4 className="font-display text-xs font-bold text-[#0A192F]">
                    {edu.degree} — {edu.subject}
                  </h4>
                  <p className="text-xs text-slate-600">{edu.institution}</p>
                </div>
                <p className="font-mono text-xs text-slate-700 tabular-nums sm:text-right">
                  {edu.year}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Additional Information & References */}
        <section className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div>
            <h3 className="border-b border-slate-200 pb-1 font-display text-xs font-bold tracking-wider text-[#0F294A] uppercase">
              Additional Information
            </h3>
            <div className="mt-2.5 space-y-1.5 text-xs text-slate-700">
              <p>
                <span className="font-semibold text-[#0A192F]">Languages:</span>{' '}
                {PROFILE.languages}
              </p>
              {EXTRACURRICULAR_LIST.map((act) => (
                <p key={act.id}>
                  <span className="font-semibold text-[#0A192F]">Extra-Curricular:</span>{' '}
                  {act.responsibility} and {act.membership.toLowerCase()}, {act.organization} (
                  {act.activitiesSummary})
                </p>
              ))}
            </div>
          </div>

          <div>
            <h3 className="border-b border-slate-200 pb-1 font-display text-xs font-bold tracking-wider text-[#0F294A] uppercase">
              References
            </h3>
            <div className="mt-2.5 text-xs text-slate-700">
              <p>{REFERENCE_STATEMENT}</p>
            </div>
          </div>
        </section>
      </article>
    </div>
  );
}
