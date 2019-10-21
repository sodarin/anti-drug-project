import { TestBed } from '@angular/core/testing';

import { GrouplistService } from './grouplist.service';

describe('GrouplistService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GrouplistService = TestBed.get(GrouplistService);
    expect(service).toBeTruthy();
  });
});
