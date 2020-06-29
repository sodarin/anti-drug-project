import { TestBed } from '@angular/core/testing';

import { GrouptopicService } from './grouptopic.service';

describe('GrouptopicService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GrouptopicService = TestBed.get(GrouptopicService);
    expect(service).toBeTruthy();
  });
});
