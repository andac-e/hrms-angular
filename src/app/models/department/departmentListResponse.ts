import { Department } from "./department";

export interface DepartmentListResponse {
    success:boolean;
    message:string;
    data: Department[];
}