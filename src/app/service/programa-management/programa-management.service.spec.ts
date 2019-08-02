import { TestBed } from '@angular/core/testing';

import { ProgramaManagementService } from './programa-management.service';

describe('ProgramaManagementService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProgramaManagementService = TestBed.get(ProgramaManagementService);
    expect(service).toBeTruthy();
  });
});
