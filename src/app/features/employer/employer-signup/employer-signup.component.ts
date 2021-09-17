import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { EmployerService } from 'src/app/services/employer.service';

@Component({
  selector: 'app-employer-signup',
  templateUrl: './employer-signup.component.html',
  styleUrls: ['./employer-signup.component.css'],
})
export class EmployerSignupComponent implements OnInit {
  employerSignForm!: FormGroup;

  constructor(
    private employerService: EmployerService,
    private formBuilder: FormBuilder,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.createSignForm();
  }

  createSignForm() {
    this.employerSignForm = this.formBuilder.group({
      companyName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      website: ['', Validators.required],
    });
  }

  addEmployer() {
    if (this.employerSignForm.valid) {
      this.employerService.addEmployer(this.employerSignForm.value).subscribe(
        (response: any) => {
          this.toastrService.success('Başarılı');
        },
        (responseError) => {
          let message = JSON.stringify(responseError.error.data.errors);
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

  // emailDomainCheck() {
  //   let url = this.employerSignForm.value['website'];
  //   let domain = url.replace('www.', '');

  //   let email = this.employerSignForm.value['email'];
  //   let res = email.split('@');
  //   console.log(res[1]);
  //   console.log(domain);

  //   if (domain === res[1]) {
  //     return false;
  //   } else {
  //     return true;
  //   }
  // }
}
