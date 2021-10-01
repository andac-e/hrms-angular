import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Employer } from 'src/app/models/employer/employer';
import { EmployerService } from 'src/app/services/employer.service';

@Component({
  selector: 'app-update-company-name',
  templateUrl: './update-company-name.component.html',
  styleUrls: ['./update-company-name.component.css'],
})
export class UpdateCompanyNameComponent implements OnInit {
  companyNameUpdateForm: FormGroup;
  loggedUser: any;
  loggedEmployer: Employer;
  constructor(
    private employerService: EmployerService,
    private toastrService: ToastrService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.createCompanyNameUpdateForm();
    this.getEmployerById();
  }

  createCompanyNameUpdateForm() {
    this.companyNameUpdateForm = this.formBuilder.group({
      emplId: [this.getUserId()],
      companyName: ['', Validators.required],
    });
  }

  updateCompanyName() {
    this.employerService
      .updateCompanyName(
        this.loggedEmployer,
        this.companyNameUpdateForm.value['companyName']
      )
      .subscribe((response: any) => {
        this.toastrService.success('Successfully updated');
        this.pageReloadDelay();
      },
      (responseError) => {
        let message = JSON.stringify(responseError.error.message);
        this.toastrService.error(
          message.replace(/{|}|"/gi, ''),
          'Update Error!'
        );
      });
  }

  getEmployerById() {
    this.employerService
      .getEmployerById(this.getUserId())
      .subscribe((response: any) => {
        this.loggedEmployer = response.data;
      });
  }

  getUserId(): number {
    this.loggedUser = JSON.parse(localStorage.getItem('user'));
    return this.loggedUser.data.id;
  }
  
  pageReloadDelay() {
    setTimeout(location.reload.bind(location), 1000);
  }
}
