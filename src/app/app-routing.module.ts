import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidateSignupComponent } from './features/candidate/candidate-signup/candidate-signup.component';
import { EmployerSignupComponent } from './features/employer/employer-signup/employer-signup.component';

const routes: Routes = [
  { path: 'candidate-sign', component: CandidateSignupComponent },
  { path: 'employer-sign', component: EmployerSignupComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
