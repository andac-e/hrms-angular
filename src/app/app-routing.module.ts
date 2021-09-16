import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidateSignupComponent } from './features/candidate/candidate-signup/candidate-signup.component';

const routes: Routes = [
  { path: 'signup', component: CandidateSignupComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
