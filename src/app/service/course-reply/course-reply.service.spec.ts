import { TestBed } from '@angular/core/testing';

import { CourseReplyService } from './course-reply.service';

describe('CourseReplyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CourseReplyService = TestBed.get(CourseReplyService);
    expect(service).toBeTruthy();
  });
});
