import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateExperienceAddComponent } from './candidate-experience-add.component';

describe('CandidateExperienceAddComponent', () => {
  let component: CandidateExperienceAddComponent;
  let fixture: ComponentFixture<CandidateExperienceAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidateExperienceAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidateExperienceAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
