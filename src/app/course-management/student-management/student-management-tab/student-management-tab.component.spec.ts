import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentManagementTabComponent } from './student-management-tab.component';

describe('StudentManagementTabComponent', () => {
  let component: StudentManagementTabComponent;
  let fixture: ComponentFixture<StudentManagementTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentManagementTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentManagementTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
