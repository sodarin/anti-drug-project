import { TestBed } from '@angular/core/testing';

import { ClasslistFrontendService } from './classlist-frontend.service';

describe('ClasslistFrontendService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClasslistFrontendService = TestBed.get(ClasslistFrontendService);
    expect(service).toBeTruthy();
  });
});
