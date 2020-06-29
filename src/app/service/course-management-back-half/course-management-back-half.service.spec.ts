import { TestBed } from '@angular/core/testing';

import { CourseManagementBackHalfService } from './course-management-back-half.service';

describe('CourseManagementBackHalfService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CourseManagementBackHalfService = TestBed.get(CourseManagementBackHalfService);
    expect(service).toBeTruthy();
  });
});
