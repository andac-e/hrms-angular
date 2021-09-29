import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Candidate } from 'src/app/models/candidate/candidate';
import { CandidateJobExperienceService } from 'src/app/services/candidate-information/candidate-job-experience.service';
import { CandidateSchoolService } from 'src/app/services/candidate-information/candidate-school.service';
import { CandidateService } from 'src/app/services/candidate.service';

@Component({
  selector: 'app-candidate-detail',
  templateUrl: './candidate-detail.component.html',
  styleUrls: ['./candidate-detail.component.css'],
})
export class CandidateDetailComponent implements OnInit {
  candidate: Candidate;
  candidateLanguages: any;
  candidateJobExperiences: any;
  candidateSchools: any;
  candidateSkills: any;
  loading: boolean = true;
  constructor(
    private candidateService: CandidateService,
    private candidateExperienceService: CandidateJobExperienceService,
    private candidateSchoolService: CandidateSchoolService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.getCandidateById(params['id']);
      this.getCandidateByQuitYear(params['id']);
      this.getCandidateByGradYear(params['id']);
    });
  }

  getCandidateById(id: number) {
    this.candidateService.getCandidateById(id).subscribe((response: any) => {
      this.candidate = response.data;
      this.candidateLanguages = response.data.candidateLanguages;
      this.candidateSkills = response.data.candidateSkills;
      this.loading = false;
    });
  }

  getCandidateByQuitYear(id: number) {
    this.candidateExperienceService
      .getCandidatesByQuitYear(-1)
      .subscribe((response: any) => {
        response.data = response.data.filter((r) => r.candidate.id == id);
        this.candidateJobExperiences = response.data;
      });
  }

  getCandidateByGradYear(id: number) {
    this.candidateSchoolService
      .getCandidatesByGradYear(-1)
      .subscribe((response: any) => {
        response.data = response.data.filter((r) => r.candidate.id == id);
        this.candidateSchools = response.data;
      });
  }

  getCurrentYear(): number {
    let year = new Date().getFullYear();
    return year;
  }
}
