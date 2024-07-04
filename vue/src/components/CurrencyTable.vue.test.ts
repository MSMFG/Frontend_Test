import { describe, it, expect } from "vitest";
import { shallowMount } from "@vue/test-utils";
import CurrencyTable from "./CurrencyTable.vue";

describe("<CurrencyTable />", () => {
  it("should render the component", () => {
    const wrapper = shallowMount(CurrencyTable, { props: { tableData: [] } });
    expect(wrapper).toBeDefined();
  });

  it("should render the provided table data", () => {
    const fakeTableData = [
      {
        name: "test",
        buy: 1,
        last: 2,
        sell: 3,
        symbol: "symbol",
        "15m": 4,
      },
      {
        name: "test",
        buy: 1,
        last: 2,
        sell: 3,
        symbol: "symbol",
        "15m": 4,
      },
    ];

    const wrapper = shallowMount(CurrencyTable, {
      props: {
        tableData: fakeTableData,
      },
    });

    const tableRows = wrapper.findAll("tbody > tr");

    expect(tableRows.length).toBe(fakeTableData.length);
  });
});
