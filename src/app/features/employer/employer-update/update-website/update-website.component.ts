import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Employer } from 'src/app/models/employer/employer';
import { EmployerService } from 'src/app/services/employer.service';

@Component({
  selector: 'app-update-website',
  templateUrl: './update-website.component.html',
  styleUrls: ['./update-website.component.css']
})
export class UpdateWebsiteComponent implements OnInit {
  websiteAndEmailUpdateForm: FormGroup;
  loggedUser: any;
  loggedEmployer: Employer;
  constructor(
    private employerService: EmployerService,
    private toastrService: ToastrService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.createWebsiteAndEmailUpdateForm();
    this.getEmployerById();
  }

  createWebsiteAndEmailUpdateForm() {
    this.websiteAndEmailUpdateForm = this.formBuilder.group({
      emplId: [this.getUserId()],
      email : ['', Validators.required],
      website : ['', Validators.required],
    });
  }

  updateWebsiteAndEmail() {
    this.employerService
      .updateEmailAndWebsite(
        this.loggedEmployer,
        this.websiteAndEmailUpdateForm.value['website'],
        this.websiteAndEmailUpdateForm.value['email'],
      )
      .subscribe((response: any) => {
        this.toastrService.success('Successfully updated');
        this.pageReloadDelay();
      },
      (responseError) => {
        let message = JSON.stringify(responseError.error.message);
        this.toastrService.error(
          message.replace(/{|}|"/gi, ''),
          'Verification error'
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
