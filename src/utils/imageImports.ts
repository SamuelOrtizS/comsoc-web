/**
 * Utility for dynamically importing and resolving images from /src/assets/images/
 * This enables Astro's Image component to optimize images at build time
 */

// Import all images as modules
const images = import.meta.glob<{ default: any }>(
  '/src/assets/images/**/*.{jpg,png,webp,svg,gif,jpeg}',
  { eager: true }
);

/**
 * Normalize image paths from both direct relative strings and project-relative values
 * such as ../../assets/images/file.png or /src/assets/images/file.png.
 */
export function normalizeImagePath(imagePath: string) {
  if (!imagePath) return '';

  let normalized = imagePath.trim().replace(/\\/g, '/').split('?')[0];

  normalized = normalized.replace(/^\/+/, '');
  normalized = normalized.replace(/^\.\/+/g, '');
  normalized = normalized.replace(/^(?:\.\.\/)+/, '');

  const stripPrefixes = [
    'src/assets/images/',
    'assets/images/',
    'images/',
    '/src/assets/images/',
    '/assets/images/',
    '/images/',
  ];

  for (const prefix of stripPrefixes) {
    if (normalized.startsWith(prefix)) {
      normalized = normalized.slice(prefix.length);
      break;
    }
  }

  return normalized;
}

/**
 * Resolve an image path to its imported module
 * @param imagePath - Relative path from /src/assets/images/ (e.g., "eventos/event-photo.jpg")
 *                  or absolute path like "/src/assets/images/event-hackathon.svg"
 * @returns The imported image module, or undefined if not found
 */
export function getImageModule(imagePath: string) {
  if (!imagePath) return undefined;

  // If already has full path prefix, extract just the filename/basename
  let normalized = normalizeImagePath(imagePath);
  
  // Handle absolute paths like "/src/assets/images/event-hackathon.svg"
  if (normalized.startsWith('/src/assets/images/')) {
    normalized = normalized.replace(/^\/src\/assets\/images\//, '');
  } else if (normalized.startsWith('/assets/images/')) {
    normalized = normalized.replace(/^\/assets\/images\//, '');
  } else if (normalized.startsWith('/images/')) {
    normalized = normalized.replace(/^\/images\//, '');
  }

  const fullPath = normalized ? `/src/assets/images/${normalized}` : undefined;
  return fullPath ? images[fullPath]?.default : undefined;
}

/**
 * Batch resolve multiple image paths
 * @param imagePaths - Array of relative paths
 * @returns Array of imported image modules
 */
export function getImageModules(imagePaths: string[]) {
  return imagePaths.map((path) => getImageModule(path)).filter(Boolean);
}

/**
 * Check if an image exists
 * @param imagePath - Relative path from /src/assets/images/
 * @returns true if the image module can be loaded
 */
export function imageExists(imagePath: string): boolean {
  return !!getImageModule(imagePath);
}

export function resolveImageSource(imagePath?: string) {
  if (!imagePath) return undefined;

  if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) {
    return imagePath;
  }

  return getImageModule(imagePath) ?? imagePath;
}
