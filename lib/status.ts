import type { RiceCooker } from "../types";

const showStatus = (riceCooker: RiceCooker): void => {
  console.log(
    `Your rice cooker is ${riceCooker.power} and ${riceCooker.state}`
  );
};

const getLimits = (riceCooker: RiceCooker): number[] => {
  return [riceCooker.maximumRiceCups, riceCooker.maximumWaterCups];
};

const isOnAndClean = (riceCooker: RiceCooker): boolean => {
  return riceCooker.power === "ON" && riceCooker.state == "clean";
};

export { showStatus, isOnAndClean, getLimits };
