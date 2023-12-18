import type { RiceCooker } from "../types";

const showStatus = (riceCooker: RiceCooker): void => {
  console.log(
    `Your rice cooker is ${riceCooker.power} and ${riceCooker.state}`
  );
};

const isExceedingLimits = (
  riceCups: number,
  waterCups: number,
  riceCooker: RiceCooker
): boolean => {
  return (
    riceCups > riceCooker.maximumRiceCups ||
    waterCups > riceCooker.maximumWaterCups
  );
};
const isOnAndClean = (riceCooker: RiceCooker): boolean => {
  return riceCooker.power === "ON" && riceCooker.state == "clean";
};

export { showStatus, isOnAndClean, isExceedingLimits };
