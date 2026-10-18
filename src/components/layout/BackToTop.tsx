// Purpose: Floating back-to-top button that appears after scrolling down.
// Author: Thang Truong
// Date: 2026-10-18
import React, { useEffect, useState } from "react";
import { FiArrowUp } from "react-icons/fi";
import { cn } from "../../lib/cn";

const BackToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => setVisible(window.scrollY > 600));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <button
      type="button"
      aria-label="Back to top"
      tabIndex={visible ? 0 : -1}
      aria-hidden={!visible}
      onClick={() => window.scrollTo({ top: 0 })}
      className={cn(
        "fixed bottom-5 right-5 z-30 grid h-12 w-12 place-items-center rounded-full border border-line bg-surface text-fg shadow-lift",
        "transition-[opacity,transform] duration-300 hover:-translate-y-0.5",
        visible ? "opacity-100" : "pointer-events-none translate-y-3 opacity-0"
      )}
    >
      <FiArrowUp className="h-5 w-5" aria-hidden="true" />
    </button>
  );
};

export default BackToTop;
