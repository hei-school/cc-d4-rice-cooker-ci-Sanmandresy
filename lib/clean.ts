import type { RiceCooker } from "../types";

export const cleanRiceCooker = (riceCooker: RiceCooker): void => {
  if (riceCooker.state === "dirty" && riceCooker.power === "OFF") {
    riceCooker.state = "clean";
    console.log("Cleaning done");
  }
  console.log(
    "No need to clean something that is already shining and you may be electrocuted if it is still ON"
  );
};
