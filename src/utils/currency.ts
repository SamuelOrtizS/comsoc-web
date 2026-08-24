export const USD_TO_COP_RATE = 4100;

export function formatUSD(amount: number): string {
  return `$${amount.toLocaleString('en-US')} USD`;
}

export function formatCOP(amountCOP?: number, amountUSD?: number): string {
  const value = amountCOP ?? (amountUSD ? Math.round(amountUSD * USD_TO_COP_RATE) : 0);
  return `$${value.toLocaleString('es-CO')} COP`;
}
