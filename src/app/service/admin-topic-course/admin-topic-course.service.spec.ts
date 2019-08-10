import { TestBed } from '@angular/core/testing';

import { AdminTopicCourseService } from './admin-topic-course.service';

describe('AdminTopicCourseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdminTopicCourseService = TestBed.get(AdminTopicCourseService);
    expect(service).toBeTruthy();
  });
});
