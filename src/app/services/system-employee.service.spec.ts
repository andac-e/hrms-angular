import { TestBed } from '@angular/core/testing';

import { SystemEmployeeService } from './system-employee.service';

describe('SystemEmployeeService', () => {
  let service: SystemEmployeeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SystemEmployeeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
