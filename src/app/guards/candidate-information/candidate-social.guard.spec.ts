import { TestBed } from '@angular/core/testing';

import { CandidateSocialGuard } from './candidate-social.guard';

describe('CandidateSocialGuard', () => {
  let guard: CandidateSocialGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CandidateSocialGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
