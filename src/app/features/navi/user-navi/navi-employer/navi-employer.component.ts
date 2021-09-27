import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navi-employer',
  templateUrl: './navi-employer.component.html',
  styleUrls: ['./navi-employer.component.css']
})
export class NaviEmployerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

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

}
