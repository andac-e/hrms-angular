import { City } from "../city/city";
import { Employer } from "../employer/employer";
import { Position } from "../position/position";
import { JobAdvertisementUpdate } from "./job-advertisement-update";

export interface JobAdvertisement {
    id: number;
    employer: Employer;
    position: Position;
    jobDescription: string;
    city: City;
    minSalary?: number;
    maxSalary?: any;
    openPositions: number;
    deadline: string;
    workModel: string;
    workTime: string;
    jobAdvertisementUpdate: JobAdvertisementUpdate;
    active: boolean;
    verified: boolean;
    rejected?: boolean;
    updateVerified?: boolean;
    createdAt: Date;
    lastModifiedAt: Date;
}