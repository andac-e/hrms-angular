import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Employer } from 'src/app/models/employer/employer';
import { EmployerService } from 'src/app/services/employer.service';

@Component({
  selector: 'app-unverified-update-list',
  templateUrl: './unverified-update-list.component.html',
  styleUrls: ['./unverified-update-list.component.css'],
})
export class UnverifiedUpdateListComponent implements OnInit {
  unverifiedEmployers: Employer[] = [];
  loading: boolean = true;

  constructor(
    private employerService: EmployerService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.getUnverifiedEmployers();
  }

  getUnverifiedEmployers() {
    this.employerService.getAll().subscribe((response: any) => {
      response.data = response.data.filter((r) => r.updateVerified === false);
      this.unverifiedEmployers = response.data;
      this.loading = false;
    });
  }

  changeVerification(employer: Employer) {
    this.employerService
      .applyChanges(employer)
      .subscribe((response: any) => {
        this.toastrService.success('Verification changed successfully.');
        this.pageReloadDelay();
      });
  }

  pageReloadDelay() {
    setTimeout(location.reload.bind(location), 1000);
  }
}
