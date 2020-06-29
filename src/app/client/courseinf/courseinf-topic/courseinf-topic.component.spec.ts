import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseinfTopicComponent } from './courseinf-topic.component';

describe('CourseinfTopicComponent', () => {
  let component: CourseinfTopicComponent;
  let fixture: ComponentFixture<CourseinfTopicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseinfTopicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseinfTopicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
