import { TestBed } from '@angular/core/testing';

import { GroupcreateService } from './groupcreate.service';

describe('GroupcreateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GroupcreateService = TestBed.get(GroupcreateService);
    expect(service).toBeTruthy();
  });
});
