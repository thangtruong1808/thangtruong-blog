// Purpose: Shimmering placeholder blocks and a generic page skeleton for route loading.
// Author: Thang Truong
// Date: 2026-10-18
import React from "react";
import { cn } from "../../lib/cn";
import Container from "./Container";

export const Skeleton: React.FC<{ className?: string }> = ({ className }) => (
  <div
    aria-hidden="true"
    className={cn(
      "animate-shimmer rounded-md bg-[length:200%_100%]",
      "bg-[linear-gradient(90deg,rgb(var(--surface-2))_0%,rgb(var(--line))_50%,rgb(var(--surface-2))_100%)]",
      className
    )}
  />
);

export const PageSkeleton: React.FC = () => (
  <Container className="min-h-screen py-16 sm:py-20" role="status" aria-live="polite">
    <span className="sr-only">Loading page…</span>
    <Skeleton className="h-4 w-24" />
    <Skeleton className="mt-4 h-10 w-3/4 max-w-md" />
    <Skeleton className="mt-4 h-5 w-full max-w-prose" />
    <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {[0, 1, 2].map((key) => (
        <div key={key} className="rounded-lg border border-line bg-surface p-6">
          <Skeleton className="aspect-video w-full" />
          <Skeleton className="mt-5 h-5 w-2/3" />
          <Skeleton className="mt-3 h-4 w-full" />
          <Skeleton className="mt-2 h-4 w-5/6" />
        </div>
      ))}
    </div>
  </Container>
);
