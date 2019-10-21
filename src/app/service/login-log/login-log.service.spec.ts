import { TestBed } from '@angular/core/testing';

import { LoginLogService } from './login-log.service';

describe('LoginLogService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoginLogService = TestBed.get(LoginLogService);
    expect(service).toBeTruthy();
  });
});
