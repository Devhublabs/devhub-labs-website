import { useEffect, useRef, useState } from "react";

export default function useIntersectionObserver({
  threshold = 0.1,
  rootMargin = "0px",
  enabled = true,
} = {}) {
  const ref = useRef(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    if (!enabled) {
      setIsIntersecting(false);
      return undefined;
    }

    const element = ref.current;
    if (!element) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { threshold, rootMargin },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [enabled, rootMargin, threshold]);

  return { ref, isIntersecting };
}
