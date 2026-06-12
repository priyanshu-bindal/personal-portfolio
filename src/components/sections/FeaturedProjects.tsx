import FeaturedProjectsClient from "./FeaturedProjectsClient";

async function getFeaturedRepos() {
  const username = "priyanshu-bindal";
  try {
    const res = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=5`, {
      next: { revalidate: 3600 }
    });
    
    if (!res.ok) {
      throw new Error("Failed to fetch GitHub data");
    }
    
    let data = await res.json();
    
    // Filter out profile readme repo and rename 'intai' to 'Split Expense'
    if (Array.isArray(data)) {
      data = data.filter((repo: any) => repo.name !== "priyanshu-bindal");
      
      data = data.map((repo: any) => {
        if (repo.name && repo.name.toLowerCase().includes('intai')) {
          repo.name = "Split Expense";
        }
        return repo;
      });
    }
    // Inject the custom Shopystore project at the beginning
    const shopystore = {
      id: "shopystore-custom-id",
      name: "Shopystore",
      description: "A production-ready, multi-vendor e-commerce platform engineered with Next.js 16, Prisma 7, and PostgreSQL. Designed to handle complex business requirements, multi-vendor product management, and real-time analytics.",
      stargazers_count: 12,
      forks_count: 3,
      html_url: "#",
      homepage: "https://shopify-dashboard-opal.vercel.app/shop",
      language: "Next.js 16"
    };

    // Inject PokeDash project
    const pokedash = {
      id: "pokedash-custom-id",
      name: "PokeDash",
      description: "Interactive Pokémon dashboard and Pokédex application built with modern web technologies. Features comprehensive data visualization and responsive design.",
      stargazers_count: 5,
      forks_count: 1,
      html_url: "#",
      homepage: "https://pokedash0.vercel.app/",
      language: "React"
    };
    
    if (Array.isArray(data)) {
      data.unshift(pokedash);
      data.unshift(shopystore);
    }
    
    return data;
  } catch (error) {
    // Fallback data if API fails or user doesn't exist yet
    return [
      { id: 1, name: "cyber-portfolio", description: "Premium cyberpunk developer portfolio built with Next.js 15, Tailwind CSS, and Framer Motion.", stargazers_count: 142, forks_count: 24, html_url: "#", homepage: "https://example.com", language: "TypeScript" },
      { id: 2, name: "flutter-nexus", description: "High-performance cross-platform e-commerce mobile application with complex UI animations.", stargazers_count: 89, forks_count: 12, html_url: "#", homepage: "", language: "Dart" },
      { id: 3, name: "saas-analytics-pro", description: "Full-stack analytics dashboard for SaaS companies. Real-time data processing and visualization.", stargazers_count: 215, forks_count: 45, html_url: "#", homepage: "https://example.com", language: "TypeScript" },
      { id: 4, name: "core-api-gateway", description: "Scalable Node.js API Gateway with built-in rate limiting, caching, and JWT authentication.", stargazers_count: 67, forks_count: 8, html_url: "#", homepage: "", language: "JavaScript" },
    ];
  }
}

export default async function FeaturedProjects() {
  const repos = await getFeaturedRepos();
  return <FeaturedProjectsClient repos={repos} />;
}
