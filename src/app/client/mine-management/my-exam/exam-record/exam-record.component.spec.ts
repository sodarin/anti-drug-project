import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamRecordComponent } from './exam-record.component';

describe('ExamRecordComponent', () => {
  let component: ExamRecordComponent;
  let fixture: ComponentFixture<ExamRecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamRecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
