// src/data/projects.ts
export interface Project {
  title: string;
  stack: string[];
  summary: string;
  details: string;
  github?: string;
  demo?: string;
  iconUrl?: string;  // can be a path or imported asset var (e.g., AI, snapgram)
  theme?: string;    // e.g., 'btn-back-blue'
}

export const projects: Project[] = [
  {
    title: "CodeStory – AI Code Quality Analyzer",
    stack: ["Python", "Scikit-learn", "CodeBERT", "FastAPI", "Docker", "Streamlit"],
    summary:
      "Predicts bug-prone GitHub modules using code metrics + CodeBERT. Cuts manual review by ~40%.",
    details: `
Built an ML pipeline to analyze GitHub repos, extract metrics, and predict bug-prone modules.
Used CodeBERT + Gemini for summarization and refactoring suggestions.
Visualized results in a Streamlit dashboard with a Dockerized FastAPI backend.`,
    github: "https://github.com/ArushiG11/codestory",
    demo: "https://codestory.streamlit.app",
  },
  {
    title: "AutoJobTrack – Smart Job Tracker",
    stack: ["Gmail API", "Gemini", "Firestore", "Cloud Run", "Cloudflare", "Google Sheets"],
    summary:
      "Connects to Gmail, extracts job application data, syncs to Sheets. Dashboard hosted on Cloudflare.",
    details: `
Automated pipeline extracting job-related email data via Gmail Pub/Sub.
Gemini for NLP, persisted in Firestore, exported to Google Sheets.
Interactive dashboard deployed on Cloudflare.`,
    github: "https://github.com/ArushiG11/mail2sheet",
    demo: "https://autojobtrack.vercel.app",
  },
  {
    title: "Serverless Finance Tracker",
    stack: ["React", "AWS Lambda", "DynamoDB", "Cognito", "S3"],
    summary:
      "Expense tracker for 1,000+ users. Secure login, real-time reports, signed S3 PDFs.",
    details: `
Fully serverless app for expense tracking with Cognito auth and Lambda-based reports.
Data in DynamoDB; generated PDF reports stored securely in S3 with signed URLs.`,
    github: "https://github.com/ArushiG11/Finance-Tracker",
  },

  // —— Added items below ——

  {
    title: "Grid World",
    stack: ["Python", "NumPy", "MDP", "Value Iteration", "Policy Iteration"],
    summary:
      "MDP simulations modeling an agent’s interaction with aliens in a stochastic grid environment.",
    details: `
Developed and solved Markov Decision Processes (MDPs) on grid worlds.
Implemented value/policy iteration, explored reward shaping and transition noise effects.
Evaluated convergence speed, optimal policies, and sensitivity to hyperparameters.`,
    github: "https://github.com/ArushiG11/Grid-World",
    iconUrl: "AI",                 // if you're importing an asset variable, keep as-is
    theme: "btn-back-blue",
  },
  {
    title: "Social Moments – MERN Social Media",
    stack: ["MongoDB", "Express", "React", "Node.js", "JWT", "Cloud Storage"],
    summary:
      "Instagram-style app for photo sharing, follows, likes, comments, and profiles.",
    details: `
End-to-end MERN app with auth, posts, feeds, and social features.
Implemented JWT auth, image upload, pagination, and optimistic UI updates.
Deployed with environment-aware configs and CDN-backed assets.`,
    github: "https://github.com/ArushiG11/Moments",
    iconUrl: "snapgram",
    theme: "btn-back-pink",
  },
  {
    title: "Anime Analysis",
    stack: ["Python", "SQL", "Pandas", "Matplotlib", "Jupyter"],
    summary:
      "Explored trends in genres and user preferences; surfaced shifts in popularity over time.",
    details: `
Built a clean SQL → Pandas pipeline for feature engineering.
Visualized genre trends, ratings distributions, and correlation heatmaps.
Identified seasonality and genre co-occurrence patterns with time-series grouping.`,
    github: "https://github.com/ArushiG11/Anime-Data-Analysis",
    iconUrl: "anime",
    theme: "btn-back-black",
  },
  {
    title: "Customer Personality Analysis",
    stack: ["R", "dplyr", "ggplot2", "tidyr", "caret"],
    summary:
      "Segmented customers to uncover behavior patterns and purchase propensities.",
    details: `
Performed EDA and feature engineering in R to profile customer cohorts.
Built segments with clustering and evaluated separability/marketing lift.
Created publication-ready visuals with ggplot2.`,
    github: "https://github.com/ArushiG11/Customer-Segmentation",
    iconUrl: "cseg",
    theme: "btn-back-yellow",
  },
];
