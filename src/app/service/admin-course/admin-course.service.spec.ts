import { TestBed } from '@angular/core/testing';

import { AdminCourseService } from './admin-course.service';

describe('AdminCourseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdminCourseService = TestBed.get(AdminCourseService);
    expect(service).toBeTruthy();
  });
});
