"use client";

import type { ReactNode } from "react";
import { useEffect, useMemo, useRef, useState } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  once?: boolean;
  threshold?: number;
  rootMargin?: string;
  delayMs?: number;
};

function cx(...values: Array<string | undefined | null | false>) {
  return values.filter(Boolean).join(" ");
}

export function Reveal({
  children,
  className,
  once = true,
  threshold = 0.15,
  rootMargin = "0px 0px -10% 0px",
  delayMs = 0,
}: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  const prefersReducedMotion = useMemo(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [once, prefersReducedMotion, rootMargin, threshold]);

  return (
    <div
      ref={ref}
      className={cx(
        "transform-gpu will-change-[opacity,transform]",
        prefersReducedMotion
          ? ""
          : "transition-[opacity,transform] duration-700 ease-out",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
        className
      )}
      style={delayMs ? { transitionDelay: `${delayMs}ms` } : undefined}
    >
      {children}
    </div>
  );
}
