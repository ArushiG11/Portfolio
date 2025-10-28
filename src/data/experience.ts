// src/data/experience.ts
export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  tech: string[];
  logo?: string; 
}

export const experience: Experience[] = [
  
  {
    company: "Robot Toolworx",
    role: "Software Engineer Intern",
    period: "May 2025 – Aug 2025",
    description:
      "Implemented a production RAG pipeline across Ingester, Datastore, and Compiler services; added vector search with OpenAI + pgvector; instrumented tracing/analytics with Langfuse and OpenTelemetry.",
    tech: ["Python", "OpenAI", "pgvector", "Langfuse", "OpenTelemetry"],
    logo: "/Robotoolworx.jpg",
  },
  {
    company: "Rutgers University",
    role: "Teaching Assistant",
    period: "Sep 2024 – Present",
    description:
      "Part-time TA (on-site, New Brunswick) for CS170, CS211, CS334, and CS344. Led labs, held office hours, graded assignments, and supported course projects.",
    tech: ["Python", "C/C++", "Java", "Algorithms", "HTML", "JavaScript", "CSS", "SQL"],
    logo: "/Rutgers.png",
  },
  {
    company: "MAQ Software",
    role: "Software Engineer",
    period: "Jun 2022 – Dec 2023",
    description:
      "Built analytics dashboards and optimized data pipelines; cut SQL notebook runtime ~55% and reduced refresh times ~60% using Azure Data Factory and ADLS.",
    tech: ["Power BI", "Azure Data Factory", "Azure", "SQL", "ADLS", "Databricks"],
    logo: "/MAQ.png",
  },
  {
    company: "OvalEdge",
    role: "Software Developer",
    period: "Jul 2021 – May 2022",
    description:
      "Developed and debugged reusable UI components; improved performance and ensured seamless integration across the application. Remote.",
    tech: ["JavaScript", "React", "HTML/CSS", "Jquery", "Git", "Bitbucket"],
    logo: "/Oval.jpeg",
  },
  {
    company: "Tata Power-DDL",
    role: "Assistant Officer Trainee",
    period: "Jun 2016 – May 2017",
    description:
      "Managed and optimized SAP IS-U processes, implemented access controls, resolved 1000+ system issues, and coordinated requirements with onsite client teams in Delhi.",
    tech: ["SAP IS-U", "SQL", "Jira"],
    logo: "/Tata.jpg",
  },
];
