import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CandidateJobExperience } from 'src/app/models/candidate/candidate-job-experience/candidate-job-experience';
import { CandidateJobExperienceService } from 'src/app/services/candidate-information/candidate-job-experience.service';

@Component({
  selector: 'app-candidate-experience-list',
  templateUrl: './candidate-experience-list.component.html',
  styleUrls: ['./candidate-experience-list.component.css'],
})
export class CandidateExperienceListComponent implements OnInit {
  loading: boolean = true;
  loggedUser: any;
  candidateExperiences: CandidateJobExperience[] = [];
  workPlaceUpdateForm: FormGroup;

  constructor(
    private candidateExperienceService: CandidateJobExperienceService,
    private formBuilder: FormBuilder,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.getCandidateByQuitYear();
    this.createWorkPlaceUpdateForm();
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

  //Update workplace
  createWorkPlaceUpdateForm() {
    this.workPlaceUpdateForm = this.formBuilder.group({
      workPlace: ['', Validators.required],
    });
  }

  updateWorkPlace(candidateJobExperience: CandidateJobExperience) {
    this.candidateExperienceService
      .updateWorkPlace(
        candidateJobExperience,
        this.workPlaceUpdateForm.value['workPlace']
      )
      .subscribe(
        (response: any) => {
          this.toastrService.info('Successfully updated');
          this.pageReloadDelay();
        },
        (responseError) => {
          let message = JSON.stringify(responseError.error.message);
          this.toastrService.error(
            message.replace(/{|}|"/gi, ''),
            'Validation error'
          );
        }
      );
  }

  pageReloadDelay() {
    setTimeout(location.reload.bind(location), 1000);
  }
}
