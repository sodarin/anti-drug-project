import { TestBed } from '@angular/core/testing';

import { OpenresourcedetailService } from './openresourcedetail.service';

describe('OpenresourcedetailService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OpenresourcedetailService = TestBed.get(OpenresourcedetailService);
    expect(service).toBeTruthy();
  });
});
