import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Candidate } from 'src/app/models/candidate/candidate';
import { CandidateService } from 'src/app/services/candidate.service';

@Component({
  selector: 'app-candidate-linkedin-add',
  templateUrl: './candidate-linkedin-add.component.html',
  styleUrls: ['./candidate-linkedin-add.component.css'],
})
export class CandidateLinkedinAddComponent implements OnInit {
  linkedinAddForm: FormGroup;
  loggedUser: any;
  loggedCandidate: Candidate;

  constructor(
    private candidateService: CandidateService,
    private toastrService: ToastrService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.createLinkedinAddForm();
    this.getCandidateById();
  }

  createLinkedinAddForm() {
    this.linkedinAddForm = this.formBuilder.group({
      candId: [this.getUserId()],
      linkedinAccount: ['', Validators.required],
    });
  }

  addLinkedinAccount() {
    if (this.linkedinAddForm.valid) {
      this.candidateService
        .updateLinkedin(
          this.loggedCandidate,
          this.linkedinAddForm.value['linkedinAccount']
        )
        .subscribe((response: any) => {
          this.toastrService.success('Successfully added');
          this.linkedinAddForm.reset();
        });
    }
  }

  getCandidateById() {
    this.candidateService
      .getCandidateById(this.getUserId())
      .subscribe((response: any) => {
        this.loggedCandidate = response.data;
      });
  }

  getUserId(): number {
    this.loggedUser = JSON.parse(localStorage.getItem('user'));
    return this.loggedUser.data.id;
  }
}
