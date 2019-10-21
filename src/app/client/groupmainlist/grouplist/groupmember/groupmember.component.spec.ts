import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupmemberComponent } from './groupmember.component';

describe('GroupmemberComponent', () => {
  let component: GroupmemberComponent;
  let fixture: ComponentFixture<GroupmemberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupmemberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupmemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
