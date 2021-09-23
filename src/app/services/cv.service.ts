import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cv } from '../models/cv/cv';

@Injectable({
  providedIn: 'root',
})
export class CvService {
  apiUrl: string = 'https://javareactcamp-hrms-backend.herokuapp.com/api/cvs';
  constructor(private httpClient: HttpClient) {}

  addCv(cv: Cv): Observable<Cv> {
    return this.httpClient.post<Cv>(this.apiUrl + '/add', cv);
  }
}
