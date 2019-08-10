import { TestBed } from '@angular/core/testing';

import { ClassManagementService } from './class-management.service';

describe('ClassManagementService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClassManagementService = TestBed.get(ClassManagementService);
    expect(service).toBeTruthy();
  });
});
