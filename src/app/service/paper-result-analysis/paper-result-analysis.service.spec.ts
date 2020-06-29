import { TestBed } from '@angular/core/testing';

import { PaperResultAnalysisService } from './paper-result-analysis.service';

describe('PaperResultAnalysisService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PaperResultAnalysisService = TestBed.get(PaperResultAnalysisService);
    expect(service).toBeTruthy();
  });
});
