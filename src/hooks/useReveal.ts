import { useEffect } from "react";

// Marks every [data-reveal] element with data-visible as it scrolls into view.
// An attribute rather than a class, because React rewrites className when a
// component re-renders and would drop a class added here.
// Re-runs when `key` changes so newly rendered routes are picked up.
export const useReveal = (key?: unknown) => {
  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]:not([data-visible])")
    );
    if (!("IntersectionObserver" in window)) {
      elements.forEach((el) => el.setAttribute("data-visible", ""));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.setAttribute("data-visible", "");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [key]);
};
