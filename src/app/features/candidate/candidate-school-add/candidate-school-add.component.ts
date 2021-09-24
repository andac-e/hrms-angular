import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Candidate } from 'src/app/models/candidate/candidate';
import { Department } from 'src/app/models/department/department';
import { School } from 'src/app/models/school/school';
import { CandidateSchoolService } from 'src/app/services/candidate-information/candidate-school.service';
import { CandidateService } from 'src/app/services/candidate.service';
import { DepartmentService } from 'src/app/services/department.service';
import { SchoolService } from 'src/app/services/school.service';

@Component({
  selector: 'app-candidate-school-add',
  templateUrl: './candidate-school-add.component.html',
  styleUrls: ['./candidate-school-add.component.css'],
})
export class CandidateSchoolAddComponent implements OnInit {
  schoolAddForm: FormGroup;
  loggedUser: any;
  schools: School[] = [];
  departments: Department[] = [];
  candidateSchools: School[] = [];
  loading: boolean = true;

  constructor(
    private schoolService: SchoolService,
    private departmentService: DepartmentService,
    private candidateSchoolService: CandidateSchoolService,
    private toastrService: ToastrService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.createSchoolAddForm();
    this.getAllDepartments();
    this.getAllSchools();
    this.getCandidateByGradYear();
  }

  createSchoolAddForm() {
    this.schoolAddForm = this.formBuilder.group({
      candidateId: [this.getUserId()],
      schoolId: ['', Validators.required],
      departmentId: ['', Validators.required],
      graduationYear: [''],
      startYear: ['', Validators.required],
    });
  }

  addSchool() {
    if (this.schoolAddForm.valid) {
      this.candidateSchoolService
        .add(this.schoolAddForm.value)
        .subscribe((response: any) => {
          this.toastrService.success('Successfully added');
          window.location.reload();
        });
    }
  }

  getCandidateByGradYear() {
    this.candidateSchoolService
      .getCandidatesByGradYear(-1)
      .subscribe((response: any) => {
        response.data = response.data.filter(
          (r) => r.candidate.id === this.getUserId()
        );
        this.candidateSchools = response.data;
        this.loading = false;
      });
  }

  getUserId(): number {
    this.loggedUser = JSON.parse(localStorage.getItem('user'));
    return this.loggedUser.data.id;
  }

  getAllSchools() {
    this.schoolService.getAll().subscribe((response: any) => {
      this.schools = response.data;
    });
  }

  getAllDepartments() {
    this.departmentService.getAll().subscribe((response: any) => {
      this.departments = response.data;
    });
  }
}
