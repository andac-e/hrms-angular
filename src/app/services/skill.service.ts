import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SkillListResponse } from '../models/skill/skillListResponse';

@Injectable({
  providedIn: 'root',
})
export class SkillService {
  apiUrl: string =
    'https://javareactcamp-hrms-backend.herokuapp.com/api/skills';
  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<SkillListResponse> {
    return this.httpClient.get<SkillListResponse>(this.apiUrl + '/get/all');
  }
}
