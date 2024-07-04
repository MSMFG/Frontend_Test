export interface ICurrency {
  "15m": number;
  buy: number;
  last: number;
  sell: number;
  symbol: string;
  name?: string;
}

export function currenciesToArray(currencies: {
  [key: string]: ICurrency;
}): ICurrency[] {
  return Object.entries(currencies).map(([key, data]) => {
    data.name = key;
    return data;
  });
}
