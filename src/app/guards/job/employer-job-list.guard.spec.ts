import { TestBed } from '@angular/core/testing';

import { EmployerJobListGuard } from './employer-job-list.guard';

describe('EmployerJobListGuard', () => {
  let guard: EmployerJobListGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(EmployerJobListGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
