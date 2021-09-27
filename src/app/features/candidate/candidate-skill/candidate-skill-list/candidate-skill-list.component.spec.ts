import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateSkillListComponent } from './candidate-skill-list.component';

describe('CandidateSkillListComponent', () => {
  let component: CandidateSkillListComponent;
  let fixture: ComponentFixture<CandidateSkillListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidateSkillListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidateSkillListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
