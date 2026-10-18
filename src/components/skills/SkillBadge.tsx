// Purpose: A skill tag; links to the filtered projects list when the skill appears in a published project.
// Author: Thang Truong
// Date: 2026-10-18
import React from "react";
import { Link } from "react-router-dom";
import { FiCheck } from "react-icons/fi";
import { projectsUsingSkill } from "../../data/skills";
import { usesTechnology } from "../../data/projects";
import type { Skill } from "../../data/types";

const shortTitle = (title: string) => title.split(" — ")[0];

const base = "inline-flex min-h-9 items-center gap-2 rounded-md border px-3 py-1.5 text-sm";

const SkillBadge: React.FC<{ skill: Skill }> = ({ skill }) => {
  if (skill.kind === "practice") {
    return (
      <span className="inline-flex items-center gap-2 py-1 text-sm text-fg">
        <FiCheck className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
        {skill.name}
      </span>
    );
  }

  const usedIn = projectsUsingSkill(skill);
  if (usedIn.length === 0) {
    return <span className={`${base} border-line bg-surface text-fg`}>{skill.name}</span>;
  }

  const filterName =
    [skill.name, ...(skill.aliases ?? [])].find((name) => usesTechnology(usedIn[0], name)) ?? skill.name;
  const projectNames = usedIn.map((project) => shortTitle(project.title)).join(", ");

  return (
    <Link
      to={`/projects?tech=${encodeURIComponent(filterName)}`}
      title={`Used in ${projectNames}`}
      aria-label={`${skill.name}: used in ${usedIn.length} project${usedIn.length > 1 ? "s" : ""} (${projectNames})`}
      className={`${base} border-accent/30 bg-accent-soft text-fg transition-colors hover:border-accent hover:text-accent`}
    >
      {skill.name}
      <span className="rounded-sm bg-surface px-1.5 font-mono text-xs text-muted" aria-hidden="true">
        {usedIn.length}
      </span>
    </Link>
  );
};

export default SkillBadge;
