import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
// 1. Import the plugin
import { viteStaticCopy } from "vite-plugin-static-copy";

export default defineConfig({
  image: {
    // Disable image optimization for paths in public folder
    domains: [],
    remotePatterns: [],
  },
  vite: {
    plugins: [
      tailwindcss(),
      // 2. Add the static copy plugin
      viteStaticCopy({
        targets: [
          {
            // Copy images to match the URL structure (e.g., /2016/05/images/)
            src: "src/content/blog",
            dest: ".",
          },
        ],
      }),
    ],
  },
  trailingSlash: "ignore",
  output: "static",
  site: "https://yoursite.com",
  integrations: [sitemap()],
});
