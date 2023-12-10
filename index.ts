import { RiceCooker } from "./types";
import { createPrompt } from "bun-promptx";
import { cookRice, cleanRiceCooker, turnOnOrOff, showStatus } from "./lib";

const myRiceCooker: RiceCooker = {
  power: "OFF",
  state: "clean",
  maximumRiceCups: 6,
  maximumWaterCups: 5,
};

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
  switch (choice) {
    case 1:
      cookRice(myRiceCooker);
      break;
    case 2:
      turnOnOrOff(myRiceCooker);
      break;
    case 3:
      cleanRiceCooker(myRiceCooker);
      break;
    case 4:
      showStatus(myRiceCooker);
      break;
    case 5:
      console.log("Bye");
      break;

    default:
      console.log("Invalid choice");
      break;
  }
  if (choice === 5) {
    break;
  }
}
