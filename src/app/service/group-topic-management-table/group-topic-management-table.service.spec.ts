import { TestBed } from '@angular/core/testing';

import { GroupTopicManagementTableService } from './group-topic-management-table.service';

describe('GroupTopicManagementTableService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GroupTopicManagementTableService = TestBed.get(GroupTopicManagementTableService);
    expect(service).toBeTruthy();
  });
});
