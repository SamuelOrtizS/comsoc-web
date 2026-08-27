import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://comsoc.ieeeunivalle.link/',
  base: '/',
  output: 'static',
  prefetch: {
    prefetchAll: false,
    defaultStrategy: 'hover',
  },
  vite: {
    plugins: [tailwindcss()],
    build: {
      cssCodeSplit: true,
      minify: 'esbuild',
      rollupOptions: {
        output: {
          manualChunks: undefined,
        },
      },
    },
  },
  redirects: {
    '/admin': {
      status: 302,
      destination: '/403'
    },
    '/4o4': {
      status: 302,
      destination: '/404'
    },
    '/4-o-4': {
      status: 302,
      destination: '/404'
    },
    '/admin_panel': {
      status: 302,
      destination: '/403'
    },
    '/secret': {
      status: 302,
      destination: '/403'
    },
    '/crash': {
      status: 302,
      destination: '/500'
    },
    '/cicada': {
      status: 302,
      destination: '/3301'
    },
  }
});
