// Purpose: Shared type definitions for blog-related components.
// Author: Thang Truong

import type { ReactNode } from "react";

// Date: 2025-12-11
export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  readTime: string;
  image?: string;
}

export interface Project {
  id: number;
  title: string;
  description: ReactNode;
  technologies: string[];
  image?: string;
  liveUrl?: string;
  githubUrl?: string;
  category?: "Frontend" | "Full-stack";
}

export interface Skill {
  name: string;
  level: number; // 1-5
  category: string;
}

export interface Achievement {
  id: number;
  title: string;
  description: string;
  date: string;
  icon: string;
  university?: string;
}

