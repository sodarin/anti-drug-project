import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentExitRecordComponent } from './student-exit-record.component';

describe('StudentExitRecordComponent', () => {
  let component: StudentExitRecordComponent;
  let fixture: ComponentFixture<StudentExitRecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentExitRecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentExitRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
