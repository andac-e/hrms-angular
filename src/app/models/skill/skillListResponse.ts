import { Skill } from './skill';

export interface SkillListResponse {
  success: boolean;
  message: string;
  data: Skill[];
}
