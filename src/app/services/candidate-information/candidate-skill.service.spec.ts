import { TestBed } from '@angular/core/testing';

import { CandidateSkillService } from './candidate-skill.service';

describe('CandidateSkillService', () => {
  let service: CandidateSkillService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CandidateSkillService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
