// Purpose: Home page: hero, featured projects, skills snapshot, intro video and contact CTA.
// Author: Thang Truong
// Date: 2026-10-18
import React from "react";
import { FiArrowRight } from "react-icons/fi";
import ContactCta from "../components/home/ContactCta";
import Hero from "../components/home/Hero";
import SkillsSnapshot from "../components/home/SkillsSnapshot";
import VideoFacade from "../components/home/VideoFacade";
import ProjectCard from "../components/projects/ProjectCard";
import Button from "../components/ui/Button";
import Reveal from "../components/ui/Reveal";
import Section from "../components/ui/Section";
import { pages } from "../data/pages";
import { profile } from "../data/profile";
import { featuredProjects } from "../data/projects";
import { usePageMeta } from "../hooks/usePageMeta";
import { getYouTubeId } from "../lib/youtube";

const arrow = <FiArrowRight className="h-4 w-4" aria-hidden="true" />;

const HomePage: React.FC = () => {
  usePageMeta({ title: "Home", description: pages.home.meta });
  const videoId = getYouTubeId(profile.featuredVideoUrl);

  return (
    <>
      <Hero />

      <Section
        id="featured"
        eyebrow="Selected work"
        title="Featured projects"
        description="Full-stack applications I designed, built and deployed: the problem, the stack and how each one runs in production."
        action={
          <Button to="/projects" variant="secondary" iconRight={arrow}>
            All projects
          </Button>
        }
      >
        <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <Reveal as="li" key={project.id} delay={index * 80}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </ul>
      </Section>

      <Section
        id="skills"
        eyebrow="Toolkit"
        title="What I work with"
        description="The languages, frameworks and cloud services I build with, from the UI to the deployment pipeline."
        className="border-y border-line bg-surface-2/40"
        action={
          <Button to="/skills" variant="secondary" iconRight={arrow}>
            Full skills matrix
          </Button>
        }
      >
        <SkillsSnapshot />
      </Section>

      {videoId && (
        <Section
          id="intro"
          eyebrow="Introduction"
          title="Meet me in two minutes"
          description="A short video on who I am, how I work and what I'm looking for."
        >
          <Reveal className="mx-auto max-w-4xl">
            <VideoFacade videoId={videoId} title={`${profile.name}: introduction (2 min)`} />
          </Reveal>
        </Section>
      )}

      <ContactCta />
    </>
  );
};

export default HomePage;
