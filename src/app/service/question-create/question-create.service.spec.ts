import { TestBed } from '@angular/core/testing';

import { QuestionCreateService } from './question-create.service';

describe('QuestionCreateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QuestionCreateService = TestBed.get(QuestionCreateService);
    expect(service).toBeTruthy();
  });
});
