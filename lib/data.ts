export interface Project {
  id: string;
  title: string;
  summary: string;
  description: string;
  imageUrl: string;
  techStack: string[];
  link?: string;
  github?: string;
}

export const projects: Project[] = [
  {
    id: "job-hunting-app",
    title: "Job Tracker Pro",
    summary: "A comprehensive application to manage and track job applications.",
    description: "Job Tracker Pro is a modern web application built with React and Firebase to help job seekers organize their application process. It features status tracking, analytics with pie charts, and integrated document management.",
    imageUrl: "/projects/job-tracker.png",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Firebase"],
    github: "https://github.com/wakasato/my-jobhunting-app",
  },
  {
    id: "personal-portfolio",
    title: "Minimalist Portfolio",
    summary: "A clean, modern portfolio website built with Next.js.",
    description: "My personal portfolio showcasing my projects, skills, and contact information. Designed with a minimalist aesthetic focusing on typography and whitespace, utilizing Next.js App Router for optimal performance.",
    imageUrl: "/projects/portfolio.png",
    techStack: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
    link: "https://wakasato.com",
    github: "https://github.com/wakasato/sato_portfolio",
  },
  {
    id: "e-commerce-dashboard",
    title: "Admin Dashboard",
    summary: "An analytics dashboard for an e-commerce platform.",
    description: "A comprehensive dashboard for managing products, viewing sales analytics, and tracking customer engagement. Features real-time data visualization and a responsive layout.",
    imageUrl: "/projects/dashboard.png",
    techStack: ["Next.js", "PostgreSQL", "Prisma", "Tailwind CSS"],
  }
];
