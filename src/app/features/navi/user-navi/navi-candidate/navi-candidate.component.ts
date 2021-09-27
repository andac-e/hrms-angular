import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navi-candidate',
  templateUrl: './navi-candidate.component.html',
  styleUrls: ['./navi-candidate.component.css']
})
export class NaviCandidateComponent implements OnInit {

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
