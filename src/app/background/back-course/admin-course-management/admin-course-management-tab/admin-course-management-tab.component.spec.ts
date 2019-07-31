import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCourseManagementTabComponent } from './admin-course-management-tab.component';

describe('AdminCourseManagementTabComponent', () => {
  let component: AdminCourseManagementTabComponent;
  let fixture: ComponentFixture<AdminCourseManagementTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCourseManagementTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCourseManagementTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
