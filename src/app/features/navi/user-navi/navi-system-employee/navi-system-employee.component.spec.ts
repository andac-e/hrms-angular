import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NaviSystemEmployeeComponent } from './navi-system-employee.component';

describe('NaviSystemEmployeeComponent', () => {
  let component: NaviSystemEmployeeComponent;
  let fixture: ComponentFixture<NaviSystemEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NaviSystemEmployeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NaviSystemEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
