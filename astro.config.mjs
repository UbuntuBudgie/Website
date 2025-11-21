import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap";
import tailwindcss from '@tailwindcss/vite';
// 1. Import the plugin
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  vite: {
    plugins: [
      tailwindcss(),
      // 2. Add the static copy plugin
      viteStaticCopy({
        targets: [
          {
            // The source is every 'images' folder inside your blog content
            src: 'src/content/blog/**/images/*',
            // The destination is the 'blog' folder in your final build
            dest: 'blog'
          }
        ]
      })
    ],
  },
  trailingSlash: 'always',
  output: 'static', 
  site: 'https://yoursite.com',
  integrations: [sitemap()]
});