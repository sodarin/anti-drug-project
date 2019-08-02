import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCourseHeaderComponent } from './admin-course-header.component';

describe('AdminCourseHeaderComponent', () => {
  let component: AdminCourseHeaderComponent;
  let fixture: ComponentFixture<AdminCourseHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCourseHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCourseHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
