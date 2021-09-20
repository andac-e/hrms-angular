import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employer } from '../models/employer/employer';
import { EmployerListResponse } from '../models/employer/employerListResponse';

@Injectable({
  providedIn: 'root',
})
export class EmployerService {
  apiUrl: string =
    'https://javareactcamp-hrms-backend.herokuapp.com/api/employers';

  constructor(private httpClient: HttpClient) {}

  addEmployer(employer: Employer): Observable<Employer> {
    return this.httpClient.post<Employer>(this.apiUrl + '/add', employer);
  }

  getAll(): Observable<EmployerListResponse> {
    return this.httpClient.get<EmployerListResponse>(this.apiUrl + '/get/all');
  }
}
