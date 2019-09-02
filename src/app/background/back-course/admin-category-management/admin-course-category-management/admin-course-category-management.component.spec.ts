import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCourseCategoryManagementComponent } from './admin-course-category-management.component';

describe('AdminCourseCategoryManagementComponent', () => {
  let component: AdminCourseCategoryManagementComponent;
  let fixture: ComponentFixture<AdminCourseCategoryManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCourseCategoryManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCourseCategoryManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
