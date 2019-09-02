import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminNoteManagementTabComponent } from './admin-note-management-tab.component';

describe('AdminNoteManagementTabComponent', () => {
  let component: AdminNoteManagementTabComponent;
  let fixture: ComponentFixture<AdminNoteManagementTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminNoteManagementTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminNoteManagementTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
