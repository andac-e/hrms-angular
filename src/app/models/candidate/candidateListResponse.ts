import { Candidate } from "./candidate";

export interface CandidateListResponse {
    success:boolean;
    message:string;
    data: Candidate[];
}