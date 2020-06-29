import { TestBed } from '@angular/core/testing';

import { FollowManagementService } from './follow-management.service';

describe('FollowManagementService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FollowManagementService = TestBed.get(FollowManagementService);
    expect(service).toBeTruthy();
  });
});
