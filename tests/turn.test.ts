import { test, expect, jest } from "bun:test";
import { RiceCooker } from "../types";
import { turnOnOrOff } from "../lib";

// Mock the console
console.log = jest.fn();

const riceCooker: RiceCooker = {
  power: "OFF",
  state: "clean",
  maximumRiceCups: 6,
  maximumWaterCups: 5,
};

test("is turned ON", () => {
  turnOnOrOff(riceCooker);

  expect(console.log).toHaveBeenCalledWith(`Rice cooker turned on`);
});

test("is turned OFF", () => {
  turnOnOrOff(riceCooker);

  expect(console.log).toHaveBeenCalledWith(`Rice cooker turned off`);
});
