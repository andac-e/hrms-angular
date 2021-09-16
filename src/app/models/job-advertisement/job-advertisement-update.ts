import { City } from "../city/city";
import { Employer } from "../employer/employer";
import { Position } from "../position/position";

export interface JobAdvertisementUpdate {
  updateId: number;
  employer: Employer;
  position: Position;
  jobDescription: string;
  city: City;
  minSalary?: number;
  maxSalary?: number;
  openPositions: number;
  deadline: string;
  workModel: string;
  workTime: string;
}
