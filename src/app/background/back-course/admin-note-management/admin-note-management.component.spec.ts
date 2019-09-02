import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminNoteManagementComponent } from './admin-note-management.component';

describe('AdminNoteManagementComponent', () => {
  let component: AdminNoteManagementComponent;
  let fixture: ComponentFixture<AdminNoteManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminNoteManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminNoteManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
