import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminNoteManagementTableComponent } from './admin-note-management-table.component';

describe('AdminNoteManagementTableComponent', () => {
  let component: AdminNoteManagementTableComponent;
  let fixture: ComponentFixture<AdminNoteManagementTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminNoteManagementTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminNoteManagementTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
