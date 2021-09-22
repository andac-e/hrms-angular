import { TestBed } from '@angular/core/testing';

import { CandidateLanguageAddGuard } from './candidate-language-add.guard';

describe('CandidateLanguageAddGuard', () => {
  let guard: CandidateLanguageAddGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CandidateLanguageAddGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
