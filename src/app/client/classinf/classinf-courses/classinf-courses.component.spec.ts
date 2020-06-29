import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassinfCoursesComponent } from './classinf-courses.component';

describe('ClassinfCoursesComponent', () => {
  let component: ClassinfCoursesComponent;
  let fixture: ComponentFixture<ClassinfCoursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassinfCoursesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassinfCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
