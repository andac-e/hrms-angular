import { BaseListResponse } from '../responses/baseListResponse';
import { Candidate } from './candidate';

export interface CandidateListResponse extends BaseListResponse<Candidate> {}
