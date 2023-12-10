import type { RiceCooker } from "../types";

export const turnOnOrOff = (riceCooker: RiceCooker): void => {
  if (riceCooker.power === "OFF") {
    riceCooker.power = "ON";
    console.log("Rice cooker turned on");
  } else {
    riceCooker.power = "OFF";
    console.log("Rice cooker turned off");
  }
};
