import { TestBed } from '@angular/core/testing';

import { OpenresourceService } from './openresource.service';

describe('OpenresourceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OpenresourceService = TestBed.get(OpenresourceService);
    expect(service).toBeTruthy();
  });
});
