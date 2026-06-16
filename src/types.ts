/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Skill {
  name: string;
  subskills?: string[];
}

export interface SkillCategory {
  category: string;
  iconName: string; // we'll map this to a Lucide icon
  skills: string[] | Skill[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tools: string[];
  achievements: string[];
  githubUrl?: string;
  dashboardUrl?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  achievements: string[];
}

export interface Profile {
  name: string;
  brandName?: string;
  title: string;
  secondaryTitle?: string;
  headline?: string;
  tagline?: string;
  shortTagline?: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  summary: string;
  whoAmI?: string;
  whatIBring?: string[];
  whyDifferent?: { title: string; desc: string }[];
}

export interface Education {
  institution: string;
  location: string;
  degree: string;
  major?: string;
  gpa?: string;
  period: string;
}

export interface Certification {
  title: string;
  issuer: string;
  issuedDate: string;
  duration?: string;
  credentialUrl?: string;
}

