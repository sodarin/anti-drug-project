import { TestBed } from '@angular/core/testing';

import { TeacherFrontendService } from './teacher-frontend.service';

describe('TeacherFrontendService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TeacherFrontendService = TestBed.get(TeacherFrontendService);
    expect(service).toBeTruthy();
  });
});
