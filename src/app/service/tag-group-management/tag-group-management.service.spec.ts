import { TestBed } from '@angular/core/testing';

import { TagGroupManagementService } from './tag-group-management.service';

describe('TagGroupManagementService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TagGroupManagementService = TestBed.get(TagGroupManagementService);
    expect(service).toBeTruthy();
  });
});
