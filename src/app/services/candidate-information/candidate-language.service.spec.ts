import { TestBed } from '@angular/core/testing';

import { CandidateLanguageService } from './candidate-language.service';

describe('CandidateLanguageService', () => {
  let service: CandidateLanguageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CandidateLanguageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
