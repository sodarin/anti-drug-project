import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserApprovalPageTabComponent } from './user-approval-page-tab.component';

describe('UserApprovalPageTabComponent', () => {
  let component: UserApprovalPageTabComponent;
  let fixture: ComponentFixture<UserApprovalPageTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserApprovalPageTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserApprovalPageTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
