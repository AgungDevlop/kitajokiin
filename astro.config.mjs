import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  integrations: [react()],

  // Pastikan output statis untuk GitHub Pages
  output: 'static',

  // Ganti dengan URL GitHub Pages Anda
  site: 'https://agungdevlop.github.io',

  // Ganti dengan nama repository, misalnya '/my-astro-project'
  base: '/kitajokiin',

  vite: {
    plugins: [tailwindcss()]
  }
});