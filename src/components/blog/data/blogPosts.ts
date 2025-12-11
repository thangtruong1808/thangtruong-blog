// Purpose: Provide blog post data via async API-like functions.
// Author: Thang Truong
// Date: 2025-12-11
import type { BlogPost } from "../types";

/**
 * Fetches blog posts asynchronously to mimic an API call.
 */
export const fetchBlogPosts = async (): Promise<BlogPost[]> => {
  return [
    {
      id: 1,
      title: "Building Responsive Components with React and TypeScript",
      excerpt:
        "Learn how to create reusable, responsive components that work seamlessly across all devices using React and TypeScript.",
      content:
        "In this comprehensive guide, we'll explore the best practices for building responsive components...",
      date: "2024-01-15",
      category: "React",
      readTime: "5 min read",
      image:
        "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=250&fit=crop",
    },
    {
      id: 2,
      title: "Mastering Tailwind CSS: From Basics to Advanced",
      excerpt:
        "Discover the power of utility-first CSS and how Tailwind CSS can transform your development workflow.",
      content:
        "Tailwind CSS has revolutionized how we approach styling in modern web development...",
      date: "2024-01-10",
      category: "CSS",
      readTime: "8 min read",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop",
    },
    {
      id: 3,
      title: "TypeScript Best Practices for React Developers",
      excerpt:
        "Essential TypeScript patterns and practices that every React developer should know for better code quality.",
      content:
        "TypeScript brings type safety to JavaScript, making our React applications more robust...",
      date: "2024-01-05",
      category: "TypeScript",
      readTime: "6 min read",
      image:
        "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=400&h=250&fit=crop",
    },
  ];
};

