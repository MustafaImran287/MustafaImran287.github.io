import type { NextConfig } from "next";

// For GitHub Pages: 
// - If repo is username.github.io, basePath should be "" (user/organization page)
// - If repo is a project page, basePath should be "/repository-name"
// Set GITHUB_REPOSITORY_NAME env var in GitHub Actions, or update manually below
const repositoryName = process.env.GITHUB_REPOSITORY_NAME || "";
// If repository name ends with .github.io, it's a user page (no basePath needed)
const isUserPage = repositoryName.endsWith('.github.io');
const basePath = process.env.NODE_ENV === "production" && repositoryName && !isUserPage
  ? `/${repositoryName}` 
  : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath,
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
