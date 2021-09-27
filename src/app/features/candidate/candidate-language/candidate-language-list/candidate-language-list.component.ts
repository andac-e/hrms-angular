import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Language } from 'src/app/models/language/language';
import { CandidateLanguageService } from 'src/app/services/candidate-information/candidate-language.service';
import { CandidateService } from 'src/app/services/candidate.service';

@Component({
  selector: 'app-candidate-language-list',
  templateUrl: './candidate-language-list.component.html',
  styleUrls: ['./candidate-language-list.component.css'],
})
export class CandidateLanguageListComponent implements OnInit {
  candidateLanguages: Language[] = [];
  loading: boolean = true;
  loggedUser: any;

  constructor(private candidateService: CandidateService,
    private candidateLanguageService:CandidateLanguageService,
    private toastrService: ToastrService) {}

  ngOnInit(): void {
    this.getCandidateLanguages();
  }

  getCandidateLanguages() {
    this.candidateService
      .getCandidateById(this.getUserId())
      .subscribe((response: any) => {
        this.candidateLanguages = response.data.candidateLanguages;
        this.loading = false;
      });
  }

  deleteLanguage(langId: number) {
    this.candidateLanguageService
      .deleteById(langId)
      .subscribe((response: any) => {
        this.toastrService.warning('Delete successful');
        this.pageReloadDelay();
      });
  }

  getUserId(): number {
    this.loggedUser = JSON.parse(localStorage.getItem('user'));
    return this.loggedUser.data.id;
  }

  pageReloadDelay() {
    setTimeout(location.reload.bind(location), 1000);
  }

}
