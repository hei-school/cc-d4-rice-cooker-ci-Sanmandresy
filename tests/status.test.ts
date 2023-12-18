import { test, expect, jest } from "bun:test";
import { RiceCooker } from "../types";
import { showStatus } from "../lib";

// Mock the console
console.log = jest.fn();

const riceCooker: RiceCooker = {
  power: "OFF",
  state: "clean",
  maximumRiceCups: 6,
  maximumWaterCups: 5,
};

test("showStatus", () => {
  showStatus(riceCooker);

  expect(console.log).toHaveBeenCalledWith(`Your rice cooker is OFF and clean`);
});
