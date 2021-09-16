import { School } from './school';

export interface SchoolListResponse {
  success: boolean;
  message: string;
  data: School[];
}
