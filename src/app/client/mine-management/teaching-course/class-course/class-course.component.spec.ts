import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassCourseComponent } from './class-course.component';

describe('ClassCourseComponent', () => {
  let component: ClassCourseComponent;
  let fixture: ComponentFixture<ClassCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassCourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
