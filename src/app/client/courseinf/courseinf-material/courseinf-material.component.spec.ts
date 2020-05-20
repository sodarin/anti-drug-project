import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseinfMaterialComponent } from './courseinf-material.component';

describe('CourseinfMaterialComponent', () => {
  let component: CourseinfMaterialComponent;
  let fixture: ComponentFixture<CourseinfMaterialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseinfMaterialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseinfMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
