import { BaseListResponse } from '../../responses/baseListResponse';
import { CandidateSkill } from './candidate-skill';

export interface CandidateSkillListResponse
  extends BaseListResponse<CandidateSkill> {}
