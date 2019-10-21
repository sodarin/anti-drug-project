import { TestBed } from '@angular/core/testing';

import { ClientClassManagementService } from './client-class-management.service';

describe('ClientClassManagementService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClientClassManagementService = TestBed.get(ClientClassManagementService);
    expect(service).toBeTruthy();
  });
});
