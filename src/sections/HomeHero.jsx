import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Braces, Cpu, Layers3, Sparkles } from "lucide-react";
import { lazy, Suspense, useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Canvas3DBoundary from "@/components/three/Canvas3DBoundary.jsx";
import useIntersectionObserver from "@/hooks/useIntersectionObserver.js";
import logoFallback from "@/assets/logos/3D render.png";
import { hasCompletedHeroIntro, markHeroIntroComplete } from "@/utils/introSession.js";

const HeroLogoCanvas = lazy(() => import("@/components/three/HeroLogoCanvas.jsx"));

const trustItems = [
  {
    label: "Modern Software",
    value: "01",
    icon: Braces,
  },
  {
    label: "AI Solutions",
    value: "02",
    icon: Cpu,
  },
  {
    label: "Scalable Engineering",
    value: "03",
    icon: Layers3,
  },
];

const particles = [
  { id: 1, left: "8%", top: "28%", size: 4, delay: 0.1, duration: 16 },
  { id: 2, left: "18%", top: "68%", size: 3, delay: 0.4, duration: 19 },
  { id: 3, left: "41%", top: "18%", size: 3, delay: 0.9, duration: 18 },
  { id: 4, left: "58%", top: "74%", size: 4, delay: 0.3, duration: 21 },
  { id: 5, left: "70%", top: "21%", size: 3, delay: 0.7, duration: 17 },
  { id: 6, left: "84%", top: "57%", size: 4, delay: 1.1, duration: 20 },
  { id: 7, left: "92%", top: "34%", size: 3, delay: 0.6, duration: 18 },
];

function HeroBackground({ playIntro }) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="hero-bg-gradient absolute inset-0" />
      <div className="hero-grid absolute inset-0 opacity-75" />
      <motion.div
        className="hero-blob-1 absolute -left-36 top-16 h-[26rem] w-[26rem] rounded-full blur-3xl sm:h-[36rem] sm:w-[36rem]"
        animate={
          prefersReducedMotion
            ? undefined
            : {
                x: [0, 26, 0],
                y: [0, 20, 0],
                scale: [1, 1.05, 1],
              }
        }
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="hero-blob-2 absolute right-[-17rem] top-[-10rem] h-[38rem] w-[38rem] rounded-full blur-3xl sm:h-[56rem] sm:w-[56rem]"
        animate={
          prefersReducedMotion
            ? undefined
            : {
                x: [0, -34, 0],
                y: [0, 28, 0],
                scale: [1.02, 0.96, 1.02],
              }
        }
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="hero-aurora absolute left-[66%] top-[43%] h-[44rem] w-[44rem] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl sm:h-[56rem] sm:w-[56rem]"
        animate={
          prefersReducedMotion
            ? undefined
            : {
                rotate: [0, 5, -4, 0],
                scale: [1, 1.04, 0.99, 1],
              }
        }
        transition={{ duration: 34, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="hero-overlay-gradient absolute inset-0" />
      {playIntro ? (
        <motion.div
          className="absolute left-[62%] top-1/2 size-24 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[var(--color-secondary)]/45 bg-[var(--color-primary)]/10"
          initial={{ opacity: 0.6, scale: 0.18 }}
          animate={{ opacity: 0, scale: 16 }}
          transition={{ duration: 1.2, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
        />
      ) : null}
      {particles.map((particle) => (
        <motion.span
          key={particle.id}
          className="absolute rounded-full bg-[var(--color-particle)] shadow-[var(--shadow-particle)] ring-1 ring-[var(--color-glass-border)]"
          style={{
            left: particle.left,
            top: particle.top,
            width: particle.size,
            height: particle.size,
          }}
          initial={playIntro ? { opacity: 0, scale: 0 } : { opacity: 0.66 }}
          animate={
            prefersReducedMotion
              ? { opacity: 0.45, scale: 1 }
              : {
                  opacity: [0.25, 0.78, 0.32],
                  y: [0, -14, 0],
                  scale: [1, 1.16, 1],
                }
          }
          transition={{
            duration: particle.duration,
            delay: playIntro ? particle.delay : 0,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

function LogoShowcase() {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.15 });
  const [webglFailed, setWebglFailed] = useState(false);

  return (
    <div
      ref={ref}
      className="relative mx-auto flex min-h-[26rem] w-full max-w-[40rem] items-center justify-center sm:min-h-[34rem] lg:min-h-[40rem] xl:max-w-[48rem] xl:min-h-[46rem]"
    >
      <div className="logo-glow absolute bottom-[8%] left-1/2 h-40 w-[70%] -translate-x-1/2 blur-3xl" />

      <div className="pointer-events-none absolute inset-0">
        {webglFailed || !isIntersecting ? (
          <img
            src={logoFallback}
            alt="DevHub Labs logo"
            className="hero-render absolute inset-0 size-full object-contain"
            loading="lazy"
            decoding="async"
          />
        ) : (
          <Suspense
            fallback={
              <img
                src={logoFallback}
                alt="DevHub Labs logo"
                className="hero-render absolute inset-0 size-full object-contain"
                decoding="async"
              />
            }
          >
            <Canvas3DBoundary
              fallback={
                <img
                  src={logoFallback}
                  alt="DevHub Labs logo"
                  className="hero-render absolute inset-0 size-full object-contain"
                  decoding="async"
                />
              }
              onError={() => setWebglFailed(true)}
            >
              <HeroLogoCanvas active={isIntersecting} />
            </Canvas3DBoundary>
          </Suspense>
        )}
      </div>
    </div>
  );
}

function ScrollIndicator() {
  const [isVisible, setIsVisible] = useState(true);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    function handleScroll() {
      setIsVisible(window.scrollY < 80);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[var(--color-text-muted)] sm:flex md:hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.3 }}
      aria-hidden="true"
    >
      <span className="text-small-label opacity-60">Scroll</span>
      <motion.span
        className="relative h-10 w-6 rounded-full border border-[var(--color-glass-border)] bg-[var(--color-glass-bg)] shadow-[var(--shadow-soft)] backdrop-blur-xl"
        animate={prefersReducedMotion ? undefined : { y: [0, 7, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="absolute left-1/2 top-2 size-1.5 -translate-x-1/2 rounded-full bg-[var(--color-primary)]" />
      </motion.span>
    </motion.div>
  );
}

export default function HomeHero() {
  const prefersReducedMotion = useReducedMotion();
  const [shouldIntro, setShouldIntro] = useState(() => !hasCompletedHeroIntro());
  const playIntro = shouldIntro && !prefersReducedMotion;

  const introTransition = useMemo(
    () => ({
      duration: playIntro ? 1.65 : 0,
      delay: playIntro ? 0.3 : 0,
      ease: [0.22, 1, 0.36, 1],
    }),
    [playIntro],
  );

  useEffect(() => {
    if (!shouldIntro) {
      return undefined;
    }

    if (prefersReducedMotion) {
      markHeroIntroComplete();
      setShouldIntro(false);
      return undefined;
    }

    const timeout = window.setTimeout(() => {
      markHeroIntroComplete();
      setShouldIntro(false);
    }, 2300);

    return () => window.clearTimeout(timeout);
  }, [prefersReducedMotion, shouldIntro]);

  return (
    <section className="hero-section relative isolate min-h-screen overflow-hidden text-[var(--color-text-primary)]">
      <HeroBackground playIntro={playIntro} />
      <motion.div
        className="absolute inset-0 bg-[var(--color-hero-bg)]"
        initial={playIntro ? { opacity: 1 } : { opacity: 0 }}
        animate={{ opacity: 0 }}
        transition={introTransition}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto grid min-h-screen w-full max-w-[94rem] items-center gap-10 px-5 pb-32 pt-32 sm:px-6 sm:pb-40 sm:pt-36 lg:grid-cols-[minmax(28rem,0.78fr)_minmax(30rem,1.08fr)] lg:gap-12 lg:px-8 lg:pb-40 lg:pt-28 xl:gap-16 2xl:px-10">
        <motion.div
          className="max-w-[44rem]"
          initial={playIntro ? { opacity: 0, x: -42, filter: "blur(10px)" } : false}
          animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          transition={{
            duration: playIntro ? 0.78 : 0,
            delay: playIntro ? 1.02 : 0,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <motion.p
            className="eyebrow-pill mb-5 inline-flex rounded-full px-4 py-2 text-small-label"
            initial={playIntro ? { opacity: 0, y: 14 } : false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: playIntro ? 0.48 : 0, delay: playIntro ? 0.94 : 0 }}
          >
            {"// DEVHUB LABS"}
          </motion.p>

          <h1 className="max-w-[11ch] font-heading text-[3.35rem] font-bold leading-[0.9] text-[var(--color-hero-heading)] sm:text-[5.1rem] lg:text-[5.65rem] xl:text-[6.7rem] 2xl:text-[7.15rem]">
            We Build
            <span className="block purple-text-gradient">Intelligent</span>
            <span className="block">
              Software<span className="text-[var(--color-primary)]">.</span>
            </span>
          </h1>

          <p className="mt-7 max-w-[35rem] text-[1.02rem] leading-[1.82] text-[var(--color-hero-subtext)] sm:text-lg">
            A focused software engineering team crafting scalable products,
            intelligent systems, and refined digital experiences for ambitious
            companies.
          </p>

          <motion.div
            className="mt-9 flex flex-col gap-3 sm:flex-row"
            initial={playIntro ? { opacity: 0, y: 24 } : false}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: playIntro ? 0.58 : 0,
              delay: playIntro ? 1.36 : 0,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <Link
              to="/contact"
              className="btn-cta-primary group inline-flex h-14 items-center justify-center gap-3 rounded-lg px-7 text-sm font-bold transition-[transform,box-shadow] duration-[400ms] hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-primary)]"
            >
              {"Let's Build Together"}
              <ArrowRight
                aria-hidden="true"
                className="size-4 transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
            <Link
              to="/projects"
              className="btn-cta-secondary inline-flex h-14 items-center justify-center gap-3 rounded-lg px-7 text-sm font-bold transition-[background-color,transform,box-shadow] duration-[400ms] hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-primary)]"
            >
              View Our Work
              <Sparkles aria-hidden="true" className="size-4 text-[var(--color-primary)]" />
            </Link>
          </motion.div>
        </motion.div>

        <div className="relative lg:-mr-4 xl:-mr-8">
          <LogoShowcase />
        </div>
      </div>

      <motion.div
        className="trust-bar absolute inset-x-5 bottom-9 z-20 mx-auto hidden max-w-[86rem] rounded-lg px-5 py-4 md:block"
        initial={playIntro ? { opacity: 0, y: 24 } : false}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: playIntro ? 0.58 : 0,
          delay: playIntro ? 1.62 : 0,
          ease: [0.22, 1, 0.36, 1],
        }}
        aria-label="DevHub Labs strengths"
      >
        <ul className="grid grid-cols-3 divide-x divide-[var(--color-divider)]">
          {trustItems.map((item) => {
            const Icon = item.icon;

            return (
              <li key={item.label} className="flex items-center gap-4 px-6 first:pl-1 last:pr-1">
                <span className="trust-icon flex size-12 shrink-0 items-center justify-center rounded-lg text-[var(--color-primary)]">
                  <Icon aria-hidden="true" className="size-5" />
                </span>
                <span>
                  <span className="block font-heading text-[1.7rem] font-bold leading-none text-[var(--color-text-primary)]">
                    {item.value}
                  </span>
                  <span className="mt-1.5 block text-sm font-semibold leading-tight text-[var(--color-text-muted)]">
                    {item.label}
                  </span>
                </span>
              </li>
            );
          })}
        </ul>
      </motion.div>

      <AnimatePresence>{playIntro ? null : <ScrollIndicator />}</AnimatePresence>
    </section>
  );
}
