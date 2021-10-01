import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';
import { Candidate } from 'src/app/models/candidate/candidate';
import { JobAdvertisement } from 'src/app/models/job-advertisement/job-advertisement';
import { CandidateService } from 'src/app/services/candidate.service';
import { JobAdvertisementService } from 'src/app/services/job-advertisement.service';
//import * as AllFavoriteActions from '../../../store/actions/favorite-actions';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css'],
})
export class JobListComponent implements OnInit {
  jobs: JobAdvertisement[] = [];
  favoriteJobs: JobAdvertisement[] = [];
  loading: boolean = true;
  loggedUser: any;
  loggedCandidate: Candidate;
  constructor(
    private jobAdvertisementService: JobAdvertisementService,
    private candidateService: CandidateService,
    //private store: Store<any>,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.getActiveJobs();
    this.getCandidateById();
  }

  checkFavoriteExists(job: JobAdvertisement): boolean {
    let item = this.favoriteJobs.find((f) => f.id === job.id);

    if (!item) {
      return true;
    } else {
      return false;
    }
  }

  getActiveJobs() {
    this.jobAdvertisementService.getActives().subscribe((response: any) => {
      this.jobs = response.data;
      this.loading = false;
    });
  }

  addToFavorites(id: number) {
    this.candidateService.addFavoriteJob(this.loggedCandidate, id).subscribe(
      (response: any) => {
        this.toastrService.success('Added to favorite successfully.');
        this.pageReloadDelay();
      },
      (responseError) => {
        this.toastrService.error(
          'This job advertisement exists in your favorites.'
        );
      }
    );
  }

  removeFromFavorites(id: number) {
    this.candidateService
      .removeFavoriteJob(this.loggedCandidate, id)
      .subscribe((response: any) => {
        this.toastrService.info('Removed from favorites successfully.');
        this.pageReloadDelay();
      });
  }

  getCandidateById() {
    if (this.checkCandidate()) {
      this.candidateService
        .getCandidateById(this.getUserId())
        .subscribe((response: any) => {
          this.loggedCandidate = response.data;
          this.favoriteJobs = response.data.favoriteJobAdvertisements;
        });
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

  // addToFavorite(jobAdvertisement: JobAdvertisement) {
  //   this.store.dispatch(new AllFavoriteActions.AddToFavorite(jobAdvertisement));
  //   this.toastrService.success(
  //     'Added to favorites successfully',
  //     jobAdvertisement.position.title
  //   );
  // }
}
