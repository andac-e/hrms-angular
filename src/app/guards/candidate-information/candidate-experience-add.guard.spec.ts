import { TestBed } from '@angular/core/testing';

import { CandidateExperienceAddGuard } from './candidate-experience-add.guard';

describe('CandidateExperienceAddGuard', () => {
  let guard: CandidateExperienceAddGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CandidateExperienceAddGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
