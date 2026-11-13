import React from 'react';
import { ArrowUpRight, Mail, Moon, Phone, Sun } from 'lucide-react';
import { useRouter } from '../context/RouterContext';
import { useTheme } from '../context/ThemeContext';
import { PAGE_ROUTES, PROFILE } from '../data/portfolioData';
import { PageId } from '../types/portfolio';

export function Footer() {
  const { currentPage, navigate } = useRouter();
  const { theme, toggleTheme } = useTheme();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="no-print border-t border-slate-200 bg-slate-50/80 text-[#0A192F] dark:border-slate-800 dark:bg-[#081221] dark:text-slate-100">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          {/* Column 1: Identity & Direct Email/Phone */}
          <div className="md:col-span-5">
            <button
              type="button"
              onClick={() => navigate(PageId.Home)}
              className="font-display text-lg font-extrabold tracking-tight text-[#0A192F] transition-colors hover:text-[#1D4ED8] dark:text-white dark:hover:text-blue-400"
            >
              {PROFILE.fullName}
            </button>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              {PROFILE.headlineTitle}. Based in {PROFILE.location}.
            </p>
            <div className="mt-5 flex flex-col gap-2 text-sm">
              <a
                href={`mailto:${PROFILE.email}`}
                className="inline-flex items-center gap-2 font-medium text-[#0F294A] underline-offset-4 hover:underline dark:text-blue-400"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                <span>{PROFILE.email}</span>
              </a>
              <a
                href={`tel:${PROFILE.phone.replace(/\s+/g, '')}`}
                className="inline-flex items-center gap-2 font-mono text-xs font-medium text-slate-600 hover:text-[#0A192F] dark:text-slate-300 dark:hover:text-white"
              >
                <Phone className="h-3.5 w-3.5" aria-hidden="true" />
                <span>{PROFILE.phone}</span>
              </a>
            </div>
          </div>

          {/* Column 2: Clean Portfolio Navigation Links */}
          <div className="md:col-span-4">
            <h2 className="font-display text-xs font-semibold tracking-wider text-slate-500 uppercase dark:text-slate-400">
              Navigation
            </h2>
            <ul className="mt-3 grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
              {PAGE_ROUTES.map((route) => {
                const isActive = currentPage === route.id;
                return (
                  <li key={route.id}>
                    <a
                      href={route.path}
                      onClick={(e) => {
                        e.preventDefault();
                        navigate(route.id);
                      }}
                      className={`inline-block py-0.5 transition-colors ${
                        isActive
                          ? 'font-semibold text-[#1D4ED8] dark:text-blue-400'
                          : 'text-slate-600 hover:text-[#0A192F] dark:text-slate-300 dark:hover:text-white'
                      }`}
                    >
                      {route.shortLabel}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Column 3: Direct Actions & Theme Switch */}
          <div className="md:col-span-3 flex flex-col justify-between gap-6">
            <div>
              <h2 className="font-display text-xs font-semibold tracking-wider text-slate-500 uppercase dark:text-slate-400">
                Connect &amp; Resume
              </h2>
              <ul className="mt-3 space-y-2 text-sm">
                <li>
                  <button
                    type="button"
                    onClick={() => navigate(PageId.Contact)}
                    className="inline-flex items-center gap-1.5 text-slate-600 transition-colors hover:text-[#0A192F] dark:text-slate-300 dark:hover:text-white"
                  >
                    <span>Contact &amp; Email Form</span>
                    <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => navigate(PageId.CV)}
                    className="inline-flex items-center gap-1.5 font-medium text-[#0F294A] transition-colors hover:text-[#1D4ED8] dark:text-blue-400 dark:hover:text-blue-300"
                  >
                    <span>Preview &amp; Download CV</span>
                  </button>
                </li>
                {PROFILE.linkedinUrl && (
                  <li>
                    <a
                      href={PROFILE.linkedinUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-slate-600 transition-colors hover:text-[#0A192F] dark:text-slate-300 dark:hover:text-white"
                    >
                      <span>LinkedIn</span>
                      <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </a>
                  </li>
                )}
              </ul>
            </div>

            <div>
              <button
                type="button"
                onClick={toggleTheme}
                className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3.5 py-2 text-xs font-medium text-[#0A192F] shadow-xs transition-colors hover:bg-slate-100 dark:border-slate-700 dark:bg-[#0D1B2E] dark:text-slate-100 dark:hover:bg-[#132642]"
              >
                {theme === 'dark' ? (
                  <>
                    <Sun className="h-3.5 w-3.5 text-amber-400" aria-hidden="true" />
                    <span>Light Theme</span>
                  </>
                ) : (
                  <>
                    <Moon className="h-3.5 w-3.5 text-[#0F294A]" aria-hidden="true" />
                    <span>Dark Theme</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-slate-200 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between dark:border-slate-800 dark:text-slate-400">
          <p className="tabular-nums">
            © {currentYear} {PROFILE.fullName}. All rights reserved.
          </p>
          <p>{PROFILE.location}</p>
        </div>
      </div>
    </footer>
  );
}
