import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CandidateSchool } from 'src/app/models/candidate/candidate-school/candidate-school';
import { School } from 'src/app/models/school/school';
import { SchoolListResponse } from 'src/app/models/school/schoolListResponse';

@Injectable({
  providedIn: 'root',
})
export class CandidateSchoolService {
  apiUrl: string =
    'https://javareactcamp-hrms-backend.herokuapp.com/api/candidateSchools';
  constructor(private httpClient: HttpClient) {}

  add(candidateSchool: School): Observable<School> {
    return this.httpClient.post<School>(this.apiUrl + '/add', candidateSchool);
  }

  getCandidatesByGradYear(sortDirection: number): Observable<SchoolListResponse> {
    return this.httpClient.get<SchoolListResponse>(
      this.apiUrl + '/get/byGradYear?sortDirection=' + sortDirection
    );
  }

  deleteById(schlId: number): Observable<CandidateSchool> {
    return this.httpClient.delete<CandidateSchool>(
      this.apiUrl + '/delete/byId?candSchId=' + schlId
    );
  }
}
