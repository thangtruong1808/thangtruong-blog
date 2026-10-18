// Purpose: App shell: skip link, navbar, animated route outlet, footer and back-to-top.
// Author: Thang Truong
// Date: 2026-10-18
import React, { Suspense, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { PageSkeleton } from "../ui/Skeleton";
import BackToTop from "./BackToTop";
import Footer from "./Footer";
import NavBar from "./NavBar";

const Layout: React.FC = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: "instant" });
      return;
    }
    // Lazy pages may not have rendered the target yet, so retry until the chunk has loaded.
    const deadline = performance.now() + 4000;
    let frame = 0;
    const scrollToHash = () => {
      const target = document.getElementById(decodeURIComponent(hash.slice(1)));
      if (target) target.scrollIntoView();
      else if (performance.now() < deadline) frame = requestAnimationFrame(scrollToHash);
    };
    scrollToHash();
    return () => cancelAnimationFrame(frame);
  }, [pathname, hash]);

  return (
    <div className="flex min-h-screen flex-col">
      <a
        href="#main"
        className="sr-only z-50 rounded-md bg-fg px-4 py-3 text-sm font-semibold text-canvas focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to content
      </a>
      <NavBar />
      <main id="main" tabIndex={-1} className="flex-1 focus:outline-none">
        <div key={pathname} className="motion-safe:animate-page-in">
          <Suspense fallback={<PageSkeleton />}>
            <Outlet />
          </Suspense>
        </div>
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Layout;
