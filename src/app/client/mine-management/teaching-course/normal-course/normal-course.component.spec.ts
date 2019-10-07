import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NormalCourseComponent } from './normal-course.component';

describe('NormalCourseComponent', () => {
  let component: NormalCourseComponent;
  let fixture: ComponentFixture<NormalCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NormalCourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NormalCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
