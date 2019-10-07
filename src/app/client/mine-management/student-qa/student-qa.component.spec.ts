import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentQAComponent } from './student-qa.component';

describe('StudentQAComponent', () => {
  let component: StudentQAComponent;
  let fixture: ComponentFixture<StudentQAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentQAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentQAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
