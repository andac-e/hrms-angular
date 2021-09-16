import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateSignupComponent } from './candidate-signup.component';

describe('CandidateSignupComponent', () => {
  let component: CandidateSignupComponent;
  let fixture: ComponentFixture<CandidateSignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidateSignupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidateSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
