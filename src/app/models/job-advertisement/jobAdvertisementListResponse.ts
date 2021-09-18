import { BaseListResponse } from '../responses/baseListResponse';
import { JobAdvertisement } from './job-advertisement';

export interface JobAdvertisementListResponse
  extends BaseListResponse<JobAdvertisement> {}
