import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseTopicComponent } from './course-topic.component';

describe('CourseTopicComponent', () => {
  let component: CourseTopicComponent;
  let fixture: ComponentFixture<CourseTopicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseTopicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseTopicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
