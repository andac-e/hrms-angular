import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SystemEmployee } from '../models/system-employee/system-employee';

@Injectable({
  providedIn: 'root',
})
export class SystemEmployeeService {
  apiUrl: string =
    'https://javareactcamp-hrms-backend.herokuapp.com/api/systemEmployees';
  constructor(private httpClient: HttpClient) {}

  getSystemEmployeeById(id: number): Observable<SystemEmployee> {
    return this.httpClient.get<SystemEmployee>(
      this.apiUrl + '/get/byId?sysEmplId=' + id
    );
  }

  updateFirstName(
    systemEmployee: SystemEmployee,
    firstName: string
  ): Observable<SystemEmployee> {
    return this.httpClient.put<SystemEmployee>(
      this.apiUrl +
        '/update/firstName?firstName=' +
        firstName +
        '&sysEmplId=' +
        systemEmployee.id,
      systemEmployee
    );
  }

  updateLastName(
    systemEmployee: SystemEmployee,
    lastName: string
  ): Observable<SystemEmployee> {
    return this.httpClient.put<SystemEmployee>(
      this.apiUrl +
        '/update/lastName?lastName=' +
        lastName +
        '&sysEmplId=' +
        systemEmployee.id,
      systemEmployee
    );
  }
}
