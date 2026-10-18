// Purpose: Vertical experience timeline; bullet details collapse behind a toggle on small screens.
// Author: Thang Truong
// Date: 2026-10-18
import React, { useId, useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import type { ExperienceItem } from "../../data/types";
import { cn } from "../../lib/cn";
import { isPlaceholder } from "../../lib/content";
import Placeholder from "../ui/Placeholder";
import TechList from "../projects/TechList";
import Badge from "../ui/Badge";
import Reveal from "../ui/Reveal";

const TimelineEntry: React.FC<{ item: ExperienceItem }> = ({ item }) => {
  const [open, setOpen] = useState(false);
  const detailsId = useId();
  const bullets = (item.bullets ?? []).filter((bullet) => !isPlaceholder(bullet));
  const placeholders = (item.bullets ?? []).filter(isPlaceholder);
  const hasDetails = bullets.length > 0 || (import.meta.env.DEV && placeholders.length > 0);
  const isTech = item.kind === "tech";

  return (
    <Reveal as="li" className="relative pb-12 pl-8 last:pb-0 sm:pl-10">
      <span
        aria-hidden="true"
        className={cn(
          "absolute left-0 top-1.5 h-3.5 w-3.5 -translate-x-1/2 rounded-full border-2 border-canvas ring-4",
          isTech ? "bg-accent ring-accent/20" : "bg-muted ring-line"
        )}
      />
      <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
        <h3 className="text-h3 font-semibold text-fg">{item.role}</h3>
        <p className="shrink-0 font-mono text-xs text-muted">{item.period}</p>
      </div>
      <p className="mt-1 text-sm text-muted">
        <span className="font-medium text-fg/90">{item.company}</span> · {item.location}
      </p>
      {item.summary && <p className="mt-3 max-w-prose leading-relaxed text-muted">{item.summary}</p>}

      {(item.technologies || item.strengths) && (
        <div className="mt-4 flex flex-wrap gap-1.5">
          {item.technologies && (
            <TechList technologies={item.technologies} label={`Technologies used at ${item.company}`} />
          )}
          {item.strengths && (
            <ul className="flex flex-wrap gap-1.5" aria-label={`Strengths from ${item.company}`}>
              {item.strengths.map((strength) => (
                <li key={strength}>
                  <Badge>{strength}</Badge>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}

      {hasDetails && (
        <>
          <button
            type="button"
            className="mt-3 inline-flex min-h-11 items-center gap-1.5 rounded-md text-sm font-medium text-accent md:hidden"
            aria-expanded={open}
            aria-controls={detailsId}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? "Hide details" : "Show details"}
            <FiChevronDown className={cn("h-4 w-4 transition-transform", open && "rotate-180")} aria-hidden="true" />
          </button>
          <div id={detailsId} className={cn(open ? "block" : "hidden", "md:block")}>
            <ul className="mt-3 max-w-prose space-y-2">
              {bullets.map((bullet) => (
                <li key={bullet} className="flex gap-3 text-muted">
                  <span aria-hidden="true" className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-muted" />
                  <span className="leading-relaxed">{bullet}</span>
                </li>
              ))}
            </ul>
            {placeholders.map((text) => (
              <Placeholder key={text} text={text} />
            ))}
          </div>
        </>
      )}
    </Reveal>
  );
};

const Timeline: React.FC<{ items: ExperienceItem[] }> = ({ items }) => (
  <ol className="relative ml-2 border-l border-line">
    {items.map((item) => (
      <TimelineEntry key={item.id} item={item} />
    ))}
  </ol>
);

export default Timeline;
