import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidateSignupComponent } from './features/candidate/candidate-signup/candidate-signup.component';
import { EmployerListComponent } from './features/employer/employer-list/employer-list.component';
import { EmployerSignupComponent } from './features/employer/employer-signup/employer-signup.component';
import { PositionAddComponent } from './features/employer/position-add/position-add.component';
import { HomeComponent } from './features/home/home/home.component';
import { LoginComponent } from './features/navi/login/login.component';
import { LoginGuard } from './guards/login.guard';
import { RoleGuard } from './guards/role.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'candidate-sign', component: CandidateSignupComponent },
  { path: 'employer-sign', component: EmployerSignupComponent },
  { path: 'employer-list', component: EmployerListComponent },
  {
    path: 'position-add',
    component: PositionAddComponent,
    canActivate: [RoleGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
