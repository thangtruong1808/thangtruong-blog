// Purpose: Compact three-column skills overview for the home page.
// Author: Thang Truong
// Date: 2026-10-18
import React from "react";
import { skillsIn } from "../../data/skills";
import type { Skill, SkillCategory } from "../../data/types";
import Badge from "../ui/Badge";
import Card from "../ui/Card";
import Reveal from "../ui/Reveal";

const groups: { title: string; categories: SkillCategory[] }[] = [
  { title: "Frontend", categories: ["Frontend"] },
  { title: "Backend & data", categories: ["Backend", "Database"] },
  { title: "Cloud & DevOps", categories: ["Cloud & Architecture", "DevOps, Automation & Quality"] },
];

const label = (skill: Skill) => (skill.provider ? `${skill.provider} ${skill.name}` : skill.name);

const SkillsSnapshot: React.FC = () => (
  <ul className="grid gap-5 md:grid-cols-3">
    {groups.map((group, index) => (
      <Reveal as="li" key={group.title} delay={index * 80}>
        <Card className="h-full">
          <h3 className="text-h3 font-semibold text-fg">{group.title}</h3>
          <ul className="mt-4 flex flex-wrap gap-1.5">
            {group.categories
              .flatMap((category) => skillsIn(category))
              .filter((skill) => skill.kind !== "practice")
              .map((skill) => (
                <li key={label(skill)}>
                  <Badge>{label(skill)}</Badge>
                </li>
              ))}
          </ul>
        </Card>
      </Reveal>
    ))}
  </ul>
);

export default SkillsSnapshot;
