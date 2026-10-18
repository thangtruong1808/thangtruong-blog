// Purpose: Professional profile links shared by the hero, footer and contact page.
// Author: Thang Truong
// Date: 2026-10-18
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { profile } from "./profile";

export const socialLinks = [
  { label: "GitHub", href: profile.githubUrl, icon: FaGithub },
  { label: "LinkedIn", href: profile.linkedinUrl, icon: FaLinkedin },
  { label: "Email", href: profile.email ? `mailto:${profile.email}` : "", icon: FiMail },
].filter((link) => Boolean(link.href));
