import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user/user';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css'],
})
export class UserInfoComponent implements OnInit {
  user: any;
  constructor(private router: Router) {}

  ngOnInit(): void {}

  getUserInfo(): any {
    this.user = JSON.parse(localStorage.getItem('user'));
    return this.user;
  }

  signOut() {
    localStorage.clear();
    this.router.navigate(['login']);
  }
}
