import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursevideoComponent } from './coursevideo.component';

describe('CoursevideoComponent', () => {
  let component: CoursevideoComponent;
  let fixture: ComponentFixture<CoursevideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursevideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursevideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
