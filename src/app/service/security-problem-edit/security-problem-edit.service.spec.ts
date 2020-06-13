import { TestBed } from '@angular/core/testing';

import { SecurityProblemEditService } from './security-problem-edit.service';

describe('SecurityProblemEditService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SecurityProblemEditService = TestBed.get(SecurityProblemEditService);
    expect(service).toBeTruthy();
  });
});
