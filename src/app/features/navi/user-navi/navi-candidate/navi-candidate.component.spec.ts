import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NaviCandidateComponent } from './navi-candidate.component';

describe('NaviCandidateComponent', () => {
  let component: NaviCandidateComponent;
  let fixture: ComponentFixture<NaviCandidateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NaviCandidateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NaviCandidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
