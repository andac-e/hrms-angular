import { Component, OnInit } from '@angular/core';
import { JobAdvertisement } from 'src/app/models/job-advertisement/job-advertisement';
import { JobAdvertisementService } from 'src/app/services/job-advertisement.service';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent implements OnInit {
  jobs : JobAdvertisement[] = []
  constructor(private jobAdvertisementService:JobAdvertisementService) { }

  ngOnInit(): void {
    this.getActiveJobs();
  }

  getActiveJobs() {
    this.jobAdvertisementService.getActives().subscribe((response:any)=> {
      this.jobs = response.data
    })
  }

}
