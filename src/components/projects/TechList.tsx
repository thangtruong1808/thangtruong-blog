// Purpose: Tech stack badges with an optional "+N more" overflow.
// Author: Thang Truong
// Date: 2026-10-18
import React from "react";
import Badge from "../ui/Badge";

interface TechListProps {
  technologies: string[];
  limit?: number;
  label?: string;
}

const TechList: React.FC<TechListProps> = ({ technologies, limit, label = "Tech stack" }) => {
  const shown = limit ? technologies.slice(0, limit) : technologies;
  const hidden = technologies.length - shown.length;

  return (
    <ul className="flex flex-wrap gap-1.5" aria-label={label}>
      {shown.map((tech) => (
        <li key={tech}>
          <Badge>{tech}</Badge>
        </li>
      ))}
      {hidden > 0 && (
        <li>
          <Badge className="border-dashed">
            +{hidden}
            <span className="sr-only"> more technologies</span>
          </Badge>
        </li>
      )}
    </ul>
  );
};

export default TechList;
