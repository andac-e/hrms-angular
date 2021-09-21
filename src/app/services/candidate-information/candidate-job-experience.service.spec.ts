import { TestBed } from '@angular/core/testing';

import { CandidateJobExperienceService } from './candidate-job-experience.service';

describe('CandidateJobExperienceService', () => {
  let service: CandidateJobExperienceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CandidateJobExperienceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
