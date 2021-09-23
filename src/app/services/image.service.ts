import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Image } from '../models/image/image';

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  apiUrl: string =
    'https://javareactcamp-hrms-backend.herokuapp.com/api/images';
  constructor(private httpClient: HttpClient) {}

  upload(file: any, userId: number): Observable<any> {
    return this.httpClient.post<any>(
      this.apiUrl + '/upload?userId=' + userId,
      file
    );
  }
}
