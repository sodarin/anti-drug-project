import { TestBed } from '@angular/core/testing';

import { GroupEditService } from './group-edit.service';

describe('GroupEditService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GroupEditService = TestBed.get(GroupEditService);
    expect(service).toBeTruthy();
  });
});
