import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableModule } from 'primeng/table';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TableModule,
    ToastrModule.forRoot({ positionClass: 'toast-bottom-right' }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
