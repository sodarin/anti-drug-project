import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseExamComponent } from './course-exam.component';

describe('CourseExamComponent', () => {
  let component: CourseExamComponent;
  let fixture: ComponentFixture<CourseExamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseExamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseExamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
