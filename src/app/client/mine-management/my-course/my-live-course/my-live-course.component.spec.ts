import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyLiveCourseComponent } from './my-live-course.component';

describe('MyLiveCourseComponent', () => {
  let component: MyLiveCourseComponent;
  let fixture: ComponentFixture<MyLiveCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyLiveCourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyLiveCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
