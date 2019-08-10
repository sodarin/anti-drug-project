import { TestBed } from '@angular/core/testing';

import { ClassRecommendationService } from './class-recommendation.service';

describe('ClassRecommendationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClassRecommendationService = TestBed.get(ClassRecommendationService);
    expect(service).toBeTruthy();
  });
});
