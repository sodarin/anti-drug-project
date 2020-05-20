import { TestBed } from '@angular/core/testing';

import { PrivateChatService } from './private-chat.service';

describe('PrivateChatService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PrivateChatService = TestBed.get(PrivateChatService);
    expect(service).toBeTruthy();
  });
});
