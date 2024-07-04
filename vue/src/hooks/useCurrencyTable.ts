import { ref } from "vue";
import { getData, currenciesToArray } from "../helpers";

export default function useCurrencyTable(endpointUrl: string) {
  const displayedSymbols = ["CNY", "EUR", "GBP", "JPY", "USD"];
  const data = ref();

  async function updateBitcoinPrices() {
    let currencies = await getData(endpointUrl);
    const currencyList = currenciesToArray(currencies);

    data.value = currencyList.filter((item) =>
      displayedSymbols.includes(item.symbol)
    );
  }

  setInterval(updateBitcoinPrices, 5000);

  updateBitcoinPrices();

  return {
    tableData: data,
  };
}
