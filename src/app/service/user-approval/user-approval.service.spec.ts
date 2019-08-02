import { TestBed } from '@angular/core/testing';

import { UserApprovalService } from './user-approval.service';

describe('UserApprovalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserApprovalService = TestBed.get(UserApprovalService);
    expect(service).toBeTruthy();
  });
});
