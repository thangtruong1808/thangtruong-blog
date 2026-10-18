// Purpose: About page: photo, story, quick facts, currently building, education and interests.
// Author: Thang Truong
// Date: 2026-10-18
import React from "react";
import authorPhoto from "../assets/TT-Photo.webp";
import ContactCta from "../components/home/ContactCta";
import Badge from "../components/ui/Badge";
import Card from "../components/ui/Card";
import Container from "../components/ui/Container";
import Reveal from "../components/ui/Reveal";
import Section, { Eyebrow } from "../components/ui/Section";
import { currentlyBuilding, goals, interests, quickFacts, story } from "../data/about";
import { pages } from "../data/pages";
import { achievements, education } from "../data/education";
import { profile } from "../data/profile";
import { usePageMeta } from "../hooks/usePageMeta";
import Placeholder from "../components/ui/Placeholder";
import { realContent } from "../lib/content";

const BulletList: React.FC<{ items: string[] }> = ({ items }) => (
  <ul className="mt-4 space-y-2.5">
    {items.map((item) => (
      <li key={item} className="flex gap-3 text-muted">
        <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

const AboutPage: React.FC = () => {
  usePageMeta({ title: "About", description: pages.about.meta });

  return (
    <>
      <header className="border-b border-line">
        <Container className="grid gap-12 py-14 sm:py-20 md:grid-cols-[1fr_16rem] md:items-center lg:grid-cols-[1fr_20rem]">
          <div>
            <Eyebrow>{pages.about.eyebrow}</Eyebrow>
            <h1 className="mt-3 text-h1 font-bold text-fg">{pages.about.title}</h1>
            <p className="mt-5 max-w-prose text-lead text-muted">{pages.about.description}</p>
          </div>
          <img
            src={authorPhoto}
            alt={`Portrait of ${profile.name}`}
            width={572}
            height={466}
            className="mx-auto aspect-[4/5] w-56 rounded-lg object-cover shadow-lift sm:w-64 md:w-full"
            style={{ objectPosition: "50% 25%" }}
          />
        </Container>
      </header>

      <Container className="grid gap-12 py-section lg:grid-cols-[minmax(0,1fr)_22rem] lg:gap-16">
        <Reveal>
          <h2 className="text-h2 font-bold text-fg">My story</h2>
          <div className="mt-6 max-w-prose space-y-5 text-lg leading-relaxed text-muted">
            {story.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </Reveal>

        <div className="space-y-6">
          <Reveal>
            <Card>
              <h2 className="font-mono text-xs uppercase tracking-[0.16em] text-muted">Quick facts</h2>
              <dl className="mt-5 space-y-4 text-sm">
                {quickFacts.map((fact) => {
                  const value = realContent(fact.value);
                  if (!value && !import.meta.env.DEV) return null;
                  return (
                    <div key={fact.label}>
                      <dt className="text-muted">{fact.label}</dt>
                      <dd className="mt-0.5 font-medium text-fg">{value ?? <Placeholder text={fact.value} />}</dd>
                    </div>
                  );
                })}
              </dl>
            </Card>
          </Reveal>
          <Reveal delay={80}>
            <Card>
              <h2 className="font-mono text-xs uppercase tracking-[0.16em] text-muted">Currently building</h2>
              <BulletList items={currentlyBuilding} />
            </Card>
          </Reveal>
        </div>
      </Container>

      <Section
        id="education"
        eyebrow="Education"
        title="Education & achievements"
        className="border-y border-line bg-surface-2/40"
      >
        <ol className="relative space-y-5 border-l border-line pl-6 sm:pl-8">
          {education.map((item, index) => (
            <Reveal as="li" key={item.id} delay={index * 60} className="relative">
              <span
                aria-hidden="true"
                className="absolute -left-[1.85rem] top-6 h-3 w-3 rounded-full border-2 border-canvas bg-accent ring-4 ring-accent-soft sm:-left-[2.35rem]"
              />
              <Card>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                  <span className="font-mono text-xs text-muted">{item.period}</span>
                  {item.current && <Badge tone="success">In progress</Badge>}
                  {item.note && <Badge>{item.note}</Badge>}
                </div>
                <h3 className="mt-3 text-h3 font-semibold text-fg">{item.title}</h3>
                <p className="mt-1 text-sm font-medium text-muted">{item.institution}</p>
              </Card>
            </Reveal>
          ))}
        </ol>

        <h3 className="mt-14 font-mono text-xs uppercase tracking-[0.16em] text-muted">Achievements</h3>
        <ul className="mt-4 grid gap-5 md:grid-cols-2">
          {achievements.map((item, index) => (
            <Reveal as="li" key={item.id} delay={(index % 2) * 80}>
              <Card className="h-full">
                <div className="flex items-center justify-between gap-3">
                  <Badge tone="accent">Achievement</Badge>
                  <span className="font-mono text-xs text-muted">{item.year}</span>
                </div>
                <p className="mt-3 font-semibold text-fg">{item.title}</p>
                <p className="mt-1 text-sm text-muted">{item.institution}</p>
                <p className="mt-2 text-sm text-muted">{item.description}</p>
              </Card>
            </Reveal>
          ))}
        </ul>
      </Section>

      <Section id="beyond-code" eyebrow="Beyond code" title="Interests & goals">
        <div className="grid gap-5 md:grid-cols-2">
          <Reveal>
            <Card className="h-full">
              <h3 className="text-h3 font-semibold text-fg">When I'm not coding</h3>
              <BulletList items={interests} />
            </Card>
          </Reveal>
          <Reveal delay={80}>
            <Card className="h-full">
              <h3 className="text-h3 font-semibold text-fg">Goals</h3>
              <BulletList items={goals} />
            </Card>
          </Reveal>
        </div>
      </Section>

      <ContactCta />
    </>
  );
};

export default AboutPage;
