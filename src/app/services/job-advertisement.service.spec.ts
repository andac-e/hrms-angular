import { TestBed } from '@angular/core/testing';

import { JobAdvertisementService } from './job-advertisement.service';

describe('JobAdvertisementService', () => {
  let service: JobAdvertisementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JobAdvertisementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
