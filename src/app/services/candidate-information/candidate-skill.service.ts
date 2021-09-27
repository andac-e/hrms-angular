import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CandidateSkill } from 'src/app/models/candidate/candidate-skill/candidate-skill';
import { Skill } from 'src/app/models/skill/skill';

@Injectable({
  providedIn: 'root',
})
export class CandidateSkillService {
  apiUrl: string =
    'https://javareactcamp-hrms-backend.herokuapp.com/api/candidateSkills';
  constructor(private httpClient: HttpClient) {}

  add(candidateSkill: Skill): Observable<Skill> {
    return this.httpClient.post<Skill>(this.apiUrl + '/add', candidateSkill);
  }

  deleteById(skillId: number): Observable<CandidateSkill> {
    return this.httpClient.delete<CandidateSkill>(
      this.apiUrl + '/delete/byId?candSkillId=' + skillId
    );
  }
}
