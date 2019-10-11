import { TestBed } from '@angular/core/testing';

import { PersonInfoEditService } from './person-info-edit.service';

describe('PersonInfoEditService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PersonInfoEditService = TestBed.get(PersonInfoEditService);
    expect(service).toBeTruthy();
  });
});
