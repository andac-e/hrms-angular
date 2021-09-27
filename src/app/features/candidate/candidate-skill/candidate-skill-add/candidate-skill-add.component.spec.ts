import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateSkillAddComponent } from './candidate-skill-add.component';

describe('CandidateSkillAddComponent', () => {
  let component: CandidateSkillAddComponent;
  let fixture: ComponentFixture<CandidateSkillAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidateSkillAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidateSkillAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
