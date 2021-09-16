import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HrmsNaviComponent } from './features/navi/hrms-navi/hrms-navi.component';
import { CandidateSignupComponent } from './features/candidate/candidate-signup/candidate-signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { EmployerSignupComponent } from './features/employer/employer-signup/employer-signup.component';

@NgModule({
  declarations: [
    AppComponent,
    HrmsNaviComponent,
    CandidateSignupComponent,
    EmployerSignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ToastrModule.forRoot({positionClass:"toast-bottom-right"})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
