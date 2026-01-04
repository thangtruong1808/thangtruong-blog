// Purpose: Provide featured projects via async API-like function.
// Author: Thang Truong
// Date: 2025-12-11

import type { Project } from "../types";
import NewsStudioAppImage from "../../../assets/NEWSSTUDIOAPP_IMAGE.jpg";
import CountriesExplorerAppImage from "../../../assets/CountriesExplorer2.jpg";

/**
 * Fetches featured projects asynchronously to mimic API behavior.
 */
export const fetchProjects = async (): Promise<Project[]> => {
  return [
    {
      id: 1,
      title: "Ecommerce Application - BadmintonStores",
      description: (
        <div>
          <p>
            This is a feature-rich, full-stack E-commerce platform built with
            the MERN stack (MySQL, Express, React, Node.js and AWS S3 bucket)
            and designed to showcase a wide range of modern web development
            practices. It includes a beautiful, responsive frontend and a
            powerful, secure backend.
          </p>

          <p className="mt-4 font-semibold">Key features include:</p>

          <ul className="list-disc ml-6 mt-2">
            <li className="py-2">
              Secure user registration and login with JWT (JSON Web Tokens) and
              refresh tokens. Includes password reset functionality.
            </li>
            <li className="py-2">
              Full CRUD operations for products, including nested categories,
              subcategories and child categories.
            </li>
            <li className="py-2">
              Persistent shopping cart functionality for authenticated users.
            </li>
            <li className="py-2">
              Complete order management system with invoice generation(PDFs).
            </li>
            <li className="py-2">
              Users can leave reviews and comments on products.
            </li>
            <li className="py-2">Create and manage discount vouchers.</li>
            <li className="py-2">
              A powerful dashboard for site administrators to manage products,
              categories, orders, users, and view site analytics.
            </li>
            <li className="py-2">
              Image and video uploads for products, with integration with AWS S3
              for cloud storage.
            </li>
            <li className="py-2">
              Advanced product search and filtering capabilities.
            </li>
            <li className="py-2">
              Tracking of product views and other user interactions.
            </li>
          </ul>
        </div>
      ),

      technologies: [
        "HTML5",
        "TailwindCSS",
        "TypeScript",
        "React.js",
        "Recharts",
        "Axios",
        "Node.js",
        "Express.js",
        "nodemon",
        "AWS S3",
        "MySQL",
        "JWT",
        "Bcrypt",
        "Multer",
        "Sharp",
        "Nodemailer",
        "PDFKit",
      ],
      image: import.meta.env.VITE_ECOMMERCE_BADMINTONSTORES_IMAGE ?? "",
      liveUrl: import.meta.env.VITE_ECOMMERCE_BADMINTONSTORES_LIVE_URL ?? "",
      githubUrl: import.meta.env.VITE_ECOMMERCE_BADMINTONSTORES_GITHUB ?? "",
      category: "Full-stack",
    },
    {
      id: 2,
      title: "Todo List Application",
      description: (
        <div>
          <p className="py-2">
            A comprehensive full-stack Todo List application built with React,
            TypeScript, Node.js (Express), and MySQL. This project provides a
            modern, responsive, and user-friendly interface to manage tasks
            effectively, featuring multiple views and complete CRUD
            functionality.
          </p>

          <p className="py-2">Key Features:</p>

          <ul className="list-disc ml-6 mt-2">
            <li className="py-2">
              Responsive Design: A clean and fully responsive UI built with
              Tailwind CSS, ensuring a great experience on both desktop and
              mobile devices.
            </li>
            <li className="py-2">
              Create, Read, Update, Delete (CRUD): Full capability to manage
              your tasks
            </li>

            <li className="py-2">
              Table View: A detailed, sortable, and paginated grid for a
              comprehensive look at your tasks..
            </li>

            <li className="py-2">
              Kanban Board: A drag-and-drop interface to visualize workflow and
              update task status intuitively.
            </li>

            <li className="py-2">
              Status Filtering: Easily filter tasks on the Kanban board by their
              status (e.g., "Pending", "In Progress", "Completed").
            </li>

            <li className="py-2">
              Robust Backend: A powerful and scalable backend powered by
              Express.js and TypeScript.
            </li>
            <li className="py-2">
              Persistent Storage: Tasks are saved in a MySQL database, ensuring
              your data is safe and persistent.
            </li>
            <li className="py-2">
              RESTful API: A well-structured API for seamless communication
              between the frontend and backend.
            </li>
          </ul>
        </div>
      ),
      technologies: [
        "HTML5",
        "TailwindCSS",
        "TypeScript",
        "React.js",
        "Express.js",
        "MySQL",
        "Postman",
      ],
      image: import.meta.env.VITE_TODOLISTAPP_IMAGE ?? "",
      liveUrl: import.meta.env.VITE_TODOLISTAPP_LIVE_URL ?? "",
      githubUrl: import.meta.env.VITE_TODOLISTAPP_GITHUB ?? "",
      category: "Full-stack",
    },
    {
      id: 3,
      title: "Project Tracker Application",
      description: (
        <div>
          <p className="py-2">
            Project Tracker is a full-stack application designed to bring
            clarity and efficiency to project management. It provides a
            centralized platform for teams to organize their work, communicate
            effectively, and keep a detailed record of their progress. From
            creating projects and assigning tasks to real-time discussions and
            notifications, Project Tracker is built to support a collaborative
            and productive workflow.
          </p>
          <p className="py-2">
            At its core, the application allows users to manage projects and
            tasks with ease. You can define project goals, set deadlines, and
            break down the work into manageable tasks. Each task can be assigned
            to team members, given a priority, and tagged for easy
            categorization.
          </p>

          <p className="py-2">
            Collaboration is facilitated through a rich commenting system, where
            team members can discuss task details, ask questions, and provide
            updates. The system supports real-time notifications, ensuring that
            you never miss an important conversation or a critical update. Users
            can also 'like' projects, tasks, and comments to show appreciation
            and engagement.
          </p>

          <p className="py-2">
            For transparency and accountability, Project Tracker includes a
            comprehensive activity logging system that records every significant
            action taken within the application. A powerful search feature
            allows you to quickly find information across all your projects,
            tasks, and comments.
          </p>

          <p className="py-2">
            With secure user authentication, role-based permissions, and a
            clean, intuitive interface, Project Tracker is an ideal solution for
            development teams, project managers, and any group looking to
            improve their project management processes.
          </p>

          <p className="py-2">Key Features:</p>

          <ul className="list-disc ml-6 mt-2">
            <li className="py-2">
              Secure user registration and login using JWT. Role-based access
              control (Admin, Member) to manage permissions for different
              actions
            </li>

            <li className="py-2">
              Create, update, and delete projects. Track project status,
              deadlines, and view all associated tasks and team members in a
              centralized dashboard.
            </li>

            <li className="py-2">
              Add tasks to projects, assign them to team members, set priorities
              and due dates. The system tracks the status of each task from 'To
              Do' to 'Done'
            </li>

            <li className="py-2">
              Invite members to projects and assign them roles. View team
              members' assignments and contributions.
            </li>

            <li className="py-2">
              Leave comments on tasks to facilitate discussions. The commenting
              system supports real-time updates, allowing for live
              conversations.
            </li>

            <li className="py-2">
              Show support and engagement by 'liking' projects, tasks, and
              comments.
            </li>
            <li className="py-2">
              Create and assign tags to tasks for better organization and
              filtering. This allows for easy categorization of work (e.g.,
              'bug', 'feature', 'design').
            </li>
            <li className="py-2">
              Receive instant notifications for important events such as new
              comments, task assignments, and mentions.
            </li>
            <li className="py-2">
              A comprehensive audit trail logs all major actions, such as
              project creation, task updates, and user registrations, providing
              a clear history of events.
            </li>
            <li className="py-2">
              A powerful search engine to quickly find projects, tasks, or
              comments based on keywords.
            </li>
            <li className="py-2">
              Key parts of the application, like comments, update in real-time
              across all users, thanks to GraphQL Subscriptions.
            </li>
          </ul>
        </div>
      ),
      technologies: [
        "HTML5",
        "CSS3",
        "TailwindCSS",
        "React",
        "TypeScript",
        "Node.js",
        "GraphQL",
        "Apollo Server",
        "Apollo Client",
        "Apollo Query",
        "Apollo Mutation",
        "Apollo resolver",
        "MySQL",
        "Postman",
      ],
      image: import.meta.env.VITE_PROJECTTRACKERAPP_IMAGE ?? "",
      liveUrl: import.meta.env.VITE_PROJECTTRACKERAPP_LIVE_URL ?? "",
      githubUrl: import.meta.env.VITE_PROJECTTRACKERAPP_GITHUB ?? "",
      category: "Full-stack",
    },
    {
      id: 4,
      title: "NewsStudios - Modern News & Media Management Platform",
      description: (
        <div>
          <p className="py-2">
            NewsStudios is a full-stack, modern news and media management
            platform designed to deliver a high-quality reading experience while
            providing a comprehensive and intuitive content management system
            for administrators. Built with the latest web technologies,
            including Next.js 14 and React, this project serves as a powerful
            foundation for online magazines, news portals, and digital content
            hubs.
          </p>

          <p className="py-2">The application is split into two main parts:</p>
          <ul className="list-disc ml-6 mt-2">
            <li className="py-2">
              A public-facing front-end that offers a visually appealing and
              responsive interface for readers. It features a dynamic home page
              with video carousels and article grids, dedicated pages for
              articles, and robust discovery tools like category/tag filtering
              and advanced search. User engagement is encouraged through
              features like comments and likes. (UI)
            </li>
            <li>
              A secure admin dashboard that empowers content creators and
              administrators with full control over the platform's content. It
              includes tools for managing articles, categories, authors, users,
              and media (photos and videos). The dashboard also provides
              analytics to track user engagement and content performance.
            </li>
          </ul>
          <p className="mt-4 font-semibold">Key features :</p>

          <ul className="list-disc ml-6 mt-2">
            <li className="py-2">
              Front-End: It offers a visually appealing and responsive interface
              for readers, authentication, profile management, role-based
              access, video carousel, featured/trending articles, rich media
              content, comments/likes, search/filters, responsive UI.{" "}
            </li>
            <li className="py-2">
              Admin Dashboard: It empowers content creators and administrators
              with full control over the platform's content, real-time stats,
              trending articles, activity feed, CRUD for content/users,
              pagination, search/sort, bulk operations, Cloudinary uploads.
            </li>
          </ul>
        </div>
      ),
      technologies: [
        "HTML5",
        "TailwindCSS",
        "TypeScript",
        "React.js",
        "Next.js",
        "Cloudinary",
        "MySQL",
        "Postman",
      ],
      image: NewsStudioAppImage,
      liveUrl: import.meta.env.VITE_NEWSSTUDIOAPP_LIVE_URL ?? "",
      githubUrl: import.meta.env.VITE_NEWSSTUDIOAPP_GITHUB ?? "",
      category: "Full-stack",
    },
    {
      id: 5,
      title: "Countries Explorer Application",
      description: (
        <div>
          <p className="py-2">
            A modern, interactive frontendweb application for exploring world
            countries, continents, languages, and currencies with beautiful data
            visualizations and real-time filtering.
          </p>
          <p className="py-2">Key Features:</p>
          <ul className="list-disc ml-6 mt-2">
            <li className="py-2">
              Responsive Design: A clean and fully responsive UI built with
              Tailwind CSS, ensuring a great experience on both desktop and
              mobile devices.
            </li>
            <li className="py-2">
              Browse & Search: Instantly search and browse over 250 countries.
            </li>
            <li className="py-2">
              Detailed View: Click on a country to see a wealth of information
              including:Basic Information (Capital, Population, Area),
              Currencies and Languages, Location on Google Maps, Flag and Coat
              of Arms and much more!
            </li>
            <li className="py-2">
              Pagination: Infinite scroll to load more countries.
            </li>
            <li className="py-2">
              Continent Dashboard: View statistics and countries for each
              continent.
            </li>
            <li className="py-2">
              Data Visualizations: Interactive charts (Bar and Pie) to visualize
              data about continents and languages.
            </li>
            <li className="py-2">
              Real-time Filtering: Filter countries by continent, currency, and
              language.
            </li>
            <li className="py-2">
              Multiple Filters: Apply multiple filters at once to narrow down
              your search.
            </li>
            <li className="py-2">
              Dark/Light Theme: Switch between dark and light mode.
            </li>
            <li className="py-2">
              Skeletons & Spinners: Smooth loading experience with skeleton
              loaders and spinners.
            </li>
          </ul>
        </div>
      ),
      technologies: [
        "HTML5",
        "Material-UI",
        "TypeScript",
        "React.js",
        "Zustand",
        "Emotion",
        "Node.js",
        "GraphQL",
        "Apollo Client",
        "Apollo Query",
        "Chart.js",
        "Vite",
        "Google Maps API",
        "Postman",
      ],
      image: CountriesExplorerAppImage,
      liveUrl: import.meta.env.VITE_COUNTRIESEXPLORERAPP_LIVE_URL ?? "",
      githubUrl: import.meta.env.VITE_COUNTRIESEXPLORERAPP_GITHUB ?? "",
      category: "Frontend",
    },
  ];
};
