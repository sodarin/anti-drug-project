import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardListCourseComponent } from './dashboard-list-course.component';

describe('DashboardListCourseComponent', () => {
  let component: DashboardListCourseComponent;
  let fixture: ComponentFixture<DashboardListCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardListCourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardListCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
