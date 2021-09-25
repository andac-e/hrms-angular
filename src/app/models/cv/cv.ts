import { CandidateJobExperience } from '../candidate/candidate-job-experience/candidate-job-experience';
import { Language } from '../language/language';
import { School } from '../school/school';
import { Skill } from '../skill/skill';

export interface Cv {
  id: number;
  candidateId: number;
  candidateJobExperienceIds: CandidateJobExperience[];
  candidateLanguageIds: Language[];
  candidateSchoolIds: School[];
  candidateSkillIds: Skill[];
  coverLetter: string;
  title: string;
}
