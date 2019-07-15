import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserApprovalManagementComponent } from './user-approval-management.component';

describe('UserApprovalManagementComponent', () => {
  let component: UserApprovalManagementComponent;
  let fixture: ComponentFixture<UserApprovalManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserApprovalManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserApprovalManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
