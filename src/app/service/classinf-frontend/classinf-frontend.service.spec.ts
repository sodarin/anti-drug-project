import { TestBed } from '@angular/core/testing';

import { ClassinfFrontendService } from './classinf-frontend.service';

describe('ClassinfFrontendService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClassinfFrontendService = TestBed.get(ClassinfFrontendService);
    expect(service).toBeTruthy();
  });
});
