import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { PAGE_ROUTES } from '../data/portfolioData';
import { PageId, PageRouteMeta } from '../types/portfolio';

interface RouterContextValue {
  currentPage: PageId;
  currentMeta: PageRouteMeta;
  navigate: (page: PageId) => void;
}

const RouterContext = createContext<RouterContextValue | undefined>(undefined);

function resolvePageFromPath(pathname: string): PageId {
  const normalized = pathname.replace(/\/+$/, '') || '/';
  const match = PAGE_ROUTES.find((route) => route.path === normalized);
  return match ? match.id : PageId.Home;
}

export function RouterProvider({ children }: { children: React.ReactNode }) {
  const [currentPage, setCurrentPage] = useState<PageId>(() => {
    if (typeof window === 'undefined') return PageId.Home;
    return resolvePageFromPath(window.location.pathname);
  });

  const currentMeta =
    PAGE_ROUTES.find((route) => route.id === currentPage) ?? PAGE_ROUTES[0];

  const navigate = useCallback(
    (page: PageId) => {
      const target = PAGE_ROUTES.find((r) => r.id === page) ?? PAGE_ROUTES[0];
      if (typeof window !== 'undefined') {
        if (window.location.pathname !== target.path) {
          window.history.pushState({ page: target.id }, '', target.path);
        }
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      setCurrentPage(target.id);
    },
    []
  );

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.title = currentMeta.title;
    }
  }, [currentMeta]);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPage(resolvePageFromPath(window.location.pathname));
      window.scrollTo({ top: 0, behavior: 'auto' });
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  return (
    <RouterContext.Provider value={{ currentPage, currentMeta, navigate }}>
      {children}
    </RouterContext.Provider>
  );
}

export function useRouter() {
  const ctx = useContext(RouterContext);
  if (!ctx) {
    throw new Error('useRouter must be used within a RouterProvider');
  }
  return ctx;
}
