import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { ProgressBarModule } from 'primeng/progressbar';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { BadgeModule } from 'primeng/badge';
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
import { CandidateLanguageAddComponent } from './features/candidate/candidate-language-add/candidate-language-add.component';
import { CandidateSchoolAddComponent } from './features/candidate/candidate-school-add/candidate-school-add.component';
import { CandidateSkillAddComponent } from './features/candidate/candidate-skill-add/candidate-skill-add.component';
import { CandidateImageUploadComponent } from './features/candidate/candidate-image-upload/candidate-image-upload.component';
import { CandidateGithubAddComponent } from './features/candidate/candidate-github-add/candidate-github-add.component';
import { CandidateLinkedinAddComponent } from './features/candidate/candidate-linkedin-add/candidate-linkedin-add.component';
import { ResumeAddComponent } from './features/candidate/candidate-resume/resume-add/resume-add.component';
import { ResumeViewComponent } from './features/candidate/candidate-resume/resume-view/resume-view.component';
import { UnverifiedJobListComponent } from './features/system-employee/unverified-job-list/unverified-job-list.component';
import { CandidateExperienceListComponent } from './features/candidate/candidate-experience/candidate-experience-list/candidate-experience-list.component';

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
    ToastrModule.forRoot({ positionClass: 'toast-bottom-right' }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
