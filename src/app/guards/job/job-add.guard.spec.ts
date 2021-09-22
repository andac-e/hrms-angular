import { TestBed } from '@angular/core/testing';

import { JobAddGuard } from './job-add.guard';

describe('JobAddGuard', () => {
  let guard: JobAddGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(JobAddGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
