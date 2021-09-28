import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JobAdvertisement } from '../models/job-advertisement/job-advertisement';
import { JobAdvertisementListResponse } from '../models/job-advertisement/jobAdvertisementListResponse';

@Injectable({
  providedIn: 'root',
})
export class JobAdvertisementService {
  apiUrl: string =
    'https://javareactcamp-hrms-backend.herokuapp.com/api/jobAdvertisements';
  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<JobAdvertisementListResponse> {
    return this.httpClient.get<JobAdvertisementListResponse>(
      this.apiUrl + '/get/all'
    );
  }

  getActives(): Observable<JobAdvertisementListResponse> {
    return this.httpClient.get<JobAdvertisementListResponse>(
      this.apiUrl + '/get/active'
    );
  }

  getByCreatedAt(sortDirection:number): Observable<JobAdvertisementListResponse> {
    return this.httpClient.get<JobAdvertisementListResponse>(
      this.apiUrl + '/get/activeVerifiedByCreatedAt?sortDirection=' + sortDirection
    );
  }

  getUnverifieds(
    sortDirection: number
  ): Observable<JobAdvertisementListResponse> {
    return this.httpClient.get<JobAdvertisementListResponse>(
      this.apiUrl + '/get/unverified?sortDirection=' + sortDirection
    );
  }

  getJobsByEmployer(
    employerId: number
  ): Observable<JobAdvertisementListResponse> {
    return this.httpClient.get<JobAdvertisementListResponse>(
      this.apiUrl + '/get/byEmployer?employerId=' + employerId
    );
  }

  getJobById(jobAdvId: number): Observable<JobAdvertisementListResponse> {
    return this.httpClient.get<JobAdvertisementListResponse>(
      this.apiUrl + '/get/byId?jobAdvId=' + jobAdvId
    );
  }

  add(jobAdvertisement: JobAdvertisement): Observable<JobAdvertisement> {
    return this.httpClient.post<JobAdvertisement>(
      this.apiUrl + '/add',
      jobAdvertisement
    );
  }

  changeVerificationOfJob(
    jobAdvertisement: JobAdvertisement
  ): Observable<JobAdvertisement> {
    return this.httpClient.put<JobAdvertisement>(
      this.apiUrl +
        '/update/verification?jobAdvId=' +
        jobAdvertisement.id +
        '&status=' +
        !jobAdvertisement.verified,
      jobAdvertisement
    );
  }

  changeActivityOfJob(
    jobAdvertisement: JobAdvertisement
  ): Observable<JobAdvertisement> {
    return this.httpClient.put<JobAdvertisement>(
      this.apiUrl +
        '/update/activation?jobAdvId=' +
        jobAdvertisement.id +
        '&status=' +
        !jobAdvertisement.active,
      jobAdvertisement
    );
  }
}
