import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateGithubAddComponent } from './candidate-github-add.component';

describe('CandidateGithubAddComponent', () => {
  let component: CandidateGithubAddComponent;
  let fixture: ComponentFixture<CandidateGithubAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidateGithubAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidateGithubAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
