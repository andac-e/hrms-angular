import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Employer } from 'src/app/models/employer/employer';
import { EmployerService } from 'src/app/services/employer.service';

@Component({
  selector: 'app-update-phone',
  templateUrl: './update-phone.component.html',
  styleUrls: ['./update-phone.component.css'],
})
export class UpdatePhoneComponent implements OnInit {
  phoneUpdateForm: FormGroup;
  loggedUser: any;
  loggedEmployer: Employer;

  constructor(
    private employerService: EmployerService,
    private toastrService: ToastrService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.createPhoneUpdateForm();
    this.getEmployerById();
  }

  createPhoneUpdateForm() {
    this.phoneUpdateForm = this.formBuilder.group({
      emplId: [this.getUserId()],
      phoneNumber: ['', Validators.required],
    });
  }

  updatePhoneNumber() {
    this.employerService
      .updatePhoneNumber(
        this.loggedEmployer,
        this.phoneUpdateForm.value['phoneNumber']
      )
      .subscribe(
        (response: any) => {
          this.toastrService.success('Successfully updated');
          this.pageReloadDelay();
        },
        (responseError) => {
          let message = JSON.stringify(responseError.error.data.errors);
          console.log(responseError);
          this.toastrService.error(
            message.replace(/{|}|"/gi, ''),
            'Verification error'
          );
        }
      );
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
