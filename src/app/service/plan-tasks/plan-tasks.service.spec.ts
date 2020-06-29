import { TestBed } from '@angular/core/testing';

import { PlanTasksService } from './plan-tasks.service';

describe('PlanTasksService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlanTasksService = TestBed.get(PlanTasksService);
    expect(service).toBeTruthy();
  });
});
