import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseinfTeacherlistModalComponent } from './courseinf-teacherlist-modal.component';

describe('CourseinfTeacherlistModalComponent', () => {
  let component: CourseinfTeacherlistModalComponent;
  let fixture: ComponentFixture<CourseinfTeacherlistModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseinfTeacherlistModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseinfTeacherlistModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
