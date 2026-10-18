// Purpose: Floating buttons to jump to the top or the end of the current page.
// Author: Thang Truong
// Date: 2026-10-18
import React, { useEffect, useState } from "react";
import { FiArrowDown, FiArrowUp } from "react-icons/fi";
import { cn } from "../../lib/cn";

const scrollBehavior = (): ScrollBehavior =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";

const ScrollButton: React.FC<{ label: string; onClick: () => void; children: React.ReactNode }> = ({
  label,
  onClick,
  children,
}) => (
  <button
    type="button"
    aria-label={label}
    onClick={onClick}
    className={cn(
      "grid h-12 w-12 place-items-center rounded-full border border-line bg-surface text-fg shadow-lift",
      "transition-transform duration-300 hover:-translate-y-0.5"
    )}
  >
    {children}
  </button>
);

const BackToTop: React.FC = () => {
  const [atTop, setAtTop] = useState(true);
  const [atBottom, setAtBottom] = useState(true);

  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const position = window.scrollY;
        const max = document.documentElement.scrollHeight - window.innerHeight;
        setAtTop(position < 80);
        setAtBottom(max - position < 80);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  if (atTop && atBottom) return null;

  return (
    <div className="fixed bottom-5 right-5 z-30 flex flex-col gap-2">
      {!atTop && (
        <ScrollButton label="Back to top" onClick={() => window.scrollTo({ top: 0, behavior: scrollBehavior() })}>
          <FiArrowUp className="h-5 w-5" aria-hidden="true" />
        </ScrollButton>
      )}
      {!atBottom && (
        <ScrollButton
          label="Go to end of page"
          onClick={() => window.scrollTo({ top: document.documentElement.scrollHeight, behavior: scrollBehavior() })}
        >
          <FiArrowDown className="h-5 w-5" aria-hidden="true" />
        </ScrollButton>
      )}
    </div>
  );
};

export default BackToTop;
