import { TestBed } from '@angular/core/testing';

import { JobVerificationGuard } from './job-verification.guard';

describe('JobVerificationGuard', () => {
  let guard: JobVerificationGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(JobVerificationGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
