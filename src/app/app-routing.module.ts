import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidateExperienceAddComponent } from './features/candidate/candidate-experience/candidate-experience-add/candidate-experience-add.component';
import { CandidateGithubAddComponent } from './features/candidate/candidate-github-add/candidate-github-add.component';
import { CandidateImageUploadComponent } from './features/candidate/candidate-image-upload/candidate-image-upload.component';
import { CandidateInformationComponent } from './features/candidate/candidate-information/candidate-information.component';
import { CandidateLanguageAddComponent } from './features/candidate/candidate-language/candidate-language-add/candidate-language-add.component';
import { CandidateLinkedinAddComponent } from './features/candidate/candidate-linkedin-add/candidate-linkedin-add.component';
import { CandidateListComponent } from './features/candidate/candidate-list/candidate-list.component';
import { CoverLetterAddComponent } from './features/candidate/candidate-resume/cover-letter-add/cover-letter-add.component';
import { ResumeAddComponent } from './features/candidate/candidate-resume/resume-add/resume-add.component';
import { ResumeViewComponent } from './features/candidate/candidate-resume/resume-view/resume-view.component';
import { CandidateSchoolAddComponent } from './features/candidate/candidate-school/candidate-school-add/candidate-school-add.component';
import { CandidateSignupComponent } from './features/candidate/candidate-signup/candidate-signup.component';
import { CandidateSkillAddComponent } from './features/candidate/candidate-skill/candidate-skill-add/candidate-skill-add.component';
import { EmployerJobListComponent } from './features/employer/employer-job-list/employer-job-list.component';
import { EmployerListComponent } from './features/employer/employer-list/employer-list.component';
import { EmployerProfileComponent } from './features/employer/employer-profile/employer-profile.component';
import { EmployerSignupComponent } from './features/employer/employer-signup/employer-signup.component';
import { PositionAddComponent } from './features/employer/position-add/position-add.component';
import { HomeComponent } from './features/home/home/home.component';
import { JobAddComponent } from './features/job-advertisement/job-add/job-add.component';
import { JobListComponent } from './features/job-advertisement/job-list/job-list.component';
import { LoginComponent } from './features/navi/login/login.component';
import { SystemEmployeeProfileComponent } from './features/system-employee/system-employee-profile/system-employee-profile.component';
import { UnverifiedJobListComponent } from './features/system-employee/unverified-job-list/unverified-job-list.component';
import { UnverifiedUpdateListComponent } from './features/system-employee/unverified-update-list/unverified-update-list.component';
import { CandidateExperienceAddGuard } from './guards/candidate-information/candidate-experience-add.guard';
import { CandidateImageUploadGuard } from './guards/candidate-information/candidate-image-upload.guard';
import { CandidateLanguageAddGuard } from './guards/candidate-information/candidate-language-add.guard';
import { CandidateResumeAddGuard } from './guards/candidate-information/candidate-resume-add.guard';
import { CandidateResumeViewGuard } from './guards/candidate-information/candidate-resume-view.guard';
import { CandidateSchoolAddGuard } from './guards/candidate-information/candidate-school-add.guard';
import { CandidateSkillAddGuard } from './guards/candidate-information/candidate-skill-add.guard';
import { CandidateSocialGuard } from './guards/candidate-information/candidate-social.guard';
import { EmployerProfileUpdateGuard } from './guards/employer-information/employer-profile-update.guard';
import { EmployerJobListGuard } from './guards/job/employer-job-list.guard';
import { JobAddGuard } from './guards/job/job-add.guard';
import { JobVerificationGuard } from './guards/job/job-verification.guard';
import { PositionAddGuard } from './guards/job/position-add.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'candidate-sign', component: CandidateSignupComponent },
  { path: 'employer-sign', component: EmployerSignupComponent },
  { path: 'employer-list', component: EmployerListComponent },
  { path: 'candidate-list', component: CandidateListComponent },
  { path: 'job-list', component: JobListComponent },
  {
    path: 'employer-job-list',
    component: EmployerJobListComponent,
    canActivate: [EmployerJobListGuard],
  },
  {
    path: 'update-employer-info',
    component: EmployerProfileComponent,
    canActivate: [EmployerProfileUpdateGuard],
  },
  {
    path: 'position-add',
    component: PositionAddComponent,
    canActivate: [PositionAddGuard],
  },
  {
    path: 'job-add',
    component: JobAddComponent,
    canActivate: [JobAddGuard],
  },
  // {
  //   path: 'candidate-experience-add',
  //   component: CandidateExperienceAddComponent,
  //   canActivate: [CandidateExperienceAddGuard],
  // },
  // {
  //   path: 'candidate-language-add',
  //   component: CandidateLanguageAddComponent,
  //   canActivate: [CandidateLanguageAddGuard],
  // },
  // {
  //   path: 'candidate-school-add',
  //   component: CandidateSchoolAddComponent,
  //   canActivate: [CandidateSchoolAddGuard],
  // },
  // {
  //   path: 'candidate-skill-add',
  //   component: CandidateSkillAddComponent,
  //   canActivate: [CandidateSkillAddGuard],
  // },
  // {
  //   path: 'candidate-photo-upload',
  //   component: CandidateImageUploadComponent,
  //   canActivate: [CandidateImageUploadGuard],
  // },
  // {
  //   path: 'candidate-github-add',
  //   component: CandidateGithubAddComponent,
  //   canActivate: [CandidateSocialGuard],
  // },
  // {
  //   path: 'candidate-linkedin-add',
  //   component: CandidateLinkedinAddComponent,
  //   canActivate: [CandidateSocialGuard],
  // },
  {
    path: 'resume-add',
    component: CandidateInformationComponent,
    canActivate: [CandidateResumeAddGuard],
  },
  {
    path: 'resume-view',
    component: ResumeViewComponent,
    canActivate: [CandidateResumeViewGuard],
  },
  {
    path: 'unverified-job-list',
    component: UnverifiedJobListComponent,
    canActivate: [JobVerificationGuard],
  },
  {
    path: 'unverified-update-list',
    component: UnverifiedUpdateListComponent,
    canActivate: [JobVerificationGuard],
  },
  {
    path: 'update-system-employee-info',
    component: SystemEmployeeProfileComponent,
    canActivate: [JobVerificationGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
