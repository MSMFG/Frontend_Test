<script setup lang="ts">
import CurrecyConverter from "./components/CurrencyConverter.vue";
import CurrencyTable from "./components/CurrencyTable.vue";

import useCurrencyTable from "./hooks/useCurrencyTable";

// TODO: implement usage of this URL
// const EXCHANGE_CONVERSION_URL = " https://blockchain.info/tobtc?currency=GBP&value=20";

const EXCHANGE_URL = "https://blockchain.info/ticker";
const { tableData } = useCurrencyTable(EXCHANGE_URL);
</script>

<template>
  <main class="page">
    <h1>MSMG Bitcoin app</h1>
    <CurrencyTable :table-data="tableData" />
    <CurrecyConverter />
  </main>
</template>

<style scoped>
.page {
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
}

h1 {
  color: white;
  background-color: black;
}
</style>
