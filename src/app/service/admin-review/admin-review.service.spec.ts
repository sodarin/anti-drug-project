import { TestBed } from '@angular/core/testing';

import { AdminReviewService } from './admin-review.service';

describe('AdminReviewService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdminReviewService = TestBed.get(AdminReviewService);
    expect(service).toBeTruthy();
  });
});
