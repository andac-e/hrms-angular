import { JobAdvertisement } from "./job-advertisement";

export interface JobAdvertisementListResponse {
    success:boolean;
    message:string;
    data: JobAdvertisement[];
}