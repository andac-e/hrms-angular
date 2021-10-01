import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { ProgressBarModule } from 'primeng/progressbar';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { BadgeModule } from 'primeng/badge';
import { DropdownModule } from 'primeng/dropdown';
import {CalendarModule} from 'primeng/calendar';
import {InputTextModule} from 'primeng/inputtext';
import {InputTextareaModule} from 'primeng/inputtextarea';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HrmsNaviComponent } from './features/navi/hrms-navi/hrms-navi.component';
import { CandidateSignupComponent } from './features/candidate/candidate-signup/candidate-signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { EmployerSignupComponent } from './features/employer/employer-signup/employer-signup.component';
import { HomeComponent } from './features/home/home/home.component';
import { LoginComponent } from './features/navi/login/login.component';
import { UserInfoComponent } from './features/navi/user-info/user-info.component';
import { PositionAddComponent } from './features/employer/position-add/position-add.component';
import { EmployerListComponent } from './features/employer/employer-list/employer-list.component';
import { CandidateListComponent } from './features/candidate/candidate-list/candidate-list.component';
import { JobListComponent } from './features/job-advertisement/job-list/job-list.component';
import { JobAddComponent } from './features/job-advertisement/job-add/job-add.component';
import { EmployerJobListComponent } from './features/employer/employer-job-list/employer-job-list.component';
import { CandidateExperienceAddComponent } from './features/candidate/candidate-experience/candidate-experience-add/candidate-experience-add.component';
import { CandidateLanguageAddComponent } from './features/candidate/candidate-language/candidate-language-add/candidate-language-add.component';
import { CandidateSchoolAddComponent } from './features/candidate/candidate-school/candidate-school-add/candidate-school-add.component';
import { CandidateSkillAddComponent } from './features/candidate/candidate-skill/candidate-skill-add/candidate-skill-add.component';
import { CandidateImageUploadComponent } from './features/candidate/candidate-image-upload/candidate-image-upload.component';
import { CandidateGithubAddComponent } from './features/candidate/candidate-github-add/candidate-github-add.component';
import { CandidateLinkedinAddComponent } from './features/candidate/candidate-linkedin-add/candidate-linkedin-add.component';
import { ResumeAddComponent } from './features/candidate/candidate-resume/resume-add/resume-add.component';
import { ResumeViewComponent } from './features/candidate/candidate-resume/resume-view/resume-view.component';
import { UnverifiedJobListComponent } from './features/system-employee/unverified-job-list/unverified-job-list.component';
import { CandidateExperienceListComponent } from './features/candidate/candidate-experience/candidate-experience-list/candidate-experience-list.component';
import { PositionCardComponent } from './features/home/position-card/position-card.component';
import { CandidateSchoolListComponent } from './features/candidate/candidate-school/candidate-school-list/candidate-school-list.component';
import { CandidateLanguageListComponent } from './features/candidate/candidate-language/candidate-language-list/candidate-language-list.component';
import { CandidateSkillListComponent } from './features/candidate/candidate-skill/candidate-skill-list/candidate-skill-list.component';
import { EmployerProfileComponent } from './features/employer/employer-profile/employer-profile.component';
import { UpdateCompanyNameComponent } from './features/employer/employer-update/update-company-name/update-company-name.component';
import { UpdateWebsiteComponent } from './features/employer/employer-update/update-website/update-website.component';
import { UpdatePhoneComponent } from './features/employer/employer-update/update-phone/update-phone.component';
import { UnverifiedUpdateListComponent } from './features/system-employee/unverified-update-list/unverified-update-list.component';
import { CandidateInformationComponent } from './features/candidate/candidate-information/candidate-information.component';
import { NaviEmployerComponent } from './features/navi/user-navi/navi-employer/navi-employer.component';
import { NaviCandidateComponent } from './features/navi/user-navi/navi-candidate/navi-candidate.component';
import { NaviSystemEmployeeComponent } from './features/navi/user-navi/navi-system-employee/navi-system-employee.component';
import { UpdateFirstNameComponent } from './features/system-employee/system-employee-update/update-first-name/update-first-name.component';
import { UpdateLastNameComponent } from './features/system-employee/system-employee-update/update-last-name/update-last-name.component';
import { SystemEmployeeProfileComponent } from './features/system-employee/system-employee-profile/system-employee-profile.component';
import { CoverLetterAddComponent } from './features/candidate/candidate-resume/cover-letter-add/cover-letter-add.component';
import { StoreModule } from '@ngrx/store';
import { favoriteReducer } from './store/reducers/favorite-reducer';
import { FavoriteJobListComponent } from './features/job-advertisement/favorite-job-list/favorite-job-list.component';
import { CandidateDetailComponent } from './features/candidate/candidate-detail/candidate-detail.component';
import { JobDetailComponent } from './features/job-advertisement/job-detail/job-detail.component';
import { JobCardComponent } from './features/home/job-card/job-card.component';
import { FooterComponent } from './features/home/footer/footer.component';
import { NotFoundComponent } from './features/home/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HrmsNaviComponent,
    CandidateSignupComponent,
    EmployerSignupComponent,
    HomeComponent,
    LoginComponent,
    UserInfoComponent,
    PositionAddComponent,
    EmployerListComponent,
    CandidateListComponent,
    JobListComponent,
    JobAddComponent,
    EmployerJobListComponent,
    CandidateExperienceAddComponent,
    CandidateLanguageAddComponent,
    CandidateSchoolAddComponent,
    CandidateSkillAddComponent,
    CandidateImageUploadComponent,
    CandidateGithubAddComponent,
    CandidateLinkedinAddComponent,
    ResumeAddComponent,
    ResumeViewComponent,
    UnverifiedJobListComponent,
    CandidateExperienceListComponent,
    PositionCardComponent,
    CandidateSchoolListComponent,
    CandidateLanguageListComponent,
    CandidateSkillListComponent,
    EmployerProfileComponent,
    UpdateCompanyNameComponent,
    UpdateWebsiteComponent,
    UpdatePhoneComponent,
    UnverifiedUpdateListComponent,
    CandidateInformationComponent,
    NaviEmployerComponent,
    NaviCandidateComponent,
    NaviSystemEmployeeComponent,
    UpdateFirstNameComponent,
    UpdateLastNameComponent,
    SystemEmployeeProfileComponent,
    CoverLetterAddComponent,
    FavoriteJobListComponent,
    CandidateDetailComponent,
    JobDetailComponent,
    JobCardComponent,
    FooterComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TableModule,
    CardModule,
    ProgressBarModule,
    ProgressSpinnerModule,
    BadgeModule,
    DropdownModule,
    CalendarModule,
    InputTextModule,
    InputTextareaModule,
    ToastrModule.forRoot({ positionClass: 'toast-bottom-right' }),
    StoreModule.forRoot(
      { favoriteReducer },
      {
        runtimeChecks: {
          strictStateImmutability: false,
        },
      }
    ),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
