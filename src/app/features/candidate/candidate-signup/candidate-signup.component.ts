import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CandidateService } from 'src/app/services/candidate.service';

@Component({
  selector: 'app-candidate-signup',
  templateUrl: './candidate-signup.component.html',
  styleUrls: ['./candidate-signup.component.css'],
})
export class CandidateSignupComponent implements OnInit {
  candidateSignForm: FormGroup;

  constructor(
    private candidateService: CandidateService,
    private toastrService: ToastrService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.createSignForm();
  }

  createSignForm() {
    this.candidateSignForm = this.formBuilder.group({
      birthYear: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]], //email tipinde
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      nationalityId: [
        '',
        [
          Validators.required,
          Validators.minLength(11),
          Validators.maxLength(11),
        ],
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(20),
        ],
      ],
      confirmPassword: ['', Validators.required],
    });
  }

  addCandidate() {
    if (this.candidateSignForm.valid) {
      if (this.checkPasswordMatch()) {
        this.candidateService
          .addCandidate(this.candidateSignForm.value)
          .subscribe(
            (response: any) => {
              this.toastrService.success(
                response.message,
                'Successfully registered'
              );
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
    let password = this.candidateSignForm.value['password'];
    let confirmPassword = this.candidateSignForm.value['confirmPassword'];

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
