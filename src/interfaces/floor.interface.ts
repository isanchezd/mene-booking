import { Place } from "./place.interface";

export interface Floor {
  id: string;
  name: string;
  places: Place[][];
}
