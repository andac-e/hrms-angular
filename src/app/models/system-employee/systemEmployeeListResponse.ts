import { SystemEmployee } from './system-employee';

export interface SystemEmployeeListResponse {
  success: boolean;
  message: string;
  data: SystemEmployee[];
}
