import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenCourseComponent } from './open-course.component';

describe('OpenCourseComponent', () => {
  let component: OpenCourseComponent;
  let fixture: ComponentFixture<OpenCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenCourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
