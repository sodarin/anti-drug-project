import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordCourseComponent } from './record-course.component';

describe('RecordCourseComponent', () => {
  let component: RecordCourseComponent;
  let fixture: ComponentFixture<RecordCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecordCourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
