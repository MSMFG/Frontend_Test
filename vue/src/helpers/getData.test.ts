import { describe, beforeEach, it, expect, vi, Mock } from "vitest";
import { getData } from "./getData";

describe("getData", () => {
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

  beforeEach(() => {
    (global.fetch as Mock) = vi.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockResponse),
      })
    );
  });

  describe("when called with a URL", () => {
    let url: string;
    let output: unknown;

    beforeEach(async () => {
      url = "http://www.test.com";
      output = await getData(url);
    });

    it("should make a fetch request", () => {
      expect(fetch).toHaveBeenCalledTimes(1);
    });

    it("should make a fetch request with the provided URL", () => {
      expect(fetch).toHaveBeenCalledWith(url);
    });

    it("should return a JSON response", () => {
      expect(output).toEqual(mockResponse);
    });
  });
});
