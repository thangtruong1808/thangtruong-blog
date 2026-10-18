// Purpose: Case-study style project card: thumbnail, type, summary, problem/role/impact, stack and links.
// Author: Thang Truong
// Date: 2026-10-18
import React from "react";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { FiArrowUpRight, FiExternalLink } from "react-icons/fi";
import type { Project } from "../../data/types";
import { realContent } from "../../lib/content";
import Badge from "../ui/Badge";
import ProjectImage from "./ProjectImage";
import TechList from "./TechList";

interface ProjectCardProps {
  project: Project;
  headingLevel?: "h2" | "h3";
  priority?: boolean;
}

const smallLink =
  "inline-flex min-h-11 items-center gap-1.5 rounded-md px-2 text-sm font-medium text-muted transition-colors hover:bg-surface-2 hover:text-fg";

const ProjectCard: React.FC<ProjectCardProps> = ({ project, headingLevel: Heading = "h3", priority }) => {
  const detailPath = `/projects/${project.id}`;
  const problem = realContent(project.problem);
  const impact = realContent(project.impact);

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-lg border border-line bg-surface shadow-soft transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-fg/20 hover:shadow-lift">
      <ProjectImage project={project} priority={priority} zoomOnHover className="border-b border-line" />

      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap items-center gap-2">
          <Badge tone="accent">{project.type}</Badge>
          {project.year && <span className="font-mono text-xs text-muted">{project.year}</span>}
        </div>

        <Heading className="mt-4 text-h3 font-semibold text-fg">
          {/* The stretched link makes the whole card clickable while keeping one tab stop. */}
          <Link to={detailPath} className="after:absolute after:inset-0 after:content-[''] focus-visible:outline-none">
            {project.title}
          </Link>
        </Heading>
        <p className="mt-2 text-sm leading-relaxed text-muted">{project.tagline}</p>

        {(problem || impact) && (
          <dl className="mt-4 space-y-2 border-l-2 border-line pl-4 text-sm">
            {problem && (
              <div>
                <dt className="font-medium text-fg">Problem</dt>
                <dd className="line-clamp-2 text-muted">{problem}</dd>
              </div>
            )}
            {impact && (
              <div>
                <dt className="font-medium text-fg">Impact</dt>
                <dd className="text-muted">{impact}</dd>
              </div>
            )}
          </dl>
        )}

        <div className="mt-5">
          <TechList technologies={project.technologies} limit={5} />
        </div>

        <div className="relative z-10 mt-auto flex flex-wrap items-center gap-1 pt-5">
          <Link to={detailPath} className={`${smallLink} text-fg`}>
            Case study <FiArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
          </Link>
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className={smallLink}>
              <FiExternalLink className="h-4 w-4" aria-hidden="true" />
              Live<span className="sr-only"> demo of {project.title} (opens in new tab)</span>
            </a>
          )}
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className={smallLink}>
              <FaGithub className="h-4 w-4" aria-hidden="true" />
              Code<span className="sr-only"> for {project.title} on GitHub (opens in new tab)</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
