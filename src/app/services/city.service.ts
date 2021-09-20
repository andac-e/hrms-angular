import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CityListResponse } from '../models/city/cityListResponse';

@Injectable({
  providedIn: 'root',
})
export class CityService {
  apiUrl: string =
    'https://javareactcamp-hrms-backend.herokuapp.com/api/cities';
  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<CityListResponse> {
    return this.httpClient.get<CityListResponse>(this.apiUrl + '/get/all');
  }
}
