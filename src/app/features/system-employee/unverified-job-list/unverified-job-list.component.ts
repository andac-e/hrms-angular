import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { JobAdvertisement } from 'src/app/models/job-advertisement/job-advertisement';
import { JobAdvertisementService } from 'src/app/services/job-advertisement.service';

@Component({
  selector: 'app-unverified-job-list',
  templateUrl: './unverified-job-list.component.html',
  styleUrls: ['./unverified-job-list.component.css'],
})
export class UnverifiedJobListComponent implements OnInit {
  unverifiedJobs: JobAdvertisement[] = [];
  loading: boolean = true;

  constructor(
    private jobAdvertisementService: JobAdvertisementService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.getUnverifiedJobs();
  }

  getUnverifiedJobs() {
    this.jobAdvertisementService.getUnverifieds(-1).subscribe((response:any)=>{
      this.unverifiedJobs = response.data;
      this.loading = false;
    })
  }

  changeVerification(job:JobAdvertisement) {
    this.jobAdvertisementService.changeVerificationOfJob(job).subscribe((response:any)=>{
      this.toastrService.success("Verification changed successfully.")
      this.pageReloadDelay();
    })
  }

  pageReloadDelay() {
    setTimeout(location.reload.bind(location), 1000);
  }
}
