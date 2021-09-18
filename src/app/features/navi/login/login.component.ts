import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/user/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(
    private userService: UserService,
    private toastrService: ToastrService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.createLoginForm();
  }

  createLoginForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  login() {
    let user: User = this.loginForm.value;

    this.userService.login(user).subscribe(
      (response:any) => {
        console.log(response);
        this.toastrService.success('Sisteme giriş yapıldı.');
        localStorage.setItem('user', JSON.stringify(response));
        this.router.navigate(['home']);
      },
      (responseError) => {
        let message = JSON.stringify(responseError.error.message);
        this.toastrService.error(
          message.replace(/{|}|"/gi, ''),
          'Doğrulama hatası'
        );
      }
    );
  }
}
