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

  try {
    const response = await fetch('https://open.er-api.com/v6/latest/USD');
    if (!response.ok) {
      throw new Error(`Failed to fetch exchange rate: ${response.statusText}`);
    }
    const data = await response.json();
    if (data?.rates?.COP && typeof data.rates.COP === 'number') {
      cachedRate = data.rates.COP;
      USD_TO_COP_RATE = data.rates.COP;
      lastFetchedAt = now;
      return data.rates.COP;
    }
  } catch (error) {
    console.warn('Could not fetch latest USD to COP rate, using fallback:', error);
  }

  return cachedRate ?? DEFAULT_USD_TO_COP_RATE;
}

export function formatUSD(amount: number): string {
  return `$${amount.toLocaleString('en-US')} USD`;
}

export function formatCOP(amountCOP?: number, amountUSD?: number, customRate: number = USD_TO_COP_RATE): string {
  const value = amountCOP ?? (amountUSD ? Math.round(amountUSD * customRate) : 0);
  return `$${value.toLocaleString('es-CO')} COP`;
}

