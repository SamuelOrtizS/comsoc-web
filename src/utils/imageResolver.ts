import type { ImageMetadata } from 'astro';

// Eager import all images from src/assets/images
const imageModules = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/images/**/*.{svg,png,jpg,jpeg,webp,gif,JPG,JPEG,PNG}',
  { eager: true }
);

// Build map: "/images/xxx" -> ImageMetadata (public path)
const imageMap = new Map<string, ImageMetadata>();

for (const [path, mod] of Object.entries(imageModules)) {
  // Convert src/assets/images/filename to /images/filename for public path
  const relativePath = path.replace('/src/assets/images/', '');
  const publicPath = `/images/${relativePath}`;
  imageMap.set(publicPath, (mod as any).default);
}

// Precompute lowercase map for O(1) case-insensitive fallback
const lowerMap = new Map<string, ImageMetadata>();
for (const [key, val] of imageMap.entries()) {
  lowerMap.set(key.toLowerCase(), val);
}

export function resolveImage(src: string | undefined | null): ImageMetadata | string | undefined {
  if (!src) return src as any;
  
  // External URLs pass through unchanged
  if (src.startsWith('http://') || src.startsWith('https://')) {
    return src;
  }
  
  if (src.startsWith('/images/')) {
    const mapped = imageMap.get(src);
    if (mapped) return mapped;
    
    const lowerHit = lowerMap.get(src.toLowerCase());
    if (lowerHit) return lowerHit;
    
    // No match -> return original string (will 404 in dev, but avoids build crash)
    if (import.meta.env.DEV) console.warn(`[imageResolver] no match for "${src}"`);
    return src;
  }
  
  return src;
}

export function resolveImages(srcs: string[] | undefined): (ImageMetadata | string)[] {
  if (!srcs) return [];
  return srcs.map((s) => resolveImage(s) as ImageMetadata | string);
}
