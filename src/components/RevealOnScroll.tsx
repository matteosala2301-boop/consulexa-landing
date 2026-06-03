"use client";

import { useEffect } from "react";

/**
 * Single IntersectionObserver island that fades in any element carrying the
 * global `.reveal` utility class (defined in globals.css) once it scrolls into
 * view. Rendered once near the root so the section components can stay as
 * server components.
 */
export default function RevealOnScroll() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return null;
}
