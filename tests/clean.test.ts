import { test, expect, jest } from "bun:test";
import { RiceCooker } from "../types";
import { cleanRiceCooker } from "../lib";

// Mock the console
console.log = jest.fn();

const riceCooker: RiceCooker = {
  power: "OFF",
  state: "dirty",
  maximumRiceCups: 6,
  maximumWaterCups: 5,
};

test("clean is ok", () => {
  cleanRiceCooker(riceCooker);

  expect(console.log).toHaveBeenCalledWith(`Cleaning done`);
});

test("clean is not ok", () => {
  riceCooker.power = "ON";
  cleanRiceCooker(riceCooker);

  expect(console.log).toHaveBeenCalledWith(
    `No need to clean something that is already shining and you may be electrocuted if it is still ON`
  );
});
