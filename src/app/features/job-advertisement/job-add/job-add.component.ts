import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { City } from 'src/app/models/city/city';
import { WorkModels } from 'src/app/models/job-advertisement/work-models';
import { WorkTimes } from 'src/app/models/job-advertisement/work-times';
import { Position } from 'src/app/models/position/position';
import { CityService } from 'src/app/services/city.service';
import { JobAdvertisementService } from 'src/app/services/job-advertisement.service';
import { PositionService } from 'src/app/services/position.service';

@Component({
  selector: 'app-job-add',
  templateUrl: './job-add.component.html',
  styleUrls: ['./job-add.component.css'],
})
export class JobAddComponent implements OnInit {
  jobAddForm: FormGroup;
  loggedUser: any;
  selectedPosition: Position;
  selectedCity: City;
  selectedWorkTime: string;
  selectedWorkModel: string;
  date: Date;
  positions: Position[] = [];
  cities: City[] = [];
  workModels = WorkModels;
  workTimes = WorkTimes;

  constructor(
    private cityService: CityService,
    private positionService: PositionService,
    private jobAdvertisementService: JobAdvertisementService,
    private toastrService: ToastrService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.getAllCities();
    this.getAllPositions();
    this.createJobAddForm();
  }

  createJobAddForm() {
    this.jobAddForm = this.formBuilder.group({
      cityId: ["", Validators.required], 
      employerId: [this.getUserId()], 
      deadline: ["", Validators.required],
      jobDescription: ["", Validators.required], 
      maxSalary: [""], 
      minSalary: [""], 
      openPositions: ["", Validators.required], 
      positionId: ["", Validators.required], 
      workModel: ["", Validators.required],  
      workTime: ["", Validators.required],  

    })
  }

  addJob() {
    if (this.jobAddForm.valid) {
      this.jobAdvertisementService.add(this.jobAddForm.value).subscribe((response)=>{
        this.toastrService.success('Successfully added');
        this.pageReloadDelay();
      })
    }
  }

  getUserId(): number {
    this.loggedUser = JSON.parse(localStorage.getItem('user'));
    return this.loggedUser.data.id;
  }

  getAllCities() {
    this.cityService.getAll().subscribe((response: any) => {
      this.cities = response.data;
    });
  }

  getAllPositions() {
    this.positionService.getAll().subscribe((response: any) => {
      this.positions = response.data;
    });
  }

  pageReloadDelay() {
    setTimeout(location.reload.bind(location), 1000);
  }
}
