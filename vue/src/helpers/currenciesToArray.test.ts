import { describe, beforeEach, it, expect } from "vitest";
import { currenciesToArray } from "./currenciesToArray";

describe("currenciesToArray", () => {
  let mockObj = {
    "15m": 56011.02,
    last: 56011.02,
    buy: 56011.02,
    sell: 56011.02,
    symbol: "$",
  };
  let mockResponse = {
    USD: mockObj,
  };

  describe("when provided with no input", () => {
    let output: unknown;

    beforeEach(() => {
      output = currenciesToArray({});
    });

    it("should return an empty array", () => {
      expect(output).toEqual([]);
    });
  });

  describe("when provided with input", () => {
    let output: unknown;

    beforeEach(() => {
      output = currenciesToArray(mockResponse);
    });

    it("should return a formatted array with the key as name", () => {
      expect(output).toEqual([{ name: "USD", ...mockObj }]);
    });
  });
});
