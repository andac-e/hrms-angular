import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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
}
