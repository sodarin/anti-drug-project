import { TestBed } from '@angular/core/testing';

import { CourseReplyAllService } from './course-reply-all.service';

describe('CourseReplyAllService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CourseReplyAllService = TestBed.get(CourseReplyAllService);
    expect(service).toBeTruthy();
  });
});
