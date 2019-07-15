import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMessageManagementComponent } from './user-message-management.component';

describe('UserMessageManagementComponent', () => {
  let component: UserMessageManagementComponent;
  let fixture: ComponentFixture<UserMessageManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserMessageManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserMessageManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
