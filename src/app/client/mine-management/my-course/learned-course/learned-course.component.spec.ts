import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnedCourseComponent } from './learned-course.component';

describe('LearnedCourseComponent', () => {
  let component: LearnedCourseComponent;
  let fixture: ComponentFixture<LearnedCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearnedCourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnedCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
