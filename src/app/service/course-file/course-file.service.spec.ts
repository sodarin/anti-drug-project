import { TestBed } from '@angular/core/testing';

import { CourseFileService } from './course-file.service';

describe('CourseFileService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CourseFileService = TestBed.get(CourseFileService);
    expect(service).toBeTruthy();
  });
});
