import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseinfCommentComponent } from './courseinf-comment.component';

describe('CourseinfCommentComponent', () => {
  let component: CourseinfCommentComponent;
  let fixture: ComponentFixture<CourseinfCommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseinfCommentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseinfCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
