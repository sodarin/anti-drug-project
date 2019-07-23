import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovalPendingTableComponent } from './approval-pending-table.component';

describe('ApprovalPendingTableComponent', () => {
  let component: ApprovalPendingTableComponent;
  let fixture: ComponentFixture<ApprovalPendingTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApprovalPendingTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovalPendingTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
