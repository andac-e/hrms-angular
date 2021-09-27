import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CandidateLanguage } from 'src/app/models/candidate/candidate-language/candidate-language';
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

  deleteById(langId: number): Observable<CandidateLanguage> {
    return this.httpClient.delete<CandidateLanguage>(
      this.apiUrl + '/delete/byId?CandLangId=' + langId
    );
  }
}
