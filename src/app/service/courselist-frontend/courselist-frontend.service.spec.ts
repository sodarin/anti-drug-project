import { TestBed } from '@angular/core/testing';

import { CourselistFrontendService } from './courselist-frontend.service';

describe('CourselistFrontendService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CourselistFrontendService = TestBed.get(CourselistFrontendService);
    expect(service).toBeTruthy();
  });
});
