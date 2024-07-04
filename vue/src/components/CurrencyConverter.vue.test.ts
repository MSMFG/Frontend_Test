import { describe, it, expect } from "vitest";
import { shallowMount } from "@vue/test-utils";
import CurrencyConverter from "./CurrencyConverter.vue";

describe("<CurrencyConverter />", () => {
  it("should render the component", () => {
    const wrapper = shallowMount(CurrencyConverter);
    expect(wrapper).toBeDefined();
  });
});
