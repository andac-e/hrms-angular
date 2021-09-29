import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Candidate } from 'src/app/models/candidate/candidate';
import { JobAdvertisement } from 'src/app/models/job-advertisement/job-advertisement';
import { CandidateService } from 'src/app/services/candidate.service';
import { JobAdvertisementService } from 'src/app/services/job-advertisement.service';

@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.css'],
})
export class JobDetailComponent implements OnInit {
  jobAdvertisement: JobAdvertisement;
  loggedUser: any;
  loggedCandidate: Candidate;
  constructor(
    private candidateService:CandidateService,
    private jobAdvertisementService: JobAdvertisementService,
    private toastrService: ToastrService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.getJobById(params['id']);
    });

    this.getCandidateById()
  }

  getJobById(id: number) {
    this.jobAdvertisementService.getJobById(id).subscribe((response: any) => {
      this.jobAdvertisement = response.data;
    });
  }

  addToFavorites(id:number) {
    this.candidateService.addFavoriteJob(this.loggedCandidate,id).subscribe((response:any)=>{
      this.toastrService.success("Added to favorite successfully.")
      this.pageReloadDelay()
    },((responseError)=>{
      this.toastrService.error("This job advertisement exists in your favorites.")
    }))
  }

  getCandidateById() {
    if (this.checkCandidate()) {
      this.candidateService.getCandidateById(this.getUserId()).subscribe((response:any)=>{
        this.loggedCandidate = response.data;
      })
    }
  }

  getUserId(): number {
    this.loggedUser = JSON.parse(localStorage.getItem('user'));
    return this.loggedUser.data.id;
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

  pageReloadDelay() {
    setTimeout(location.reload.bind(location), 500);
  }
}
