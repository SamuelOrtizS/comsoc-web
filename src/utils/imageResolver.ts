import type { ImageMetadata } from 'astro';

// Eager import all images from src/assets/images
const imageModules = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/images/**/*.{svg,png,jpg,jpeg,webp,gif,JPG,JPEG,PNG}',
  { eager: true }
);

// Build map: "/images/xxx" -> ImageMetadata
const imageMap = new Map<string, ImageMetadata>();

for (const [path, mod] of Object.entries(imageModules)) {
  // path is like "/src/assets/images/event-hackathon.svg" or "/src/assets/images/Cursor/Cursor/Step1.svg"
  const publicPath = path.replace('/src/assets/images', '/images');
  imageMap.set(publicPath, (mod as any).default);
}

// Also handle sanitized name aliases for backwards compatibility
// Files with spaces were renamed: "Samuel O.jpg" -> "samuel-o.jpg", etc.
const aliasMap: Record<string, string> = {
  '/images/Samuel O.jpg': '/images/samuel-o.jpg',
  '/images/moreno CJPG.JPG': '/images/moreno-cjpg.jpg',
  '/images/Moreno CJPG.JPG': '/images/moreno-cjpg.jpg',
  '/images/perfil_fabio_guerrero.png': '/images/perfil-fabio-guerrero.png',
  '/images/yela_provisional.jpg': '/images/yela-provisional.jpg',
  '/images/yela-provisional.jpg': '/images/yela-provisional.jpg',
};

// Populate aliases
for (const [oldPath, newPath] of Object.entries(aliasMap)) {
  const meta = imageMap.get(newPath);
  if (meta) imageMap.set(oldPath, meta);
}

// Precompute lowercase map for O(1) case-insensitive fallback
const lowerMap = new Map<string, ImageMetadata>();
for (const [key, val] of imageMap.entries()) {
  lowerMap.set(key.toLowerCase(), val);
}

export function resolveImage(src: string | undefined | null): ImageMetadata | string | undefined {
  if (!src) return src as any;
  if (src.startsWith('http://') || src.startsWith('https://')) {
    return src;
  }
  if (src.startsWith('/images/')) {
    const mapped = imageMap.get(src);
    if (mapped) return mapped;
    const lowerHit = lowerMap.get(src.toLowerCase());
    if (lowerHit) return lowerHit;
    // No match -> return original string (will 404 but avoids build crash)
    if (import.meta.env.DEV) console.warn(`[imageResolver] no match for "${src}"`);
    return src;
  }
  return src;
}

export function resolveImages(srcs: string[] | undefined): (ImageMetadata | string)[] {
  if (!srcs) return [];
  return srcs.map((s) => resolveImage(s) as ImageMetadata | string);
}
