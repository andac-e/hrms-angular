import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Candidate } from '../models/candidate/candidate';
import { CandidateListResponse } from '../models/candidate/candidateListResponse';
import { JobAdvertisement } from '../models/job-advertisement/job-advertisement';

@Injectable({
  providedIn: 'root',
})
export class CandidateService {
  apiUrl: string =
    'https://javareactcamp-hrms-backend.herokuapp.com/api/candidates';
  constructor(private httpClient: HttpClient) {}

  addCandidate(candidate: Candidate): Observable<Candidate> {
    return this.httpClient.post<Candidate>(this.apiUrl + '/add', candidate);
  }

  getAll(): Observable<CandidateListResponse> {
    return this.httpClient.get<CandidateListResponse>(this.apiUrl + '/get/all');
  }

  getCandidateById(id: number): Observable<CandidateListResponse> {
    return this.httpClient.get<CandidateListResponse>(
      this.apiUrl + '/get/byId?candId=' + id
    );
  }

  updateGithub(
    candidate: Candidate,
    githubLink: string
  ): Observable<Candidate> {
    return this.httpClient.put<Candidate>(
      this.apiUrl +
        '/update/githubAccount?candId=' +
        candidate.id +
        '&githubAccount=' +
        githubLink,
      candidate
    );
  }

  updateLinkedin(
    candidate: Candidate,
    linkedinLink: string
  ): Observable<Candidate> {
    return this.httpClient.put<Candidate>(
      this.apiUrl +
        '/update/linkedinAccount?candId=' +
        candidate.id +
        '&linkedinAccount=' +
        linkedinLink,
      candidate
    );
  }

  addFavoriteJob(
    candidate: Candidate,
    jobAdvId: number
  ): Observable<JobAdvertisement> {
    return this.httpClient.put<JobAdvertisement>(
      this.apiUrl +
        '/update/favoriteJobAdvs/add?candId=' +
        candidate.id +
        '&jobAdvId=' +
        jobAdvId,
      candidate
    );
  }

  removeFavoriteJob(
    candidate: Candidate,
    jobAdvId: number
  ): Observable<JobAdvertisement> {
    return this.httpClient.put<JobAdvertisement>(
      this.apiUrl +
        '/update/favoriteJobAdvs/remove?candId=' +
        candidate.id +
        '&jobAdvId=' +
        jobAdvId,
      candidate
    );
  }
}
