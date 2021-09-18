import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Position } from '../models/position/position';
import { PositionListResponse } from '../models/position/positionListResponse';

@Injectable({
  providedIn: 'root',
})
export class PositionService {
  apiUrl: string =
    'https://javareactcamp-hrms-backend.herokuapp.com/api/positions';

  constructor(private httpClient: HttpClient) {}

  addPosition(position: Position): Observable<Position> {
    return this.httpClient.post<Position>(
      this.apiUrl + '/add?positionTitle=' + position.title,
      position
    );
  }

  getAll(): Observable<PositionListResponse> {
    return this.httpClient.get<PositionListResponse>(this.apiUrl + '/get/all');
  }
}
