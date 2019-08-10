import { TestBed } from '@angular/core/testing';

import { AdminTopicClassService } from './admin-topic-class.service';

describe('AdminTopicClassService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdminTopicClassService = TestBed.get(AdminTopicClassService);
    expect(service).toBeTruthy();
  });
});
