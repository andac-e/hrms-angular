import { Component, OnInit } from '@angular/core';
import { JobAdvertisement } from 'src/app/models/job-advertisement/job-advertisement';
import { JobAdvertisementService } from 'src/app/services/job-advertisement.service';

@Component({
  selector: 'app-hrms-navi',
  templateUrl: './hrms-navi.component.html',
  styleUrls: ['./hrms-navi.component.css'],
})
export class HrmsNaviComponent implements OnInit {
  unverifiedJobs: JobAdvertisement[] = [];

  constructor(private jobAdvertisementService: JobAdvertisementService) {}

  ngOnInit(): void {
    this.getUnverifiedJobs();
  }

  getUnverifiedJobs() {
    this.jobAdvertisementService.getUnverifieds(-1).subscribe((response:any)=>{
      this.unverifiedJobs = response.data;
    })
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

  checkSystemEmployee(): boolean {
    if (this.checkUser()) {
      let user = JSON.parse(localStorage.getItem('user'));
      let role = user.message;
      if (role.includes('systemEmployee')) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
}
