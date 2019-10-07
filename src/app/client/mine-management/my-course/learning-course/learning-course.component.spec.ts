import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningCourseComponent } from './learning-course.component';

describe('LearningCourseComponent', () => {
  let component: LearningCourseComponent;
  let fixture: ComponentFixture<LearningCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearningCourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearningCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
