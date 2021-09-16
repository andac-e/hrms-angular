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
      this.candidateService.addCandidate(this.candidateSignForm.value).subscribe(data=>{
        console.log(data)
      })
    }
  }
}
