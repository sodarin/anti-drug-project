import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseinfHeaderComponent } from './courseinf-header.component';

describe('CourseinfHeaderComponent', () => {
  let component: CourseinfHeaderComponent;
  let fixture: ComponentFixture<CourseinfHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseinfHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseinfHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
