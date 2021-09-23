import { TestBed } from '@angular/core/testing';

import { CandidateImageUploadGuard } from './candidate-image-upload.guard';

describe('CandidateImageUploadGuard', () => {
  let guard: CandidateImageUploadGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CandidateImageUploadGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
