import { TestBed } from '@angular/core/testing';

import { GroupmainlistService } from './groupmainlist.service';

describe('GroupmainlistService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GroupmainlistService = TestBed.get(GroupmainlistService);
    expect(service).toBeTruthy();
  });
});
