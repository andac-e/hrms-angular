import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.createSignForm();
  }

  createSignForm() {
    this.candidateSignForm = this.formBuilder.group({
      birthYear: ['', Validators.required],
      email: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      nationalityId: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  addCandidate() {
    if (this.candidateSignForm.valid) {
      this.candidateService
        .addCandidate(this.candidateSignForm.value)
        .subscribe(
          (response: any) => {
            this.toastrService.success(response.message, 'Başarılı');
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

  // checkNationalityId() {
  //   this.candidateService
  //     .checkByNationalityId(this.candidateSignForm.value['nationalityId'])
  //     .subscribe((data: any) => {
  //       if (data.data == true) {
  //         this.checkNatId = true;
  //       } else {
  //         this.checkNatId = false;
  //       }
  //     });
  // }
}
