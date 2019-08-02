import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCourseStatisticsTableComponent } from './admin-course-statistics-table.component';

describe('AdminCourseStatisticsTableComponent', () => {
  let component: AdminCourseStatisticsTableComponent;
  let fixture: ComponentFixture<AdminCourseStatisticsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCourseStatisticsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCourseStatisticsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
