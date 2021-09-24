import { TestBed } from '@angular/core/testing';

import { CandidateResumeViewGuard } from './candidate-resume-view.guard';

describe('CandidateResumeViewGuard', () => {
  let guard: CandidateResumeViewGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CandidateResumeViewGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
