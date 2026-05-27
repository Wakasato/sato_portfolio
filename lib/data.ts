export interface Project {
  id: string;
  title: string;
  summary: string;
  description: string;
  imageUrl: string;
  techStack: string[];
  link?: string;
  github?: string;
  externalLink?: string;
  imagePosition?: string;
}

export const projects: Project[] = [
  {
    id: "campaign-system",
    title: "Campaign System",
    summary: "A comprehensive system to manage and track marketing campaigns.",
    description: "Designed the end-to-end user journey for a complex B2B campaign management system, focusing on usability, data visualization, and seamless workflow integration.",
    imageUrl: "/Welbox_Hero.png",
    techStack: ["UX/UI", "Product Design", "B2B SaaS", "User Research"],
  },
  {
    id: "cycle-venner",
    title: "Cycle Venner",
    summary: "A community platform for cycling enthusiasts to share routes and experiences.",
    description: "Led the product design for Cycle Venner, establishing a design system and creating intuitive mobile-first interfaces that encourage user engagement and community building.",
    imageUrl: "/cyclevenner_Hero.png",
    techStack: ["Service Design", "User Research", "Ethnography", "Prototyping"],
  },
  {
    id: "conversion-optimisation",
    title: "Conversion Optimisation",
    summary: "Strategic redesign of core user flows to improve conversion rates.",
    description: "Conducted extensive A/B testing and user research to identify friction points in the conversion funnel. Implemented data-driven design changes that resulted in a significant uplift in successful conversions.",
    imageUrl: "/UXDesign.png",
    techStack: ["A/B Testing", "Analytics", "UX Research"],
  },
  {
    id: "checkout-ui",
    title: "Checkout UI",
    summary: "A streamlined and secure checkout experience for an e-commerce platform.",
    description: "Redesigned the checkout process to reduce cart abandonment. Simplified the UI, clarified pricing and security elements, and optimized the flow for both desktop and mobile users.",
    imageUrl: "/UI_Hero.png",
    techStack: ["UI Design", "E-commerce", "Interaction Design", "Component Libraries"],
  },
  {
    id: "shore-quest",
    title: "ShoreQuest",
    summary: "Using sketching and narrative techniques to communicate complex services, align stakeholders, and synthesise user research.",
    description: "Using sketching and narrative techniques to communicate complex services, align stakeholders, and synthesise user research.",
    imageUrl: "/storytelling.png",
    techStack: ["App Design", "Service Design", "Visual Storytelling"],
  },
  {
    id: "react-ai-coding",
    title: "React.JS + AI coding",
    summary: "AI-assisted product experiments and workflow tools.",
    description: "Demo: https://my-jobhunting-app.vercel.app/\nDemo ID: demo@example.com\nDemo Password: password123",
    imageUrl: "/jobtracker.png",
    techStack: ["React.js", "AI Tools", "Frontend"],
    github: "https://github.com/wakasato/my-jobhunting-app",
    link: "https://my-jobhunting-app.vercel.app/",
    externalLink: "https://github.com/wakasato/my-jobhunting-app",
    imagePosition: "object-top"
  }
];
