import { TestBed } from '@angular/core/testing';

import { EmployerProfileUpdateGuard } from './employer-profile-update.guard';

describe('EmployerProfileUpdateGuard', () => {
  let guard: EmployerProfileUpdateGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(EmployerProfileUpdateGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
