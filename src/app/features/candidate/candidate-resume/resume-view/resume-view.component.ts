import { Component, OnInit } from '@angular/core';
import { Candidate } from 'src/app/models/candidate/candidate';
import { CandidateJobExperienceService } from 'src/app/services/candidate-information/candidate-job-experience.service';
import { CandidateSchoolService } from 'src/app/services/candidate-information/candidate-school.service';
import { CandidateService } from 'src/app/services/candidate.service';

@Component({
  selector: 'app-resume-view',
  templateUrl: './resume-view.component.html',
  styleUrls: ['./resume-view.component.css'],
})
export class ResumeViewComponent implements OnInit {
  loggedCandidate: Candidate;
  candidateLanguages: any;
  candidateJobExperiences: any;
  candidateSchools: any;
  candidateSkills: any;
  loggedUser: any;
  loading: boolean = true;

  constructor(
    private candidateService: CandidateService,
    private candidateExperienceService: CandidateJobExperienceService,
    private candidateSchoolService: CandidateSchoolService
  ) {}

  ngOnInit(): void {
    this.getCandidateById();
    this.getCandidateByQuitYear();
    this.getCandidateByGradYear();
  }

  getCandidateById() {
    this.candidateService
      .getCandidateById(this.getUserId())
      .subscribe((response: any) => {
        this.loggedCandidate = response.data;
        this.candidateLanguages = response.data.candidateLanguages;
        this.candidateSkills = response.data.candidateSkills;
        this.loading = false;
      });
  }

  getCandidateByQuitYear() {
    this.candidateExperienceService
      .getCandidatesByQuitYear(-1)
      .subscribe((response: any) => {
        response.data = response.data.filter(
          (r) => r.candidate.id === this.getUserId()
        );
        this.candidateJobExperiences = response.data;
      });
  }

  getCandidateByGradYear() {
    this.candidateSchoolService
      .getCandidatesByGradYear(-1)
      .subscribe((response: any) => {
        response.data = response.data.filter(
          (r) => r.candidate.id === this.getUserId()
        );
        this.candidateSchools = response.data;
      });
  }

  getUserId(): number {
    this.loggedUser = JSON.parse(localStorage.getItem('user'));
    return this.loggedUser.data.id;
  }

  getCurrentYear(): number {
    let year = new Date().getFullYear();
    return year;
  }
}
