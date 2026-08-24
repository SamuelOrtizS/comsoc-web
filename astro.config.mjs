import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://SamuelOrtizS.github.io',
  base: '/comsoc-web',
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
});
