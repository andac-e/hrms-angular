import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CandidateJobExperience } from 'src/app/models/candidate/candidate-job-experience/candidate-job-experience';
import { CandidateJobExperienceListResponse } from 'src/app/models/candidate/candidate-job-experience/candidateJobExperienceListResponce';

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

  getCandidatesByQuitYear(
    sortDirection: number
  ): Observable<CandidateJobExperienceListResponse> {
    return this.httpClient.get<CandidateJobExperienceListResponse>(
      this.apiUrl + '/get/byQuitYear?sortDirection=' + sortDirection
    );
  }

  deleteById(jobExpId: number): Observable<CandidateJobExperience> {
    return this.httpClient.delete<CandidateJobExperience>(
      this.apiUrl + '/delete/byId?candJobExpId=' + jobExpId
    );
  }

  updateWorkPlace(
    candidateJobExperience: CandidateJobExperience,
    workPlace: string,
    candJobId: number
  ): Observable<CandidateJobExperience> {
    return this.httpClient.put<CandidateJobExperience>(
      this.apiUrl +
        '/update/workPlace?candJobExpId=' +
        candJobId +
        '&workPlace=' +
        workPlace,
      candidateJobExperience
    );
  }

  updatePosition(
    candidateJobExperience: CandidateJobExperience,
    positionId: number,
    candJobId: number
  ): Observable<CandidateJobExperience> {
    return this.httpClient.put<CandidateJobExperience>(
      this.apiUrl +
        '/update/position?candJobExpId=' +
        candJobId +
        '&positionId=' +
        positionId,
      candidateJobExperience
    );
  }

  updateStartYear(
    candidateJobExperience: CandidateJobExperience,
    startYear: string,
    candJobId: number
  ): Observable<CandidateJobExperience> {
    return this.httpClient.put<CandidateJobExperience>(
      this.apiUrl +
        '/update/startYear?candJobExpId=' +
        candJobId +
        '&startYear=' +
        startYear,
      candidateJobExperience
    );
  }

  updateQuitYear(
    candidateJobExperience: CandidateJobExperience,
    quitYear: string,
    candJobId: number
  ): Observable<CandidateJobExperience> {
    return this.httpClient.put<CandidateJobExperience>(
      this.apiUrl +
        '/update/quitYear?candJobExpId=' +
        candJobId +
        '&quitYear=' +
        quitYear,
      candidateJobExperience
    );
  }
}
