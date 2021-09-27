import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Candidate } from 'src/app/models/candidate/candidate';
import { CandidateService } from 'src/app/services/candidate.service';

@Component({
  selector: 'app-candidate-github-add',
  templateUrl: './candidate-github-add.component.html',
  styleUrls: ['./candidate-github-add.component.css'],
})
export class CandidateGithubAddComponent implements OnInit {
  githubAddForm: FormGroup;
  loggedUser: any;
  loggedCandidate: Candidate;

  constructor(
    private candidateService: CandidateService,
    private toastrService: ToastrService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.createGithubAddForm();
    this.getCandidateById()
  }

  createGithubAddForm() {
    this.githubAddForm = this.formBuilder.group({
      candId: [this.getUserId()],
      githubAccount: ['', Validators.required],
    });
  }

  addGithubAccount() {
    if (this.githubAddForm.valid) {
      this.candidateService.updateGithub(this.loggedCandidate, this.githubAddForm.value["githubAccount"]).subscribe((response:any)=>{
        this.toastrService.success("Successfully added")
        this.githubAddForm.reset()
      })
    }
  }

  getCandidateById() {
    this.candidateService.getCandidateById(this.getUserId()).subscribe((response:any)=>{
      this.loggedCandidate = response.data;
    })
  }

  getUserId(): number {
    this.loggedUser = JSON.parse(localStorage.getItem('user'));
    return this.loggedUser.data.id;
  }
}
