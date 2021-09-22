import { TestBed } from '@angular/core/testing';

import { CandidateSkillAddGuard } from './candidate-skill-add.guard';

describe('CandidateSkillAddGuard', () => {
  let guard: CandidateSkillAddGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CandidateSkillAddGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
