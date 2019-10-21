import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachingCourseTabComponent } from './teaching-course-tab.component';

describe('TeachingCourseTabComponent', () => {
  let component: TeachingCourseTabComponent;
  let fixture: ComponentFixture<TeachingCourseTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeachingCourseTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeachingCourseTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
