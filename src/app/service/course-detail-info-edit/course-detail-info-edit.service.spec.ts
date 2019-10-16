import { TestBed } from '@angular/core/testing';

import { CourseDetailInfoEditService } from './course-detail-info-edit.service';

describe('CourseDetailInfoEditService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CourseDetailInfoEditService = TestBed.get(CourseDetailInfoEditService);
    expect(service).toBeTruthy();
  });
});
