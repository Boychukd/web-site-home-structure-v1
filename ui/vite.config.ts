import path from "node:path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// GitHub Pages serves this project under /web-site-home-structure-v1/.
// The deploy workflow sets GITHUB_PAGES=true so production builds use the
// repo-scoped base path. Local dev and Vercel keep base="/".
const isGithubPages = process.env.GITHUB_PAGES === "true";

export default defineConfig({
  base: isGithubPages ? "/web-site-home-structure-v1/" : "/",
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
