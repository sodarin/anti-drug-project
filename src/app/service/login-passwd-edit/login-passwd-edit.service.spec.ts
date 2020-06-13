import { TestBed } from '@angular/core/testing';

import { LoginPasswdEditService } from './login-passwd-edit.service';

describe('LoginPasswdEditService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoginPasswdEditService = TestBed.get(LoginPasswdEditService);
    expect(service).toBeTruthy();
  });
});
