import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { SystemEmployee } from 'src/app/models/system-employee/system-employee';
import { SystemEmployeeService } from 'src/app/services/system-employee.service';

@Component({
  selector: 'app-update-last-name',
  templateUrl: './update-last-name.component.html',
  styleUrls: ['./update-last-name.component.css']
})
export class UpdateLastNameComponent implements OnInit {
  lastNameUpdateForm: FormGroup;
  loggedUser: any;
  loggedSystemEmployee: SystemEmployee;
  
  constructor(
    private systemEmployeeService: SystemEmployeeService,
    private toastrService: ToastrService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.createLastNameUpdateForm();
    this.getSystemEmployeeById();
  }

  createLastNameUpdateForm() {
    this.lastNameUpdateForm = this.formBuilder.group({
      sysEmplId: [this.getUserId()],
      lastName: ['', Validators.required],
    });
  }

  updateLastName() {
    this.systemEmployeeService
      .updateLastName(
        this.loggedSystemEmployee,
        this.lastNameUpdateForm.value['lastName']
      )
      .subscribe(
        (response: any) => {
          this.toastrService.success('Successfully updated');
          this.pageReloadDelay();
        },
        (responseError) => {
          let message = JSON.stringify(responseError.error.message);
          this.toastrService.error(
            message.replace(/{|}|"/gi, ''),
            'Verification error'
          );
        }
      );
  }

  pageReloadDelay() {
    setTimeout(location.reload.bind(location), 1000);
  }

  getSystemEmployeeById() {
    this.systemEmployeeService
      .getSystemEmployeeById(this.getUserId())
      .subscribe((response: any) => {
        this.loggedSystemEmployee = response.data;
      });
  }

  getUserId(): number {
    this.loggedUser = JSON.parse(localStorage.getItem('user'));
    return this.loggedUser.data.id;
  }
}
