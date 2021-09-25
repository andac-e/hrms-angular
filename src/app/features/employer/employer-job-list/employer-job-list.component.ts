import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { JobAdvertisement } from 'src/app/models/job-advertisement/job-advertisement';
import { JobAdvertisementService } from 'src/app/services/job-advertisement.service';

@Component({
  selector: 'app-employer-job-list',
  templateUrl: './employer-job-list.component.html',
  styleUrls: ['./employer-job-list.component.css'],
})
export class EmployerJobListComponent implements OnInit {
  loggedUser: any;
  companyName: any;
  employerJobs: JobAdvertisement[] = [];
  loading: boolean = true;

  constructor(
    private jobAdvertisementService: JobAdvertisementService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.getJobsByEmployer();
    this.getCompanyName();
  }

  getJobsByEmployer() {
    this.jobAdvertisementService
      .getJobsByEmployer(this.getUserId())
      .subscribe((response: any) => {
        this.employerJobs = response.data;
        this.loading = false;
      });
  }

  changeActivity(job: JobAdvertisement) {
    this.jobAdvertisementService
    .changeActivityOfJob(job)
    .subscribe((response: any) => {
        this.toastrService.success("Activation changed successfully.")
        this.pageReloadDelay();
      });
  }

  getUserId(): number {
    this.loggedUser = JSON.parse(localStorage.getItem('user'));
    return this.loggedUser.data.id;
  }

  getCompanyName() {
    this.loggedUser = JSON.parse(localStorage.getItem('user'));
    this.companyName = this.loggedUser.data.companyName;
  }
  
  pageReloadDelay() {
    setTimeout(location.reload.bind(location), 1000);
  }
}
