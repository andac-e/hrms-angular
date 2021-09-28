import { Component, OnInit } from '@angular/core';
import { Candidate } from 'src/app/models/candidate/candidate';
import { JobAdvertisement } from 'src/app/models/job-advertisement/job-advertisement';
import { CandidateService } from 'src/app/services/candidate.service';

@Component({
  selector: 'app-navi-candidate',
  templateUrl: './navi-candidate.component.html',
  styleUrls: ['./navi-candidate.component.css'],
})
export class NaviCandidateComponent implements OnInit {
  favoriteJobs: JobAdvertisement[] = [];
  loggedUser: any;
  loggedCandidate: Candidate;
  loading: boolean = true;
  constructor(private candidateService: CandidateService) {}

  ngOnInit(): void {
    this.getCandidateById();
  }

  checkUser(): boolean {
    if (localStorage.getItem('user')) {
      return true;
    } else {
      return false;
    }
  }

  checkCandidate(): boolean {
    if (this.checkUser()) {
      let user = JSON.parse(localStorage.getItem('user'));
      let role = user.message;
      if (role.includes('candidate')) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  getCandidateById() {
    if (this.checkCandidate()) {
      this.candidateService
      .getCandidateById(this.getUserId())
      .subscribe((response: any) => {
        this.loggedCandidate = response.data;
        this.favoriteJobs = response.data.favoriteJobAdvertisements;
        this.loading = false;
      });
    }
  }

  getUserId(): number {
    this.loggedUser = JSON.parse(localStorage.getItem('user'));
    return this.loggedUser.data.id;
  }
}
