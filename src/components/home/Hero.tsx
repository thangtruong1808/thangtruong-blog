// Purpose: Above-the-fold value proposition with primary CTAs and a featured project preview.
// Author: Thang Truong
// Date: 2026-10-18
import React from "react";
import { Link } from "react-router-dom";
import { FiArrowRight, FiArrowUpRight, FiDownload, FiMapPin } from "react-icons/fi";
import authorPhoto from "../../assets/TT-Photo.webp";
import { profile } from "../../data/profile";
import { featuredProjects, projects } from "../../data/projects";
import { socialLinks } from "../../data/socialLinks";
import Badge from "../ui/Badge";
import Button from "../ui/Button";
import Container from "../ui/Container";
import { Eyebrow } from "../ui/Section";
import ProjectImage from "../projects/ProjectImage";
import TechList from "../projects/TechList";

const hostname = (url?: string) => {
  try {
    return url ? new URL(url).hostname.replace(/^www\./, "") : "";
  } catch {
    return "";
  }
};

const stats = [
  { value: String(projects.length), label: "shipped projects" },
  { value: "AWS", label: "EC2 · Lambda · S3 in production" },
  { value: "BICT", label: "Swinburne, 2025" },
];

const FeaturedPreview: React.FC = () => {
  const project = featuredProjects[0];
  if (!project) return null;

  return (
    <Link
      to={`/projects/${project.id}`}
      className="group relative block rotate-1 rounded-lg border border-line bg-surface shadow-lift transition-transform duration-500 hover:rotate-0"
    >
      <div className="flex items-center gap-2 border-b border-line px-4 py-3" aria-hidden="true">
        <span className="h-2.5 w-2.5 rounded-full bg-line" />
        <span className="h-2.5 w-2.5 rounded-full bg-line" />
        <span className="h-2.5 w-2.5 rounded-full bg-line" />
        <span className="ml-3 truncate rounded-sm bg-surface-2 px-2 py-0.5 font-mono text-xs text-muted">
          {hostname(project.liveUrl) || "case study"}
        </span>
      </div>
      <ProjectImage project={project} priority />
      <div className="border-t border-line p-5">
        <p className="font-mono text-xs uppercase tracking-[0.16em] text-muted">Featured project</p>
        <p className="mt-2 flex items-center justify-between gap-3 font-semibold text-fg">
          {project.title}
          <FiArrowUpRight
            className="h-5 w-5 shrink-0 text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
            aria-hidden="true"
          />
        </p>
        <div className="mt-4">
          <TechList technologies={project.technologies} limit={4} />
        </div>
      </div>
    </Link>
  );
};

const Hero: React.FC = () => (
  <section className="relative overflow-hidden border-b border-line" aria-labelledby="hero-title">
    <div aria-hidden="true" className="hero-grid absolute inset-0" />
    <div
      aria-hidden="true"
      className="absolute -top-48 right-[-12rem] h-[34rem] w-[34rem] rounded-full bg-accent/15 blur-3xl dark:bg-accent/10"
    />

    <Container className="relative grid gap-14 py-14 sm:py-20 lg:grid-cols-[1.25fr_1fr] lg:items-center lg:gap-16 lg:py-28">
      <div>
        <div className="flex flex-wrap items-center gap-3">
          <span className="inline-flex h-11 w-11 shrink-0 overflow-hidden rounded-full">
            <img
              src={authorPhoto}
              alt=""
              width={44}
              height={44}
              className="h-full w-full object-cover"
              style={{ objectPosition: "50% 20%" }}
            />
          </span>
          <Badge tone="success">
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-60 motion-reduce:hidden" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
            </span>
            {profile.status} · {profile.location}
          </Badge>
        </div>

        <Eyebrow className="mt-8 text-sm normal-case leading-relaxed tracking-normal">{profile.headline}</Eyebrow>
        <h1 id="hero-title" className="mt-3 text-display font-bold text-fg">
          {profile.name}
        </h1>
        <p className="mt-6 max-w-xl text-lead font-medium text-fg/90">{profile.positioning}</p>
        <p className="mt-3 max-w-xl text-muted">{profile.intro}</p>
        <p className="mt-4 flex max-w-xl items-start gap-2 text-sm font-medium text-fg">
          <FiMapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
          {profile.availability}
        </p>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Button to="/projects" size="lg" iconRight={<FiArrowRight className="h-4 w-4" aria-hidden="true" />}>
            View projects
          </Button>
          {profile.hasCv ? (
            <Button
              href={profile.cvUrl}
              download
              variant="secondary"
              size="lg"
              icon={<FiDownload className="h-4 w-4" aria-hidden="true" />}
            >
              Download CV
            </Button>
          ) : (
            <Button to="/contact" variant="secondary" size="lg">
              Get in touch
            </Button>
          )}
          <ul className="flex items-center gap-1 sm:ml-2" aria-label="Profiles">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target={href.startsWith("mailto:") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid h-11 w-11 place-items-center rounded-md text-muted transition-colors hover:bg-surface-2 hover:text-fg"
                >
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <dl className="mt-12 grid max-w-xl grid-cols-3 gap-4 border-t border-line pt-6">
          {stats.map((stat) => (
            <div key={stat.label}>
              <dt className="sr-only">{stat.label}</dt>
              <dd>
                <span className="block text-xl font-bold tracking-tight text-fg sm:text-2xl">{stat.value}</span>
                <span className="mt-1 block text-xs leading-snug text-muted">{stat.label}</span>
              </dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="hidden lg:block">
        <FeaturedPreview />
      </div>
    </Container>
  </section>
);

export default Hero;
