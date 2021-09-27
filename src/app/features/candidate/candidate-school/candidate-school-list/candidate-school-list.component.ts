import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { School } from 'src/app/models/school/school';
import { CandidateSchoolService } from 'src/app/services/candidate-information/candidate-school.service';

@Component({
  selector: 'app-candidate-school-list',
  templateUrl: './candidate-school-list.component.html',
  styleUrls: ['./candidate-school-list.component.css'],
})
export class CandidateSchoolListComponent implements OnInit {
  candidateSchools: School[] = [];
  loggedUser: any;
  loading: boolean = true;

  constructor(
    private candidateSchoolService: CandidateSchoolService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.getCandidateByGradYear();
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

  deleteSchool(schlId: number) {
    this.candidateSchoolService
      .deleteById(schlId)
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
