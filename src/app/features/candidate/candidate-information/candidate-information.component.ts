import { Component, OnInit } from '@angular/core';
import { Candidate } from 'src/app/models/candidate/candidate';
import { CandidateService } from 'src/app/services/candidate.service';

@Component({
  selector: 'app-candidate-information',
  templateUrl: './candidate-information.component.html',
  styleUrls: ['./candidate-information.component.css'],
})
export class CandidateInformationComponent implements OnInit {
  loggedCandidate: Candidate;
  loggedUser: any;
  constructor(private candidateService: CandidateService) {}

  ngOnInit(): void {
    this.getCandidateById();
    this.showLastTab();
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

  saveTabSelect(tabName: string) {
    localStorage.setItem('tagSelected', tabName);
    return true;
  }

  showLastTab() {
    if (localStorage.getItem('tagSelected')) {
      this.getCurrentTab();
    } else {
      localStorage.setItem('tagSelected', 'experience');
      this.getCurrentTab();
    }
  }

  getCurrentTab() {
    let currentTag = localStorage.getItem('tagSelected');
    let content = document.getElementById(currentTag);
    let tab = document.getElementById(currentTag + 'Tab');
    content.classList.add('active');
    content.classList.add('show');
    tab.classList.add('active');
  }
}
