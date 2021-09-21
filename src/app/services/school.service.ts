import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SchoolListResponse } from '../models/school/schoolListResponse';

@Injectable({
  providedIn: 'root',
})
export class SchoolService {
  apiUrl: string =
    'https://javareactcamp-hrms-backend.herokuapp.com/api/schools';
  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<SchoolListResponse> {
    return this.httpClient.get<SchoolListResponse>(this.apiUrl + '/get/all');
  }
}
