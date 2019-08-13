import { TestBed } from '@angular/core/testing';

import { TagManagementService } from './tag-management.service';

describe('TagManagementService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TagManagementService = TestBed.get(TagManagementService);
    expect(service).toBeTruthy();
  });
});
