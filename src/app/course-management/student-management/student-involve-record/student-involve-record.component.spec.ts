import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentInvolveRecordComponent } from './student-involve-record.component';

describe('StudentInvolveRecordComponent', () => {
  let component: StudentInvolveRecordComponent;
  let fixture: ComponentFixture<StudentInvolveRecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentInvolveRecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentInvolveRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
