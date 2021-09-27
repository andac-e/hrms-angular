import { Component, OnInit } from '@angular/core';
import { Candidate } from 'src/app/models/candidate/candidate';
import { CandidateService } from 'src/app/services/candidate.service';

@Component({
  selector: 'app-candidate-information',
  templateUrl: './candidate-information.component.html',
  styleUrls: ['./candidate-information.component.css']
})
export class CandidateInformationComponent implements OnInit {
  loggedCandidate: Candidate;
  loggedUser: any;
  constructor(private candidateService: CandidateService) { }

  ngOnInit(): void {
    this.getCandidateById();
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
