// Purpose: Friendly 404 page with routes back into the site.
// Author: Thang Truong
// Date: 2026-10-18
import React from "react";
import { FiArrowLeft } from "react-icons/fi";
import Button from "../components/ui/Button";
import Container from "../components/ui/Container";
import { Eyebrow } from "../components/ui/Section";
import { usePageMeta } from "../hooks/usePageMeta";

const NotFoundPage: React.FC = () => {
  usePageMeta({ title: "Page not found", description: "This page doesn't exist." });

  return (
    <Container className="relative py-24 sm:py-32">
      <div aria-hidden="true" className="hero-grid absolute inset-0" />
      <div className="relative max-w-xl">
        <Eyebrow>Error 404</Eyebrow>
        <h1 className="mt-3 text-h1 font-bold text-fg">This page took a wrong turn.</h1>
        <p className="mt-4 text-lead text-muted">
          The link may be old or mistyped. Try one of these instead.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button to="/" size="lg" icon={<FiArrowLeft className="h-4 w-4" aria-hidden="true" />}>
            Back home
          </Button>
          <Button to="/projects" variant="secondary" size="lg">
            See projects
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default NotFoundPage;
