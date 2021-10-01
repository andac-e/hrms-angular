import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EmployerService } from 'src/app/services/employer.service';

@Component({
  selector: 'app-employer-signup',
  templateUrl: './employer-signup.component.html',
  styleUrls: ['./employer-signup.component.css'],
})
export class EmployerSignupComponent implements OnInit {
  employerSignForm: FormGroup;

  constructor(
    private employerService: EmployerService,
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.createSignForm();
  }

  createSignForm() {
    this.employerSignForm = this.formBuilder.group({
      companyName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(20),
        ],
      ],
      phoneNumber: [
        '',
        [
          Validators.required,
          Validators.minLength(11),
          Validators.maxLength(11),
        ],
      ],
      website: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    });
  }

  addEmployer() {
    if (this.employerSignForm.valid) {
      if (this.checkPasswordMatch()) {
        this.employerService.addEmployer(this.employerSignForm.value).subscribe(
          (response: any) => {
            this.toastrService.success('Successfully registered');
            this.router.navigate(['login']);
          },
          (responseError) => {
            let message = JSON.stringify(responseError.error.data.errors);
            this.toastrService.error(
              message.replace(/{|}|"/gi, ''),
              'Validation error'
            );
          }
        );
      }
    } else {
      this.toastrService.error('Your form is invalid');
    }
  }

  checkPasswordMatch(): boolean {
    let password = this.employerSignForm.value['password'];
    let confirmPassword = this.employerSignForm.value['confirmPassword'];

    if (password === confirmPassword) {
      return true;
    } else {
      this.toastrService.error(
        'Your password and confirm password do not match!'
      );
      return false;
    }
  }
}
