import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachingCourseComponent } from './teaching-course.component';

describe('TeachingCourseComponent', () => {
  let component: TeachingCourseComponent;
  let fixture: ComponentFixture<TeachingCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeachingCourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeachingCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
