import { sleep } from "bun";
import { isOnAndClean, getLimits } from ".";
import type { RiceCooker } from "../types";
import { createPrompt } from "bun-promptx";

export const cookRice = (riceCooker: RiceCooker) => {
  const [maxRice, maxWater] = getLimits(riceCooker);
  if (!isOnAndClean(riceCooker)) {
    console.log("Your rice cooker is not ON (and may be dirty)");
  } else {
    let riceCups = Number(createPrompt("How many cup of rice: ").value);
    let waterCups = Number(createPrompt("How many cup of water: ").value);

    if (riceCups > maxRice || waterCups > maxWater) {
      console.log("Too much rice/water to handle for the rice cooker");
    }

    console.log("Starting...");
    let cookingTime = riceCups * waterCups * 10_000;
    console.log("Cooking");
    sleep(cookingTime);
    riceCooker.state = "dirty";
    console.log("Done !!!");
  }
};
