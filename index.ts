import { RiceCooker } from "./types";
import { createPrompt } from "bun-promptx";
import { cookRice, cleanRiceCooker, turnOnOrOff, showStatus } from "./lib";

const myRiceCooker: RiceCooker = {
  power: "OFF",
  state: "clean",
  maximumRiceCups: 6,
  maximumWaterCups: 5,
};

export const performAction = (choice: number, riceCooker: RiceCooker): void => {
  switch (choice) {
    case 1:
      cookRice(riceCooker);
      break;
    case 2:
      turnOnOrOff(riceCooker);
      break;
    case 3:
      cleanRiceCooker(riceCooker);
      break;
    case 4:
      showStatus(riceCooker);
      break;
    case 5:
      console.log("Bye");
      process.exit(0);
    default:
      console.log("Invalid choice");
      break;
  }
};

const interact = (riceCooker: RiceCooker): void => {
  while (true) {
    console.log(`
     What do you want to do with your rice cooker ?
     1) Cook some rice
     2) Turn on/off the rice cooker
     3) Clean the rice cooker
     4) Check its status
     5) Never mind
   `);
    let choice = Number(createPrompt("Enter your choice: ").value);
    performAction(choice, riceCooker);
  }
};

interact(myRiceCooker);
