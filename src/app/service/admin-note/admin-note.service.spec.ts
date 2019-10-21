import { TestBed } from '@angular/core/testing';

import { AdminNoteService } from './admin-note.service';

describe('AdminNoteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdminNoteService = TestBed.get(AdminNoteService);
    expect(service).toBeTruthy();
  });
});
