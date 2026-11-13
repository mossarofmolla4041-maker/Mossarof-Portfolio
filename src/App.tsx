import React from 'react';
import { AnimatePresence, motion, MotionConfig } from 'motion/react';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { RouterProvider, useRouter } from './context/RouterContext';
import { ThemeProvider } from './context/ThemeContext';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { CVPage } from './pages/CVPage';
import { EducationPage } from './pages/EducationPage';
import { ExperiencePage } from './pages/ExperiencePage';
import { ExtracurricularPage } from './pages/ExtracurricularPage';
import { HomePage } from './pages/HomePage';
import { ProjectsPage } from './pages/ProjectsPage';
import { SkillsPage } from './pages/SkillsPage';
import { PageId } from './types/portfolio';

function PageView() {
  const { currentPage } = useRouter();

  const renderPage = () => {
    switch (currentPage) {
      case PageId.Home:
        return <HomePage />;
      case PageId.About:
        return <AboutPage />;
      case PageId.Education:
        return <EducationPage />;
      case PageId.Experience:
        return <ExperiencePage />;
      case PageId.Skills:
        return <SkillsPage />;
      case PageId.Projects:
        return <ProjectsPage />;
      case PageId.Extracurricular:
        return <ExtracurricularPage />;
      case PageId.Contact:
        return <ContactPage />;
      case PageId.CV:
        return <CVPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={currentPage}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -4 }}
        transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
      >
        {renderPage()}
      </motion.div>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <ThemeProvider>
        <RouterProvider>
          <div className="flex min-h-screen flex-col bg-gradient-to-b from-slate-50/70 via-white to-white text-[#0A192F] transition-colors duration-200 dark:from-[#081324] dark:via-[#060E1A] dark:to-[#060E1A] dark:text-slate-100">
            <Navbar />
            <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
              <PageView />
            </main>
            <Footer />
          </div>
        </RouterProvider>
      </ThemeProvider>
    </MotionConfig>
  );
}
