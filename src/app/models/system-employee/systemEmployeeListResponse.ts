import { BaseListResponse } from '../responses/baseListResponse';
import { SystemEmployee } from './system-employee';

export interface SystemEmployeeListResponse
  extends BaseListResponse<SystemEmployee> {}
