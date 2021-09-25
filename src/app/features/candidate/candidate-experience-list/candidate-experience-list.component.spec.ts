import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateExperienceListComponent } from './candidate-experience-list.component';

describe('CandidateExperienceListComponent', () => {
  let component: CandidateExperienceListComponent;
  let fixture: ComponentFixture<CandidateExperienceListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidateExperienceListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidateExperienceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
