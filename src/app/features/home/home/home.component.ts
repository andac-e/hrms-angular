import { Component, OnInit } from '@angular/core';
import { EmployerService } from 'src/app/services/employer.service';
import { JobAdvertisementService } from 'src/app/services/job-advertisement.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  jobAdvertisementCount: number;
  employerCount: number;

  constructor(
    private jobAdvertisementService: JobAdvertisementService,
    private employerService: EmployerService
  ) {}

  ngOnInit(): void {
    this.getActiveJobs();
    this.getEmployers();
  }

  getActiveJobs() {
    this.jobAdvertisementService.getActives().subscribe((response: any) => {
      this.jobAdvertisementCount = response.data.length;
    });
  }

  getEmployers() {
    this.employerService.getAll().subscribe((response: any) => {
      this.employerCount = response.data.length;
    });
  }
}
