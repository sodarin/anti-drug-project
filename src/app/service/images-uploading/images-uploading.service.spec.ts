import { TestBed } from '@angular/core/testing';

import { ImagesUploadingService } from './images-uploading.service';

describe('ImagesUploadingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ImagesUploadingService = TestBed.get(ImagesUploadingService);
    expect(service).toBeTruthy();
  });
});
