import { TestBed } from '@angular/core/testing';

import { TeacherManagementService } from './teacher-management.service';

describe('TeacherManagementService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TeacherManagementService = TestBed.get(TeacherManagementService);
    expect(service).toBeTruthy();
  });
});
