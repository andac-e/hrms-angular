import { Component, OnInit } from '@angular/core';
import { JobAdvertisement } from 'src/app/models/job-advertisement/job-advertisement';
import { JobAdvertisementService } from 'src/app/services/job-advertisement.service';

@Component({
  selector: 'app-job-card',
  templateUrl: './job-card.component.html',
  styleUrls: ['./job-card.component.css']
})
export class JobCardComponent implements OnInit {
  jobAdvertisements: JobAdvertisement[]=[];
  constructor(private jobAdvertisementService: JobAdvertisementService) { }

  ngOnInit(): void {
    this.getJobsByCreatedAt();
  }

  getJobsByCreatedAt() {
    this.jobAdvertisementService.getByCreatedAt(-1).subscribe((response: any) => {
      this.jobAdvertisements = response.data;
    });
  }

}
