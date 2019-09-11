import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourselistCourseblockModalComponent } from './courselist-courseblock-modal.component';

describe('CourselistCourseblockModalComponent', () => {
  let component: CourselistCourseblockModalComponent;
  let fixture: ComponentFixture<CourselistCourseblockModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourselistCourseblockModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourselistCourseblockModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
