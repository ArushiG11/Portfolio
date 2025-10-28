// src/data/education.ts
export interface Education {
  year: string;
  degree: string;
  institution: string;
  description?: string;
  logo?: string;
}

export const education: Education[] = [
  {
    year: "Spring 2025",
    degree: "Graduate Exchange Program — Computer Science",
    institution: "Princeton University",
    description: "Focus on advanced ML/AI research and distributed systems.",
    logo: "/Princeton.svg",
  },
  {
    year: "2024 - 2025",
    degree: "M.S. in Computer Science",
    institution: "Rutgers University, New Brunswick",
    description: "Specialized in Machine Learning and AI systems.",
    logo: "/Rutgers.png",
  },
  {
    year: "2022",
    degree: "B.Tech in Information Technology",
    institution: "Guru Gobind Singh Indraprastha University",
    description: "Graduated with Honors. Focus on Software Engineering.",
    logo: "/ggsipu.png",
  },
];

