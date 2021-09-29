import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Candidate } from 'src/app/models/candidate/candidate';
import { Cv } from 'src/app/models/cv/cv';
import { CandidateService } from 'src/app/services/candidate.service';
import { CvService } from 'src/app/services/cv.service';

@Component({
  selector: 'app-cover-letter-add',
  templateUrl: './cover-letter-add.component.html',
  styleUrls: ['./cover-letter-add.component.css'],
})
export class CoverLetterAddComponent implements OnInit {
  coverLetterAddForm: FormGroup;
  loggedCandidate: Candidate;
  loggedUser: any;
  toUpdatedCv: Cv;
  updatedCvId: number;
  constructor(
    private candidateService: CandidateService,
    private cvService: CvService,
    private formBuilder: FormBuilder,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.createCoverLetterAddForm();
    this.getCandidateById();
  }

  createCoverLetterAddForm() {
    this.coverLetterAddForm = this.formBuilder.group({
      cvId: [this.updatedCvId],
      coverLetter: ['', Validators.required],
    });
  }

  addCoverLetter() {
    this.cvService
      .updateCoverLetter(
        this.toUpdatedCv,
        this.coverLetterAddForm.value['coverLetter']
      )
      .subscribe((response: any) => {
        this.toastrService.success('Cover letter added successfully');
        this.coverLetterAddForm.reset();
      });
  }

  getCvById() {
    if (this.loggedCandidate.cvs.length > 0) {
      this.cvService
        .getCvById(this.loggedCandidate.cvs[0].id)
        .subscribe((response: any) => {
          this.toUpdatedCv = response.data;
          this.updatedCvId = response.data.candidate.cvs[0].id;
        });
    }
  }

  getCandidateById() {
    this.candidateService
      .getCandidateById(this.getUserId())
      .subscribe((response: any) => {
        this.loggedCandidate = response.data;
        this.getCvById();
      });
  }

  getUserId(): number {
    this.loggedUser = JSON.parse(localStorage.getItem('user'));
    return this.loggedUser.data.id;
  }
}
