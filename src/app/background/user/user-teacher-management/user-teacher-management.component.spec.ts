import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTeacherManagementComponent } from './user-teacher-management.component';

describe('UserTeacherManagementComponent', () => {
  let component: UserTeacherManagementComponent;
  let fixture: ComponentFixture<UserTeacherManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserTeacherManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTeacherManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
