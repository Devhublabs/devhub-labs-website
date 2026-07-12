import { AnimatePresence, motion } from "framer-motion";
import { Outlet, useLocation } from "react-router-dom";
import ScrollToTop from "@/components/common/ScrollToTop.jsx";
import Navbar from "@/components/layout/Navbar.jsx";
import { pageFadeIn } from "@/animations/pageTransitions.js";

export default function MainLayout() {
  const location = useLocation();

  return (
    <div className="flex min-h-screen flex-col bg-[var(--color-background)] text-[var(--color-text-primary)]">
      <ScrollToTop />
      <a
        href="#main-content"
        className="skip-link sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:shadow-lg focus:outline focus:outline-2 focus:outline-[var(--color-primary)]"
      >
        Skip to content
      </a>

      <Navbar />

      <main id="main-content" className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={pageFadeIn.initial}
            animate={pageFadeIn.animate}
            exit={{ opacity: 0, y: -8 }}
            transition={pageFadeIn.transition}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>

      <footer className="border-t border-[var(--color-border)] bg-[var(--color-surface)]">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-6 text-sm text-[var(--color-text-secondary)] md:flex-row md:items-center md:justify-between">
          <p>&copy; {new Date().getFullYear()} DevHub Labs.</p>
          <p>Software strategy, design, and engineering.</p>
        </div>
      </footer>
    </div>
  );
}
