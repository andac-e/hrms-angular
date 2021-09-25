import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  apiUrl: string = 'https://javareactcamp-hrms-backend.herokuapp.com/api/users';
  constructor(private httpClient: HttpClient) {}

  login(user: User): Observable<User> {
    return this.httpClient.get<User>(
      this.apiUrl + '/login?email=' + user.email + '&password=' + user.password
    );
  }

  updateProfileImg(
    user: User,
    userId: number,
    imgId: number
  ): Observable<User> {
    return this.httpClient.put<User>(
      this.apiUrl + '/update/profileImg?imgId=' + imgId + '&userId=' + userId,
      user
    );
  }
}
