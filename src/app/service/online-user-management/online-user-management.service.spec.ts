import { TestBed } from '@angular/core/testing';

import { OnlineUserManagementService } from './online-user-management.service';

describe('OnlineUserManagementService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OnlineUserManagementService = TestBed.get(OnlineUserManagementService);
    expect(service).toBeTruthy();
  });
});
