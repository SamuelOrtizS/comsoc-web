/**
 * Utility for handling images in modals and dynamically rendered content
 * Since modals are populated via JavaScript, we need a system to map
 * image paths and provide optimized URLs
 */

// Mapping of relative image paths to their optimized public URLs
// This allows the modal JS to reference images that can be optimized by Astro
const imagePathMap: Record<string, string> = {};

/**
 * Register an image path for use in modals
 * Call this during Astro component render time
 * @param relativePath - Path relative to /src/assets/images/
 * @param optimizedUrl - The optimized public URL (e.g., /_astro/image-hash.webp)
 */
export function registerImagePath(relativePath: string, optimizedUrl: string) {
  imagePathMap[relativePath] = optimizedUrl;
}

/**
 * Get optimized URL for an image path
 * @param imagePath - Either a relative path or a string path
 * @returns The optimized URL, or the original path if not registered
 */
export function getOptimizedImageUrl(imagePath: string | undefined): string {
  if (!imagePath) return '';
  
  // If already optimized (starts with /_astro or http), return as-is
  if (imagePath.startsWith('/_astro') || imagePath.startsWith('http')) {
    return imagePath;
  }
  
  // Try to find in map
  if (imagePathMap[imagePath]) {
    return imagePathMap[imagePath];
  }
  
  // For public images, construct the path
  if (!imagePath.includes('/src/assets')) {
    return `/images/${imagePath}`;
  }
  
  return imagePath;
}

/**
 * Transform an image object (from serialized data) to ensure proper URL
 * @param image - String path or object with src property
 * @returns Optimized image URL
 */
export function resolveImageUrl(image: string | { src: string } | undefined): string {
  if (!image) return '';
  
  const path = typeof image === 'string' ? image : image.src;
  return getOptimizedImageUrl(path);
}

/**
 * Create a picture element with source alternatives
 * Useful for dynamic image rendering in modals
 * @param imagePath - Path to the image
 * @param alt - Alt text
 * @param classes - CSS classes for the img element
 * @returns HTML string for an img element
 */
export function createImageElement(
  imagePath: string,
  alt: string,
  classes: string = ''
): string {
  const url = resolveImageUrl(imagePath);
  return `<img src="${url}" alt="${alt}" class="${classes}" loading="lazy" decoding="async" />`;
}
