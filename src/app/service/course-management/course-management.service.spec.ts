import { TestBed } from '@angular/core/testing';

import { CourseManagementService } from './course-management.service';

describe('CourseManagementService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CourseManagementService = TestBed.get(CourseManagementService);
    expect(service).toBeTruthy();
  });
});
