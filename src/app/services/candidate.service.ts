import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Candidate } from '../models/candidate/candidate';

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

}
