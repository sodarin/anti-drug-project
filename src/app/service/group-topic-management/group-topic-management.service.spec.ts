import { TestBed } from '@angular/core/testing';

import { GroupTopicManagementService } from './group-topic-management.service';

describe('GroupTopicManagementService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GroupTopicManagementService = TestBed.get(GroupTopicManagementService);
    expect(service).toBeTruthy();
  });
});
