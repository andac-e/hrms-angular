import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidateDetailComponent } from './features/candidate/candidate-detail/candidate-detail.component';
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
import { NotFoundComponent } from './features/home/not-found/not-found.component';
import { FavoriteJobListComponent } from './features/job-advertisement/favorite-job-list/favorite-job-list.component';
import { JobAddComponent } from './features/job-advertisement/job-add/job-add.component';
import { JobDetailComponent } from './features/job-advertisement/job-detail/job-detail.component';
import { JobListComponent } from './features/job-advertisement/job-list/job-list.component';
import { LoginComponent } from './features/navi/login/login.component';
import { SystemEmployeeProfileComponent } from './features/system-employee/system-employee-profile/system-employee-profile.component';
import { UnverifiedJobListComponent } from './features/system-employee/unverified-job-list/unverified-job-list.component';
import { UnverifiedUpdateListComponent } from './features/system-employee/unverified-update-list/unverified-update-list.component';
import { CandidateResumeAddGuard } from './guards/candidate-information/candidate-resume-add.guard';
import { CandidateResumeViewGuard } from './guards/candidate-information/candidate-resume-view.guard';
import { FavoriteJobListGuard } from './guards/candidate-information/favorite-job-list.guard';
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
  { path: 'candidate/:id', component: CandidateDetailComponent },
  { path: 'job-list', component: JobListComponent },
  { path: 'job-detail/:id', component: JobDetailComponent },
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
    path: 'favorite-job-list',
    component: FavoriteJobListComponent,
    canActivate: [FavoriteJobListGuard],
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
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
