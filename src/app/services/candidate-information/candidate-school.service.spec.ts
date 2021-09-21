import { TestBed } from '@angular/core/testing';

import { CandidateSchoolService } from './candidate-school.service';

describe('CandidateSchoolService', () => {
  let service: CandidateSchoolService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CandidateSchoolService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
