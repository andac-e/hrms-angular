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

  getEmployerById(id: number): Observable<EmployerListResponse> {
    return this.httpClient.get<EmployerListResponse>(
      this.apiUrl + '/get/byId?emplId=' + id
    );
  }

  updateCompanyName(
    employer: Employer,
    companyName: string
  ): Observable<Employer> {
    return this.httpClient.put<Employer>(
      this.apiUrl +
        '/update/companyName?companyName=' +
        companyName +
        '&emplId=' +
        employer.id,
      employer
    );
  }

  updateEmailAndWebsite(
    employer: Employer,
    website: string,
    email: string
  ): Observable<Employer> {
    return this.httpClient.put<Employer>(
      this.apiUrl +
        '/update/emailAndWebsite?email=' +
        email +
        '&emplId=' +
        employer.id +
        '&website=' +
        website,
      employer
    );
  }

  updatePhoneNumber(
    employer: Employer,
    phoneNumber: string
  ): Observable<Employer> {
    return this.httpClient.put<Employer>(
      this.apiUrl +
        '/update/phoneNumber?emplId=' +
        employer.id +
        '&phoneNumber=' +
        phoneNumber,
      employer
    );
  }

  applyChanges(
    employer: Employer
  ): Observable<Employer> {
    return this.httpClient.put<Employer>(
      this.apiUrl +
        '/update/applyChanges?emplId=' +
        employer.id,
      employer
    );
  }
}
