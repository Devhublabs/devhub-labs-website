import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import ThemeToggle from "@/components/common/ThemeToggle.jsx";
import logo from "@/assets/logos/logo.png";
import { navigationItems } from "@/data/navigation.js";
import { hasCompletedHeroIntro } from "@/utils/introSession.js";
import { cn } from "@/utils/cn.js";

const navShellVariants = {
  hidden: {
    opacity: 0,
    y: -14,
  },
  visible: (shouldDelay) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.48,
      delay: shouldDelay ? 1.78 : 0,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const drawerVariants = {
  hidden: {
    opacity: 0,
    y: -16,
    scale: 0.98,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.28,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  exit: {
    opacity: 0,
    y: -10,
    scale: 0.98,
    transition: {
      duration: 0.18,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

function DesktopNavLink({ item }) {
  return (
    <NavLink
      to={item.path}
      end={item.path === "/"}
      className="group relative rounded-full px-3 py-2 text-[0.72rem] font-extrabold uppercase tracking-[0.01em] text-[var(--color-nav-text-muted)] transition-colors hover:text-[var(--color-nav-text)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-primary)]"
    >
      {({ isActive }) => (
        <>
          <span className={isActive ? "text-[var(--color-primary)]" : ""}>
            {item.label}
          </span>
          <span
            className={cn(
              "absolute inset-x-4 -bottom-0.5 h-0.5 origin-center rounded-full bg-[var(--color-primary)] transition-transform duration-300",
              isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100",
            )}
          />
        </>
      )}
    </NavLink>
  );
}

function MobileNavLink({ item, onClick }) {
  return (
    <NavLink
      to={item.path}
      end={item.path === "/"}
      onClick={onClick}
      className={({ isActive }) =>
        cn(
          "flex items-center justify-between rounded-lg border px-4 py-3 text-base font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)]",
          isActive ? "mobile-nav-link-active" : "mobile-nav-link",
        )
      }
    >
      {({ isActive }) => (
        <>
          <span>{item.label}</span>
          <span
            className={cn(
              "size-1.5 rounded-full bg-[var(--color-primary)] transition-opacity",
              isActive ? "opacity-100" : "opacity-0",
            )}
          />
        </>
      )}
    </NavLink>
  );
}

export default function Navbar() {
  const { pathname } = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [shouldDelayIntro] = useState(
    () => pathname === "/" && !hasCompletedHeroIntro(),
  );

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 18);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    window.requestAnimationFrame(() => {
      document.querySelector("#mobile-navigation a")?.focus();
    });

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const hasGlassShell = pathname !== "/" || isScrolled || isOpen;

  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-50 px-4 py-4 sm:px-6 lg:px-8"
      initial="hidden"
      animate="visible"
      variants={navShellVariants}
      custom={shouldDelayIntro}
    >
      <div
        className={cn(
          "nav-shell mx-auto flex h-15 max-w-[86rem] items-center justify-between rounded-lg border px-3 sm:h-16 sm:px-4 lg:px-5",
          hasGlassShell ? "nav-shell-glass" : "nav-shell-transparent",
        )}
      >
        <Link
          to="/"
          className="flex items-center gap-2.5 rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-primary)]"
          aria-label="DevHub Labs home"
        >
          <span className="relative flex size-10 items-center justify-center sm:size-11">
            <span className="absolute inset-0 rounded-full bg-[var(--color-primary)]/18 blur-md" />
            <span className="absolute inset-1 rounded-full border border-[var(--color-glass-border)] bg-[var(--color-glass-bg)] shadow-[var(--shadow-soft)]" />
            <img
              src={logo}
              alt=""
              className="relative size-8 rounded-full object-contain saturate-125 drop-shadow-[var(--shadow-glow)] sm:size-9"
              width="36"
              height="36"
            />
          </span>
          <span className="font-heading text-base font-bold leading-none text-[var(--color-text-primary)] sm:text-lg">
            DevHub<span className="purple-text-gradient">Labs</span>
          </span>
        </Link>

        <nav aria-label="Main navigation" className="hidden items-center gap-1.5 lg:flex">
          {navigationItems.map((item) => (
            <DesktopNavLink key={item.id} item={item} />
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
          <Link
            to="/contact"
            className="btn-cta-primary group inline-flex h-11 items-center justify-center gap-2 rounded-lg px-5 text-sm font-bold transition-[transform,box-shadow] duration-[400ms] hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-primary)]"
          >
            {"Let's Build"}
            <ArrowUpRight
              aria-hidden="true"
              className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-lg border border-[var(--color-glass-border)] bg-[var(--color-glass-bg)] text-[var(--color-nav-text)] shadow-[var(--shadow-soft)] backdrop-blur-xl transition-colors hover:bg-[var(--color-hover-surface)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)]"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-controls="mobile-navigation"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((current) => !current)}
          >
            {isOpen ? (
              <X aria-hidden="true" className="size-5" />
            ) : (
              <Menu aria-hidden="true" className="size-5" />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            id="mobile-navigation"
            className="mobile-drawer mx-auto mt-3 max-w-7xl overflow-hidden rounded-lg border p-3 lg:hidden"
            role="dialog"
            aria-label="Mobile navigation"
            aria-modal="true"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={drawerVariants}
          >
            <nav aria-label="Mobile navigation" className="grid gap-2">
              {navigationItems.map((item) => (
                <div key={item.id}>
                  <MobileNavLink item={item} onClick={() => setIsOpen(false)} />
                </div>
              ))}
            </nav>
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="btn-cta-primary mt-3 inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg px-5 text-sm font-bold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)]"
            >
              {"Let's Build"}
              <ArrowUpRight aria-hidden="true" className="size-4" />
            </Link>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}
