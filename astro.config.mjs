import { defineConfig, fontProviders } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';
import fs from 'node:fs';

// https://astro.build/config
export default defineConfig({
  site: 'https://comsoc.ieeeunivalle.link/',
  base: '/',
  output: 'static',
  image: {
    domains: ["images.unsplash.com"],
  },
  integrations: [
    icon({
      include: {
        'material-symbols': ['*'],
        'mdi': ['*'],
        'simple-icons': ['*'],
      },
    }),
    sitemap(),
    {
      name: 'sitemap-xml',
      hooks: {
        'astro:build:done': async ({ dir }) => {
          const sitemap0 = new URL('sitemap-0.xml', dir);
          const sitemap = new URL('sitemap.xml', dir);
          try {
            if (fs.existsSync(sitemap0)) {
              await fs.promises.copyFile(sitemap0, sitemap);
            } else {
              const index = new URL('sitemap-index.xml', dir);
              if (fs.existsSync(index)) await fs.promises.copyFile(index, sitemap);
            }
          } catch {}
        },
      },
    },
  ],
  compressHTML: true,
  prefetch: {
    prefetchAll: false,
    defaultStrategy: 'viewport',
  },
  build: {
    inlineStylesheets: 'auto',
  },
  fonts: [
    {
      provider: fontProviders.local(),
      name: 'Formata',
      cssVariable: '--font-formata',
      fallbacks: ['Space Grotesk', 'system-ui', 'sans-serif'],
      display: 'swap',
      options: {
        variants: [
          {
            src: ['./src/assets/fonts/Formata-Regular.woff2', './src/assets/fonts/Formata-Regular.woff'],
            weight: '400',
            style: 'normal',
            display: 'swap',
          },
          {
            src: ['./src/assets/fonts/Formata-Medium.woff2', './src/assets/fonts/Formata-Medium.woff'],
            weight: '500',
            style: 'normal',
            display: 'swap',
          },
        ],
      },
    },
    {
      provider: fontProviders.google(),
      name: 'Nunito Sans',
      cssVariable: '--font-nunito-sans',
      weights: [400, 600, 700],
      styles: ['normal'],
      subsets: ['latin'],
      display: 'swap',
      fallbacks: ['system-ui', 'sans-serif'],
    },
    {
      provider: fontProviders.google(),
      name: 'Share Tech Mono',
      cssVariable: '--font-share-tech-mono',
      weights: [400],
      styles: ['normal'],
      subsets: ['latin'],
      display: 'swap',
      fallbacks: ['monospace'],
    },
    {
      provider: fontProviders.google(),
      name: 'Space Grotesk',
      cssVariable: '--font-space-grotesk',
      weights: [400, 500, 600, 700],
      styles: ['normal'],
      subsets: ['latin'],
      display: 'swap',
      fallbacks: ['system-ui', 'sans-serif'],
    },

  ],
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
