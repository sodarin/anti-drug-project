import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseinfComponent } from './courseinf.component';

describe('CourseinfComponent', () => {
  let component: CourseinfComponent;
  let fixture: ComponentFixture<CourseinfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseinfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseinfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
