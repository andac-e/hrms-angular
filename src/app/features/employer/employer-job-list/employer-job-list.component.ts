import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobAdvertisement } from 'src/app/models/job-advertisement/job-advertisement';
import { JobAdvertisementService } from 'src/app/services/job-advertisement.service';

@Component({
  selector: 'app-employer-job-list',
  templateUrl: './employer-job-list.component.html',
  styleUrls: ['./employer-job-list.component.css'],
})
export class EmployerJobListComponent implements OnInit {
  userId: any;
  companyName: any;
  employerJobs: JobAdvertisement[] = [];
  constructor(private jobAdvertisementService: JobAdvertisementService, private activatedRoute:ActivatedRoute) {}

  ngOnInit(): void {
    this.getJobsByEmployer();
    this.getCompanyName();
  }

  getJobsByEmployer() {
    this.jobAdvertisementService
      .getJobsByEmployer(this.getUserId())
      .subscribe((response: any) => {
        this.employerJobs = response.data;
      });
  }

  getJobById(id:number) {
    this.jobAdvertisementService.getJobById(id).subscribe((response:any)=>{
      console.log(response.data)
      response.data.active == false;
    })
  }

  changeActivity(job:JobAdvertisement) {
    this.jobAdvertisementService
      .changeActivityOfJob(job)
      .subscribe((response: any) => {
        window.location.reload();
        console.log(response)
      });
  }

  getUserId(): number {
    this.userId = JSON.parse(localStorage.getItem('user'));
    return this.userId.data.id;
  }

  getCompanyName() {
    this.userId = JSON.parse(localStorage.getItem('user'));
    this.companyName = this.userId.data.companyName;
  }
}
