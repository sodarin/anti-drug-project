import { TestBed } from '@angular/core/testing';

import { GrouphotService } from './grouphot.service';

describe('GrouphotService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GrouphotService = TestBed.get(GrouphotService);
    expect(service).toBeTruthy();
  });
});
