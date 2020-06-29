import { TestBed } from '@angular/core/testing';

import { CourseinfFrontendService } from './courseinf-frontend.service';

describe('CourseinfFrontendService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CourseinfFrontendService = TestBed.get(CourseinfFrontendService);
    expect(service).toBeTruthy();
  });
});
