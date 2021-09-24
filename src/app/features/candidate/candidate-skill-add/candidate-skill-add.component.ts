import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Skill } from 'src/app/models/skill/skill';
import { CandidateSkillService } from 'src/app/services/candidate-information/candidate-skill.service';
import { CandidateService } from 'src/app/services/candidate.service';
import { SkillService } from 'src/app/services/skill.service';

@Component({
  selector: 'app-candidate-skill-add',
  templateUrl: './candidate-skill-add.component.html',
  styleUrls: ['./candidate-skill-add.component.css'],
})
export class CandidateSkillAddComponent implements OnInit {
  skillAddForm: FormGroup;
  skills: Skill[] = [];
  loggedUser: any;
  candidateSkills: Skill[] = [];
  loading: boolean = true;

  constructor(
    private candidateService: CandidateService,
    private toastrService: ToastrService,
    private skillService: SkillService,
    private formBuilder: FormBuilder,
    private candidateSkillService: CandidateSkillService
  ) {}

  ngOnInit(): void {
    this.getAllSkills();
    this.createSkillAddForm();
    this.getCandidateSkills();
  }

  createSkillAddForm() {
    this.skillAddForm = this.formBuilder.group({
      candidateId: [this.getUserId()],
      skillId: ['', Validators.required],
    });
  }

  addSkill() {
    if (this.skillAddForm.valid) {
      this.candidateSkillService.add(this.skillAddForm.value).subscribe(
        (response: any) => {
          this.toastrService.success('Skill added successfully.');
        },
        (responseError) => {
          let message = JSON.stringify(responseError.error.data.errors);
          console.log(message);
          this.toastrService.error(
            message.replace(/{|}|"/gi, ''),
            'Validation error'
          );
        }
      );
    }
  }

  getCandidateSkills() {
    this.candidateService
      .getCandidateById(this.getUserId())
      .subscribe((response: any) => {
        this.candidateSkills = response.data.candidateSkills;
        this.loading = false;
      });
  }

  getUserId(): number {
    this.loggedUser = JSON.parse(localStorage.getItem('user'));
    return this.loggedUser.data.id;
  }

  getAllSkills() {
    this.skillService.getAll().subscribe((response: any) => {
      this.skills = response.data;
    });
  }
}
