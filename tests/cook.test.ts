import { test, expect, jest } from "bun:test";
import { RiceCooker } from "../types";
import { cookRice, verify } from "../lib";

// Mock the console
console.log = jest.fn();

const riceCooker: RiceCooker = {
  power: "OFF",
  state: "clean",
  maximumRiceCups: 6,
  maximumWaterCups: 5,
};

test("is off or is dirty", () => {
  cookRice(riceCooker);
  expect(console.log).toHaveBeenCalledWith(
    `Your rice cooker is OFF (and may be dirty)`
  );
});

test("exceeds limits", () => {
  riceCooker.power = "ON";
  let riceCups = 10;
  let waterCups = 10;
  verify(riceCooker, riceCups, waterCups);
  expect(console.log).toHaveBeenCalledWith(
    `Too much rice/water to handle for the rice cooker`
  );
});

test("is cooking ok", () => {
  riceCooker.power = "ON";
  let riceCups = 3;
  let waterCups = 3;
  verify(riceCooker, riceCups, waterCups);
  expect(console.log).toHaveBeenCalledWith(`Starting...`);
  expect(console.log).toHaveBeenCalledWith(`Done cooking`);
});
