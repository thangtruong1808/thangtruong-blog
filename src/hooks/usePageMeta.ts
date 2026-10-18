// Purpose: Set per-page title, description, canonical and social tags for client-side navigation.
// Author: Thang Truong
// Date: 2026-10-18
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { profile } from "../data/profile";

interface PageMeta {
  title: string;
  description: string;
}

const setMeta = (selector: string, attribute: "name" | "property", key: string, content: string) => {
  let element = document.head.querySelector<HTMLMetaElement>(selector);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.content = content;
};

/**
 * index.html carries the site-wide defaults that crawlers without JavaScript see;
 * this keeps tags in sync as the visitor navigates.
 */
export const usePageMeta = ({ title, description }: PageMeta) => {
  const { pathname } = useLocation();

  useEffect(() => {
    const fullTitle = pathname === "/" ? `${profile.name} | ${profile.headline}` : `${title} | ${profile.name}`;
    const url = `${profile.siteUrl}${pathname === "/" ? "/" : pathname}`;

    document.title = fullTitle;
    setMeta('meta[name="description"]', "name", "description", description);
    setMeta('meta[property="og:title"]', "property", "og:title", fullTitle);
    setMeta('meta[property="og:description"]', "property", "og:description", description);
    setMeta('meta[property="og:url"]', "property", "og:url", url);
    setMeta('meta[name="twitter:title"]', "name", "twitter:title", fullTitle);
    setMeta('meta[name="twitter:description"]', "name", "twitter:description", description);
    document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')?.setAttribute("href", url);
  }, [title, description, pathname]);
};
