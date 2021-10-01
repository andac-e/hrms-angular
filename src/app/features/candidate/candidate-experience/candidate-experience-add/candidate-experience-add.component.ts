import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Position } from 'src/app/models/position/position';
import { CandidateJobExperienceService } from 'src/app/services/candidate-information/candidate-job-experience.service';
import { PositionService } from 'src/app/services/position.service';

@Component({
  selector: 'app-candidate-experience-add',
  templateUrl: './candidate-experience-add.component.html',
  styleUrls: ['./candidate-experience-add.component.css'],
})
export class CandidateExperienceAddComponent implements OnInit {
  experienceAddForm: FormGroup;
  loggedUser: any;
  positions: Position[] = [];
  selectedPosition: Position;
  selectedStartYear: number;
  selectedQuitYear: number;
  years: number[] = [];

  constructor(
    private positionService: PositionService,
    private candidateExperienceService: CandidateJobExperienceService,
    private toastrService: ToastrService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.createExperienceAddForm();
    this.getAllPositions();
    this.createYears();
  }

  createExperienceAddForm() {
    this.experienceAddForm = this.formBuilder.group({
      candidateId: [this.getUserId()],
      positionId: ['', Validators.required],
      startYear: ['', Validators.required],
      quitYear: [''],
      workPlace: ['', Validators.required],
    });
  }

  addExperience() {
    if (this.experienceAddForm.valid) {
      this.candidateExperienceService
        .add(this.experienceAddForm.value)
        .subscribe((response: any) => {
          this.toastrService.success('Successfully added');
          this.pageReloadDelay();
        });
    }
  }

  getUserId(): number {
    this.loggedUser = JSON.parse(localStorage.getItem('user'));
    return this.loggedUser.data.id;
  }

  getAllPositions() {
    this.positionService.getAll().subscribe((response: any) => {
      this.positions = response.data;
    });
  }

  createYears() {
    this.years = [];
    for (let i = 2021; i > 1970; i--) {
      this.years.push(i);
    }
  }

  pageReloadDelay() {
    setTimeout(location.reload.bind(location), 1000);
  }
}
