import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobAdvertisement } from 'src/app/models/job-advertisement/job-advertisement';
import { JobAdvertisementService } from 'src/app/services/job-advertisement.service';

@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.css'],
})
export class JobDetailComponent implements OnInit {
  jobAdvertisement: JobAdvertisement;

  constructor(
    private jobAdvertisementService: JobAdvertisementService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.getJobById(params['id']);
    });
  }

  getJobById(id: number) {
    this.jobAdvertisementService.getJobById(id).subscribe((response: any) => {
      this.jobAdvertisement = response.data;
      console.log(this.jobAdvertisement)
    });
  }
}
