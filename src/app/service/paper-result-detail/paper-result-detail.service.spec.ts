import { TestBed } from '@angular/core/testing';

import { PaperResultDetailService } from './paper-result-detail.service';

describe('PaperResultDetailService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PaperResultDetailService = TestBed.get(PaperResultDetailService);
    expect(service).toBeTruthy();
  });
});
