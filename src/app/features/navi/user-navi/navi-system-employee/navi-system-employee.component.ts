import { Component, OnInit } from '@angular/core';
import { Employer } from 'src/app/models/employer/employer';
import { JobAdvertisement } from 'src/app/models/job-advertisement/job-advertisement';
import { EmployerService } from 'src/app/services/employer.service';
import { JobAdvertisementService } from 'src/app/services/job-advertisement.service';

@Component({
  selector: 'app-navi-system-employee',
  templateUrl: './navi-system-employee.component.html',
  styleUrls: ['./navi-system-employee.component.css'],
})
export class NaviSystemEmployeeComponent implements OnInit {
  unverifiedJobs: JobAdvertisement[] = [];
  unverifiedEmployers: Employer[] = [];

  constructor(
    private jobAdvertisementService: JobAdvertisementService,
    private employerService: EmployerService
  ) {}

  ngOnInit(): void {
    this.getUnverifiedJobs();
    this.getUnverifiedEmployers();
  }

  getUnverifiedJobs() {
    this.jobAdvertisementService
      .getUnverifieds(-1)
      .subscribe((response: any) => {
        this.unverifiedJobs = response.data;
      });
  }

  getUnverifiedEmployers() {
    this.employerService.getAll().subscribe((response: any) => {
      response.data = response.data.filter((r) => r.updateVerified === false);
      this.unverifiedEmployers = response.data;
    });
  }

  checkUser(): boolean {
    if (localStorage.getItem('user')) {
      return true;
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
