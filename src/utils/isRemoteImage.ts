/**
 * Utility to check if an image URL is remote (http/https)
 */

export function isRemoteImage(url: string): boolean {
  return typeof url === 'string' && (url.startsWith('http://') || url.startsWith('https://'));
}
