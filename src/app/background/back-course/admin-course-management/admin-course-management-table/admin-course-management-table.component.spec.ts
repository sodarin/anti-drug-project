import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCourseManagementTableComponent } from './admin-course-management-table.component';

describe('AdminCourseManagementTableComponent', () => {
  let component: AdminCourseManagementTableComponent;
  let fixture: ComponentFixture<AdminCourseManagementTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCourseManagementTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCourseManagementTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
