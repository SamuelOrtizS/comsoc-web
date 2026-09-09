import { onLCP, onINP, onCLS } from 'web-vitals';

/**
 * Envía Web Vitals a Google Analytics 4.
 * Se llama desde BaseLayout.astro como script is:inline.
 */
function sendToGA4(metric: { name: string; value: number }) {
  if (typeof window === 'undefined') return;
  if (!(window as any).gtag) return;

  (window as any).gtag('event', metric.name, {
    value: Math.round(metric.value),
    event_category: 'Web Vitals',
    event_label: window.location.pathname,
    non_interaction: true,
  });
}

/**
 * Inicia el monitoreo de Web Vitals en tiempo real.
 * Se ejecuta al cargar la página para medir experiencia real de usuarios.
 */
export function initWebVitals() {
  onLCP(sendToGA4);
  onINP(sendToGA4);
  onCLS(sendToGA4);
}

