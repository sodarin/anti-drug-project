import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineUserTableComponent } from './online-user-table.component';

describe('OnlineUserTableComponent', () => {
  let component: OnlineUserTableComponent;
  let fixture: ComponentFixture<OnlineUserTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnlineUserTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlineUserTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
