import { Image } from "../image/image";
import { JobAdvertisement } from "../job-advertisement/job-advertisement";

export interface Employer {
    id: number;
    email: string;
    profileImgId?: any;
    images: Image[];
    createdAt: Date;
    lastModifiedAt?: any;
    companyName: string;
    website: string;
    phoneNumber: string;
    verified: boolean;
    rejected?: any;
    updateVerified?: any;
    jobAdvertisements: JobAdvertisement[];
}