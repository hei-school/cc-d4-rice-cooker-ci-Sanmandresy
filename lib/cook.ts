import { isOnAndClean, isExceedingLimits } from ".";
import type { RiceCooker } from "../types";
import { createPrompt } from "bun-promptx";

const cookRice = (riceCooker: RiceCooker) => {
  if (isOnAndClean(riceCooker)) {
    let riceCups = Number(createPrompt("How many cup of rice: ").value);
    let waterCups = Number(createPrompt("How many cup of water: ").value);
    verify(riceCooker, riceCups, waterCups);
  } else console.log("Your rice cooker is OFF (and may be dirty)");
};

const verify = (
  riceCooker: RiceCooker,
  riceCups: number,
  waterCups: number
) => {
  if (!isExceedingLimits(riceCups, waterCups, riceCooker)) {
    console.log("Starting...");
    riceCooker.state = "dirty";
    console.log("Done cooking");
  }
  console.log("Too much rice/water to handle for the rice cooker");
};

export { verify, cookRice };
