// Purpose: Skills grouped by category, cloud services grouped by provider, linked to the projects that use them.
// Author: Thang Truong
// Date: 2026-10-18
import React from "react";
import SkillBadge from "../components/skills/SkillBadge";
import Card from "../components/ui/Card";
import Container from "../components/ui/Container";
import Reveal from "../components/ui/Reveal";
import { PageHeader } from "../components/ui/Section";
import { pages } from "../data/pages";
import { cloudProviders, projectsUsingSkill, skillCategories, skills, skillsIn } from "../data/skills";
import type { Skill, SkillCategory } from "../data/types";
import { usePageMeta } from "../hooks/usePageMeta";
import { cn } from "../lib/cn";

const BadgeList: React.FC<{ items: Skill[]; label: string }> = ({ items, label }) => (
  <ul className="flex flex-wrap gap-2" aria-label={label}>
    {items.map((skill) => (
      <li key={skill.name}>
        <SkillBadge skill={skill} />
      </li>
    ))}
  </ul>
);

const CategoryBody: React.FC<{ category: SkillCategory }> = ({ category }) => {
  if (category === "Cloud & Architecture") {
    return (
      <div className="grid gap-6 sm:grid-cols-3">
        {cloudProviders.map((provider) => (
          <div key={provider.name}>
            <h3 className="flex items-baseline gap-2">
              <span className="font-semibold text-fg">{provider.name}</span>
              <span className="text-xs text-muted">{provider.label}</span>
            </h3>
            <div className="mt-3">
              <BadgeList items={skillsIn(category, provider.name)} label={`${provider.label} services`} />
            </div>
          </div>
        ))}
      </div>
    );
  }

  const items = skillsIn(category);
  const tools = items.filter((skill) => skill.kind !== "practice");
  const practices = items.filter((skill) => skill.kind === "practice");

  return (
    <>
      <BadgeList items={tools} label={`${category} skills`} />
      {practices.length > 0 && (
        <>
          <h3 className="mt-6 font-mono text-xs uppercase tracking-[0.16em] text-muted">Practices</h3>
          <ul className="mt-2 grid gap-x-6 sm:grid-cols-2">
            {practices.map((skill) => (
              <li key={skill.name}>
                <SkillBadge skill={skill} />
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
};

const SkillsPage: React.FC = () => {
  usePageMeta({ title: "Skills", description: pages.skills.meta });

  const provenCount = skills.filter((skill) => projectsUsingSkill(skill).length > 0).length;

  return (
    <>
      <PageHeader {...pages.skills} />

      <Container className="py-12 sm:py-16">
        <div className="flex flex-col gap-3 rounded-lg border border-line bg-surface-2/50 p-5 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            <span className="font-semibold text-fg">{skills.length} skills</span> across{" "}
            <span className="font-semibold text-fg">{skillCategories.length} areas</span> ·{" "}
            <span className="font-semibold text-fg">{provenCount}</span> used in published projects
          </p>
          <p className="flex items-center gap-2">
            <span className="inline-block h-3 w-5 rounded-sm border border-accent/30 bg-accent-soft" aria-hidden="true" />
            Highlighted skills link to the projects that use them.
          </p>
        </div>

        <ul className="mt-8 grid gap-6 md:grid-cols-2">
          {skillCategories.map((category, index) => (
            <Reveal
              as="li"
              key={category.name}
              delay={(index % 2) * 80}
              className={cn(category.name === "Cloud & Architecture" && "md:col-span-2")}
            >
              <Card as="section" className="h-full" aria-labelledby={`skills-${index}`}>
                <h2 id={`skills-${index}`} className="text-h3 font-semibold text-fg">
                  {category.name}
                </h2>
                <p className="mt-1 text-sm text-muted">{category.description}</p>
                <div className="mt-5 border-t border-line pt-5">
                  <CategoryBody category={category.name} />
                </div>
              </Card>
            </Reveal>
          ))}
        </ul>
      </Container>
    </>
  );
};

export default SkillsPage;
