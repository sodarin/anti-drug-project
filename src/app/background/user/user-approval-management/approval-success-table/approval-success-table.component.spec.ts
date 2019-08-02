import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovalSuccessTableComponent } from './approval-success-table.component';

describe('ApprovalSuccessTableComponent', () => {
  let component: ApprovalSuccessTableComponent;
  let fixture: ComponentFixture<ApprovalSuccessTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApprovalSuccessTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovalSuccessTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
