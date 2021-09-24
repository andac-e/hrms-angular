import { Component, OnInit } from '@angular/core';
import { Candidate } from 'src/app/models/candidate/candidate';
import { CandidateService } from 'src/app/services/candidate.service';

@Component({
  selector: 'app-candidate-list',
  templateUrl: './candidate-list.component.html',
  styleUrls: ['./candidate-list.component.css'],
})
export class CandidateListComponent implements OnInit {
  candidates: Candidate[] = [];
  loading: boolean = true;
  constructor(private candidateService: CandidateService) {}

  ngOnInit(): void {
    this.getAllCandidates();
  }

  getAllCandidates() {
    this.candidateService.getAll().subscribe((response: any) => {
      this.candidates = response.data;
      this.loading = false;
    });
  }
}
