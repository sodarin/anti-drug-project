import { TestBed } from '@angular/core/testing';

import { GroupfirstService } from './groupfirst.service';

describe('GrouplistService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GroupfirstService = TestBed.get(GroupfirstService);
    expect(service).toBeTruthy();
  });
});
