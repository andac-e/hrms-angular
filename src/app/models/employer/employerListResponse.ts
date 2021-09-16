import { Employer } from "./employer";

export interface EmployerListResponse {
    success:boolean;
    message:string;
    data: Employer[];
}