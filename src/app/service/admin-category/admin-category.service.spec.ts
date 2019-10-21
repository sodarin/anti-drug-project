import { TestBed } from '@angular/core/testing';

import { AdminCategoryService } from './admin-category.service';

describe('AdminCategoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdminCategoryService = TestBed.get(AdminCategoryService);
    expect(service).toBeTruthy();
  });
});
