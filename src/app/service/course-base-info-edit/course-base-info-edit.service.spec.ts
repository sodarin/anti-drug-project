import { TestBed } from '@angular/core/testing';

import { CourseBaseInfoEditService } from './course-base-info-edit.service';

describe('CourseBaseInfoEditService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CourseBaseInfoEditService = TestBed.get(CourseBaseInfoEditService);
    expect(service).toBeTruthy();
  });
});
