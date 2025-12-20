export enum ProjectType {
  PUBLICATION = 'Publication',
  PROJECT = 'Project'
}

export interface Affiliation {
  institution: string;
  role: string;
  period: string;
  location: string;
  logoUrl?: string; // Optional path to logo
  description?: string;
}

export interface Project {
  id: string;
  type: ProjectType;
  title: string;
  date: string;
  summary: string;
  imageUrl: string;
  affiliation: string; // Kept for metadata/alt text
  affiliationLogos: string[]; // Array of logo URLs to display
  githubUrl?: string;
  paperUrl?: string; // URL to PDF or Publisher
  skills: string[];
}