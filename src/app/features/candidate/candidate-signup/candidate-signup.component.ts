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
  candidateSignForm!: FormGroup;
  checkNatId: boolean = false;

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
      nationalityId: ['', Validators.required],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(20),
        ],
      ],
    });
  }

  addCandidate() {
    if (this.candidateSignForm.valid) {
      this.candidateService
        .addCandidate(this.candidateSignForm.value)
        .subscribe(
          (response: any) => {
            this.toastrService.success(response.message, 'Başarılı');
            this.router.navigate(['home']);
          },
          (responseError) => {
            let message = JSON.stringify(responseError.error.data.errors);
            console.log(message);
            this.toastrService.error(
              message.replace(/{|}|"/gi, ''),
              'Doğrulama hatası'
            );
          }
        );
    } else {
      this.toastrService.error('Formunuz eksik', 'Dikkat!');
    }
  }

  //kayıt olunca anasayfaya yönlendir..
}
