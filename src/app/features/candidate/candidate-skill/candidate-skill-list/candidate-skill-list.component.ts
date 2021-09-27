import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Skill } from 'src/app/models/skill/skill';
import { CandidateSkillService } from 'src/app/services/candidate-information/candidate-skill.service';
import { CandidateService } from 'src/app/services/candidate.service';

@Component({
  selector: 'app-candidate-skill-list',
  templateUrl: './candidate-skill-list.component.html',
  styleUrls: ['./candidate-skill-list.component.css'],
})
export class CandidateSkillListComponent implements OnInit {
  loggedUser: any;
  candidateSkills: Skill[] = [];
  loading: boolean = true;

  constructor(
    private candidateService: CandidateService,
    private candidateSkillService: CandidateSkillService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.getCandidateSkills();
  }

  getCandidateSkills() {
    this.candidateService
      .getCandidateById(this.getUserId())
      .subscribe((response: any) => {
        this.candidateSkills = response.data.candidateSkills;
        this.loading = false;
      });
  }

  deleteSkill(skillId: number) {
    this.candidateSkillService
      .deleteById(skillId)
      .subscribe((response: any) => {
        this.toastrService.warning('Delete successful');
        this.pageReloadDelay();
      });
  }

  pageReloadDelay() {
    setTimeout(location.reload.bind(location), 1000);
  }

  getUserId(): number {
    this.loggedUser = JSON.parse(localStorage.getItem('user'));
    return this.loggedUser.data.id;
  }
}
