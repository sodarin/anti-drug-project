import { TestBed } from '@angular/core/testing';

import { MyteachingService } from './myteaching.service';

describe('MyteachingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyteachingService = TestBed.get(MyteachingService);
    expect(service).toBeTruthy();
  });
});
