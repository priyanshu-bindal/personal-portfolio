import ProjectsClient from "./ProjectsClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Priyanshu Bindal",
  description: "A showcase of my software engineering projects, open source contributions, and experiments.",
};

async function getAllRepos() {
  const username = "priyanshu-bindal";
  try {
    const res = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=100`, {
      next: { revalidate: 3600 }
    });
    
    if (!res.ok) {
      throw new Error("Failed to fetch");
    }
    let data = await res.json();
    
    if (Array.isArray(data)) {
      data = data.filter((repo: any) => repo.name !== "priyanshu-bindal");
    }
    
    return data;
  } catch (error) {
    return [
      { id: 1, name: "cyber-portfolio", description: "Premium cyberpunk developer portfolio built with Next.js 15, Tailwind CSS, and Framer Motion.", stargazers_count: 142, forks_count: 24, html_url: "#", homepage: "https://example.com", language: "TypeScript", topics: ["react", "nextjs", "framer-motion"] },
      { id: 2, name: "flutter-nexus", description: "High-performance cross-platform e-commerce mobile application with complex UI animations.", stargazers_count: 89, forks_count: 12, html_url: "#", homepage: "", language: "Dart", topics: ["flutter", "mobile"] },
      { id: 3, name: "saas-analytics-pro", description: "Full-stack analytics dashboard for SaaS companies. Real-time data processing and visualization.", stargazers_count: 215, forks_count: 45, html_url: "#", homepage: "https://example.com", language: "TypeScript", topics: ["react", "nodejs", "dashboard"] },
      { id: 4, name: "core-api-gateway", description: "Scalable Node.js API Gateway with built-in rate limiting, caching, and JWT authentication.", stargazers_count: 67, forks_count: 8, html_url: "#", homepage: "", language: "JavaScript", topics: ["api", "backend", "nodejs"] },
      { id: 5, name: "python-ml-bot", description: "Machine learning trading bot using reinforcement learning and real-time market data.", stargazers_count: 45, forks_count: 5, html_url: "#", homepage: "", language: "Python", topics: ["ml", "trading", "finance"] },
    ];
  }
}

export default async function ProjectsPage() {
  const repos = await getAllRepos();
  return <ProjectsClient initialRepos={repos} />;
}
