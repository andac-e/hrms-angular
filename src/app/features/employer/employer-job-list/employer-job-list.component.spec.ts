import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployerJobListComponent } from './employer-job-list.component';

describe('EmployerJobListComponent', () => {
  let component: EmployerJobListComponent;
  let fixture: ComponentFixture<EmployerJobListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployerJobListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployerJobListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
