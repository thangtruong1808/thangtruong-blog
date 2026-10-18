// Purpose: Project case study: overview, problem, role, features, architecture, learnings and stack.
// Author: Thang Truong
// Date: 2026-10-18
import React from "react";
import { Link, useParams } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { FiArrowLeft, FiArrowRight, FiExternalLink } from "react-icons/fi";
import ProjectImage from "../components/projects/ProjectImage";
import TechList from "../components/projects/TechList";
import Badge from "../components/ui/Badge";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import Container from "../components/ui/Container";
import { Eyebrow } from "../components/ui/Section";
import { getProject, projects } from "../data/projects";
import type { Project } from "../data/types";
import { usePageMeta } from "../hooks/usePageMeta";
import Placeholder from "../components/ui/Placeholder";
import { realContent, realItems } from "../lib/content";
import NotFoundPage from "./NotFoundPage";

const ListSection: React.FC<{ id: string; title: string; items?: string[] }> = ({ id, title, items }) => {
  const real = realItems(items);
  const placeholders = (items ?? []).filter((item) => !real.includes(item));
  if (real.length === 0 && (!import.meta.env.DEV || placeholders.length === 0)) return null;

  return (
    <section aria-labelledby={id} className="border-t border-line pt-10">
      <h2 id={id} className="text-h2 font-bold text-fg">
        {title}
      </h2>
      <ul className="mt-6 space-y-3">
        {real.map((item) => (
          <li key={item} className="flex gap-3 text-muted">
            <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span className="leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>
      {placeholders.map((item) => (
        <Placeholder key={item} text={item} />
      ))}
    </section>
  );
};

const ProjectLinks: React.FC<{ project: Project; compact?: boolean }> = ({ project, compact }) => (
  <>
    {project.liveUrl && (
      <Button
        href={project.liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        size={compact ? "md" : "lg"}
        className={compact ? "flex-1 whitespace-nowrap" : undefined}
        icon={<FiExternalLink className="h-4 w-4" aria-hidden="true" />}
      >
        Live demo
      </Button>
    )}
    {project.githubUrl && (
      <Button
        href={project.githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        variant="secondary"
        size={compact ? "md" : "lg"}
        className={compact ? "flex-1 whitespace-nowrap" : undefined}
        icon={<FaGithub className="h-4 w-4" aria-hidden="true" />}
      >
        {compact ? "Code" : "Source code"}
      </Button>
    )}
  </>
);

const ProjectDetail: React.FC<{ project: Project }> = ({ project }) => {
  usePageMeta({ title: project.title, description: project.tagline });

  const index = projects.findIndex((item) => item.id === project.id);
  const next = projects[(index + 1) % projects.length];
  const problem = realContent(project.problem);
  const facts = [
    { label: "My role", raw: project.role, value: realContent(project.role) },
    { label: "Impact", raw: project.impact, value: realContent(project.impact) },
  ].filter((fact) => fact.value || (import.meta.env.DEV && fact.raw));
  const hasLinks = Boolean(project.liveUrl || project.githubUrl);

  return (
    <article className="pb-24 lg:pb-0">
      <header className="border-b border-line">
        <Container className="py-10 sm:py-14">
          <Link
            to="/projects"
            className="inline-flex min-h-11 items-center gap-2 rounded-md text-sm font-medium text-muted hover:text-fg"
          >
            <FiArrowLeft className="h-4 w-4" aria-hidden="true" /> All projects
          </Link>
          <div className="mt-6 flex flex-wrap items-center gap-2">
            <Badge tone="accent">{project.type}</Badge>
            {project.year && <Badge>{project.year}</Badge>}
          </div>
          <h1 className="mt-4 max-w-3xl text-h1 font-bold text-fg">{project.title}</h1>
          <p className="mt-4 max-w-prose text-lead text-muted">{project.tagline}</p>
          {hasLinks && (
            <div className="mt-8 hidden flex-wrap gap-3 lg:flex">
              <ProjectLinks project={project} />
            </div>
          )}
        </Container>
      </header>

      <Container className="grid gap-12 py-12 lg:grid-cols-[minmax(0,1fr)_20rem] lg:gap-16 lg:py-16">
        <div className="space-y-10">
          <div className="overflow-hidden rounded-lg border border-line shadow-soft">
            <ProjectImage project={project} priority />
          </div>

          <section aria-labelledby="overview">
            <h2 id="overview" className="text-h2 font-bold text-fg">
              Overview
            </h2>
            <p className="mt-4 max-w-prose leading-relaxed text-muted">{project.overview}</p>
            {problem && (
              <>
                <h3 className="mt-8 text-h3 font-semibold text-fg">The problem</h3>
                <p className="mt-2 max-w-prose leading-relaxed text-muted">{problem}</p>
              </>
            )}
            <Placeholder text={project.problem} />
          </section>

          <ListSection id="features" title="Key features" items={project.highlights} />
          <ListSection id="architecture" title="Architecture & deployment" items={project.architecture} />
          <ListSection id="challenges" title="Challenges" items={project.challenges} />
          <ListSection id="learnings" title="What I learned" items={project.learnings} />
        </div>

        <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start" aria-label="Project facts">
          {facts.length > 0 && (
            <Card>
              <dl className="space-y-5 text-sm">
                {facts.map((fact) => (
                  <div key={fact.label}>
                    <dt className="font-mono text-xs uppercase tracking-[0.16em] text-muted">{fact.label}</dt>
                    <dd className="mt-1.5 text-fg">{fact.value ?? <Placeholder text={fact.raw} />}</dd>
                  </div>
                ))}
              </dl>
            </Card>
          )}
          <Card>
            <h2 className="font-mono text-xs uppercase tracking-[0.16em] text-muted">Tech stack</h2>
            <div className="mt-4">
              <TechList technologies={project.technologies} />
            </div>
          </Card>
          {next && next.id !== project.id && (
            <Link
              to={`/projects/${next.id}`}
              className="group block rounded-lg border border-line p-5 transition-colors hover:border-fg/25 hover:bg-surface"
            >
              <Eyebrow>Next project</Eyebrow>
              <span className="mt-2 flex items-center justify-between gap-3 font-semibold text-fg">
                {next.title}
                <FiArrowRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </span>
            </Link>
          )}
        </aside>
      </Container>

      {hasLinks && (
        <div className="fixed inset-x-0 bottom-0 z-20 border-t border-line bg-canvas/90 p-3 backdrop-blur-md lg:hidden">
          <div className="mx-auto flex max-w-content gap-3 pr-16">
            <ProjectLinks project={project} compact />
          </div>
        </div>
      )}
    </article>
  );
};

const ProjectDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = getProject(Number(id));
  return project ? <ProjectDetail key={project.id} project={project} /> : <NotFoundPage />;
};

export default ProjectDetailPage;
