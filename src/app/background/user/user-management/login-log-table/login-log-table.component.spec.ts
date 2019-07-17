import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginLogTableComponent } from './login-log-table.component';

describe('LoginLogTableComponent', () => {
  let component: LoginLogTableComponent;
  let fixture: ComponentFixture<LoginLogTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginLogTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginLogTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
