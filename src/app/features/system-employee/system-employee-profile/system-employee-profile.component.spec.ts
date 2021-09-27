import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemEmployeeProfileComponent } from './system-employee-profile.component';

describe('SystemEmployeeProfileComponent', () => {
  let component: SystemEmployeeProfileComponent;
  let fixture: ComponentFixture<SystemEmployeeProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SystemEmployeeProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemEmployeeProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
