import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CandidateJobExperience } from 'src/app/models/candidate/candidate-job-experience/candidate-job-experience';
import { Position } from 'src/app/models/position/position';
import { CandidateJobExperienceService } from 'src/app/services/candidate-information/candidate-job-experience.service';
import { PositionService } from 'src/app/services/position.service';

@Component({
  selector: 'app-candidate-experience-list',
  templateUrl: './candidate-experience-list.component.html',
  styleUrls: ['./candidate-experience-list.component.css'],
})
export class CandidateExperienceListComponent implements OnInit {
  loading: boolean = true;
  loggedUser: any;
  idToUpdate: number;
  candidateJobExperience: CandidateJobExperience;
  candidateExperiences: CandidateJobExperience[] = [];
  positions: Position[] = [];
  workPlaceUpdateForm: FormGroup;
  positionUpdateForm: FormGroup;
  startYearUpdateForm: FormGroup;
  quitYearUpdateForm: FormGroup;

  constructor(
    private candidateExperienceService: CandidateJobExperienceService,
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private positionService: PositionService
  ) {}

  ngOnInit(): void {
    this.getCandidateByQuitYear();
    this.createWorkPlaceUpdateForm();
    this.createPositionUpdateForm();
    this.createStartYearUpdateForm();
    this.createQuitYearUpdateForm();
    this.getAllPositions();
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

  getAllPositions() {
    this.positionService.getAll().subscribe((response: any) => {
      this.positions = response.data;
    });
  }

  getUserId(): number {
    this.loggedUser = JSON.parse(localStorage.getItem('user'));
    return this.loggedUser.data.id;
  }

  catchId(id: number) {
    this.idToUpdate = id;
  }

  //Update Workplace
  createWorkPlaceUpdateForm() {
    this.workPlaceUpdateForm = this.formBuilder.group({
      workPlace: ['', Validators.required],
    });
  }

  updateWorkPlace(candidateJobExperience: CandidateJobExperience) {
    this.candidateExperienceService
      .updateWorkPlace(
        candidateJobExperience,
        this.workPlaceUpdateForm.value['workPlace'],
        this.idToUpdate
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

  //Update Position
  createPositionUpdateForm() {
    this.positionUpdateForm = this.formBuilder.group({
      positionId: ['', Validators.required],
    });
  }

  updatePosition(candidateJobExperience: CandidateJobExperience) {
    this.candidateExperienceService
      .updatePosition(
        candidateJobExperience,
        this.positionUpdateForm.value['positionId'],
        this.idToUpdate
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

  //Update StartYear
  createStartYearUpdateForm() {
    this.startYearUpdateForm = this.formBuilder.group({
      startYear: ['', Validators.required],
    });
  }

  updateStartYear(candidateJobExperience: CandidateJobExperience) {
    this.candidateExperienceService
      .updateStartYear(
        candidateJobExperience,
        this.startYearUpdateForm.value['startYear'],
        this.idToUpdate
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

  //Update QuitYear
  createQuitYearUpdateForm() {
    this.quitYearUpdateForm = this.formBuilder.group({
      quitYear: [''],
    });
  }

  updateQuitYear(candidateJobExperience: CandidateJobExperience) {
    this.candidateExperienceService
      .updateQuitYear(
        candidateJobExperience,
        this.quitYearUpdateForm.value['quitYear'],
        this.idToUpdate
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
