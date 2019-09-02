import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCourseRatingManagementComponent } from './admin-course-rating-management.component';

describe('AdminCourseRatingManagementComponent', () => {
  let component: AdminCourseRatingManagementComponent;
  let fixture: ComponentFixture<AdminCourseRatingManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCourseRatingManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCourseRatingManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
