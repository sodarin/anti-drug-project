import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseinfCoursefeatureComponent } from './courseinf-coursefeature.component';

describe('CourseinfCoursefeatureComponent', () => {
  let component: CourseinfCoursefeatureComponent;
  let fixture: ComponentFixture<CourseinfCoursefeatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseinfCoursefeatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseinfCoursefeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
