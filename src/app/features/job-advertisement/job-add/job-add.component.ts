import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { City } from 'src/app/models/city/city';
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
  user: any;
  positions: Position[] = [];
  cities: City[] = [];
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
      cityId: ["", Validators.required], //
      employerId: [this.getUserId()], //
      deadline: ["", Validators.required],
      jobDescription: ["", Validators.required], //
      maxSalary: [""], //
      minSalary: [""], //
      openPositions: ["", Validators.required], //
      positionId: ["", Validators.required], //
      workModel: ["", Validators.required],  //
      workTime: ["", Validators.required], // 

    })
  }

  addJob() {
    if (this.jobAddForm.valid) {
      this.jobAdvertisementService.add(this.jobAddForm.value).subscribe((response)=>{
        this.toastrService.success('Successfully added');
      })
    }
  }

  getUserId(): any {
    this.user = JSON.parse(localStorage.getItem('user'));
    return this.user.data.id;
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
}
