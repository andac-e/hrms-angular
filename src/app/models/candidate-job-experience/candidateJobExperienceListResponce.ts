import { CandidateJobExperience } from './candidate-job-experience';

export interface CandidateJobExperienceListResponse {
  success: boolean;
  message: string;
  data: CandidateJobExperience[];
}
