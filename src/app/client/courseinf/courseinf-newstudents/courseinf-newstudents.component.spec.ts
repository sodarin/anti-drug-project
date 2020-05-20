import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseinfNewstudentsComponent } from './courseinf-newstudents.component';

describe('CourseinfNewstudentsComponent', () => {
  let component: CourseinfNewstudentsComponent;
  let fixture: ComponentFixture<CourseinfNewstudentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseinfNewstudentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseinfNewstudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
