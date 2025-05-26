import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  integrations: [react(), sitemap()],
  output: 'static',
  site: 'https://agungdevlop.github.io',
  base: '/kitajokiin', // Diperbaiki dari '/kitajokiin'
  vite: {
    plugins: [tailwindcss()]
  }
});