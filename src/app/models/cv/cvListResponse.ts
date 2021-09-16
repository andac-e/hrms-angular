import { Cv } from './cv';

export interface CvListResponse {
  success: boolean;
  message: string;
  data: Cv[];
}
