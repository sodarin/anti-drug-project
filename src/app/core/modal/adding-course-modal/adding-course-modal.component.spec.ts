import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddingCourseModalComponent } from './adding-course-modal.component';

describe('AddingCourseModalComponent', () => {
  let component: AddingCourseModalComponent;
  let fixture: ComponentFixture<AddingCourseModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddingCourseModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddingCourseModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
