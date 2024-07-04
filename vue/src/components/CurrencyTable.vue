<script setup lang="ts">
import type { ICurrency } from "../helpers";

defineProps<{
  tableData: ICurrency[];
}>();
</script>

<template>
  <table>
    <thead>
      <tr>
        <th>Symbol / Name</th>
        <th>15m</th>
        <th>Buy</th>
        <th>Last</th>
        <th>Sell</th>
      </tr>
    </thead>
    <tbody>
      <tr
        :id="symbol"
        v-for="{ name, buy, last, sell, symbol, '15m': last15m } in tableData"
      >
        <td>{{ symbol }} / {{ name }}</td>
        <td>{{ last15m }}</td>
        <td>{{ buy }}</td>
        <td>{{ last }}</td>
        <td>{{ sell }}</td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped lang="scss">
table {
  width: 100%;

  th,
  td {
    border: none;
    padding: spacing(1);
  }

  th {
    background-color: #a48db6;
    color: white;
  }
}
</style>
