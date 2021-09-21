import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidateListComponent } from './features/candidate/candidate-list/candidate-list.component';
import { CandidateSignupComponent } from './features/candidate/candidate-signup/candidate-signup.component';
import { EmployerJobListComponent } from './features/employer/employer-job-list/employer-job-list.component';
import { EmployerListComponent } from './features/employer/employer-list/employer-list.component';
import { EmployerSignupComponent } from './features/employer/employer-signup/employer-signup.component';
import { PositionAddComponent } from './features/employer/position-add/position-add.component';
import { HomeComponent } from './features/home/home/home.component';
import { JobAddComponent } from './features/job-advertisement/job-add/job-add.component';
import { JobListComponent } from './features/job-advertisement/job-list/job-list.component';
import { LoginComponent } from './features/navi/login/login.component';
import { RoleGuard } from './guards/role.guard';

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
    canActivate: [RoleGuard],
  },
  {
    path: 'position-add',
    component: PositionAddComponent,
    canActivate: [RoleGuard],
  },
  {
    path: 'job-add',
    component: JobAddComponent,
    canActivate: [RoleGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
