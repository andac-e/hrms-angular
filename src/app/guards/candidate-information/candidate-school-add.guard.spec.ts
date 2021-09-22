import { TestBed } from '@angular/core/testing';

import { CandidateSchoolAddGuard } from './candidate-school-add.guard';

describe('CandidateSchoolAddGuard', () => {
  let guard: CandidateSchoolAddGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CandidateSchoolAddGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
