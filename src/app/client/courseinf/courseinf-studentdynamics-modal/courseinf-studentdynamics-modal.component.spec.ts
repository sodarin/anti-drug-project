import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseinfStudentdynamicsModalComponent } from './courseinf-studentdynamics-modal.component';

describe('CourseinfStudentdynamicsModalComponent', () => {
  let component: CourseinfStudentdynamicsModalComponent;
  let fixture: ComponentFixture<CourseinfStudentdynamicsModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseinfStudentdynamicsModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseinfStudentdynamicsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
