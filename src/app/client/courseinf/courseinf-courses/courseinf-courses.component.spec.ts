import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseinfCoursesComponent } from './courseinf-courses.component';

describe('CourseinfCoursesComponent', () => {
  let component: CourseinfCoursesComponent;
  let fixture: ComponentFixture<CourseinfCoursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseinfCoursesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseinfCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
