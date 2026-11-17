// Purpose: Project case-study content. Strings starting with "[" are placeholders (hidden in production).
// Author: Thang Truong
// Date: 2026-10-18
import type { Project } from "./types";
import BadmintonStoresLogo from "../assets/BadmintonStoresLogo.webp";
import CountriesExplorerImage from "../assets/CountriesExplorer2.webp";
import SouthernCrossBurgersLogo from "../assets/SouthernCrossBurgersLogo.png";

const env = import.meta.env;

/** Public URLs: prefer VITE_* when set, otherwise fall back so production still shows Live/Code without Vercel env. */
const url = (value: string | undefined, fallback: string) => (value ?? "").trim() || fallback;

const allProjects: Project[] = [
  {
    id: 2,
    title: "ShuttleSync — Court Booking Platform",
    tagline:
      "AI-powered badminton court booking: holds, Stripe checkout, reward points, and a staff dashboard on ASP.NET Core.",
    overview:
      "ShuttleSync is a badminton booking platform for clubs that sell courts, run drop-in socials, and take card payments in one place. Players see which courts are free, hold a weekly time, and pay with Stripe, a promotion code, or reward points. Each venue keeps its own hours, weekday and weekend rate windows, closures, and social sessions. Staff run the club from a dashboard; Court Agent (Gemini) books through the same server-side services as the HTTP API.",
    problem:
      "Clubs juggle court availability, multi-week holds, social sessions, pricing windows, refunds, and payments across separate tools. Players need one place to find a free court, hold it, and pay.",
    role: "[ROLE] e.g. Solo developer: React SPA, ASP.NET Core Minimal API, MySQL schema, Stripe, Gemini Court Agent, and VPS deployment",
    impact: "[METRIC] e.g. venues supported, bookings processed, or Court Agent completion rate",
    highlights: [
      "Court holds for 1–12 weeks with pay-now (within 24 hours) or pay-later checkout.",
      "Pricing sliced at each rate-window boundary in the venue timezone; unpaid holds reprice when rates change.",
      "Stripe Checkout, webhooks, refunds, promotion codes, and reward-point redemptions.",
      "Public social sessions with waitlist, friend spots, and club incentives.",
      "Cookie-based auth: JWT access/refresh in HTTP-only cookies, CSRF, Google and GitHub OAuth.",
      "Staff/admin dashboard for venues, courts, rates, closures, bookings, payments, and players.",
      "Court Agent: Gemini function calling that runs the same booking and payment services as the API (availability, quote, hold, checkout).",
      "Cloudinary for profile photos and court images; Gemini image generation for court artwork.",
    ],
    architecture: [
      "React SPA served by Nginx; same-origin `/api` reverse-proxied to ASP.NET Core so session cookies stay first-party.",
      "ASP.NET Core (.NET 10) Minimal APIs own booking rules, pricing, holds, and payments; Dapper + MySqlConnector against MySQL 8.",
      "Stripe Checkout and webhooks for payment lifecycle; refunds and rate-balance top-ups when venue rates change.",
      "Court Agent tools call repositories and payment services in-process (not over public HTTP), with the same business errors as the API.",
      "Production: Ubuntu VPS, Nginx + Certbot, Docker Compose for the API, MySQL on the host, UFW limited to SSH/HTTP/HTTPS.",
    ],
    challenges: [
      "[CHALLENGE] e.g. Repricing unpaid holds and balancing paid bookings when venue rate windows change",
    ],
    learnings: [
      "[LEARNING] e.g. Cookie-based JWT + CSRF on a same-origin SPA/API, and grounding an AI agent in real booking tools",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "React Router",
      "Redux Toolkit",
      "C#",
      "ASP.NET Core",
      "Dapper",
      "MySQL",
      "JWT",
      "Stripe",
      "Google OAuth",
      "GitHub OAuth",
      "Gemini",
      "Cloudinary",
      "Nginx",
      "Docker",
      "Docker Compose",
      "Certbot",
      "HTML5",
    ],
    type: "Full-stack",
    image: (env.VITE_SHUTTLESYNC_IMAGE ?? "").trim() || "https://shuttlesync.space/icon-512.png",
    imageFit: "contain",
    liveUrl: url(env.VITE_SHUTTLESYNC_LIVE_URL, "https://shuttlesync.space"),
    githubUrl: url(env.VITE_SHUTTLESYNC_GITHUB, "https://github.com/thangtruong1808/shuttle-sync-dotnet-react"),
    featured: true,
    published: true,
  },
  {
    id: 1,
    title: "BadmintonStores — E-commerce Platform",
    tagline: "Full-stack store with an admin dashboard, Stripe webhooks and a Dockerised AWS deployment.",
    overview:
      "A feature-rich, full-stack e-commerce platform built with React, Node.js/Express, MySQL and AWS S3, designed to showcase a wide range of modern web development practices: a responsive frontend and a secure backend.",
    problem: "[PROBLEM] What gap does this store solve, and for whom?",
    role: "[ROLE] e.g. Solo developer: UI, REST API, database design and AWS deployment",
    impact: "[METRIC] e.g. Lighthouse score, page load time, number of products/orders handled",
    highlights: [
      "Secure user registration and login with JWT (JSON Web Tokens) and refresh tokens, including password reset.",
      "Full CRUD operations for products, including nested categories, subcategories and child categories.",
      "Persistent shopping cart for authenticated users.",
      "Complete order management system with PDF invoice generation.",
      "Users can leave reviews and comments on products.",
      "Create and manage discount vouchers.",
      "Admin dashboard to manage products, categories, orders and users, and view site analytics.",
      "Image and video uploads for products, stored in AWS S3.",
      "Advanced product search and filtering.",
      "Tracking of product views and other user interactions.",
    ],
    architecture: [
      "Amazon VPC provides network isolation for the production infrastructure.",
      "Security Group rules control inbound access (SSH on 22 and app/API traffic) for secure connectivity.",
      "Amazon EC2 (Ubuntu) runs the Dockerized frontend and backend services.",
      "Amazon EBS is used as persistent root storage for the EC2 instance.",
      "Domain + DNS routing serves the API via subdomain.",
      "AWS Lambda processes Stripe webhook events serverlessly.",
      "Amazon API Gateway (HTTP API) exposes POST /stripe/webhook and invokes Lambda.",
      "Amazon S3 stores media assets (product images/videos and static asset links used by the app).",
      "Amazon CloudWatch Logs captures Lambda/API logs for troubleshooting and monitoring.",
      "Amazon CloudWatch Alarms are configured for EC2 operational health (CPU, memory/RAM, and disk usage) to alert on resource pressure.",
    ],
    challenges: ["[CHALLENGE] e.g. Verifying Stripe webhook signatures through API Gateway + Lambda"],
    learnings: ["[LEARNING] e.g. Running Docker on EC2 and monitoring it with CloudWatch Alarms"],
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Recharts",
      "Axios",
      "Node.js",
      "Express.js",
      "MySQL",
      "JWT",
      "Bcrypt",
      "Multer",
      "Sharp",
      "Nodemailer",
      "PDFKit",
      "Stripe",
      "Docker",
      "AWS EC2",
      "AWS EBS",
      "AWS VPC",
      "AWS Security Groups",
      "AWS S3",
      "AWS Lambda",
      "AWS API Gateway",
      "AWS CloudWatch",
      "HTML5",
      "nodemon",
    ],
    type: "Full-stack",
    image: BadmintonStoresLogo,
    imageFit: "contain",
    liveUrl: url(env.VITE_ECOMMERCE_BADMINTONSTORES_LIVE_URL, "https://www.badmintonecommerce.store/"),
    githubUrl: url(env.VITE_ECOMMERCE_BADMINTONSTORES_GITHUB, "https://github.com/thangtruong1808/Ecommerce_mysql_db"),
    featured: true,
    published: true,
  },
  {
    id: 3,
    title: "Southern Cross Burgers — Online Ordering",
    tagline:
      "Melbourne craft fast-food ordering showcase: cart, mock/Stripe checkout, live tracking, POS and admin analytics.",
    overview:
      "A frontend-only showcase for Southern Cross Burgers — a fictional Melbourne craft fast-food kitchen. Built with React 19, Vite, Tailwind CSS v4, Redux Toolkit and Recharts, it covers modern product design, WCAG AA accessibility, data visualisation, and an end-to-end Australian e-commerce flow with AUD pricing and 10% GST.",
    problem:
      "Restaurant demos often skip real ordering UX: customisation, tax, delivery thresholds, payments, tracking and ops tools. This app packages those flows in one accessible frontend.",
    role: "[ROLE] e.g. Solo developer: product UI, Redux state, payment adapters, POS mode and admin analytics",
    impact: "[METRIC] e.g. demo personas covered, charts shipped, or Vitest coverage",
    highlights: [
      "Eight connected Melbourne kitchens with AUD pricing and explicit 10% Australian GST.",
      "Interactive item customisation: size upgrades, meal combos, add-ons, removals and kitchen notes with live pricing.",
      "Cart drawer with upsells, free-delivery threshold, promo codes and GST breakdown.",
      "Dual payment adapters: offline mock checkout (success, 3DS challenge, decline) and Stripe test mode via a Vercel serverless payment intent.",
      "Animated order tracking timeline with countdown, courier status and printable Australian tax invoice.",
      "Customer dashboard with Flame Rewards tiers, vouchers, saved addresses and 1-click reorder.",
      "Touch-first POS register mode for iPad landscape and an admin analytics dashboard with Recharts (revenue, rush hour, category share, live kitchen gateway).",
      "Demo persona switcher and API simulator for latency / 503 error recovery.",
    ],
    architecture: [
      "React 19 SPA with Vite code-splitting and a React Router data router.",
      "Redux Toolkit slices (cart, orders, stores, auth) with RTK Query mock API and localStorage sync.",
      "Payment adapter pattern: MockPaymentAdapter by default; StripePaymentAdapter + Vercel Node `/api/create-payment-intent` when configured.",
      "Seed data for menu, stores, promos and analytics keeps the demo fully offline.",
    ],
    challenges: ["[CHALLENGE] e.g. Keeping mock and Stripe payment adapters interchangeable without forking checkout UX"],
    learnings: ["[LEARNING] e.g. Building a WCAG AA ordering flow with live pricing and dual payment adapters"],
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Redux Toolkit",
      "RTK Query",
      "React Router",
      "Recharts",
      "Radix UI",
      "Lucide React",
      "Sonner",
      "Motion",
      "Stripe",
      "Vitest",
      "Testing Library",
      "POS Layout",
      "Touch UI",
      "WCAG AA",
      "HTML5",
    ],
    type: "Frontend",
    image: (env.VITE_SOUTHERNCROSSBURGERS_IMAGE ?? "").trim() || SouthernCrossBurgersLogo,
    imageFit: "contain",
    imageBg: "dark",
    liveUrl: url(env.VITE_SOUTHERNCROSSBURGERS_LIVE_URL, "http://5.183.32.74:8090/"),
    githubUrl: url(
      env.VITE_SOUTHERNCROSSBURGERS_GITHUB,
      "https://github.com/thangtruong1808/fastfood-onlineorder-app"
    ),
    featured: true,
    published: true,
  },
  {
    id: 5,
    title: "Countries Explorer",
    tagline: "Interactive explorer for 250+ countries with GraphQL data, charts and real-time multi-filtering.",
    overview:
      "A modern, interactive frontend web application for exploring world countries, continents, languages, and currencies with data visualizations and real-time filtering.",
    problem:
      "Country data (capitals, currencies, languages, maps) is scattered and hard to compare. This app makes it searchable, filterable and visual.",
    role: "[ROLE]",
    impact: "[METRIC]",
    highlights: [
      "Responsive design: a clean, fully responsive UI on desktop and mobile.",
      "Browse & search: instantly search and browse over 250 countries.",
      "Detailed view: capital, population, area, currencies, languages, location on Google Maps, flag and coat of arms.",
      "Pagination: infinite scroll to load more countries.",
      "Continent dashboard: statistics and countries for each continent.",
      "Data visualizations: interactive bar and pie charts for continents and languages.",
      "Real-time filtering by continent, currency, and language, with multiple filters at once.",
      "Dark/light theme switching.",
      "Skeletons & spinners for a smooth loading experience.",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Material-UI",
      "Zustand",
      "Emotion",
      "GraphQL",
      "Apollo Client",
      "Chart.js",
      "Vite",
      "Google Maps API",
      "Node.js",
      "Postman",
      "HTML5",
    ],
    type: "Frontend",
    image: CountriesExplorerImage,
    imageFit: "cover",
    liveUrl: url(env.VITE_COUNTRIESEXPLORERAPP_LIVE_URL, "https://countries-explorer-eight.vercel.app/"),
    githubUrl: url(env.VITE_COUNTRIESEXPLORERAPP_GITHUB, "https://github.com/thangtruong1808/Countries-Explorer"),
    featured: true,
    published: true,
  },
];

export const projects: Project[] = allProjects.filter((project) => project.published);

export const featuredProjects: Project[] = projects.filter((project) => project.featured);

export const getProject = (id: number): Project | undefined => projects.find((project) => project.id === id);

/** Matches "AWS" to "AWS EC2", "Redux" to "Redux Toolkit", etc. Prefer skill aliases for longer skill names. */
export const usesTechnology = (project: Project, tech: string): boolean =>
  project.technologies.some((item) => item === tech || item.startsWith(`${tech} `));
