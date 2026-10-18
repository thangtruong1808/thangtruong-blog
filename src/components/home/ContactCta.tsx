// Purpose: Closing call-to-action band pointing to the contact page and CV.
// Author: Thang Truong
// Date: 2026-10-18
import React from "react";
import { FiArrowRight, FiDownload } from "react-icons/fi";
import { profile } from "../../data/profile";
import Button from "../ui/Button";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";

const ContactCta: React.FC = () => (
  <section className="pb-section" aria-labelledby="cta-title">
    <Container>
      <Reveal className="relative overflow-hidden rounded-lg border border-line bg-surface px-6 py-12 shadow-soft sm:px-12 sm:py-16">
        <div aria-hidden="true" className="hero-grid absolute inset-0 opacity-60" />
        <div aria-hidden="true" className="absolute -right-24 -top-28 h-80 w-80 rounded-full bg-accent/20 blur-3xl" />
        <div className="relative max-w-2xl">
          <h2 id="cta-title" className="text-h2 font-bold text-fg">
            Hiring a frontend, backend, full-stack or DevOps developer?
          </h2>
          <p className="mt-3 text-muted">
            {profile.availability} {profile.responseTime}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button to="/contact" size="lg" iconRight={<FiArrowRight className="h-4 w-4" aria-hidden="true" />}>
              Contact me
            </Button>
            {profile.hasCv && (
              <Button
                href={profile.cvUrl}
                download
                variant="secondary"
                size="lg"
                icon={<FiDownload className="h-4 w-4" aria-hidden="true" />}
              >
                Download CV
              </Button>
            )}
          </div>
        </div>
      </Reveal>
    </Container>
  </section>
);

export default ContactCta;
