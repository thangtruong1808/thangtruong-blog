// Purpose: Fixed-ratio project thumbnail (no layout shift) with logo-friendly "contain" mode.
// Author: Thang Truong
// Date: 2026-10-18
import React from "react";
import type { Project } from "../../data/types";
import { cn } from "../../lib/cn";

interface ProjectImageProps {
  project: Project;
  priority?: boolean;
  className?: string;
  zoomOnHover?: boolean;
}

const ProjectImage: React.FC<ProjectImageProps> = ({ project, priority = false, className, zoomOnHover = false }) => {
  const contain = project.imageFit === "contain";

  return (
    <div
      className={cn(
        "relative aspect-[16/10] overflow-hidden",
        contain ? "bg-white" : "bg-surface-2",
        className
      )}
    >
      {project.image ? (
        <img
          src={project.image}
          alt={`${project.title} preview`}
          width={800}
          height={500}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          fetchPriority={priority ? "high" : "auto"}
          className={cn(
            "h-full w-full transition-transform duration-500",
            contain ? "object-contain p-6" : "object-cover",
            zoomOnHover && "group-hover:scale-[1.03]"
          )}
        />
      ) : (
        <div className="grid h-full place-items-center font-mono text-sm text-muted">{project.title}</div>
      )}
    </div>
  );
};

export default ProjectImage;
