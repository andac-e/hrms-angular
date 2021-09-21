import { TestBed } from '@angular/core/testing';

import { SystemEmployeeGuard } from './system-employee.guard';

describe('SystemEmployeeGuard', () => {
  let guard: SystemEmployeeGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SystemEmployeeGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
