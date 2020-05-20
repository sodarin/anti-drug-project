import { TestBed } from '@angular/core/testing';

import { TaglistFrontendService } from './taglist-frontend.service';

describe('TaglistFrontendService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TaglistFrontendService = TestBed.get(TaglistFrontendService);
    expect(service).toBeTruthy();
  });
});
