import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Candidate } from 'src/app/models/candidate/candidate';
import { JobAdvertisement } from 'src/app/models/job-advertisement/job-advertisement';
import { CandidateService } from 'src/app/services/candidate.service';
// import { Store } from '@ngrx/store';
// import * as AllFavoriteActions from '../../../store/actions/favorite-actions';

@Component({
  selector: 'app-favorite-job-list',
  templateUrl: './favorite-job-list.component.html',
  styleUrls: ['./favorite-job-list.component.css'],
})
export class FavoriteJobListComponent implements OnInit {
  favoriteJobs: JobAdvertisement[] = [];
  loggedUser: any;
  loggedCandidate: Candidate;
  loading: boolean = true;
  constructor(
    private toastrService: ToastrService,
    private candidateService: CandidateService, // private store: Store<any>
  ) {}

  ngOnInit(): void {
    // this.getFavorites();
    this.getCandidateById();
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
    this.candidateService
      .getCandidateById(this.getUserId())
      .subscribe((response: any) => {
        this.loggedCandidate = response.data;
        this.favoriteJobs = response.data.favoriteJobAdvertisements;
        this.loading = false;
      });
  }

  getUserId(): number {
    this.loggedUser = JSON.parse(localStorage.getItem('user'));
    return this.loggedUser.data.id;
  }

  pageReloadDelay() {
    setTimeout(location.reload.bind(location), 1000);
  }

  // getFavorites() {
  //   this.store.select("favoriteReducer").subscribe((response:any)=>{
  //     this.favoriteJobs = response;
  //     console.log(this.favoriteJobs)
  //   })
  // }

  // removeFavorite(jobAdvertisement:JobAdvertisement){
  //   this.store.dispatch(new AllFavoriteActions.RemoveFromFavorite(jobAdvertisement))
  //   this.toastrService.info("Removed from favorites successfully.", jobAdvertisement.position.title)
  // }
}
