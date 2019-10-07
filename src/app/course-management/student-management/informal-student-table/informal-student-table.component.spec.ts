import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformalStudentTableComponent } from './informal-student-table.component';

describe('InformalStudentTableComponent', () => {
  let component: InformalStudentTableComponent;
  let fixture: ComponentFixture<InformalStudentTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformalStudentTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformalStudentTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
