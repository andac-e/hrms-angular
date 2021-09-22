import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DepartmentListResponse } from '../models/department/departmentListResponse';

@Injectable({
  providedIn: 'root',
})
export class DepartmentService {
  apiUrl: string =
    'https://javareactcamp-hrms-backend.herokuapp.com/api/departments';
  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<DepartmentListResponse> {
    return this.httpClient.get<DepartmentListResponse>(
      this.apiUrl + '/get/all'
    );
  }
}
