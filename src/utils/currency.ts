export const DEFAULT_USD_TO_COP_RATE = 4100;
export let USD_TO_COP_RATE = DEFAULT_USD_TO_COP_RATE;

let cachedRate: number | null = null;
let lastFetchedAt = 0;
const CACHE_TTL_MS = 1000 * 60 * 60; // 1 hour

/**
 * Fetches the current USD to COP exchange rate.
 * Uses a free open exchange rate API with caching and fallback.
 */
export async function getUsdToCopRate(): Promise<number> {
  const now = Date.now();
  if (cachedRate && now - lastFetchedAt < CACHE_TTL_MS) {
    return cachedRate;
  }

  const apiKey = import.meta.env.EXCHANGERATE_API_KEY || (typeof process !== 'undefined' ? process.env?.EXCHANGERATE_API_KEY : undefined);
  const endpoint = apiKey
    ? `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`
    : 'https://open.er-api.com/v6/latest/USD';

  try {
    const response = await fetch(endpoint, { signal: AbortSignal.timeout(3000) });
    if (!response.ok) {
      throw new Error(`Failed to fetch exchange rate: ${response.statusText}`);
    }
    const data = await response.json();
    const rate = data?.conversion_rates?.COP ?? data?.rates?.COP;
    if (rate && typeof rate === 'number') {
      cachedRate = rate;
      USD_TO_COP_RATE = rate;
      lastFetchedAt = now;
      return rate;
    }
  } catch (error) {
    console.warn('Could not fetch latest USD to COP rate, using fallback:', error);
  }

  return cachedRate ?? DEFAULT_USD_TO_COP_RATE;
}

export function formatUSD(amount: number): string {
  return `$${amount.toLocaleString('en-US')} USD`;
}

export function formatCOP(amountUSD?: number, customRate: number = USD_TO_COP_RATE): string {
  const value = amountUSD ? Math.round(amountUSD * customRate) : 0;
  return `$${value.toLocaleString('es-CO')} COP`;
}

