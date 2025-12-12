// Purpose: Orchestrates blog page sections with async-loaded data.
// Author: Thang Truong
// Date: 2025-12-11
import React, { useEffect, useState } from "react";
import HeroSection from "./blog/HeroSection";
import AchievementsSection from "./blog/AchievementsSection";
import type { Project, Achievement } from "./blog/types";
import { fetchProjects } from "./blog/data/projects";
import { fetchAchievements } from "./blog/data/achievements";
import authorPhoto from "../assets/TT-Photo.jpg";

/**
 * Normalizes YouTube URLs to embeddable form.
 */
const getEmbedUrl = (rawUrl: string): string => {
  if (!rawUrl) return "";
  try {
    const url = new URL(rawUrl);
    // Already embed link
    if (url.hostname.includes("youtube.com") && url.pathname.startsWith("/embed/")) {
      return rawUrl;
    }
    // Standard watch link
    if (url.hostname.includes("youtube.com") && url.searchParams.get("v")) {
      const videoId = url.searchParams.get("v");
      return videoId ? `https://www.youtube.com/embed/${videoId}` : "";
    }
    // Short youtu.be link
    if (url.hostname === "youtu.be" && url.pathname.length > 1) {
      const videoId = url.pathname.slice(1);
      return `https://www.youtube.com/embed/${videoId}`;
    }
    return "";
  } catch {
    return "";
  }
};

interface BlogPageProps {
  authorName: string;
  authorBio: string;
  authorAvatar?: string;
  location?: string;
  email?: string;
  github?: string;
  linkedin?: string;
  facebook?: string;
}

/**
 * Coordinates loading of blog-related data and renders page sections.
 */
const BlogPage: React.FC<BlogPageProps> = ({
  authorName,
  authorBio,
  authorAvatar = authorPhoto,
  location = "Truganina, Melbourne, Victoria, Australia",
  email = import.meta.env.VITE_AUTHOR_EMAIL ?? "",
  github = import.meta.env.VITE_GITHUB_URL ?? "",
  linkedin = import.meta.env.VITE_LINKEDIN_URL ?? "",
  facebook = import.meta.env.VITE_FACEBOOK_URL ?? "",
}) => {
  const featuredVideoUrl = getEmbedUrl(import.meta.env.VITE_FEATURED_VIDEO_URL ?? "");
  const [projects, setProjects] = useState<Project[]>([]);
  const [achievements, setAchievements] = useState<Achievement[]>([]);

  useEffect(() => {
    const loadContent = async () => {
      const [projectList, achievementList] = await Promise.all([fetchProjects(), fetchAchievements()]);
      setProjects(projectList);
      setAchievements(achievementList);
    };

    void loadContent();
  }, []);

  return (
    // Blog page wrapper
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <HeroSection
        authorName={authorName}
        authorBio={authorBio}
        authorAvatar={authorAvatar}
        location={location}
        email={email}
        github={github}
        linkedin={linkedin}
        facebook={facebook}
        projects={projects}
      />
      {featuredVideoUrl && (
        // Featured video section wrapper
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Introduction Video (2 min)
          </h2>
          <div className="relative pt-[56.25%] rounded-lg overflow-hidden shadow-lg">
            <iframe
              title="Featured video"
              src={featuredVideoUrl}
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full border-0"
            />
          </div>
        </section>
      )}
      <AchievementsSection achievements={achievements} />
    </div>
  );
};

export default BlogPage;
