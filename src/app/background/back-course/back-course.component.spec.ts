import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackCourseComponent } from './back-course.component';

describe('BackCourseComponent', () => {
  let component: BackCourseComponent;
  let fixture: ComponentFixture<BackCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackCourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
