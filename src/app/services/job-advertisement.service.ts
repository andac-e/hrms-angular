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

  add(jobAdvertisement: JobAdvertisement): Observable<JobAdvertisement> {
    return this.httpClient.post<JobAdvertisement>(
      this.apiUrl + '/add',
      jobAdvertisement
    );
  }
}
