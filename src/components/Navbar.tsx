import React, { useEffect, useState } from 'react';
import { Download, Menu, Moon, Sun, X } from 'lucide-react';
import { motion } from 'motion/react';
import { useRouter } from '../context/RouterContext';
import { useTheme } from '../context/ThemeContext';
import { PAGE_ROUTES, PROFILE } from '../data/portfolioData';
import { PageId } from '../types/portfolio';

const NAV_ITEMS = PAGE_ROUTES.filter((route) => route.id !== PageId.CV);

export function Navbar() {
  const { currentPage, navigate } = useRouter();
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  const handleNavClick = (e: React.MouseEvent, page: PageId) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    navigate(page);
  };

  return (
    <>
      <header className="no-print sticky top-0 z-40 border-b border-slate-200/90 bg-white/92 backdrop-blur-md transition-colors duration-200 dark:border-slate-800/90 dark:bg-[#060E1A]/92">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-4 sm:h-[68px] sm:px-6 lg:px-8">
          {/* Brand Wordmark */}
          <a
            href="/"
            onClick={(e) => handleNavClick(e, PageId.Home)}
            className="font-display text-lg font-extrabold tracking-tight text-[#0A192F] transition-colors hover:text-[#1D4ED8] dark:text-white dark:hover:text-blue-400 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D4ED8] rounded-sm"
          >
            {PROFILE.fullName}
          </a>

          {/* Primary Single-Bar Desktop Navigation (No numeric prefixes) */}
          <nav
            aria-label="Primary navigation"
            className="hidden lg:flex items-center gap-5 xl:gap-7"
          >
            {NAV_ITEMS.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <a
                  key={item.id}
                  href={item.path}
                  onClick={(e) => handleNavClick(e, item.id)}
                  aria-current={isActive ? 'page' : undefined}
                  className={`relative py-2 text-[13.5px] font-medium transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D4ED8] rounded-sm ${
                    isActive
                      ? 'font-semibold text-[#0F294A] dark:text-white'
                      : 'text-slate-600 hover:text-[#0A192F] dark:text-slate-300 dark:hover:text-white'
                  }`}
                >
                  <span>{item.shortLabel}</span>
                  {isActive && (
                    <motion.span
                      layoutId="primary-nav-underline"
                      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                      aria-hidden="true"
                      className="absolute inset-x-0 bottom-0 h-0.5 rounded-full bg-[#1D4ED8] dark:bg-blue-400"
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Controls: Theme Toggle + Download CV CTA / Mobile Menu */}
          <div className="flex items-center gap-2.5 shrink-0">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-[#0A192F] transition-colors duration-150 hover:bg-slate-100 dark:border-slate-800 dark:bg-[#0D1B2E] dark:text-slate-200 dark:hover:bg-[#132642] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D4ED8]"
            >
              {theme === 'dark' ? (
                <Sun className="h-4 w-4 text-amber-400" aria-hidden="true" />
              ) : (
                <Moon className="h-4 w-4 text-[#0F294A]" aria-hidden="true" />
              )}
            </button>

            <button
              type="button"
              onClick={() => navigate(PageId.CV)}
              className={`hidden sm:inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-xs font-semibold transition-all duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D4ED8] focus-visible:ring-offset-2 dark:focus-visible:ring-offset-[#060E1A] ${
                currentPage === PageId.CV
                  ? 'bg-[#1D4ED8] text-white shadow-sm dark:bg-blue-500'
                  : 'bg-[#0F294A] text-white shadow-xs hover:bg-[#1D4ED8] dark:bg-blue-600 dark:hover:bg-blue-500'
              }`}
            >
              <Download className="h-3.5 w-3.5" aria-hidden="true" />
              <span>Download CV</span>
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-[#0A192F] transition-colors hover:bg-slate-100 lg:hidden dark:border-slate-800 dark:text-slate-100 dark:hover:bg-[#0D1B2E] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D4ED8]"
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" aria-hidden="true" />
              ) : (
                <Menu className="h-5 w-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Clean Mobile & Tablet Navigation Drawer (No numeric prefixes) */}
      {mobileMenuOpen && (
        <div
          className="no-print fixed inset-0 z-50 lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile portfolio navigation"
        >
          <div
            className="fixed inset-0 bg-[#060E1A]/60 backdrop-blur-xs"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed inset-y-0 right-0 flex w-full max-w-xs flex-col border-l border-slate-200 bg-white px-5 py-5 shadow-2xl dark:border-slate-800 dark:bg-[#0A1628]">
            <div className="flex items-center justify-between border-b border-slate-200 pb-4 dark:border-slate-800">
              <span className="font-display text-base font-bold text-[#0A192F] dark:text-white">
                {PROFILE.fullName}
              </span>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close navigation menu"
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-[#132642]"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>

            <nav aria-label="Portfolio pages" className="mt-4 flex-1 overflow-y-auto">
              <ul className="space-y-1">
                {NAV_ITEMS.map((route) => {
                  const isActive = currentPage === route.id;
                  return (
                    <li key={route.id}>
                      <a
                        href={route.path}
                        onClick={(e) => handleNavClick(e, route.id)}
                        aria-current={isActive ? 'page' : undefined}
                        className={`flex min-h-[44px] items-center justify-between rounded-lg px-3.5 py-2.5 text-sm font-medium transition-colors ${
                          isActive
                            ? 'bg-[#0F294A] font-semibold text-white dark:bg-blue-600'
                            : 'text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-[#132642]'
                        }`}
                      >
                        <span>{route.label}</span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <div className="mt-4 space-y-2.5 border-t border-slate-200 pt-4 dark:border-slate-800">
              <button
                type="button"
                onClick={(e) => handleNavClick(e, PageId.CV)}
                className="flex min-h-[44px] w-full items-center justify-center gap-2 rounded-lg bg-[#0F294A] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#1D4ED8] dark:bg-blue-600 dark:hover:bg-blue-500"
              >
                <Download className="h-4 w-4" aria-hidden="true" />
                <span>Download CV</span>
              </button>

              <button
                type="button"
                onClick={toggleTheme}
                className="flex min-h-[44px] w-full items-center justify-between rounded-lg border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm font-medium text-[#0A192F] transition-colors hover:bg-slate-100 dark:border-slate-800 dark:bg-[#0D1B2E] dark:text-slate-100 dark:hover:bg-[#132642]"
              >
                <span>{theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}</span>
                {theme === 'dark' ? (
                  <Sun className="h-4 w-4 text-amber-400" aria-hidden="true" />
                ) : (
                  <Moon className="h-4 w-4 text-[#0F294A]" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
