import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTopicManagementComponent } from './admin-topic-management.component';

describe('AdminTopicManagementComponent', () => {
  let component: AdminTopicManagementComponent;
  let fixture: ComponentFixture<AdminTopicManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminTopicManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTopicManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
