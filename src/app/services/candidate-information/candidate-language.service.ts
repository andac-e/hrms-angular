import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Language } from 'src/app/models/language/language';

@Injectable({
  providedIn: 'root',
})
export class CandidateLanguageService {
  apiUrl: string =
    'https://javareactcamp-hrms-backend.herokuapp.com/api/candidateLanguages';
  constructor(private httpClient: HttpClient) {}

  add(candidateLanguage: Language): Observable<Language> {
    return this.httpClient.post<Language>(
      this.apiUrl + '/add',
      candidateLanguage
    );
  }
}
