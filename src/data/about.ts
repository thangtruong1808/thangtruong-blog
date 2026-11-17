// Purpose: About page copy. Story is drafted from facts on the site; strings starting with "[" are placeholders.
// Author: Thang Truong
// Date: 2026-10-18
import { profile } from "./profile";

export const story = [
  "I first worked in software in Ho Chi Minh City-Vietnam, building and testing PHP and JavaScript web applications at GCS after completing a Higher Diploma in Software Engineering.",
  "After moving to Melbourne I studied hospitality management and spent several years in a high-volume distribution centre, where reliability, safety and teamwork aren't optional, because a whole operation depends on them.",
  "I came back to software deliberately: a Bachelor of ICT (Software Technology) at Swinburne, a mentor role supporting new students, and products I've designed and shipped — from BadmintonStores on AWS and ShuttleSync (ASP.NET Core + AI Court Agent) to Southern Cross Burgers, a frontend ordering and iPad POS showcase.",
  "Since June 2026 I've been studying a part-time Master of Applied Artificial Intelligence at Deakin University, alongside building and shipping software.",
];

export const quickFacts = [
  { label: "Based in", value: "Melbourne, Australia" },
  {
    label: "Focus",
    value:
      "Full-stack and frontend product UI: React, TypeScript, Redux, Express.js, C# / ASP.NET Core, POS and dashboard layouts, cloud and DevOps",
  },
  { label: "Looking for", value: profile.lookingFor },
  { label: "Work rights", value: "Australian citizen" },
  { label: "Availability", value: "Available immediately, open to relocation" },
];

/** Keep in sync with published projects in src/data/projects.ts. */
export const currentlyBuilding = [
  "Shipping ShuttleSync (shuttlesync.space): court holds, Stripe checkout, reward points, and a Gemini-powered Court Agent on React + ASP.NET Core.",
  "Operating BadmintonStores on AWS: EC2, Lambda, API Gateway, S3 and CloudWatch alarms.",
  "Showcasing Southern Cross Burgers: customer ordering, touch-first iPad POS layout, admin analytics and mock/Stripe checkout on React.",
  "Maintaining Countries Explorer: GraphQL country data, charts and multi-filter UX on React.",
];

export const interests = [
  "Reading tech blogs and staying updated with industry trends",
  "Writing technical blog posts and tutorials",
  "Camping and hiking in my favourite places around Victoria",
  "Badminton, my favourite sport",
];

export const goals = [
  "Advanced JavaScript and its frameworks and libraries",
  "Contribute to major open-source projects",
  "Build a successful SaaS product",
  "Mentor junior developers and share knowledge",
];
