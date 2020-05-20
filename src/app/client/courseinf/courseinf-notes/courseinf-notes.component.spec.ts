import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseinfNotesComponent } from './courseinf-notes.component';

describe('CourseinfNotesComponent', () => {
  let component: CourseinfNotesComponent;
  let fixture: ComponentFixture<CourseinfNotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseinfNotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseinfNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
