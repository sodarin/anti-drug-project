import { TestBed } from '@angular/core/testing';

import { FrontDeskService } from './front-desk.service';

describe('FrontDeskService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FrontDeskService = TestBed.get(FrontDeskService);
    expect(service).toBeTruthy();
  });
});
