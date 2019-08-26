import { TestBed } from '@angular/core/testing';

import { AdminOpenClassService } from './admin-open-class.service';

describe('AdminOpenClassService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdminOpenClassService = TestBed.get(AdminOpenClassService);
    expect(service).toBeTruthy();
  });
});
