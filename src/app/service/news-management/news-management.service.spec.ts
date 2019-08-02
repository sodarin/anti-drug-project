import { TestBed } from '@angular/core/testing';

import { NewsManagementService } from './news-management.service';

describe('NewsManagementService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NewsManagementService = TestBed.get(NewsManagementService);
    expect(service).toBeTruthy();
  });
});
