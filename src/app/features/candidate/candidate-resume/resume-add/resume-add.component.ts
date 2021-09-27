import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Candidate } from 'src/app/models/candidate/candidate';
import { CandidateService } from 'src/app/services/candidate.service';
import { CvService } from 'src/app/services/cv.service';

@Component({
  selector: 'app-resume-add',
  templateUrl: './resume-add.component.html',
  styleUrls: ['./resume-add.component.css'],
})
export class ResumeAddComponent implements OnInit {
  resumeAddForm: FormGroup;
  loggedCandidate: Candidate;
  loggedUser: any;
  candidateJobExperienceIds: number[] = [];
  candidateLanguageIds: number[] = [];
  candidateSchoolIds: number[] = [];
  candidateSkillIds: number[] = [];

  constructor(
    private candidateService: CandidateService,
    private cvService: CvService,
    private toastrService: ToastrService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.createResumeAddForm();
    this.getCandidateJobExperienceIds();
    this.getCandidateLanguageIds();
    this.getCandidateSchoolIds();
    this.getCandidateSkillIds();
  }

  createResumeAddForm() {
    this.resumeAddForm = this.formBuilder.group({
      candidateId: [this.getUserId()],
      candidateJobExperienceIds: [this.getCandidateJobExperienceIds()],
      candidateLanguageIds: [this.getCandidateLanguageIds()],
      candidateSchoolIds: [this.getCandidateSchoolIds()],
      candidateSkillIds: [this.getCandidateSkillIds()],
      coverLetter: [''],
      title: ['', Validators.required],
    });
  }

  addCv() {
    this.cvService
      .addCv(this.resumeAddForm.value)
      .subscribe((response: any) => {
        this.toastrService.success('Resume added successfully');
        this.pageReloadDelay();
      });
  }

  getCandidateJobExperienceIds(): number[] {
    this.candidateService
      .getCandidateById(this.getUserId())
      .subscribe((response: any) => {
        for (let i = 0; i < response.data.candidateJobExperiences.length; i++) {
          this.candidateJobExperienceIds[i] =
            response.data.candidateJobExperiences[i].id;
        }
      });
    return this.candidateJobExperienceIds;
  }

  getCandidateLanguageIds(): number[] {
    this.candidateService
      .getCandidateById(this.getUserId())
      .subscribe((response: any) => {
        for (let i = 0; i < response.data.candidateLanguages.length; i++) {
          this.candidateLanguageIds[i] = response.data.candidateLanguages[i].id;
        }
      });
    return this.candidateLanguageIds;
  }

  getCandidateSchoolIds(): number[] {
    this.candidateService
      .getCandidateById(this.getUserId())
      .subscribe((response: any) => {
        for (let i = 0; i < response.data.candidateSchools.length; i++) {
          this.candidateSchoolIds[i] = response.data.candidateSchools[i].id;
        }
      });
    return this.candidateSchoolIds;
  }

  getCandidateSkillIds(): number[] {
    this.candidateService
      .getCandidateById(this.getUserId())
      .subscribe((response: any) => {
        for (let i = 0; i < response.data.candidateSkills.length; i++) {
          this.candidateSkillIds[i] = response.data.candidateSkills[i].id;
        }
      });
    return this.candidateSkillIds;
  }

  getUserId(): number {
    this.loggedUser = JSON.parse(localStorage.getItem('user'));
    return this.loggedUser.data.id;
  }

  pageReloadDelay() {
    setTimeout(location.reload.bind(location), 1000);
  }
}
