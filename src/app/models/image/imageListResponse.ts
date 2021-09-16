import { Image } from "./image";

export interface ImageListResponse {
    success:boolean;
    message:string;
    data: Image[];
}