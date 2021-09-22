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

  upload(image: any, userId: any): Observable<Image> {
    const data = new FormData();
    data.append("multipartFile ", image);
    data.append("userId ", userId);
    
    return this.httpClient.post<Image>(
      this.apiUrl + '/upload?userId=' + userId,
      data
    );
  }
}
