import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Language } from 'src/app/models/language/language';
import { LanguageLevels } from 'src/app/models/language/language-levels';
import { CandidateLanguageService } from 'src/app/services/candidate-information/candidate-language.service';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-candidate-language-add',
  templateUrl: './candidate-language-add.component.html',
  styleUrls: ['./candidate-language-add.component.css'],
})
export class CandidateLanguageAddComponent implements OnInit {
  languageAddForm: FormGroup;
  loggedUser: any;
  languages: Language[] = [];
  selectedLanguage: Language;
  languageLevels = LanguageLevels;
  selectedLanguageLevel: string;
  

  constructor(
    private languageService: LanguageService,
    private candidateLanguageService: CandidateLanguageService,
    private toastrService: ToastrService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.createLanguageAddForm();
    this.getAllLanguages();
  }

  createLanguageAddForm() {
    this.languageAddForm = this.formBuilder.group({
      candidateId: [this.getUserId()],
      languageId: ['', Validators.required],
      languageLevel: ['', Validators.required],
    });
  }

  addLanguage() {
    if (this.languageAddForm.valid) {
      this.candidateLanguageService.add(this.languageAddForm.value).subscribe(
        (response: any) => {
          this.toastrService.success('Successfully added');
          window.location.reload();
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

  getUserId(): number {
    this.loggedUser = JSON.parse(localStorage.getItem('user'));
    return this.loggedUser.data.id;
  }

  getAllLanguages() {
    this.languageService.getAll().subscribe((response: any) => {
      this.languages = response.data;
    });
  }
}
