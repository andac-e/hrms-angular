import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NaviEmployerComponent } from './navi-employer.component';

describe('NaviEmployerComponent', () => {
  let component: NaviEmployerComponent;
  let fixture: ComponentFixture<NaviEmployerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NaviEmployerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NaviEmployerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
