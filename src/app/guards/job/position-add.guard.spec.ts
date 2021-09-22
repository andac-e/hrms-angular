import { TestBed } from '@angular/core/testing';

import { PositionAddGuard } from './position-add.guard';

describe('PositionAddGuard', () => {
  let guard: PositionAddGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PositionAddGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
