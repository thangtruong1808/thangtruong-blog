// Purpose: Projects index with shareable type/tech filters (kept in the URL) and case-study cards.
// Author: Thang Truong
// Date: 2026-10-18
import React, { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import ProjectCard from "../components/projects/ProjectCard";
import Button from "../components/ui/Button";
import Chip from "../components/ui/Chip";
import Container from "../components/ui/Container";
import { PageHeader } from "../components/ui/Section";
import { pages } from "../data/pages";
import { projects, usesTechnology } from "../data/projects";
import type { ProjectType } from "../data/types";
import { usePageMeta } from "../hooks/usePageMeta";

const types: Array<"All" | ProjectType> = ["All", "Full-stack", "Frontend"];
const techFilters = ["React", "TypeScript", "Node.js", "MySQL", "GraphQL", "AWS", "Stripe"];

const ProjectsPage: React.FC = () => {
  usePageMeta({ title: "Projects", description: pages.projects.meta });

  const [params, setParams] = useSearchParams();
  const type = (params.get("type") as ProjectType | null) ?? "All";
  const tech = params.get("tech");

  const updateParam = (key: "type" | "tech", value: string | null) => {
    const next = new URLSearchParams(params);
    if (value) next.set(key, value);
    else next.delete(key);
    setParams(next, { replace: true, preventScrollReset: true });
  };

  const filtered = useMemo(
    () =>
      projects.filter(
        (project) => (type === "All" || project.type === type) && (!tech || usesTechnology(project, tech))
      ),
    [type, tech]
  );

  const countFor = (value: "All" | ProjectType) =>
    projects.filter(
      (project) => (value === "All" || project.type === value) && (!tech || usesTechnology(project, tech))
    ).length;

  return (
    <>
      <PageHeader {...pages.projects} />

      <Container className="py-12 sm:py-16">
        <div className="flex flex-col gap-5 border-b border-line pb-8">
          <div role="group" aria-label="Filter by project type" className="flex flex-wrap gap-2">
            {types.map((value) => (
              <Chip
                key={value}
                pressed={type === value}
                count={countFor(value)}
                onClick={() => updateParam("type", value === "All" ? null : value)}
              >
                {value}
              </Chip>
            ))}
          </div>
          <div role="group" aria-label="Filter by technology" className="flex flex-wrap items-center gap-2">
            <span className="mr-1 font-mono text-xs uppercase tracking-[0.16em] text-muted">Tech</span>
            {(tech && !techFilters.includes(tech) ? [...techFilters, tech] : techFilters).map((value) => (
              <Chip
                key={value}
                pressed={tech === value}
                onClick={() => updateParam("tech", tech === value ? null : value)}
              >
                {value}
              </Chip>
            ))}
          </div>
        </div>

        <p className="mt-6 text-sm text-muted" aria-live="polite">
          Showing {filtered.length} of {projects.length} projects
        </p>

        {filtered.length > 0 ? (
          <ul key={`${type}-${tech}`} className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((project, index) => (
              <li
                key={project.id}
                className="motion-safe:animate-fade-up"
                style={{ animationDelay: `${index * 60}ms` }}
              >
                <ProjectCard project={project} headingLevel="h2" priority={index === 0} />
              </li>
            ))}
          </ul>
        ) : (
          <div className="mt-6 rounded-lg border border-dashed border-line p-10 text-center">
            <p className="font-medium text-fg">No projects match those filters.</p>
            <Button className="mt-4" variant="secondary" onClick={() => setParams({}, { replace: true })}>
              Clear filters
            </Button>
          </div>
        )}
      </Container>
    </>
  );
};

export default ProjectsPage;
