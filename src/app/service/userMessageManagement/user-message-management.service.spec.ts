import { TestBed } from '@angular/core/testing';

import { UserMessageManagementService } from './user-message-management.service';

describe('UserMessageManagementService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserMessageManagementService = TestBed.get(UserMessageManagementService);
    expect(service).toBeTruthy();
  });
});
