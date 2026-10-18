// Purpose: Experience page: software and other roles, transferable strengths, and links to technical proof.
// Author: Thang Truong
// Date: 2026-10-18
import React from "react";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import Timeline from "../components/experience/Timeline";
import Badge from "../components/ui/Badge";
import Button from "../components/ui/Button";
import Container from "../components/ui/Container";
import { PageHeader } from "../components/ui/Section";
import { education } from "../data/education";
import { experience, transferableStrengths } from "../data/experience";
import { pages } from "../data/pages";
import { usePageMeta } from "../hooks/usePageMeta";

const groups = [
  { id: "software-experience", title: "Software & Technical Experience", items: experience.filter((item) => item.kind === "tech") },
  { id: "other-experience", title: "Other Experience", items: experience.filter((item) => item.kind === "other") },
];

const arrow = <FiArrowRight className="h-4 w-4" aria-hidden="true" />;

const ExperiencePage: React.FC = () => {
  usePageMeta({ title: "Experience", description: pages.experience.meta });

  return (
    <>
      <PageHeader {...pages.experience} />
      <Container className="grid gap-12 py-12 sm:py-16 lg:grid-cols-[minmax(0,1fr)_20rem]">
        <div className="space-y-14">
          {groups.map((group) => (
            <section key={group.id} aria-labelledby={group.id}>
              <h2 id={group.id} className="mb-8 text-h2 font-bold text-fg">
                {group.title}
              </h2>
              <Timeline items={group.items} />
            </section>
          ))}
        </div>

        <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-lg border border-accent/30 bg-accent-soft/60 p-6">
            <p className="font-semibold text-fg">Recent technical work</p>
            <p className="mt-2 text-sm text-muted">
              My latest software work is in my projects: full-stack apps built and deployed on AWS.
            </p>
            <div className="mt-4 flex flex-col gap-2">
              <Button to="/projects" iconRight={arrow}>
                View projects
              </Button>
              <Button to="/skills" variant="secondary" iconRight={arrow}>
                See skills
              </Button>
            </div>
          </div>

          <div className="rounded-lg border border-line bg-surface-2/50 p-6">
            <p className="font-semibold text-fg">Transferable strengths</p>
            <ul className="mt-3 flex flex-wrap gap-1.5" aria-label="Transferable strengths">
              {transferableStrengths.map((strength) => (
                <li key={strength}>
                  <Badge>{strength}</Badge>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-lg border border-line bg-surface-2/50 p-6">
            <p className="font-semibold text-fg">Education</p>
            <ul className="mt-2 space-y-1.5 text-sm text-muted">
              {education.slice(0, 2).map((item) => (
                <li key={item.id}>
                  {item.title}, {item.institution.split(",")[0]} ({item.period})
                </li>
              ))}
            </ul>
            <Link
              to="/about#education"
              className="mt-3 inline-flex min-h-11 items-center gap-1.5 text-sm font-medium text-accent hover:underline"
            >
              See all education {arrow}
            </Link>
          </div>
        </aside>
      </Container>
    </>
  );
};

export default ExperiencePage;
