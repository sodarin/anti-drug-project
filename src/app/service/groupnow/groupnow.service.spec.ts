import { TestBed } from '@angular/core/testing';

import { GroupnowService } from './groupnow.service';

describe('GroupnowService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GroupnowService = TestBed.get(GroupnowService);
    expect(service).toBeTruthy();
  });
});
