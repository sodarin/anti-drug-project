import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupTopicManagementComponent } from './group-topic-management.component';

describe('GroupTopicManagementComponent', () => {
  let component: GroupTopicManagementComponent;
  let fixture: ComponentFixture<GroupTopicManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupTopicManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupTopicManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
