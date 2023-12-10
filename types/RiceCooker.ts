import { Power } from "./Power";
import { State } from "./State";

export type RiceCooker = {
  state: State;
  power: Power;
  maximumRiceCups: number;
  maximumWaterCups: number;
};
