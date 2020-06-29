import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseinfCourselistBottomComponent } from './courseinf-courselist-bottom.component';

describe('CourseinfCourselistBottomComponent', () => {
  let component: CourseinfCourselistBottomComponent;
  let fixture: ComponentFixture<CourseinfCourselistBottomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseinfCourselistBottomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseinfCourselistBottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
