import { TestBed } from '@angular/core/testing';

import { CourseManagementUtilService } from './course-management-util.service';

describe('CourseManagementUtilService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CourseManagementUtilService = TestBed.get(CourseManagementUtilService);
    expect(service).toBeTruthy();
  });
});
