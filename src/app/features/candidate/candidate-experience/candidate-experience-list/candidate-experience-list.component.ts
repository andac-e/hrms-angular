import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CandidateJobExperience } from 'src/app/models/candidate/candidate-job-experience/candidate-job-experience';
import { CandidateJobExperienceService } from 'src/app/services/candidate-information/candidate-job-experience.service';

@Component({
  selector: 'app-candidate-experience-list',
  templateUrl: './candidate-experience-list.component.html',
  styleUrls: ['./candidate-experience-list.component.css'],
})
export class CandidateExperienceListComponent implements OnInit {
  loggedUser: any;
  candidateExperiences: CandidateJobExperience[] = [];
  loading: boolean = true;

  constructor(
    private candidateExperienceService: CandidateJobExperienceService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.getCandidateByQuitYear();
  }

  getCandidateByQuitYear() {
    this.candidateExperienceService
      .getCandidatesByQuitYear(-1)
      .subscribe((response: any) => {
        response.data = response.data.filter(
          (r) => r.candidate.id === this.getUserId()
        );
        this.candidateExperiences = response.data;
        this.loading = false;
      });
  }

  getUserId(): number {
    this.loggedUser = JSON.parse(localStorage.getItem('user'));
    return this.loggedUser.data.id;
  }

  deleteJobExperience(jobExpId: number) {
    this.candidateExperienceService
      .deleteById(jobExpId)
      .subscribe((response: any) => {
        this.toastrService.warning('Delete successful');
        this.pageReloadDelay()
      });
  }

  pageReloadDelay() {
    setTimeout(location.reload.bind(location), 1000);
  }
}
