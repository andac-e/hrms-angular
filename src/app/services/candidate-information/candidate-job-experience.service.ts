import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CandidateJobExperience } from 'src/app/models/candidate-job-experience/candidate-job-experience';
import { CandidateJobExperienceListResponse } from 'src/app/models/candidate-job-experience/candidateJobExperienceListResponce';

@Injectable({
  providedIn: 'root',
})
export class CandidateJobExperienceService {
  apiUrl: string =
    'https://javareactcamp-hrms-backend.herokuapp.com/api/candidateJobExperiences';
  constructor(private httpClient: HttpClient) {}

  add(
    candidateJobExperience: CandidateJobExperience
  ): Observable<CandidateJobExperience> {
    return this.httpClient.post<CandidateJobExperience>(
      this.apiUrl + '/add',
      candidateJobExperience
    );
  }

  getCandidatesByQuitYear(sortDirection: number): Observable<CandidateJobExperienceListResponse> {
    return this.httpClient.get<CandidateJobExperienceListResponse>(
      this.apiUrl + '/get/byQuitYear?sortDirection=' + sortDirection
    );
  }
}
