// Purpose: Mark an element as revealed once it scrolls into view (pairs with the .reveal class).
// Author: Thang Truong
// Date: 2026-10-18
import { useEffect, useRef } from "react";

export const useReveal = <T extends HTMLElement>() => {
  const ref = useRef<T>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    if (!("IntersectionObserver" in window)) {
      element.dataset.revealed = "true";
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.dataset.revealed = "true";
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 }
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return ref;
};
