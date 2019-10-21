import { TestBed } from '@angular/core/testing';

import { GroupmemberService } from './groupmember.service';

describe('GroupmemberService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GroupmemberService = TestBed.get(GroupmemberService);
    expect(service).toBeTruthy();
  });
});
