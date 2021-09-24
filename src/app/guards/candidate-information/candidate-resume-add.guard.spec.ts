import { TestBed } from '@angular/core/testing';

import { CandidateResumeAddGuard } from './candidate-resume-add.guard';

describe('CandidateResumeAddGuard', () => {
  let guard: CandidateResumeAddGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CandidateResumeAddGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
