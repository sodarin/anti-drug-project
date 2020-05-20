import { TestBed } from '@angular/core/testing';

import { ClientCourseVideoService } from './client-course-video.service';

describe('ClientCourseVideoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClientCourseVideoService = TestBed.get(ClientCourseVideoService);
    expect(service).toBeTruthy();
  });
});
