import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormalStudentTableComponent } from './formal-student-table.component';

describe('FormalStudentTableComponent', () => {
  let component: FormalStudentTableComponent;
  let fixture: ComponentFixture<FormalStudentTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormalStudentTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormalStudentTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
