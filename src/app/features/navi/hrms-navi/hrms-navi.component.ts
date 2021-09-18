import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hrms-navi',
  templateUrl: './hrms-navi.component.html',
  styleUrls: ['./hrms-navi.component.css'],
})
export class HrmsNaviComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  checkUser(): boolean {
    if (localStorage.getItem('user')) {
      return true;
    } else {
      return false;
    }
  }

  checkEmployer(): boolean {
    if (this.checkUser()) {
      let user = JSON.parse(localStorage.getItem('user'));
      let role = user.message;
      if (role.includes('employer')) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  checkCandidate(): boolean {
    if (this.checkUser()) {
      let user = JSON.parse(localStorage.getItem('user'));
      let role = user.message;
      if (role.includes('candidate')) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
}
