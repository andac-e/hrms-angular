import { TestBed } from '@angular/core/testing';

import { FavoriteJobListGuard } from './favorite-job-list.guard';

describe('FavoriteJobListGuard', () => {
  let guard: FavoriteJobListGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(FavoriteJobListGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
